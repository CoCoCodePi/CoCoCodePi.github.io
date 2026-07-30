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
let selectedOptionsWithPoints = {};

// MANEJADOR DE ARCHIVO CV
document.getElementById('cv').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const label = document.getElementById('cvFileName');
    if (file) {
        if (file.size > 10 * 1024 * 1024) {
            alert('El archivo excede el límite de 10MB.');
            e.target.value = '';
            label.textContent = 'Arrastra tu CV aquí o haz clic para seleccionar';
            return;
        }
        label.textContent = `✓ ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)`;
    } else {
        label.textContent = 'Arrastra tu CV aquí o haz clic para seleccionar';
    }
});

// INICIALIZACIÓN DE DESPLEGABLES DE FECHA DE NACIMIENTO (Día 1-31, Año 1950-2008)
function initDobSelectors() {
    const diaSelect = document.getElementById('dob_dia');
    const anioSelect = document.getElementById('dob_anio');
    if (!diaSelect || !anioSelect) return;

    diaSelect.innerHTML = '<option value="">Día</option>';
    for (let i = 1; i <= 31; i++) {
        const val = String(i).padStart(2, '0');
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = i;
        diaSelect.appendChild(opt);
    }

    anioSelect.innerHTML = '<option value="">Año</option>';
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear - 18; // Máximo 2008 (mayor de edad)
    const minYear = 1950;

    for (let y = maxYear; y >= minYear; y--) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        anioSelect.appendChild(opt);
    }
}

function updateDaysInMonth() {
    const mes = document.getElementById('dob_mes').value;
    const anio = document.getElementById('dob_anio').value || new Date().getFullYear();
    const diaSelect = document.getElementById('dob_dia');
    if (!diaSelect) return;

    const currentSelectedDay = diaSelect.value;

    // Calcular días exactos del mes (28, 29, 30 o 31)
    let maxDays = 31;
    if (mes) {
        maxDays = new Date(parseInt(anio, 10), parseInt(mes, 10), 0).getDate();
    }

    diaSelect.innerHTML = '<option value="">Día</option>';
    for (let i = 1; i <= maxDays; i++) {
        const val = String(i).padStart(2, '0');
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = i;
        if (val === currentSelectedDay && parseInt(currentSelectedDay, 10) <= maxDays) {
            opt.selected = true;
        }
        diaSelect.appendChild(opt);
    }

    updateDobHidden();
}

function updateDobHidden() {
    const dia = document.getElementById('dob_dia').value;
    const mes = document.getElementById('dob_mes').value;
    const anio = document.getElementById('dob_anio').value;
    const hiddenInput = document.getElementById('fecha_nacimiento');

    if (dia && mes && anio) {
        hiddenInput.value = `${anio}-${mes}-${dia}`;
    } else {
        hiddenInput.value = '';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDobSelectors);
} else {
    initDobSelectors();
}

// MÁSCARA DE TELÉFONOS
document.getElementById('telefono').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
});

document.getElementById('telefono2').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
});

