const venezuelaData = {
    "Amazonas": ["Alto Orinoco", "Atabapo", "Atures", "Autana", "Manapiare", "Maroa", "Río Negro"],
    "Anzoátegui": ["Anaco", "Aragua", "Bolívar", "Bruzual", "Cajigal", "Carvajal", "Diego Bautista Urbaneja", "Freites", "Guanipa", "Guanta", "Independencia", "Libertad", "McGregor", "Miranda", "Monagas", "Peñalver", "Píritu", "San Juan de Capistrano", "Santa Ana", "Simón Rodríguez", "Sotillo"],
    "Apure": ["Achaguas", "Biruaca", "Muñoz", "Páez", "Pedro Camejo", "Rómulo Gallegos", "San Fernando"],
    "Aragua": ["Bolívar", "Camatagua", "Francisco Linares Alcántara", "Girardot", "José Ángel Lamas", "José Félix Ribas", "José Rafael Revenga", "Libertador", "Mario Briceño Iragorry", "Ocumare de la Costa de Oro", "San Casimiro", "San Sebastián", "Santiago Mariño", "Santos Michelena", "Sucre", "Tovar", "Urdaneta", "Zamora"],
    "Barinas": ["Alberto Arvelo Torrealba", "Andrés Eloy Blanco", "Antonio José de Sucre", "Arismendi", "Barinas", "Bolívar", "Cruz Paredes", "Ezequiel Zamora", "Obispos", "Pedraza", "Rojas", "Sosa"],
    "Bolívar": ["Angostura del Orinoco", "Caroní", "Cedeño", "Chien", "El Callao", "Gran Sabana", "Piar", "Roscio", "Sifontes", "Sucre", "Padre Pedro Chien"],
    "Carabobo": ["Bejuma", "Carlos Arvelo", "Diego Ibarra", "Guacara", "Juan José Mora", "Libertador", "Los Guayos", "Miranda", "Montalbán", "Naguanagua", "Puerto Cabello", "San Diego", "San Joaquín", "Valencia"],
    "Cojedes": ["Anzoátegui", "Falcon", "Girardot", "Lomas de Sargentos", "Pao de San Juan Bautista", "Ricaurte", "Rómulo Gallegos", "San Carlos", "Tinaco", "Tinaquillo"],
    "Delta Amacuro": ["Antonio Díaz", "Casacoima", "Pedernales", "Tucupita"],
    "Distrito Capital": ["Libertador"],
    "Falcón": ["Acosta", "Bolívar", "Buchivacoa", "Cacique Manaure", "Carirubana", "Colina", "Dabajuro", "Democracia", "Falcón", "Federación", "Jacura", "Los Taques", "Mauroa", "Miranda", "Monseñor Iturriza", "Palmasola", "Petit", "Píritu", "San Francisco", "Silva", "Sucre", "Tocópero", "Unión", "Urumaco", "Zamora"],
    "Guárico": ["Camaguán", "Chaguaramas", "El Socorro", "Francisco de Miranda", "José Félix Ribas", "José Tadeo Monagas", "Juan Germán Roscio", "Julián Mellado", "Las Mercedes", "Leonardo Infante", "Ortiz", "Pedro Zaraza", "San Gerónimo de Guayabal", "San José de Guaribe", "Santa María de Ipire"],
    "Lara": ["Andrés Eloy Blanco", "Crespo", "Iribarren", "Jiménez", "Morán", "Palavecino", "Simón Planas", "Torres", "Urdaneta"],
    "Mérida": ["Alberto Adriani", "Andrés Bello", "Aricagua", "Arzobispo Chacón", "Campo Elías", "Caracciolo Parra Olmedo", "Cardenal Quintero", "Guaraque", "Julio César Salas", "Justo Briceño", "Libertador", "Miranda", "Obispo Ramos de Lora", "Padre Noguera", "Pueblo Llano", "Rangel", "Rivas Dávila", "Santos Marquina", "Sucre", "Tovar", "Tulio Febres Cordero", "Zea"],
    "Miranda": ["Acevedo", "Andrés Bello", "Baruta", "Brión", "Buroz", "Carrizal", "Chacao", "Cristóbal Rojas", "El Hatillo", "Guaicaipuro", "Independencia", "Lander", "Los Salias", "Páez", "Paz Castillo", "Pedro Gual", "Plaza", "Simón Bolívar", "Sucre", "Urdaneta", "Zamora"],
    "Monagas": ["Acosta", "Aguasay", "Bolívar", "Caripe", "Cedeño", "Ezequiel Zamora", "Libertador", "Maturín", "Piar", "Punceres", "Santa Bárbara", "Sotillo", "Uracoa"],
    "Nueva Esparta": ["Antolín del Campo", "Arismendi", "Díaz", "García", "Gómez", "Maneiro", "Marcano", "Mariño", "Península de Macanao", "Tubores", "Villalba"],
    "Portuguesa": ["Agua Blanca", "Araure", "Esteller", "Guanare", "Guanarito", "Monseñor José Vicente de Unda", "Ospino", "Páez", "Papelón", "San Genaro de Boconoíto", "San Rafael de Onoto", "Santa Rosalía", "Sucre", "Turén"],
    "Sucre": ["Andrés Eloy Blanco", "Andrés Mata", "Arismendi", "Benítez", "Bermúdez", "Bolívar", "Cajigal", "Cruz Salmerón Acosta", "Libertador", "Mariño", "Mejía", "Montes", "Ribero", "Sucre", "Valdez"],
    "Táchira": ["Andrés Bello", "Antonio Rómulo Costa", "Ayacucho", "Bolívar", "Cárdenas", "Córdoba", "Fernández Feo", "Francisco de Miranda", "García de Hevia", "Guásimos", "Independencia", "Jáuregui", "José María Vargas", "Junín", "Libertad", "Libertador", "Lobatera", "Michelena", "Panamericano", "Pedro María Ureña", "Puerto Santander", "Rafael Urdaneta", "Samuel Darío Maldonado", "San Cristóbal", "San Judas Tadeo", "Seboruco", "Simón Rodríguez", "Sucre", "Torbes", "Uribante"],
    "Trujillo": ["Andrés Bello", "Boconó", "Bolívar", "Candelaria", "Carache", "Carvajal", "Campo Elías", "Escuque", "José Felipe Márquez Cañizalez", "Juan Vicente Campos Elías", "La Ceiba", "Miranda", "Monte Carmelo", "Motatán", "Pampán", "Pampanito", "Rafael Rangel", "San Rafael de Carvajal", "Sucre", "Trujillo", "Urdaneta", "Valera"],
    "Vargas (La Guaira)": ["Vargas"],
    "Yaracuy": ["Arístides Bastidas", "Bruzuál", "Cocorote", "Independencia", "José Antonio Páez", "La Trinidad", "Nirgua", "Peña", "San Felipe", "Sucre", "Urachiche", "Veroes"],
    "Zulia": ["Almirante Padilla", "Baralt", "Cabimas", "Catatumbo", "Colón", "Francisco Javier Pulgar", "Jesús Enrique Lossada", "Jesús María Semprún", "La Cañada de Urdaneta", "Lagunillas", "Machiques de Perijá", "Mara", "Maracaibo", "Miranda", "Páez", "Rosario de Perijá", "San Francisco", "Santa Rita", "Simón Bolívar", "Sucre", "Valmore Rodríguez"]
};

