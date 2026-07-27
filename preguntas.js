// Banco de preguntas del formulario ATS Manserca (Escala 200 Pts).
const questionBank = [
    // ── GENERAL (todas las vacantes) ──────────────────────────────────────────
    {
        id: "Exp_Previa",
        pregunta: "¿Posee experiencia en el cargo al cual se postula?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 30 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Todos"]
    },

    // ── OPERARIO DE LIMPIEZA (140 pts máx) ───────────────────────────────────
    {
        id: "OpLimp_Experiencia",
        pregunta: "¿Dónde ha trabajado antes?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Casas o Edificios", puntos: 5 },
            { texto: "Oficinas o Bancos", puntos: 10 },
            { texto: "Industrias o Fábricas", puntos: 15 },
            { texto: "Centros de Salud / Clínicas", puntos: 20 },
            { texto: "Todas las anteriores", puntos: 50 }
        ],
        aplicaA: ["Operario de Limpieza"]
    },
    {
        id: "OpLimp_Turnos",
        pregunta: "¿Estaría disponible para trabajar en diferentes turnos, incluyendo feriados?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 30 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Operario de Limpieza"]
    },
    {
        id: "OpLimp_Maquinas",
        pregunta: "¿Cuál de estas máquinas de limpieza sabe usar?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Aspiradora industrial", puntos: 15 },
            { texto: "Pulidora de pisos", puntos: 20 },
            { texto: "Máquina de lavado a presión", puntos: 25 },
            { texto: "Todas las anteriores", puntos: 60 }
        ],
        aplicaA: ["Operario de Limpieza"]
    },

    // ── CHÓFER (140 pts máx) ──────────────────────────────────────────────────
    {
        id: "Chofer_Documentacion",
        pregunta: "Indique cuál de esta documentación posee al día (Indispensable):",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Cédula de Identidad", puntos: 10 },
            { texto: "Certificado Médico", puntos: 15 },
            { texto: "Licencia de Conducir", puntos: 25 },
            { texto: "Todas las anteriores", puntos: 50 }
        ],
        aplicaA: ["Chófer"]
    },
    {
        id: "Chofer_Licencia_Grado",
        pregunta: "Si posee Licencia de Conducir, ¿qué grado tiene?",
        tipo: "Seleccion_Unica",
        opciones: [
            { texto: "2do Grado", puntos: 10 },
            { texto: "3er Grado", puntos: 20 },
            { texto: "4to Grado", puntos: 30 },
            { texto: "5to Grado", puntos: 40 }
        ],
        aplicaA: ["Chófer"]
    },
    {
        id: "Chofer_Vehiculos",
        pregunta: "¿Qué tipo de vehículo ha conducido?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Moto", puntos: 5 },
            { texto: "Carro", puntos: 10 },
            { texto: "Camionetas", puntos: 15 },
            { texto: "Todas las anteriores", puntos: 30 }
        ],
        aplicaA: ["Chófer"]
    },
    {
        id: "Chofer_Rutas",
        pregunta: "¿Tiene experiencia en rutas de Caracas y el interior?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 20 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Chófer"]
    },

    // ── JARDINERO (140 pts máx) ───────────────────────────────────────────────
    {
        id: "Jardin_Destrezas",
        pregunta: "¿En cuál de las siguientes actividades posee mayor destreza?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Riego", puntos: 5 },
            { texto: "Plantar / Sembrar", puntos: 10 },
            { texto: "Podar", puntos: 15 },
            { texto: "Todas las anteriores", puntos: 30 }
        ],
        aplicaA: ["Jardinero"]
    },
    {
        id: "Jardin_Equipos",
        pregunta: "¿Qué equipos sabe usar y mantener?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Cortadora de grama (Carrito)", puntos: 15 },
            { texto: "Desmalezadora (Guadaña)", puntos: 20 },
            { texto: "Tijeras de altura", puntos: 15 },
            { texto: "Motosierra", puntos: 25 },
            { texto: "Todas las anteriores", puntos: 75 }
        ],
        aplicaA: ["Jardinero"]
    },
    {
        id: "Jardin_Abonos",
        pregunta: "¿Sabe preparar abonos y aplicar venenos para plagas?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 35 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Jardinero"]
    },

    // ── TÉCNICO DE SERVICIOS MÚLTIPLES (140 pts máx) ──────────────────────────
    {
        id: "Tecnico_Tareas",
        pregunta: "Indique en qué tareas tiene conocimientos:",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Cerrajería básica", puntos: 15 },
            { texto: "Pintura y Paredes (frisado, pintura de caucho/aceite)", puntos: 20 },
            { texto: "Plomería (fugas, bombas de agua, herrajes de baño)", puntos: 30 },
            { texto: "Electricidad (lámparas, tableros, tomacorrientes)", puntos: 35 },
            { texto: "Todas las anteriores", puntos: 100 }
        ],
        aplicaA: ["Técnico de Servicios Múltiples"]
    },
    {
        id: "Tecnico_Limpieza",
        pregunta: "¿Estaría dispuesto a realizar tareas adicionales o complementarias de limpieza?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 40 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Técnico de Servicios Múltiples"]
    },

    // ── SUPERVISOR DE LIMPIEZA (140 pts máx) ──────────────────────────────────
    {
        id: "Super_Experiencia",
        pregunta: "¿Dónde ha trabajado antes?",
        tipo: "Opcion_Multiple",
        opciones: [
            { texto: "Casas o Edificios", puntos: 5 },
            { texto: "Oficinas o Bancos", puntos: 10 },
            { texto: "Industrias o Fábricas", puntos: 15 },
            { texto: "Centros de Salud / Clínicas", puntos: 20 },
            { texto: "Todas las anteriores", puntos: 50 }
        ],
        aplicaA: ["Supervisor de Limpieza"]
    },
    {
        id: "Super_Personal",
        pregunta: "¿A cuántas personas ha tenido a su cargo?",
        tipo: "Seleccion_Unica",
        opciones: [
            { texto: "1-2 personas", puntos: 10 },
            { texto: "3-5 personas", puntos: 25 },
            { texto: "+6 personas", puntos: 45 }
        ],
        aplicaA: ["Supervisor de Limpieza"]
    },
    {
        id: "Super_Inventarios",
        pregunta: "¿Sabe llevar control de inventarios y entrega de materiales?",
        tipo: "Si/No",
        opciones: [
            { texto: "Si", puntos: 45 },
            { texto: "No", puntos: 0 }
        ],
        aplicaA: ["Supervisor de Limpieza"]
    },

    // ── GENERAL (Seguridad Industrial - 10 pts) ──────────────────────────────
    {
        id: "Seguridad_Uniforme",
        pregunta: "¿Tiene algún impedimento para utilizar Uniforme, Botas de Seguridad y Guantes durante toda su jornada?",
        tipo: "Si/No",
        opciones: [
            { texto: "No", puntos: 10 }, // No tiene impedimentos = 10 pts
            { texto: "Si", puntos: 0 }
        ],
        aplicaA: ["Todos"]
    }
];
