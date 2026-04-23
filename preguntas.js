const questionBank = [
    {
        id: "Exp_Previa",
        pregunta: "¿Tiene experiencia previa en cargos similares?",
        tipo: "Si/No",
        opciones: ["Si", "No"],
        puntos: [10, 0],
        aplicaA: ["Todos"]
    },
    {
        id: "Seguridad_Uniforme",
        pregunta: "¿Tiene algún impedimento para usar uniforme y botas de seguridad?",
        tipo: "Si/No",
        opciones: ["No", "Si"],
        puntos: [10, 0],
        aplicaA: ["Todos"]
    },
    {
        id: "Chofer_Licencia",
        pregunta: "¿Qué grado de licencia de conducir posee?",
        tipo: "Opcion_Multiple",
        opciones: ["3er Grado", "4to Grado", "5to Grado"],
        puntos: [10, 20, 30],
        aplicaA: ["Chófer"]
    },
    {
        id: "Chofer_Vehiculos",
        pregunta: "¿Qué tipo de vehículos sabe conducir?",
        tipo: "Opcion_Multiple",
        opciones: ["Moto", "Carro", "Camionetas", "Camiones", "Todas las anteriores"],
        puntos: [5, 10, 15, 20, 50],
        aplicaA: ["Chófer"]
    },
    {
        id: "OpLimp_Lugares",
        pregunta: "¿En qué áreas tiene experiencia limpiando?",
        tipo: "Opcion_Multiple",
        opciones: ["Oficinas", "Galpones", "Baños", "Todas las anteriores"],
        puntos: [10, 10, 10, 30],
        aplicaA: ["Operario de Limpieza"]
    }
];