let currentStep = 1;
let selectedOptions = {};

function nextStep(step) {
    if (step > currentStep) {
        const inputs = document.querySelectorAll(`#step${currentStep} [required]`);
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = "#e53e3e";
                valid = false;
            } else {
                input.style.borderColor = "";
            }
        });
        if (!valid) return;
    }

    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
    
    document.querySelectorAll('.step').forEach((s, idx) => {
        if (idx < step) s.classList.add('active');
        else s.classList.remove('active');
    });

    currentStep = step;
    window.scrollTo(0,0);
}

// CARGA DE MUNICIPIOS EN CASCADA
function loadMunicipalities() {
    const estado = document.getElementById('estado').value;
    const muniSelect = document.getElementById('municipio');
    muniSelect.innerHTML = '<option value="">Seleccione Municipio...</option>';
    
    if (venezuelaData[estado]) {
        venezuelaData[estado].forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            muniSelect.appendChild(opt);
        });
    }
}

function loadDynamicQuestions() {
    const perfil = document.getElementById('perfil').value;
    const container = document.getElementById('dynamicQuestionsContainer');
    container.innerHTML = '';

    const questions = questionBank.filter(q => 
        q.aplicaA.includes("Todos") || q.aplicaA.includes(perfil)
    );

    if (questions.length === 0) {
        container.innerHTML = '<p class="empty-msg">No hay preguntas adicionales para este cargo.</p>';
        return;
    }

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
        const siblings = el.parentElement.querySelectorAll('.option-pill');
        siblings.forEach(s => s.classList.remove('selected'));
        el.classList.add('selected');
        selectedOptions[qId] = val;
    } else {
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
    btn.innerHTML = '<span class="loader"></span> Enviando...';

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

    try {
        const response = await fetch('URL_DE_TU_FLUJO_HTTP_AQUI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.querySelector('.glass-container').innerHTML = `
                <div id="successMessage">
                    <div class="success-icon">✓</div>
                    <h2>¡Postulación Exitosa!</h2>
                    <p>Gracias ${payload.nombre}. Tu perfil ha sido registrado en nuestra base de datos.</p>
                    <button class="btn-next" onclick="location.reload()">Volver</button>
                </div>`;
        } else {
            alert("Error en el servidor. Intente más tarde.");
            btn.disabled = false;
            btn.textContent = "Enviar Postulación";
        }
    } catch (err) {
        alert("Error de red. Verifique su conexión.");
        btn.disabled = false;
        btn.textContent = "Enviar Postulación";
    }
};