function nextStep(step) {
    if (step > currentStep) {
        const inputs = document.querySelectorAll(`#step${currentStep} [required]`);
        let valid = true;
        inputs.forEach(input => {
            if (!input.value || (input.type === "email" && !input.value.includes('@'))) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadMunicipalities() {
    const estado = document.getElementById('estado').value;
    const municipioSelect = document.getElementById('municipio');
    municipioSelect.innerHTML = '<option value="">Seleccione Municipio...</option>';

    if (estado && venezuelaData[estado]) {
        venezuelaData[estado].forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            municipioSelect.appendChild(opt);
        });
    }
}

// COMPROBACIÓN DE DEPENDENCIAS DINÁMICAS (Ej: Licencia Chófer)
function checkDependencies() {
    const perfil = document.getElementById('perfil').value;
    if (perfil === 'Chófer') {
        const docSelection = selectedOptions["Chofer_Documentacion"] || [];
        const tieneLicencia = docSelection.includes("Licencia de Conducir") || docSelection.includes("Todas las anteriores");

        const gradoCard = document.getElementById("card_Chofer_Licencia_Grado");
        if (gradoCard) {
            if (!tieneLicencia) {
                gradoCard.classList.add("disabled-card");
                gradoCard.querySelectorAll(".option-pill").forEach(p => p.classList.remove("selected"));
                selectedOptions["Chofer_Licencia_Grado"] = "No Aplica (Sin Licencia)";
                selectedOptionsWithPoints["Chofer_Licencia_Grado"] = [{ texto: "No Aplica", puntos: 0 }];
            } else {
                gradoCard.classList.remove("disabled-card");
                if (selectedOptions["Chofer_Licencia_Grado"] === "No Aplica (Sin Licencia)") {
                    delete selectedOptions["Chofer_Licencia_Grado"];
                    delete selectedOptionsWithPoints["Chofer_Licencia_Grado"];
                }
            }
        }
    }
}

function loadDynamicQuestions() {
    const perfil = document.getElementById('perfil').value;
    const container = document.getElementById('dynamicQuestionsContainer');
    container.innerHTML = '';
    selectedOptions = {};
    selectedOptionsWithPoints = {};

    if (!perfil) {
        container.innerHTML = '<p class="empty-msg">Seleccione un cargo para ver las preguntas.</p>';
        return;
    }

    const preguntas = questionBank.filter(q =>
        q.aplicaA.includes('Todos') || q.aplicaA.includes(perfil)
    );

    if (preguntas.length === 0) {
        container.innerHTML = '<p class="empty-msg">No hay preguntas para este cargo.</p>';
        return;
    }

    preguntas.forEach(q => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.id = `card_${q.id}`;
        card.innerHTML = `<h3>${q.pregunta}</h3><div class="options-grid" id="opts_${q.id}"></div>`;
        container.appendChild(card);

        const grid = card.querySelector('.options-grid');
        q.opciones.forEach((opcionObj) => {
            const opcionTexto = typeof opcionObj === 'string' ? opcionObj : opcionObj.texto;
            const puntosVal = typeof opcionObj === 'string' ? 0 : opcionObj.puntos;

            const pill = document.createElement('div');
            pill.className = 'option-pill';
            pill.textContent = opcionTexto;
            const esTodas = /todas las anteriores/i.test(opcionTexto);

            pill.onclick = () => {
                if (card.classList.contains('disabled-card')) return;

                const esUnica = (q.tipo === 'Si/No' || q.tipo === 'Seleccion_Unica');

                if (esUnica) {
                    grid.querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
                    pill.classList.add('selected');
                    selectedOptions[q.id] = opcionTexto;
                    selectedOptionsWithPoints[q.id] = [{ texto: opcionTexto, puntos: puntosVal }];
                    checkDependencies();
                    return;
                }

                // Selección múltiple
                if (esTodas) {
                    grid.querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
                    selectedOptions[q.id] = [];
                    selectedOptionsWithPoints[q.id] = [];
                    pill.classList.add('selected');
                    selectedOptions[q.id] = [opcionTexto];
                    selectedOptionsWithPoints[q.id] = [{ texto: opcionTexto, puntos: puntosVal }];
                    checkDependencies();
                    return;
                }

                grid.querySelectorAll('.option-pill').forEach(p => {
                    if (/todas las anteriores/i.test(p.textContent)) p.classList.remove('selected');
                });

                if (!selectedOptions[q.id]) selectedOptions[q.id] = [];
                if (!selectedOptionsWithPoints[q.id]) selectedOptionsWithPoints[q.id] = [];

                selectedOptions[q.id] = selectedOptions[q.id].filter(v => !/todas las anteriores/i.test(v));
                selectedOptionsWithPoints[q.id] = selectedOptionsWithPoints[q.id].filter(v => !/todas las anteriores/i.test(v.texto));

                pill.classList.toggle('selected');
                if (pill.classList.contains('selected')) {
                    selectedOptions[q.id].push(opcionTexto);
                    selectedOptionsWithPoints[q.id].push({ texto: opcionTexto, puntos: puntosVal });
                } else {
                    selectedOptions[q.id] = selectedOptions[q.id].filter(v => v !== opcionTexto);
                    selectedOptionsWithPoints[q.id] = selectedOptionsWithPoints[q.id].filter(v => v.texto !== opcionTexto);
                }
                checkDependencies();
            };
            grid.appendChild(pill);
        });
    });

    checkDependencies();
}

// GENERADOR INTELIGENTE DE RESUMEN_PERFIL PARA SHAREPOINT
function buildResumenPerfil() {
    let resumen = [];
    const perfil = document.getElementById('perfil').value;
    resumen.push(`Cargo: ${perfil}`);

    questionBank.forEach(q => {
        if (!q.aplicaA.includes('Todos') && !q.aplicaA.includes(perfil)) return;

        let resp = selectedOptions[q.id];
        if (!resp) return;

        let textoLimpio = "";

        if (Array.isArray(resp)) {
            if (resp.some(r => /todas las anteriores/i.test(r))) {
                const opcionesReales = q.opciones
                    .map(o => typeof o === 'string' ? o : o.texto)
                    .filter(t => !/todas las anteriores/i.test(t));
                textoLimpio = opcionesReales.join(", ");
            } else {
                textoLimpio = resp.join(", ");
            }
        } else {
            textoLimpio = resp;
        }

        resumen.push(`${q.pregunta}: ${textoLimpio}`);
    });

    return resumen.join(" | ");
}

document.getElementById('atsForm').onsubmit = async (e) => {
    e.preventDefault();

    if (document.getElementById('website_url').value !== "") {
        console.log("Bot detectado.");
        return;
    }

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = 'Enviando...';

    const cvFile = document.getElementById('cv').files[0];
    let cvContent = '';
    let cvName = '';
    let cvAdjunto = false;
    let puntajeCV = 0;

    if (cvFile) {
        cvAdjunto = true;
        puntajeCV = 20; // 20 Puntos por adjuntar CV en la escala de 200 pts
        const nacPrefix = document.getElementById('nacionalidad').value;
        const cedNum = document.getElementById('cedula').value.trim();
        const ext = cvFile.name.split('.').pop();
        cvName = `${nacPrefix}-${cedNum}.${ext}`;

        cvContent = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };
            reader.readAsDataURL(cvFile);
        });
    }

    const nacCode = document.getElementById('nacionalidad').value;
    const nacionalidad = nacCode === 'V' ? 'Venezolano' : 'Extranjero';

    // Construir respuestas_individuales desglosadas
    const respuestasObj = {};
    Object.keys(selectedOptions).forEach(id => {
        const val = selectedOptions[id];
        respuestasObj[id] = Array.isArray(val) ? val.join(', ') : val;
    });

    // CÁLCULO DE PUNTAJE TOTAL (ESCALA 200 PTS)
    // Se separa "general" (Exp_Previa + Seguridad_Uniforme, aplican a Todos) de
    // "técnico" (preguntas propias del cargo) para poder topar cada uno por
    // separado: ningún cargo puede superar 140 pts técnicos ni 200 pts totales,
    // sin importar cuántas opciones marque el candidato.
    let puntajeGeneral = 0;
    let acumuladoTecnico = 0;
    Object.keys(selectedOptionsWithPoints).forEach(qId => {
        const respArray = selectedOptionsWithPoints[qId];
        if (!Array.isArray(respArray)) return;

        const pregunta = questionBank.find(q => q.id === qId);
        const esGeneral = pregunta && pregunta.aplicaA.includes('Todos');
        const suma = respArray.reduce((acc, item) => acc + (item.puntos || 0), 0);

        if (esGeneral) {
            puntajeGeneral += suma;
        } else {
            acumuladoTecnico += suma;
        }
    });

    const puntajeTecnico = Math.min(140, acumuladoTecnico);
    const puntajeAptitud = Math.min(200, puntajeCV + puntajeGeneral + puntajeTecnico);

    const resumenPerfilTexto = buildResumenPerfil();

    const payload = {
        Title: document.getElementById('nombre').value.trim(),
        Cedula: nacCode + '-' + document.getElementById('cedula').value.trim(),
        Correo: document.getElementById('correo').value.toLowerCase().trim(),
        Telefono_1: document.getElementById('telefono').value.trim(),
        Telefono_2: document.getElementById('telefono2').value.trim() || '',
        Genero: document.getElementById('genero').value,
        Fecha_Nacimiento: document.getElementById('fecha_nacimiento').value,
        Nacionalidad: nacionalidad,
        Pais: 'Venezuela',
        Perfil: document.getElementById('perfil').value,
        Estado: document.getElementById('estado').value,
        Municipio: document.getElementById('municipio').value,
        Sector: document.getElementById('sector').value.trim() || '',
        Resumen_Perfil: resumenPerfilTexto,
        Puntaje_Aptitud: puntajeAptitud,
        Estatus_Seleccion: 'Nuevo',
        cv_adjunto: cvAdjunto,
        cv_content: cvContent,
        cv_name: cvName,
        respuestas_individuales: respuestasObj,
        Fecha_Postulacion: new Date().toISOString()
    };

    try {
        const response = await fetch('https:defaultae02505ce3c04c73a2b6823b797744.8a.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/27/workflows/6093cbda00424c1ea6f632ea039f5ef3/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_EK2nzCu6XS2gZoI9ne0-0K9gqP6vcZkV9yX4ujJ-nM', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.querySelector('.glass-container').innerHTML = `
                <div id="successMessage">
                    <div class="success-icon">✓</div>
                    <h2>¡Postulación Exitosa!</h2>
                    <p>Gracias ${payload.Title}. Tu perfil ha sido registrado en nuestra base de datos con un puntaje de aptitud de ${puntajeAptitud}/200.</p>
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
