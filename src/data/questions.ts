export interface Question {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: "a" | "b" | "c" | "d";
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "En referencia a la magnitud radiológica “exposición”, podemos afirmar que:",
    options: {
      a: "Tiene en cuenta el valor absoluto de la carga total de todos los iones de un mismo signo producidos en un volumen de agua.",
      b: "Al igual que el Kerma, se utiliza para medir la energía de fotones y de protones.",
      c: "Para su correcta medida, hay que tener en cuenta el concepto de “equilibrio electrónico”.",
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
      b: "La magnitud que caracteriza la radiosensibilidad de un tejido determinado es la “Eficacia Biológica Relativa” (RBE).",
      c: "El oxígeno es un radiosensibilizador.",
      d: "El efecto del oxígeno se cuantifica mediante el “factor de potenciación del oxígeno” (OER)."
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
    correct: "a"
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
      a: "Búsqueda de un pacto o compromiso para retrasar lo inevitable.",
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
    correct: "d"
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
      b: "Una sesión por semana de entre 5 y 6,25 Gy durante 5-7 semanas.",
      c: "Dos fracciones al día separadas por 6 horas.",
      d: "Dos sesiones por semana de entre 5 y 6,25 Gy durante 8 semanas."
    },
    correct: "b"
  },
  {
    id: 36,
    question: "¿Cuál es el tratamiento curativo más efectivo para el cáncer de páncreas?",
    options: {
      a: "Quimioterapia.",
      b: "Radioterapia.",
      c: "Cirugía.",
      d: "Inmunoterapia."
    },
    correct: "c"
  },
  {
    id: 37,
    question: "Entre los diferentes fenómenos físicos que se aprovechan para detectar y medir la radiación se encuentra:",
    options: {
      a: "Creación de carga debido a ionizaciones de los átomos del medio.",
      b: "Luminiscencia generada en el proceso de excitación de los electrones y su posterior desexcitación.",
      c: "Disociación de la materia debida a que la radiación ionizante rompe enlaces químicos.",
      d: "Todas las respuestas son correctas."
    },
    correct: "d"
  },
  {
    id: 38,
    question: "Entre los parámetros utilizados para caracterizar una curva de dosis en profundidad de electrones NO encontramos:",
    options: {
      a: "R100 (profundidad del máximo).",
      b: "R66 (alcance 66%).",
      c: "R50 (alcance 50%).",
      d: "Rp (alcance práctico)."
    },
    correct: "b"
  },
  {
    id: 39,
    question: "En referencia a los equipos de energía media u ortovoltaje utilizados en teleterapia, NO es cierto que:",
    options: {
      a: "Pueden denominarse equipos de terapia semiprofunda.",
      b: "Trabajan a distancia foco-superficie de unos 50 cm.",
      c: "Trabajan con potenciales eléctricos de hasta 500 kV.",
      d: "La profundidad de tratamiento puede llegar hasta los 5 cm."
    },
    correct: "d"
  },
  {
    id: 40,
    question: "En el cáncer de endometrio, ¿en qué se diferencia el estadio IA del IB?",
    options: {
      a: "En el porcentaje de invasión del miometrio.",
      b: "En la afectación de los ganglios pélvicos.",
      c: "En el porcentaje de la invasión de la mucosa de la vejiga.",
      d: "En la afectación vaginal."
    },
    correct: "a"
  },
  {
    id: 41,
    question: "En referencia al efecto fotoeléctrico, es cierto que:",
    options: {
      a: "El fotón incidente interacciona con el núcleo del átomo.",
      b: "El fotón incidente cede parte de su energía a un electrón.",
      c: "Ocurre con energías del fotón menores que la energía de ligadura del electrón con el que interacciona.",
      d: "El fotón incidente desaparece tras la interacción."
    },
    correct: "d"
  },
  {
    id: 42,
    question: "En referencia al equipo de cobaltoterapia, NO es cierto que:",
    options: {
      a: "En posición de parada, la fuente está blindada por acero y plomo.",
      b: "Para iniciar la irradiación, los electrones se dirigen hacia el blanco a una velocidad cercana a la de la luz.",
      c: "Para la verificación del volumen irradiado se pueden comparar las cobaltografías con las DDR.",
      d: "El desplazamiento de la fuente radiactiva desde la posición de parada hasta la de irradiación se realiza mediante una bomba hidráulica."
    },
    correct: "b"
  },
  {
    id: 43,
    question: "En referencia a la dispersión de Rayleigh, es cierto que:",
    options: {
      a: "Es una dispersión elástica en la que no se excita el átomo.",
      b: "Es una dispersión elástica en la que se excita el átomo.",
      c: "Es una dispersión inelástica en la que no se excita el átomo.",
      d: "Es una dispersión inelástica en la que se excita el átomo."
    },
    correct: "b"
  },
  {
    id: 44,
    question: "El análisis de perfiles de dosis para haces de fotones y electrones se puede utilizar para:",
    options: {
      a: "Conectar puntos que tienen el mismo valor de dosis.",
      b: "Determinar la uniformidad del haz (simetría y homogeneidad).",
      c: "Determinar la profundidad a la que se absorbe la dosis máxima del haz.",
      d: "Las respuestas b) y c) son correctas."
    },
    correct: "b"
  },
  {
    id: 45,
    question: "En referencia a la Dosis Biológica Equivalente (DBE), es cierto que:",
    options: {
      a: "Hace referencia a una dosis que se administra solo a tejidos tumorales y se mide en Sv.",
      b: "Hace referencia a una dosis que se administra solo a tejidos tumorales y se mide en Gy.",
      c: "Hace referencia a una dosis que se administra a tejidos tumorales o sanos y se mide en Sv.",
      d: "Hace referencia a una dosis que se administra a tejidos tumorales o sanos y se mide en Gy."
    },
    correct: "d"
  },
  {
    id: 46,
    question: "Para la definición del volumen de tratamiento en el cáncer de estómago, ¿qué elemento quirúrgico es de gran utilidad?",
    options: {
      a: "Mallas quirúrgicas.",
      b: "Clips quirúrgicos.",
      c: "Marcadores fiduciales.",
      d: "Clips de hemostasia."
    },
    correct: "b"
  },
  {
    id: 47,
    question: "En un tratamiento con haces de electrones, ¿cuál NO es un inconveniente en la utilización de la lámina dispersora?",
    options: {
      a: "Aumento de la energía media del haz.",
      b: "Aumento de la anchura del espectro energético.",
      c: "Aumento de la dosis absorbida en la superficie del paciente.",
      d: "Aumento de la producción de rayos X de frenado."
    },
    correct: "a"
  },
  {
    id: 48,
    question: "En la braquiterapia prostática, ¿qué tipo de prueba de verificación se realiza tras insertar las semillas?",
    options: {
      a: "Cistometría.",
      b: "Cistografía.",
      c: "Ecografía vesical.",
      d: "Cistoscopia."
    },
    correct: "d"
  },
  {
    id: 49,
    question: "¿Qué técnica de tratamiento combina arcoterapia e IMRT?",
    options: {
      a: "IGRT.",
      b: "IMAT.",
      c: "SRT.",
      d: "IMARC."
    },
    correct: "b"
  },
  {
    id: 50,
    question: "La irradiación de metástasis pulmonares con SBRT requiere:",
    options: {
      a: "Colchón de vacío.",
      b: "Planos inclinados.",
      c: "Inmovilizadores termoplásticos corporales.",
      d: "Todas las opciones son correctas.",
    },
    correct: "d",
  },
  {
    id: 51,
    question: "Respecto a las características del dolor es FALSO que:",
    options: {
      a: "Existe una correlación entre la intensidad de un dolor y el grado de lesión.",
      b: "La ansiedad hace que la sensibilidad al dolor aumente.",
      c: "Está asociado a sentimientos negativos.",
      d: "La percepción del dolor varía entre todas las personas.",
    },
    correct: "a",
  },
  {
    id: 52,
    question: "¿Cuál es la unidad de energía utilizada a nivel atómico?",
    options: {
      a: "Julio (J).",
      b: "Voltio (V).",
      c: "Electronvoltio (eV).",
      d: "Sievert (Sv).",
    },
    correct: "c",
  },
  {
    id: 53,
    question:
      "Además del inmovilizador Belly-Board, ¿qué otra maniobra ayuda a reducir el volumen del intestino delgado a la hora de irradiar la pelvis?",
    options: {
      a: "Distensión vesical.",
      b: "Defecación previa al tratamiento.",
      c: "Inspiración profunda mantenida.",
      d: "Uso de medicamentos previos al tratamiento.",
    },
    correct: "a",
  },
  {
    id: 54,
    question: "En referencia a los detectores Geiger-Müller, es cierto que:",
    options: {
      a: "Sirven para detectar haces de radiación poco intensos, pero no permiten distinguir la energía de la radiación incidente.",
      b: "Sirven para detectar haces de radiación poco intensos y permiten distinguir la energía de la radiación incidente.",
      c: "No permiten detectar haces de radiación poco intensos ni distinguir la energía de la radiación incidente.",
      d: "No permiten detectar haces de radiación poco intensos, pero sí permiten distinguir la energía de la radiación incidente.",
    },
    correct: "a",
  },
  {
    id: 55,
    question: "¿Qué ventajas tienen las cuñas dinámicas frente a las físicas?",
    options: {
      a: "El espectro del haz de radiación no se modifica.",
      b: "Requieren que el técnico o la técnica intervenga solo para cambiar la orientación.",
      c: "Producen un mayor endurecimiento del haz.",
      d: "Todas las opciones son correctas.",
    },
    correct: "a",
  },
  {
    id: 56,
    question:
      "En un trasplante de médula ósea en los tumores hematológicos, es FALSO que:",
    options: {
      a: "La ICT con dosis bajas de radiación elimina completamente la médula ósea del paciente.",
      b: "El donante del injerto puede ser el propio paciente.",
      c: "El paciente requiere aislamiento.",
      d: "El donante del injerto puede ser un individuo con idéntica genética.",
    },
    correct: "a",
  },
  {
    id: 57,
    question:
      "En braquiterapia, ¿cuál es el límite de velocidad de emisión para considerar un tratamiento como Baja Tasa de Dosis (LDR)?",
    options: {
      a: "Hasta 2 Gy/h.",
      b: "Hasta 5 Gy/h.",
      c: "Entre 2 y 12 Gy/h.",
      d: "Más de 12 Gy/h.",
    },
    correct: "a",
  },
  {
    id: 58,
    question:
      "La función del zócalo o sistema focalizador del tubo de rayos X convencional es:",
    options: {
      a: "Evitar que los electrones se dispersen para lograr que incidan en un único punto del blanco.",
      b: "Lograr que los electrones se dispersen para que incidan en la mayor superficie del blanco posible.",
      c: "Controlar la emisión de electrones para evitar que la temperatura aumente bruscamente.",
      d: "Disipar el calor producido cuando los electrones chocan con el blanco.",
    },
    correct: "a",
  },
  {
    id: 59,
    question:
      "¿Cuál de las siguientes frases NO es correcta si hablamos de los colimadores multiláminas?",
    options: {
      a: "Generalmente disponen de 120 láminas.",
      b: "Los extremos de las láminas están diseñados para limitar la zona de penumbra.",
      c: "El campo de radiación máximo es de 50 x 50 cm2.",
      d: "Constan de láminas enfrentadas que permiten formar campos de forma irregular.",
    },
    correct: "c",
  },
  {
    id: 60,
    question:
      "En referencia al síndrome general de irradiación aguda, tras pocas horas de la exposición aparece una etapa inicial que se denomina:",
    options: {
      a: "Latente.",
      b: "Prodrómica.",
      c: "Etapa de enfermedad manifiesta.",
      d: "Ninguna de las respuestas es correcta.",
    },
    correct: "b",
  },
  {
    id: 61,
    question:
      "Aquella radiación originada por la interacción del haz de tratamiento con los tejidos del paciente se denomina:",
    options: {
      a: "Radiación directa.",
      b: "Radiación primaria.",
      c: "Radiación dispersa.",
      d: "Radiación de fuga.",
    },
    correct: "c",
  },
  {
    id: 62,
    question:
      "¿Cuál de los siguientes NO es un componente principal del estativo de un acelerador lineal?",
    options: {
      a: "Klystron o Magnetrón.",
      b: "Aceite refrigerador.",
      c: "Sistema de presión.",
      d: "Sistema de refrigeración por CO2.",
    },
    correct: "d",
  },
  {
    id: 63,
    question:
      "¿Cuál es la definición de Órgano de Riesgo (OAR) según el informe ICRU 83?",
    options: {
      a: "Es el volumen de tejido que rodea al PTV y recibe la dosis de prescripción.",
      b: "Son tejidos normales que, si se irradian, podrían sufrir una morbilidad significativa e influir en la planificación o en la prescripción de la dosis.",
      c: "Es el volumen de tejido sano que se encuentra exclusivamente dentro del volumen tratado.",
      d: "Es el margen de seguridad que se añade al CTV para compensar errores de movimiento.",
    },
    correct: "b",
  },
  {
    id: 64,
    question:
      "Aquellas ondas en que la perturbación se repite a lo largo del tiempo se denominan:",
    options: {
      a: "Ondas periódicas, y tanto los ultrasonidos como las ondas electromagnéticas pertenecen a este tipo de ondas.",
      b: "Ondas periódicas, y solo las ondas electromagnéticas pertenecen a este tipo de ondas.",
      c: "Ondas longitudinales, y tanto los ultrasonidos como las ondas electromagnéticas pertenecen a este tipo de ondas.",
      d: "Ondas longitudinales, y solo las ondas electromagnéticas pertenecen a este tipo de ondas.",
    },
    correct: "a",
  },
  {
    id: 65,
    question:
      "Para la simulación en un cáncer gástrico, ¿qué recomendación dietética debe seguir el paciente?",
    options: {
      a: "Ayuno de 48 horas previas.",
      b: "Evitar comida con fibra las 12 horas previas.",
      c: "Ayuno absoluto las 24 horas previas.",
      d: "Evitar comida voluminosa durante las 3 horas previas.",
    },
    correct: "d",
  },
  {
    id: 66,
    question:
      "Según el R.D. 391/2025, de 13 de mayo, y en referencia al programa de control de calidad de las etapas clínicas, es cierto que:",
    options: {
      a: "No podrán modificarse ni las periodicidades en los controles ni las tolerancias.",
      b: "Podrán modificarse las periodicidades en los controles, pero no las tolerancias.",
      c: "Podrán modificarse las tolerancias, pero no las periodicidades en los controles.",
      d: "Podrán modificarse tanto las periodicidades en los controles como las tolerancias.",
    },
    correct: "d",
  },
  {
    id: 67,
    question: "¿Dónde se ubica el tumor de Wilms?",
    options: {
      a: "En el riñón.",
      b: "En el pulmón.",
      c: "En el hígado.",
      d: "En el cerebro.",
    },
    correct: "a",
  },
  {
    id: 68,
    question:
      "¿Qué energía suelen producir los aceleradores lineales monoenergéticos para haces de fotones?",
    options: {
      a: "Generalmente de 3 o 7 MV.",
      b: "Generalmente de 4 o 6 MV.",
      c: "Generalmente de 5 o 8 kV.",
      d: "Generalmente de 3 o 10 MV.",
    },
    correct: "b",
  },
  {
    id: 69,
    question:
      "¿Cuál de los siguientes radionúclidos NO se utiliza para el tratamiento paliativo de metástasis óseas?",
    options: {
      a: "Yodo-118.",
      b: "Fósforo-32.",
      c: "Samario-153.",
      d: "Estroncio-89.",
    },
    correct: "a",
  },
  {
    id: 70,
    question:
      "En referencia a la respuesta de los tejidos normales a la radiación, es cierto que:",
    options: {
      a: "La respuesta temprana aparece a las pocas semanas de la irradiación, y se debe al daño de células funcionales.",
      b: "La respuesta temprana aparece a las pocas semanas de la irradiación, y se debe al daño del tejido conectivo.",
      c: "La respuesta temprana aparece tras meses de la irradiación, y se debe al daño de células funcionales.",
      d: "La respuesta temprana aparece tras meses de la irradiación, y se debe al daño del tejido conectivo.",
    },
    correct: "a",
  },
  {
    id: 71,
    question: "El isótopo Rutenio-106 se utiliza fundamentalmente para:",
    options: {
      a: "Tratamiento de melanoma nodular.",
      b: "Tratamiento de carcinoma basocelular.",
      c: "Tratamiento de carcinoma de células escamosas.",
      d: "Tratamiento de melanomas uveales.",
    },
    correct: "a",
  },
  {
    id: 72,
    question:
      "Al sufrir una enfermedad, el concepto de “estrechamiento del universo” implica:",
    options: {
      a: "Que la persona paciente piensa que las personas de su entorno se olvidan de ella.",
      b: "Generación de ansiedad, la cual hace que el dolor de la patología de la persona paciente aumente.",
      c: "Que la persona paciente toma conciencia de que todos/as nacemos y morimos solos/as.",
      d: "Un desinterés por el entorno, centrando toda la atención en uno/a mismo/a y en la patología.",
    },
    correct: "d",
  },
  {
    id: 73,
    question:
      "¿Cuáles son las referencias cutáneas utilizadas para alinear a una persona paciente con cáncer de pulmón?",
    options: {
      a: "Escotadura esternal, la apófisis xifoides y la línea axilar media derecha e izquierda.",
      b: "Escotadura esternal, la apófisis xifoides y la línea axilar media derecha.",
      c: "Escotadura esternal y la apófisis xifoides.",
      d: "Escotadura esternal.",
    },
    correct: "a",
  },
  {
    id: 74,
    question:
      "Tras un tratamiento de braquiterapia metabólica, ¿cuánto tiempo se recomienda esperar antes de un nuevo embarazo?",
    options: {
      a: "Mínimo 5 meses.",
      b: "Mínimo 6 meses.",
      c: "Mínimo 7 meses.",
      d: "Mínimo 8 meses.",
    },
    correct: "b",
  },
  {
    id: 75,
    question:
      "Para tratamientos teleterápicos con técnicas de radioterapia guiada por la imagen (IGRT) de un meduloblastoma, ¿qué posición se prefiere usar para mejorar la comodidad del paciente?",
    options: {
      a: "Decúbito prono.",
      b: "Decúbito lateral izquierdo.",
      c: "Decúbito lateral derecho.",
      d: "Decúbito supino.",
    },
    correct: "d",
  },
  {
    id: 76,
    question:
      "En referencia a la caracterización de las ondas periódicas, es cierto que:",
    options: {
      a: "La frecuencia es la distancia que separa dos puntos que estén en el mismo estado de oscilación en un instante de tiempo.",
      b: "La longitud de onda es la distancia recorrida por la onda en la unidad de tiempo.",
      c: "Las ondas armónicas son un tipo especial de ondas periódicas.",
      d: "La velocidad de propagación es el número de repeticiones de la perturbación por unidad de tiempo.",
    },
    correct: "c",
  },
  {
    id: 77,
    question:
      "Los sucesos notificables ocurridos en instalaciones radiactivas se dividen en:",
    options: {
      a: "Sucesos notificables con carácter inmediato (1 hora) y sucesos notificables en 24 horas.",
      b: "Sucesos notificables con carácter inmediato (3 horas) y sucesos notificables en 24 horas.",
      c: "Sucesos notificables con carácter inmediato (1 hora) y sucesos notificables en 16 horas.",
      d: "Sucesos notificables con carácter inmediato (3 horas) y sucesos notificables en 16 horas.",
    },
    correct: "a",
  },
  {
    id: 78,
    question:
      "En referencia a las medidas de protección radiológica, indica la afirmación FALSA:",
    options: {
      a: "Aumentando la distancia entre la persona y la fuente de radiación, la intensidad de la radiación disminuye en la misma proporción en que aumenta el cubo de la distancia.",
      b: "La dosis total recibida es directamente proporcional al tiempo de exposición.",
      c: "Para proteger a las personas se puede utilizar un blindaje.",
      d: "La elección del material más adecuado para el blindaje a utilizar con rayos X y gamma se basa en la ley de atenuación.",
    },
    correct: "a",
  },
  {
    id: 79,
    question: "¿Qué estructura delimita el canal anal de la ampolla rectal?",
    options: {
      a: "El esfínter externo.",
      b: "El esfínter interno.",
      c: "El músculo elevador del ano.",
      d: "La línea pectínea.",
    },
    correct: "d",
  },
  {
    id: 80,
    question:
      "Entre las características que debe cumplir el material que compone el ánodo del tubo de rayos X convencional, NO se encuentra:",
    options: {
      a: "Tener un punto de fusión lo más bajo posible.",
      b: "Tener una baja evaporación.",
      c: "Ser un material de número atómico alto.",
      d: "Ser buen conductor del calor.",
    },
    correct: "a",
  },
  {
    id: 81,
    question:
      "¿En qué consiste el posicionamiento denominado “postura superman”?",
    options: {
      a: "Paciente en decúbito supino con ambos brazos hacia arriba.",
      b: "Paciente en decúbito prono con el brazo afectado en extensión máxima y el otro brazo bajo la cabeza.",
      c: "Paciente en decúbito prono con ambos brazos hacia arriba.",
      d: "Paciente en decúbito supino con el brazo afectado en extensión máxima y el otro brazo bajo la cabeza.",
    },
    correct: "b",
  },
  {
    id: 82,
    question:
      "En braquiterapia metabólica, ¿cuál NO es un factor determinante para la distribución del radiofármaco en el organismo?",
    options: {
      a: "Las propiedades químicas del fármaco.",
      b: "El estado fisiopatológico de la persona paciente.",
      c: "La presencia de otros fármacos que puedan interferir en el metabolismo.",
      d: "La distancia de la persona paciente a la fuente de radiación.",
    },
    correct: "d",
  },
  {
    id: 83,
    question: "Si hablamos de células clonogénicas, sabemos que:",
    options: {
      a: "Son células que han sufrido el fenómeno de senescencia.",
      b: "Son las células tumorales que no han respondido al tratamiento.",
      c: "Son células que, si se cultivan en condiciones adecuadas, son capaces de formar colonias.",
      d: "Todas las respuestas son correctas.",
    },
    correct: "c",
  },
  {
    id: 84,
    question:
      "En el cáncer de esófago, ¿cuál es la localización más frecuente de los adenocarcinomas?",
    options: {
      a: "Tercio superior.",
      b: "Tercio medio.",
      c: "Tercio inferior.",
      d: "Esófago cervical.",
    },
    correct: "c",
  },
  {
    id: 85,
    question:
      "¿A qué término hace referencia la siguiente definición?: “Proceso químico o físico de destrucción de todos los microorganismos patógenos, excepto las formas de resistencia, o que evita su desarrollo.”",
    options: {
      a: "Desinfección.",
      b: "Esterilización.",
      c: "Antisepsia.",
      d: "Sepsis.",
    },
    correct: "a",
  },
  {
    id: 86,
    question:
      "¿Cómo se llama el local destinado al almacenamiento de fuentes radiactivas selladas?",
    options: {
      a: "Radiofarmacia.",
      b: "Gammateca.",
      c: "Búnker.",
      d: "Sala de almacenamiento.",
    },
    correct: "b",
  },
  {
    id: 87,
    question:
      "En referencia al comportamiento de las ondas, las ondas estacionarias son un tipo de:",
    options: {
      a: "Reflexión.",
      b: "Refracción.",
      c: "Polarización.",
      d: "Interferencia.",
    },
    correct: "d",
  },
  {
    id: 88,
    question:
      "¿Qué tipo de partículas emiten mayoritariamente los radionúclidos utilizados en terapia metabólica por su alto poder de irradiación local?",
    options: {
      a: "Partículas alfa.",
      b: "Partículas omega.",
      c: "Partículas beta.",
      d: "Partículas gamma.",
    },
    correct: "c",
  },
  {
    id: 89,
    question:
      "En braquiterapia, ¿quién debe realizar la calibración de los detectores portátiles y fijos de la instalación?",
    options: {
      a: "El jefe o la jefa del servicio de Oncología.",
      b: "Entidades autorizadas por la Administración.",
      c: "El técnico o la técnica de radiodiagnóstico.",
      d: "Las opciones a) y b) son correctas.",
    },
    correct: "b",
  },
  {
    id: 90,
    question: "En referencia a los efectos estocásticos, es cierto que:",
    options: {
      a: "Se producen tras la exposición a dosis de irradiación moderadas-bajas.",
      b: "Para que ocurran, la dosis de irradiación debe superar una dosis umbral.",
      c: "Su gravedad aumenta al aumentar la dosis de radiación recibida.",
      d: "Son consecuencia de la muerte de un número elevado de células de un tejido u órgano.",
    },
    correct: "a",
  },
  {
    id: 91,
    question:
      "En referencia a los equipos de simulación mediante TC (Tomografía Computarizada), indica qué opción es FALSA:",
    options: {
      a: "Su funcionamiento se basa en que la estructura interna de un objeto puede ser reconstruida a partir de múltiples proyecciones de dicho objeto.",
      b: "La adquisición de información en el modo de trabajo secuencial se realiza con la mesa en continuo movimiento.",
      c: "Utiliza dos tipos de colimación: el prepaciente y el pospaciente.",
      d: "Para aumentar la eficiencia de detección, los detectores convierten la radiación X incidente en luz visible y, después, esta luz visible en señal eléctrica.",
    },
    correct: "b",
  },
  {
    id: 92,
    question: "¿Cómo se tratan los astrocitomas en niños/as menores de 3 años?",
    options: {
      a: "Cirugía y radioterapia.",
      b: "Solo radioterapia.",
      c: "Cirugía y quimioterapia.",
      d: "Solo quimioterapia.",
    },
    correct: "c",
  },
  {
    id: 93,
    question:
      "En referencia al filamento del tubo de rayos X convencional, es cierto que:",
    options: {
      a: "El filamento grande proporciona peor resolución en la imagen y permite emplear cargas menores que el filamento pequeño.",
      b: "El filamento grande proporciona mejor resolución en la imagen y permite emplear cargas menores que el filamento pequeño.",
      c: "El filamento grande proporciona peor resolución en la imagen y permite emplear cargas mayores que el filamento pequeño.",
      d: "El filamento grande proporciona mejor resolución en la imagen y permite emplear cargas mayores que el filamento pequeño.",
    },
    correct: "c",
  },
  {
    id: 94,
    question:
      "Identifique la energía media de emisión de fotones característica del Iridio-192:",
    options: {
      a: "0,66 MeV.",
      b: "1,25 MeV.",
      c: "0,38 MeV.",
      d: "0,028 MeV.",
    },
    correct: "c",
  },
  {
    id: 95,
    question:
      "¿Cómo se le llama al fenómeno que sufre una persona paciente inmediatamente después de recibir una noticia impactante sobre su salud y que dificulta procesar más información?",
    options: {
      a: "Secuestro emocional.",
      b: "Negación adaptativa.",
      c: "Ansiedad reactiva.",
      d: "Catastrofización.",
    },
    correct: "a",
  },
  {
    id: 96,
    question:
      "En referencia a la admisión de la persona paciente, ¿qué profesionales están involucrados en el registro de entrada del/de la paciente en la red radioterápica?",
    options: {
      a: "Médicos/médicas y administrativos/administrativas.",
      b: "Médicos/médicas y técnico/técnica especialista en radioterapia.",
      c: "Técnico/técnica especialista en radioterapia y administrativos/administrativas.",
      d: "Técnico/técnica especialista en radioterapia, médicos/médicas y administrativos/administrativas.",
    },
    correct: "a",
  },
  {
    id: 97,
    question:
      "En referencia al uso del delantal plomado con fuentes de alta energía, es cierto que:",
    options: {
      a: "Es la medida de protección más importante y obligatoria.",
      b: "No es efectivo, ya que apenas atenúa la radiación.",
      c: "Protege al 100% de la radiación gamma emitida.",
      d: "Solo debe usarse si el delantal plomado tiene un espesor de 0,1 mm.",
    },
    correct: "b",
  },
  {
    id: 98,
    question:
      "¿Cuál de los siguientes tipos de ondas NO pertenece al espectro electromagnético?",
    options: {
      a: "Sonido.",
      b: "Infrarrojos.",
      c: "Rayos X.",
      d: "Microondas.",
    },
    correct: "a",
  },
  {
    id: 99,
    question: "Según el R.D. 1029/2022, de 20 de diciembre, es cierto que:",
    options: {
      a: "No podrán asignarse a las personas menores de dieciséis años tareas que pudieran convertirlos en trabajadores/as expuestos/as.",
      b: "No podrán asignarse a las personas menores de dieciocho años tareas que pudieran convertirlos en trabajadores/as expuestos/as.",
      c: "No podrán asignarse a las personas menores de veintiún años tareas que pudieran convertirlos en trabajadores/as expuestos/as.",
      d: "Las personas trabajadoras podrán realizar tareas propias de trabajadores/as expuestos/as independientemente de su edad.",
    },
    correct: "b",
  },
  {
    id: 100,
    question:
      "¿Qué principio de protección radiológica establece que no se realizará ninguna actividad con radiaciones ionizantes si su beneficio no es superior a los riesgos?",
    options: {
      a: "Optimización.",
      b: "Justificación.",
      c: "Limitación de dosis.",
      d: "Ninguna respuesta es correcta.",
    },
    correct: "b",
  },
  {
    id: 101,
    question: "¿Qué tipo de tumor se encuentra en la zona infratentorial?",
    options: {
      a: "Meduloblastoma.",
      b: "Craneofaringioma.",
      c: "Oligodendroglioma.",
      d: "Glioma de bajo grado.",
    },
    correct: "a",
  },
  {
    id: 102,
    question: "¿Qué característica cumplen los isótopos?",
    options: {
      a: "Tienen distinto número másico y distinto número atómico.",
      b: "Tienen mismo número másico y distinto número atómico.",
      c: "Tienen distinto número másico y mismo número atómico.",
      d: "Tienen mismo número másico y mismo número atómico.",
    },
    correct: "c",
  },
  {
    id: 103,
    question:
      "Indique el periodo de semidesintegración (T1/2) exacto del radionúclido Iridio-192:",
    options: {
      a: "73,83 días.",
      b: "63,83 días.",
      c: "37,17 días.",
      d: "17,17 días.",
    },
    correct: "a",
  },
  {
    id: 104,
    question:
      "Según el informe ICRU 83, ¿qué volumen se define como la extensión y localización demostrable del tumor maligno?",
    options: {
      a: "Volumen Tumoral Macroscópico (GTV).",
      b: "Volumen Blanco Clínico (CTV).",
      c: "Volumen Blanco Interno (ITV).",
      d: "Volumen Blanco de Planificación (PTV).",
    },
    correct: "a",
  },
  {
    id: 105,
    question:
      "En referencia a la infección nosocomial, ¿en qué se diferencia la transmisión por gotas de la transmisión aérea?",
    options: {
      a: "Las gotas son partículas pequeñas (menores de 5 micras) que permanecen suspendidas en el aire por largos periodos.",
      b: "Las gotas son partículas pequeñas (menores de 5 micras) y no quedan suspendidas en el aire.",
      c: "La transmisión por gotas no requiere un contacto estrecho, ya que las partículas (menores de 5 micras) se quedan suspendidas en el aire.",
      d: "La transmisión por gotas requiere un contacto estrecho, ya que las partículas (mayores de 5 micras) no quedan suspendidas.",
    },
    correct: "d",
  },
  {
    id: 106,
    question:
      "¿Qué instrumento es obligatorio utilizar para la manipulación manual de fuentes de baja tasa de dosis?",
    options: {
      a: "Guantes de plomo de gran espesor.",
      b: "Pinzas magnéticas.",
      c: "Ventosas de vacío.",
      d: "Pinzas de mango largo.",
    },
    correct: "d",
  },
  {
    id: 107,
    question:
      "¿Cuál de las siguientes etapas del proceso radioterápico es la última que se realiza?",
    options: {
      a: "Tratamiento.",
      b: "Simulación.",
      c: "Aceptación médica.",
      d: "Planificación dosimétrica.",
    },
    correct: "a",
  },
  {
    id: 108,
    question:
      "¿Con qué frecuencia deben realizarse los controles de hermeticidad de las fuentes selladas?",
    options: {
      a: "Cada 3 meses.",
      b: "Cada 6 meses.",
      c: "Cada año.",
      d: "Cada vez que se use una fuente con un paciente.",
    },
    correct: "c",
  },
  {
    id: 109,
    question:
      "¿Qué técnica de inmovilización se usa para tratar tumores óseos en la columna?",
    options: {
      a: "Decúbito prono.",
      b: "Decúbito supino.",
      c: "Bipedestación.",
      d: "Las opciones a) y b) son correctas.",
    },
    correct: "d",
  },
  {
    id: 110,
    question:
      "Uno de los requerimientos para poder evacuar los residuos radiactivos líquidos por la red de alcantarillado general es que la actividad total evacuada debe ser inferior a:",
    options: {
      a: "1 GBq al mes.",
      b: "3 GBq al mes.",
      c: "1 GBq al año.",
      d: "3 GBq al año.",
    },
    correct: "c",
  },
  {
    id: 111,
    question:
      "Al recibir una nueva fuente en braquiterapia, ¿qué dato del bulto debe verificarse comparándolo con el certificado de calibración?",
    options: {
      a: "El peso total del embalaje.",
      b: "El código identificativo de la fuente.",
      c: "La fecha de fabricación del contenedor.",
      d: "Todas las opciones son correctas.",
    },
    correct: "b",
  },
  {
    id: 112,
    question:
      "La interrupción brusca, accidental, inesperada y potencialmente reversible de la circulación y respiración espontáneas recibe el nombre de:",
    options: {
      a: "Infarto agudo de miocardio.",
      b: "Angina de pecho.",
      c: "Hemorragia pulmonar.",
      d: "Parada cardiorrespiratoria.",
    },
    correct: "d",
  },
  {
    id: 113,
    question: "En referencia al tubo de rayos X convencional, es cierto que:",
    options: {
      a: "Los tubos de ánodo fijo o estacionario se utilizan cada vez más hoy en día, sobre todo en equipos generadores de radiación de alta energía.",
      b: "Los tubos de ánodo giratorio disipan mejor el calor que los tubos de ánodo fijo.",
      c: "El mecanismo de disipación de calor en tubos de ánodo fijo y en tubos de ánodo giratorio es el mismo.",
      d: "El calor que se pueda producir no es un factor a tener en cuenta en el tubo de rayos X.",
    },
    correct: "b",
  },
  {
    id: 114,
    question: "Respecto al Schwannoma vestibular es FALSO que:",
    options: {
      a: "La principal prueba diagnóstica es la TC.",
      b: "Es más frecuente en mujeres que en hombres.",
      c: "Para radiocirugía, el GTV es igual que el PTV.",
      d: "Entre los órganos de riesgo se encuentran los ojos y las vías oculares.",
    },
    correct: "a",
  },
  {
    id: 115,
    question:
      "¿Cuál es el material usado habitualmente en la cápsula de las fuentes de braquiterapia?",
    options: {
      a: "Níquel.",
      b: "Plomo o wolframio.",
      c: "Oro o platino.",
      d: "Cromo hexavalente.",
    },
    correct: "c",
  },
  {
    id: 116,
    question:
      "Entre los inconvenientes de los detectores de semiconductor NO encontramos:",
    options: {
      a: "Están limitados a grandes tamaños.",
      b: "Se degradan por efecto de la radiación.",
      c: "Los empleados para dosimetría presentan dependencia angular.",
      d: "Los empleados para dosimetría presentan dependencia con la temperatura.",
    },
    correct: "a",
  },
  {
    id: 117,
    question:
      "¿Cómo se define el PTV en braquiterapia de mama tras cirugía conservadora con bordes libres?",
    options: {
      a: "Todo el volumen pulmonar.",
      b: "Un margen de 15-20 mm de tejido sano alrededor del lecho tumoral.",
      c: "Queda definido por el GTV con 5-10 mm de margen.",
      d: "La mama completa sin márgenes.",
    },
    correct: "b",
  },
  {
    id: 118,
    question:
      "¿Cuál es la dosis utilizada para el tratamiento de urgencia en el síndrome de compresión medular?",
    options: {
      a: "10 fracciones de 3 Gy.",
      b: "5 fracciones de 4 Gy.",
      c: "Dosis única de 8 Gy.",
      d: "3 fracciones de 3 Gy.",
    },
    correct: "a",
  },
  {
    id: 119,
    question:
      "En referencia a la teoría de la dualidad onda-corpúsculo, es cierto que:",
    options: {
      a: "Afirma que la luz puede comportarse como onda y como partícula a la vez.",
      b: "Afirma que la luz, en determinadas circunstancias, puede comportarse como si estuviera compuesta por pequeñas partículas.",
      c: "Afirma que la luz, en determinadas circunstancias, interacciona de determinada forma con la materia.",
      d: "Ninguna de las respuestas es correcta.",
    },
    correct: "b",
  },
  {
    id: 120,
    question:
      "Según el R.D. 1029/2022, aquellas personas que, por las condiciones en las que se realiza su trabajo, puedan recibir una dosis efectiva superior a 6 mSv por año oficial o una dosis equivalente superior a 15 mSv por año oficial al cristalino o superior a 150 mSv para la piel y las extremidades pertenecen a la categoría de:",
    options: {
      a: "Miembros del público.",
      b: "Trabajadores expuestos de categoría A.",
      c: "Trabajadores expuestos de categoría B.",
      d: "Las respuestas b) y c) son correctas.",
    },
    correct: "b",
  },
  {
    id: 121,
    question:
      "En referencia a los colimadores de los aceleradores lineales de electrones modernos, es FALSO que:",
    options: {
      a: "Existe un colimador primario de forma cónica, situado a la salida del haz.",
      b: "El colimador multiláminas (MLC) está formado por pares de láminas enfrentadas unas a otras que pueden moverse independientemente.",
      c: "Los colimadores secundarios permiten variar el tamaño del campo de radiación.",
      d: "Tanto el colimador primario como el secundario tienen un sistema de giro que permite orientar la posición del campo de tratamiento.",
    },
    correct: "d",
  },
  {
    id: 122,
    question:
      "En referencia al proceso radioterápico, aquella planificación en la que el usuario define algunos parámetros de los haces y los objetivos clínicos fijados, y el sistema de planificación proporciona la solución más adecuada se denomina:",
    options: {
      a: "Planificación sistemática.",
      b: "Planificación directa.",
      c: "Planificación inversa.",
      d: "Planificación computarizada.",
    },
    correct: "c",
  },
  {
    id: 123,
    question:
      "En el tratamiento de mamas voluminosas, ¿qué accesorio se utiliza para homogeneizar la diferencia anatómica de la región torácica anterior?",
    options: {
      a: "Inmovilizador de tórax.",
      b: "Sistema de inmovilización individual.",
      c: "Planos inclinados.",
      d: "Almohadas, sábanas o toallas.",
    },
    correct: "c",
  },
  {
    id: 124,
    question:
      "El número de desintegraciones que se producen en una muestra por unidad de tiempo se denomina:",
    options: {
      a: "Actividad.",
      b: "Periodo de desintegración.",
      c: "Periodo de semidesintegración.",
      d: "Tiempo de vida medio.",
    },
    correct: "a",
  },
  {
    id: 125,
    question:
      "¿Dónde se localizan principalmente las células plasmáticas anormales en un plasmocitoma?",
    options: {
      a: "Solo en los ganglios linfáticos.",
      b: "Aislados en el hueso o en el tejido blando.",
      c: "En la epidermis.",
      d: "Todas las opciones son correctas.",
    },
    correct: "b",
  },
  {
    id: 126,
    question:
      "¿Qué tratamiento es más eficaz para tratar las enfermedades articulares inflamatorias?",
    options: {
      a: "Sinovectomía radiactiva.",
      b: "Radioinmunoterapia.",
      c: "Radiocirugía.",
      d: "Ninguna opción es correcta.",
    },
    correct: "a",
  },
  {
    id: 127,
    question:
      "En referencia a las curvas de isodosis para fotones y electrones, es cierto que:",
    options: {
      a: "Solo se relacionan con el PDD del haz.",
      b: "Solo se relacionan con el perfil de dosis del haz.",
      c: "Se pueden relacionar tanto con el PDD como con el perfil de dosis del haz.",
      d: "No se puede relacionar con ninguno de los parámetros citados.",
    },
    correct: "c",
  },
  {
    id: 128,
    question:
      "En referencia a los monitores de radiación ambiental en el ámbito hospitalario, señala la afirmación FALSA:",
    options: {
      a: "Pueden usarse para estimar las dosis efectivas y equivalentes en los órganos de las personas que trabajan con radiaciones ionizantes.",
      b: "Suelen ser cámaras de ionización o contadores Geiger-Müller.",
      c: "Normalmente solo se usan para medir radiación gamma.",
      d: "Se utilizan para medir los niveles de radiación alrededor de los equipos de radioterapia.",
    },
    correct: "c",
  },
  {
    id: 129,
    question:
      "En referencia a la interacción de los fotones con la materia, ¿qué ocurre en el proceso de creación de pares electrón-positrón?",
    options: {
      a: "El fotón interacciona con el campo electromagnético del núcleo y desaparece como consecuencia de dicha interacción.",
      b: "El fotón interacciona con el campo electromagnético del núcleo y, tras la interacción, continúa su camino con la energía remanente.",
      c: "El fotón interacciona con un electrón de la corteza y desaparece como consecuencia de dicha interacción.",
      d: "El fotón interacciona con un electrón de la corteza y, tras la interacción, continúa su camino con la energía remanente.",
    },
    correct: "a",
  },
  {
    id: 130,
    question:
      "Aquel detector que permite “contar” o conocer la energía de partículas individuales trabajan en modo:",
    options: {
      a: "Pulso.",
      b: "Integrado.",
      c: "Individual.",
      d: "Corriente.",
    },
    correct: "a",
  },
  {
    id: 131,
    question:
      "Con el fin de conseguir focos térmicos mayores y focos efectivos menores en el ánodo del tubo de rayos X convencional, una de las posibilidades que hay es:",
    options: {
      a: "Modificar el material del ánodo.",
      b: "Aumentar la velocidad de giro en ánodos giratorios.",
      c: "Modificar la inclinación del ánodo respecto al haz de electrones incidente.",
      d: "Ninguna de las respuestas es correcta.",
    },
    correct: "c",
  },
  {
    id: 132,
    question: "Los radionúclidos de baja energía se caracterizan por tener:",
    options: {
      a: "Energía media < 0,100 MeV.",
      b: "Energía media < 0,050 MeV.",
      c: "Energía media entre 0,050 y 0,100 MeV.",
      d: "Energía media > 0,050 MeV.",
    },
    correct: "b",
  },
  {
    id: 133,
    question:
      "La etapa del tratamiento radioterápico en la cual se calcula la distribución de dosis absorbida en el volumen blanco y en los distintos órganos se denomina:",
    options: {
      a: "Simulación.",
      b: "Prescripción dosimétrica.",
      c: "Planificación dosimétrica.",
      d: "Informe dosimétrico.",
    },
    correct: "c",
  },
  {
    id: 134,
    question:
      "¿Qué ventaja principal tienen los fijadores dentales como sistema de inmovilización?",
    options: {
      a: "No producen efecto bolus.",
      b: "Son muy económicos.",
      c: "Son cómodos para el paciente.",
      d: "No requieren impresión dental previa.",
    },
    correct: "a",
  },
  {
    id: 135,
    question:
      "En referencia a la clasificación de zonas, las zonas de permanencia limitada:",
    options: {
      a: "Son un tipo de zona vigilada, por lo que existe la posibilidad de recibir dosis efectivas superiores a 6 mSv por año oficial.",
      b: "Son un tipo de zona vigilada, por lo que no existe la posibilidad de recibir dosis efectivas superiores a 6 mSv por año oficial.",
      c: "Son un tipo de zona controlada, por lo que existe la posibilidad de recibir dosis efectivas superiores a 6 mSv por año oficial.",
      d: "Son un tipo de zona controlada, por lo que no existe la posibilidad de recibir dosis efectivas superiores a 6 mSv por año oficial.",
    },
    correct: "c",
  },
  {
    id: 136,
    question:
      'En referencia a los elementos facilitadores de la comunicación, ¿en qué consiste la "congruencia"?',
    options: {
      a: "En emplear un discurso técnico estructurado que refuerce la credibilidad profesional.",
      b: "En reformular el mensaje del interlocutor para confirmar que ha sido comprendido correctamente.",
      c: "En mantener coherencia entre el lenguaje verbal y no verbal, aunque el mensaje no refleje necesariamente el pensamiento interno.",
      d: "En la ausencia de contradicción entre el pensamiento, el discurso y la conducta del profesional.",
    },
    correct: "d",
  },
  {
    id: 137,
    question:
      "¿Cuál de las siguientes características NO es propia de un fotón?",
    options: {
      a: "No tiene masa ni carga.",
      b: "Es de naturaleza ondulatoria.",
      c: "Su velocidad depende del medio por el que se transmita.",
      d: "Su energía solo depende de la frecuencia de la onda.",
    },
    correct: "c",
  },
  {
    id: 138,
    question:
      "La técnica de control de movimiento de órganos internos en la cual se sincroniza la irradiación con la respiración del paciente se denomina:",
    options: {
      a: "Tracking.",
      b: "Gating.",
      c: "Microcolimador multiláminas.",
      d: "DDR.",
    },
    correct: "b",
  },
  {
    id: 139,
    question:
      "Comparándolo con el acelerador lineal de electrones, ¿cuál de las siguientes afirmaciones NO es una ventaja del equipo de cobaltoterapia?",
    options: {
      a: "Tiene un índice relativamente bajo de averías.",
      b: "Produce un menor tamaño de la penumbra del campo de radiación.",
      c: "El espesor de sus blindajes es menor.",
      d: "Pueden instalarse en salas de reducido tamaño.",
    },
    correct: "b",
  },
  {
    id: 140,
    question:
      "El programa de control de calidad de las etapas clínicas de las unidades asistenciales de radioterapia se aplicará:",
    options: {
      a: "A todas y cada una de las etapas clínicas del proceso radioterápico.",
      b: "Solo a las etapas clínicas en las que haya un contacto con el paciente.",
      c: "Solo a las etapas clínicas en las que haya intercambio de información entre profesionales.",
      d: "Solo a las etapas clínicas relacionadas con la decisión terapéutica.",
    },
    correct: "a",
  },
  {
    id: 141,
    question:
      "¿Cuál de los siguientes detectores es el más adecuado para la dosimetría absoluta?",
    options: {
      a: "Dosímetro semiconductor.",
      b: "Cámara de ionización.",
      c: "Dosímetro por película radiográfica.",
      d: "Dosímetro por película radiocrómica.",
    },
    correct: "b",
  },
  {
    id: 142,
    question:
      "En referencia al efecto anódico o efecto talón en el tubo de rayos X convencional, es cierto que:",
    options: {
      a: "Consigue la homogeneidad en la intensidad del haz en todo el campo de rayos X.",
      b: "Produce que la intensidad de la radiación en el lado del cátodo sea mayor que en el lado del ánodo.",
      c: "Produce que la intensidad de la radiación en el lado del ánodo sea mayor que en el lado del cátodo.",
      d: "Produce que la intensidad de la radiación en el lado del cátodo sea menor que en el ánodo.",
    },
    correct: "b",
  },
  {
    id: 143,
    question:
      "En pacientes que utilizan cánula de laringectomía metálica, ¿qué acción se realiza para realizar una TC?",
    options: {
      a: "Dejar la cánula metálica.",
      b: "Cubrir la cánula con bolus.",
      c: "Retirar la cánula y no poner nada durante la sesión.",
      d: "Sustituirla por una cánula de plástico.",
    },
    correct: "d",
  },
  {
    id: 144,
    question:
      "En la braquiterapia de la mucosa yugal, ¿cuál NO es un efecto secundario común?",
    options: {
      a: "Odinofagia.",
      b: "Úlceras.",
      c: "Mucositis.",
      d: "Dermitis.",
    },
    correct: "a",
  },
  {
    id: 145,
    question:
      "Entre los parámetros utilizados para calcular el índice TPR 20/10, NO se encuentra:",
    options: {
      a: "Dosis absorbida a profundidad de 10 cm.",
      b: "Dosis absorbida a profundidad de 20 cm.",
      c: "Distancia foco superficie (SSD) fija de 100 cm.",
      d: "Tamaño de campo de 10 cm x 10 cm.",
    },
    correct: "c",
  },
  {
    id: 146,
    question:
      "En relación a las precauciones de aislamiento para el control de la infección nosocomial, es cierto que:",
    options: {
      a: "Deben aplicarse solo cuando la persona paciente tiene un diagnóstico confirmado de una enfermedad altamente contagiosa.",
      b: "Son necesarias únicamente cuando el personal sanitario entra en contacto con pacientes que presenten síntomas evidentes.",
      c: "Se deben aplicar en el cuidado de todas las personas pacientes hospitalizadas, sin importar su diagnóstico o si se sospecha que tienen una infección.",
      d: "Ninguna opción es correcta.",
    },
    correct: "c",
  },
  {
    id: 147,
    question:
      "El proceso responsable de los efectos biológicos que se producen en la irradiación con rayos X es:",
    options: {
      a: "Las ionizaciones que produce la radiación en los átomos del medio.",
      b: "Las excitaciones que produce la radiación en los átomos del medio.",
      c: "La atenuación del haz por los átomos del medio.",
      d: "Todas las respuestas son correctas.",
    },
    correct: "d",
  },
  {
    id: 148,
    question:
      "¿En qué casos se recomienda utilizar aplicadores de un solo canal en braquiterapia de endometrio?",
    options: {
      a: "En tumores ya operados.",
      b: "En úteros grandes.",
      c: "En úteros muy pequeños.",
      d: "Cuando se combina con radioterapia.",
    },
    correct: "c",
  },
  {
    id: 149,
    question:
      "Entre los equipos que permiten realizar tratamientos con haces de protones encontramos:",
    options: {
      a: "El ciclotrón.",
      b: "El Ciberknife.",
      c: "Equipos de tomoterapia helicoidal.",
      d: "Las respuestas a) y c) son correctas.",
    },
    correct: "a",
  },
  {
    id: 150,
    question:
      "En referencia a la señalización de zonas con riesgo de exposición a las radiaciones ionizantes, una zona en la cual exista solamente riesgo de irradiación externa aparecerá señalizada mediante:",
    options: {
      a: "Un trébol enmarcado por una orla rectangular del mismo color que el símbolo.",
      b: "Un trébol bordeado de puntas radiales enmarcado por una orla rectangular del mismo color que el símbolo.",
      c: "Un trébol sobre un campo punteado enmarcado por una orla rectangular del mismo color que el símbolo.",
      d: "Las respuestas b) y c) son correctas.",
    },
    correct: "b",
  },
];
