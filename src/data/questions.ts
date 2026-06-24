export interface Question {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: 'a' | 'b' | 'c' | 'd';
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "En referencia a la magnitud radiológica \"exposición\", podemos afirmar que:",
    options: {
      a: "Tiene en cuenta el valor absoluto de la carga total de todos los iones de un mismo signo producidos en un volumen de agua.",
      b: "Al igual que el Kerma, se utiliza para medir la energía de fotones y de protones.",
      c: "Para su correcta medida, hay que tener en cuenta el concepto de \"equilibrio electrónico\".",
      d: "La ICRU recomienda utilizar las unidades de medida del Sistema Internacional, que es el Roentgen (R)."
    },
    correct: "c"
  },
  {
    id: 2,
    question: "En referencia al laberinto de la sala de tratamiento, es cierto que:",
    options: {
      a: "Los laberintos cortos precisan de puertas de acceso blindadas.",
      b: "Los laberintos largos precisan de puertas de acceso blindadas.",
      c: "Ningún tipo de laberinto precisa de puertas de acceso blindadas.",
      d: "Las respuestas a) y b) son correctas."
    },
    correct: "a"
  },
  {
    id: 3,
    question: "En la gestión de los residuos radiactivos se definen varios conceptos, entre los que se encuentra:",
    options: {
      a: "Exención, que consiste en la gestión de residuos no radiactivos.",
      b: "Desclasificación, la cual define los residuos radiactivos que, después de un periodo de almacenaje, han perdido parte de su actividad y pasan a ser exentos.",
      c: "Exclusión, que se aplica a residuos de largo periodo de semidesintegración.",
      d: "Gestión convencional, que es la que suele realizarse mediante una empresa autorizada."
    },
    correct: "b"
  },
  {
    id: 4,
    question: "En referencia a la modificación de la sensibilidad celular, indica qué afirmación es INCORRECTA:",
    options: {
      a: "Las radiaciones con baja LET (Transferencia Lineal de Energía) provocan menor número de ionizaciones que las de alta LET.",
      b: "La magnitud que caracteriza la radiosensibilidad de un tejido determinado es la \"Eficacia Biológica Relativa\" (RBE).",
      c: "El oxígeno es un radiosensibilizador.",
      d: "El efecto del oxígeno se cuantifica mediante el \"factor de potenciación del oxígeno\" (OER)."
    },
    correct: "b"
  },
  {
    id: 5,
    question: "En referencia a la interacción de los electrones con la materia, es cierto que:",
    options: {
      a: "No pueden interaccionar con los electrones de la corteza del átomo porque los dos tienen carga negativa.",
      b: "Pueden interaccionar con los electrones de la corteza del átomo, pero solo provocando excitaciones.",
      c: "Pueden interaccionar con los electrones de la corteza del átomo, pero solo provocando ionizaciones.",
      d: "Pueden interaccionar con los electrones de la corteza del átomo, provocando excitaciones e ionizaciones."
    },
    correct: "d"
  },
  {
    id: 6,
    question: "¿Quién desarrolló el modelo atómico actual?",
    options: {
      a: "Bohr.",
      b: "Rutherford.",
      c: "Dalton.",
      d: "Ninguno de los anteriores."
    },
    correct: "d"
  },
  {
    id: 7,
    question: "En referencia a la contaminación radiactiva, NO es cierto que:",
    options: {
      a: "Es la presencia de material radiactivo en una materia, superficie o en una persona.",
      b: "Se realizarán controles de ausencia de contaminación siempre que se haya podido producir una contaminación.",
      c: "Cuando se detecta una contaminación radiactiva, el primer paso es la protección adecuada de la persona que realizará la descontaminación.",
      d: "Todo el material utilizado durante el proceso de descontaminación se gestionará como residuo radiactivo."
    },
    correct: "c"
  },
  {
    id: 8,
    question: "¿Cuál es la posición estándar del paciente para la simulación de radioterapia en seminoma?",
    options: {
      a: "Decúbito prono.",
      b: "Decúbito supino.",
      c: "Decúbito lateral.",
      d: "Posición de litotomía."
    },
    correct: "b"
  },
  {
    id: 9,
    question: "¿Cuándo se dice que un átomo está excitado?",
    options: {
      a: "Cuando uno de sus electrones absorbe energía y pasa a una capa inferior.",
      b: "Cuando uno de sus electrones absorbe energía y pasa a una capa superior.",
      c: "Cuando uno de sus electrones absorbe energía y pasa a la capa más interna.",
      d: "Cuando uno de sus electrones absorbe energía, pero no cambia de capa."
    },
    correct: "b"
  },
  {
    id: 10,
    question: "En referencia a los sistemas de detección de la radiación, la capacidad de dar un valor reproducible, poco variable y con la mínima ambigüedad posible se denomina:",
    options: {
      a: "Eficiencia.",
      b: "Sensibilidad.",
      c: "Exactitud.",
      d: "Precisión."
    },
    correct: "d"
  },
  {
    id: 11,
    question: "Indica cuál de las siguientes definiciones es correcta:",
    options: {
      a: "La radiación es la transmisión de partículas a través de un medio.",
      b: "La radiación es la transmisión de energía por medio de ondas o de partículas a través de un medio.",
      c: "La radiación es la transmisión de partículas a través de un medio o del vacío.",
      d: "La radiación es la transmisión de energía por medio de ondas o de partículas a través de un medio o del vacío."
    },
    correct: "d"
  },
  {
    id: 12,
    question: "Las barreras secundarias en radioterapia son aquellas que:",
    options: {
      a: "Se encuentran en primer lugar al entrar en la sala de tratamiento.",
      b: "Se encuentran en segundo lugar al entrar en la sala de tratamiento.",
      c: "Están expuestas directamente al haz de radiación.",
      d: "No estará expuesto directamente al haz de radiación."
    },
    correct: "d"
  },
  {
    id: 13,
    question: "¿Dónde se suele localizar el timoma?",
    options: {
      a: "Mediastino posterior.",
      b: "Mediastino anterior.",
      c: "Mediastino medio.",
      d: "Mediastino superior."
    },
    correct: "b"
  },
  {
    id: 14,
    question: "Entre las recomendaciones para la TC de planificación de un tratamiento de cáncer de recto, NO se encuentra:",
    options: {
      a: "Aplicar enema rectal o supositorio de glicerina antes de su realización.",
      b: "Instruir al paciente en el protocolo sobre el vaciado de la vejiga.",
      c: "Utilizar un grosor de corte de 6-8 mm.",
      d: "Instruir al paciente en el protocolo sobre el vaciado del recto."
    },
    correct: "c"
  },
  {
    id: 15,
    question: "Para garantizar el paralelismo y la distancia exacta entre agujas en un implante de mama, se utiliza:",
    options: {
      a: "Un endoscopio.",
      b: "Una plantilla perforada.",
      c: "Unas pinzas de disección.",
      d: "Una sonda Foley."
    },
    correct: "b"
  },
  {
    id: 16,
    question: "Según el modelo de las etapas de aceptación de la enfermedad, ¿cómo suele manifestarse la segunda fase del proceso?",
    options: {
      a: "Búsqueda de un pacto o compromise para retrasar lo inevitable.",
      b: "Sentimientos de rebelión, irritabilidad y conductas hostiles.",
      c: "Ausencia de respuesta emocional y negación de los hechos.",
      d: "Asimilación de la realidad y preparación para el futuro."
    },
    correct: "b"
  },
  {
    id: 17,
    question: "Respecto a los sarcomas de partes blandas, es FALSO que:",
    options: {
      a: "La incidencia en varones es ligeramente más alta que en mujeres.",
      b: "Los tumores más frecuentes son: liposarcoma, leiomiosarcoma, rabdomiosarcoma.",
      c: "La OMS (Organización Mundial de la Salud) los divide en: benignos, intermedios agresivos localmente, intermedios con bajo potencial metastásico y malignos.",
      d: "Representan el 13% de los tumores malignos en personas adultas."
    },
    correct: "c"
  },
  {
    id: 18,
    question: "En el proceso de formación de radiación de frenado, la radiación formada será mayor:",
    options: {
      a: "Cuando interaccionan partículas pesadas con núcleos pesados.",
      b: "Cuando interaccionan partículas pesadas con núcleos ligeros.",
      c: "Cuando interaccionan partículas ligeras con núcleos pesados.",
      d: "Cuando interaccionan partículas ligeras con núcleos ligeros."
    },
    correct: "c"
  },
  {
    id: 19,
    question: "Entre las funciones del Técnico o Técnica Especialista en Radioterapia NO se encuentra:",
    options: {
      a: "Colaborar en la gestión y preparación de fuentes radiactivas y la realización de los controles de calidad en braquiterapia.",
      b: "Definir los volúmenes de tratamiento y órganos de riesgo.",
      c: "Realizar la aplicación de los tratamientos de radioterapia autorizados por el médico especialista o la médico especialista en oncología radioterápica.",
      d: "Colaborar en los procesos de dosimetría clínica de cada paciente y de todas las tareas asociadas a su gestión."
    },
    correct: "b"
  },
  {
    id: 20,
    question: "En el cáncer de pulmón de célula pequeña (estadio III), ¿cuál es la recomendación terapéutica general?",
    options: {
      a: "Quimioterapia y radioterapia de forma concomitante.",
      b: "Radioterapia y cirugía neoadyuvante.",
      c: "Radioterapia exclusivamente.",
      d: "Quimioterapia exclusivamente."
    },
    correct: "a"
  },
  {
    id: 21,
    question: "La protección radiológica se define como:",
    options: {
      a: "Conjunto de normas y procedimientos que se utilizan para prevenir los riesgos de la recepción de dosis de radiación y, en su caso, paliar y solucionar sus efectos.",
      b: "Conjunto de técnicas destinadas a bloquear completamente cualquier tipo de radiación ionizante en instalaciones radiactivas.",
      c: "Disciplina encargada de medir la radiación ambiental natural para evaluar su impacto ecológico.",
      d: "Aplicación de tratamientos médicos para revertir los daños celulares producidos por la radiación."
    },
    correct: "a"
  },
  {
    id: 22,
    question: "En la simulación del cáncer de vejiga, ¿cómo debe estar el recto en el momento de adquirir imágenes de TC?",
    options: {
      a: "Totalmente lleno.",
      b: "Totalmente vacío.",
      c: "Totalmente lleno con contraste.",
      d: "No influye el estado."
    },
    correct: "b"
  },
  {
    id: 23,
    question: "¿Qué proceso elimina cualquier forma de vida microbiana, incluidas las esporas, ya sea mediante métodos físicos o químicos?",
    options: {
      a: "Esterilización.",
      b: "Desinfección.",
      c: "Antisepsia.",
      d: "Sepsis."
    },
    correct: "a"
  },
  {
    id: 24,
    question: "Indica qué característica NO forma parte de la escucha activa:",
    options: {
      a: "El parafraseo.",
      b: "Hacer largas pausas de silencio.",
      c: "Dirigir el cuerpo hasta la persona interlocutora y mirarle a los ojos.",
      d: "Utilizar el lenguaje no verbal."
    },
    correct: "b"
  },
  {
    id: 25,
    question: "¿Cómo se denomina el efecto mediante el cual el filamento emite electrones al calentarse?",
    options: {
      a: "Efecto ionizador.",
      b: "Efecto termoiónico.",
      c: "Efecto termoelectrónico.",
      d: "Efecto emisor."
    },
    correct: "b"
  },
  {
    id: 26,
    question: "¿Cuáles de los siguientes órganos son linfoides?",
    options: {
      a: "El bazo y el timo.",
      b: "El hígado y los riñones.",
      c: "El estómago y las amígdalas.",
      d: "El páncreas y la médula ósea."
    },
    correct: "a"
  },
  {
    id: 27,
    question: "Sobre la neumonitis como efecto secundario de un tratamiento externo en tumores de mama, ¿qué afirmación NO es correcta?",
    options: {
      a: "Es el resultado del daño sobre los neumocitos tipo II y células endoteliales.",
      b: "Lo más frecuente es que las pacientes sean asintomáticas.",
      c: "Aparece solo a los 6 meses de finalizar la irradiación.",
      d: "En caso de aparecer síntomas, se administran corticoides y antibióticos."
    },
    correct: "c"
  },
  {
    id: 28,
    question: "En la planificación de braquiterapia de mama, ¿cuál es el margen habitual de tejido sano añadido alrededor del lecho tumoral tras una cirugía conservadora para definir el PTV?",
    options: {
      a: "1-2 mm.",
      b: "5-10 mm.",
      c: "15-20 mm.",
      d: "30 mm."
    },
    correct: "c"
  },
  {
    id: 29,
    question: "En referencia a los equipos de terapia de contacto utilizados en teleterapia, es cierto que:",
    options: {
      a: "Trabajan con potenciales eléctricos de hasta 150 kV.",
      b: "En el tratamiento se utilizan conos o aplicadores.",
      c: "Trabajan a distancia foco-superficie de 90 cm.",
      d: "Trabajan a distancia foco-superficie de 100 cm."
    },
    correct: "b"
  },
  {
    id: 30,
    question: "¿Cuál de las siguientes magnitudes tiene en cuenta la distinta radiosensibilidad de cada órgano en una irradiación de cuerpo entero?",
    options: {
      a: "Dosis absorbida.",
      b: "Dosis equivalente.",
      c: "Dosis efectiva.",
      d: "Las tres magnitudes anteriores tienen en cuenta ese factor."
    },
    correct: "c"
  },
  {
    id: 31,
    question: "En referencia a las barreras de protección radiológica en la sala de tratamiento, el anillo de refuerzo:",
    options: {
      a: "Es un suplemento en el blindaje de las barreras primarias.",
      b: "Es un suplemento en el refuerzo de las barreras secundarias.",
      c: "Es un suplemento que se encuentra tanto en barreras primarias como en secundarias.",
      d: "Este concepto no guarda relación con las barreras de protección."
    },
    correct: "a"
  },
  {
    id: 32,
    question: "En referencia al proceso de ionización de un átomo por interacción de la radiación con un electrón de la corteza, es cierto que:",
    options: {
      a: "Ocurre porque el electrón es expulsado del átomo, quedando este átomo cargado positivamente.",
      b: "Ocurre porque el electrón es expulsado del átomo, quedando este átomo cargado negativamente.",
      c: "Ocurre porque el electrón cambia de capa, quedando el átomo cargado positivamente.",
      d: "Ocurre porque el electrón cambia de capa, quedando el átomo cargado negativamente."
    },
    correct: "a"
  },
  {
    id: 33,
    question: "¿Cuál es un rasgo distintivo del dolor psicógeno?",
    options: {
      a: "Es un dolor provocado por un problema físico.",
      b: "Es un dolor irreal simulado por el paciente.",
      c: "Es un dolor real sin causa orgánica que lo justifique.",
      d: "Es un dolor irreal que es provocado por la enfermedad sin causa aparente."
    },
    correct: "c"
  },
  {
    id: 34,
    question: "Entre los efectos secundarios en el hígado tras la irradiación de un cáncer de estómago, NO se encuentra:",
    options: {
      a: "Ascitis.",
      b: "Fallo hepático fulminante y muerte.",
      c: "Pérdida de peso.",
      d: "Ictericia."
    },
    correct: "c"
  },
  {
    id: 35,
    question: "En el esquema de hipofraccionamiento semanal para mama en teleterapia externa, ¿cómo se administra la dosis?",
    options: {
      a: "5 fracciones al día durante una semana.",
      b: "La mucosa oral mucosa de la lengua.",
      c: "Los ganglios linfáticos submandibulares.",
      d: "El tiroides."
    },
    correct: "b"
  },
];