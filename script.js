let currentStep = 1;
let selectedOptions = {}; // Para guardar respuestas de checkboxes

function nextStep(step) {
    // Validación básica antes de pasar al siguiente
    if (step > currentStep) {
        const inputs = document.querySelectorAll(`#step${currentStep} [required]`);
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = "red";
                valid = false;
            } else {
                input.style.borderColor = "";
            }
        });
        if (!valid) return;
    }

    // Cambiar visibilidad
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
    
    // Actualizar Stepper
    document.querySelectorAll('.step').forEach((s, idx) => {
        if (idx < step) s.classList.add('active');
        else s.classList.remove('active');
    });

    currentStep = step;
}

function loadDynamicQuestions() {
    const perfil = document.getElementById('perfil').value;
    const container = document.getElementById('dynamicQuestionsContainer');
    container.innerHTML = '';

    const questions = questionBank.filter(q => 
        q.aplicaA.includes("Todos") || q.aplicaA.includes(perfil)
    );

    questions.forEach(q => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.innerHTML = `<h3>${q.pregunta}</h3>`;

        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';

        q.opciones.forEach(opt => {
            const pill = document.createElement('div');
            pill.className = 'option-pill';
            pill.textContent = opt;
            pill.onclick = () => toggleOption(q.id, opt, q.tipo, pill);
            optionsGrid.appendChild(pill);
        });

        card.appendChild(optionsGrid);
        container.appendChild(card);
    });
}

function toggleOption(qId, val, type, el) {
    if (type === 'Si/No') {
        // Lógica Radio: Solo uno a la vez
        const siblings = el.parentElement.querySelectorAll('.option-pill');
        siblings.forEach(s => s.classList.remove('selected'));
        el.classList.add('selected');
        selectedOptions[qId] = val;
    } else {
        // Lógica Checkbox con "Todas las anteriores"
        if (!selectedOptions[qId]) selectedOptions[qId] = [];
        
        if (val === "Todas las anteriores") {
            const siblings = el.parentElement.querySelectorAll('.option-pill');
            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
                selectedOptions[qId] = [];
            } else {
                siblings.forEach(s => s.classList.remove('selected'));
                el.classList.add('selected');
                selectedOptions[qId] = ["Todas las anteriores"];
            }
        } else {
            // Si selecciona uno normal, quitar "Todas las anteriores"
            const allBtn = Array.from(el.parentElement.querySelectorAll('.option-pill')).find(p => p.textContent === "Todas las anteriores");
            if (allBtn) {
                allBtn.classList.remove('selected');
                selectedOptions[qId] = selectedOptions[qId].filter(v => v !== "Todas las anteriores");
            }

            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
                selectedOptions[qId] = selectedOptions[qId].filter(v => v !== val);
            } else {
                el.classList.add('selected');
                selectedOptions[qId].push(val);
            }
        }
    }
}

document.getElementById('atsForm').onsubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = "Enviando...";

    const payload = {
        nombre: document.getElementById('nombre').value,
        cedula: document.getElementById('nacionalidad').value + "-" + document.getElementById('cedula').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        perfil: document.getElementById('perfil').value,
        estado: document.getElementById('estado').value,
        municipio: document.getElementById('municipio').value,
        sector: document.getElementById('sector').value,
        respuestas: selectedOptions,
        timestamp: new Date().toISOString()
    };

    console.log("Enviando datos:", payload);

    try {
        // AQUÍ CONECTAREMOS CON EL FLUJO DE POWER AUTOMATE DE $15
        const response = await fetch('URL_DE_TU_FLUJO_HTTP_AQUI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.getElementById('atsForm').classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
            document.querySelector('.stepper').classList.add('hidden');
        } else {
            alert("Hubo un error al enviar. Por favor intente de nuevo.");
            btn.disabled = false;
            btn.textContent = "Enviar Postulación";
        }
    } catch (err) {
        // Muestra de éxito local para pruebas (Quitar en producción si falla el fetch)
        console.error(err);
        alert("Error de conexión. Verifique su internet.");
        btn.disabled = false;
        btn.textContent = "Enviar Postulación";
    }
};
