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
      c: "Para su correcta medida, hay que tener en cuenta el concept de \"equilibrio electrónico\".",
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
    question: "Los aceleradores lineales modernos:",
    options: {
      a: "Suelen acelerar partículas pesadas como los protones.",
      b: "Utilizan cavidades resonantes para aumentar la energía cinética de los electrones.",
      c: "No precisan de sistemas de refrigeración de agua.",
      d: "Todas las respuestas anteriores son correctas."
    },
    correct: "b"
  },
  {
    id: 5,
    question: "En referencia al Trastorno Adaptativo en el paciente oncológico, podemos afirmar que:",
    options: {
      a: "Es una reacción normal que no precisa de soporte psicológico.",
      b: "Se caracteriza por una respuesta desproporcionada al estrés del diagnóstico o tratamiento.",
      c: "Afecta a la totalidad de los pacientes oncológicos de forma irreversible.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    correct: "b"
  },
  {
    id: 6,
    question: "La cistitis rádica aguda:",
    options: {
      a: "Es un efecto secundario que aparece de forma inmediata al finalizar el tratamiento.",
      b: "Cursa clínicamente con disuria, polaquiuria y tenesmo vesical.",
      c: "Suele tratarse con antibioterapia de amplio espectro de forma sistemática.",
      d: "Es una complicación grave que obliga a suspender la radioterapia."
    },
    correct: "b"
  },
  {
    id: 7,
    question: "En referencia a la tomografía computarizada (TC) de simulación, el grosor de corte óptico para la planificación de tratamientos en la zona de cabeza y cuello es de:",
    options: {
      a: "1 a 3 mm.",
      b: "5 a 10 mm.",
      c: "Mayor de 10 mm.",
      d: "Es indiferente para el cálculo de la dosis."
    },
    correct: "a"
  },
  {
    id: 8,
    question: "El colimador multiláminas (MLC) de un acelerador lineal:",
    options: {
      a: "Permite conformar el haz de radiación adaptándose a la forma geométrica del PTV.",
      b: "Está fabricado de materiales con bajo número atómico.",
      c: "Es un sistema de colimación fija no motorizada.",
      d: "Sustituye por completo al colimador primario de la máquina."
    },
    correct: "a"
  },
  {
    id: 9,
    question: "En la señalización de zonas en una instalación radiactiva, una \"Zona Vigilada\" se identifica mediante un trébol de color:",
    options: {
      a: "Gris azulado.",
      b: "Verde.",
      c: "Amarillo.",
      d: "Naranja."
    },
    correct: "a"
  },
  {
    id: 10,
    question: "La magnitud dosimétrica \"Dosis Equivalente\" se mide en el Sistema Internacional en:",
    options: {
      a: "Gray (Gy).",
      b: "Sievert (Sv).",
      c: "Roentgen (R).",
      d: "Becquerel (Bq)."
    },
    correct: "b"
  },
  {
    id: 11,
    question: "En un histograma dosis-volumen (DVH) acumulativo:",
    options: {
      a: "El eje de abscisas representa el volumen del órgano y el de ordenadas la dosis.",
      b: "Permite evaluar de forma cualitativa la distribución espacial de la dosis.",
      c: "Cada punto de la curva representa el volumen de una estructura que recibe una dosis igual o superior a un valor determinado.",
      d: "Todas las respuestas anteriores son correctas."
    },
    correct: "c"
  },
  {
    id: 12,
    question: "La braquiterapia intersticial consiste en:",
    options: {
      a: "La colocación de las fuentes radiactivas en el interior de una cavidad anatómica.",
      b: "La colocación de las fuentes radiactivas directamente en el interior del tejido tumoral.",
      c: "La aplicación de moldes radiactivos sobre la superficie cutánea.",
      d: "El uso de fuentes radiactivas no encapsuladas por vía sistémica."
    },
    correct: "b"
  },
  {
    id: 13,
    question: "En referencia al control de calidad diario del acelerador lineal, la tolerancia para la constancia de la dosis administrada suele ser de:",
    options: {
      a: "± 1%.",
      b: "± 2% o ± 3%.",
      c: "± 5%.",
      d: "± 10%."
    },
    correct: "b"
  },
  {
    id: 14,
    question: "La xerostomía severa como efecto secundario agudo en pacientes tratados de tumores de cabeza y cuello está provocada principalmente por la irradiación de:",
    options: {
      a: "Las glándulas parótidas.",
      b: "La mucosa oral mucosa de la lengua.",
      c: "Los ganglios linfáticos submandibulares.",
      d: "El tiroides."
    },
    correct: "a"
  },
  {
    id: 15,
    question: "En protección radiológica operacional, el límite de dosis efectiva anual para los miembros del público es de:",
    options: {
      a: "1 mSv.",
      b: "5 mSv.",
      c: "20 mSv.",
      d: "50 mSv."
    },
    correct: "a"
  },
  {
    id: 16,
    question: "El volumen blanco clínico (CTV) engloba:",
    options: {
      a: "El volumen tumoral macroscópico observable (GTV).",
      b: "El GTV más un margen para la enfermedad microscópica subclínica.",
      c: "El CTV más un margen por incertidumbres en el posicionamiento diario.",
      d: "El volumen de tejido sano que recibe una dosis significativa."
    },
    correct: "b"
  },
  {
    id: 17,
    question: "La interacción de los fotones con la materia mediante el \"Efecto Fotoeléctrico\" se caracteriza por:",
    options: {
      a: "Ser el efecto predominante a energías muy elevadas (Megavoltaje).",
      b: "La absorción completa del fotón incidente por un electrón ligado de un átomo.",
      c: "La dispersión del fotón con pérdida de energía.",
      d: "La producción de un par electrón-positrón."
    },
    correct: "b"
  },
  {
    id: 18,
    question: "Para la inmovilización de pacientes en tratamientos de radioterapia pélvica, el dispositivo \"Belly Board\" se utiliza con el objetivo principal de:",
    options: {
      a: "Desplazar las asas intestinales fuera del campo de irradiación por gravedad.",
      b: "Inmovilizar la articulación coxo-femoral de forma rígida.",
      c: "Aumentar la reproducibilidad del posicionamiento en decúbito supino.",
      d: "Evitar los movimientos respiratorios diafragmáticos."
    },
    correct: "a"
  },
  {
    id: 19,
    question: "En referencia a las funciones del Técnico Especialista en Radioterapia, ante una alarma del sistema durante la sesión de tratamiento, su primera actuación debe ser:",
    options: {
      a: "Reiniciar el sistema informático desde la consola exterior.",
      b: "Parar la irradiación inmediatamente si el sistema no lo ha hecho de forma automática.",
      c: "Entrar al búnker para comprobar el estado físico del paciente.",
      d: "Modificar los parámetros del colimador para continuar el disparo."
    },
    correct: "b"
  },
  {
    id: 20,
    question: "La unidad de medida de la actividad de un radionucleido en el Sistema Internacional es el:",
    options: {
      a: "Curie (Ci).",
      b: "Becquerel (Bq).",
      c: "Gray (Gy).",
      d: "Sievert (Sv)."
    },
    correct: "b"
  },
  {
    id: 21,
    question: "En la técnica de Arcoterapia Volumétrica Modulada (VMAT):",
    options: {
      a: "El gantry permanece fijo en varias posiciones angulares estáticas.",
      b: "La tasa de dosis, la velocidad de giro del gantry y el movimiento de las láminas varían de forma dinámica.",
      c: "Se utilizan campos fijos conformados con bloques de cerrobend.",
      d: "No es necesario realizar sistemas de guiado por imagen (IGRT)."
    },
    correct: "b"
  },
  {
    id: 22,
    question: "En la escala de unidades Hounsfield (HU) utilizada en tomografía computarizada, el valor asignado al agua líquida pura es de:",
    options: {
      a: "-1000 HU.",
      b: "0 HU.",
      c: "+1000 HU.",
      d: "+100 HU."
    },
    correct: "b"
  },
  {
    id: 23,
    question: "El parámetro físico \"Transferencia Lineal de Energía\" (LET) se define como:",
    options: {
      a: "La energía media transferida por una partícula cargada al medio por unidad de longitud recorrida.",
      b: "La velocidad de pérdida de energía de los fotones en el aire standard.",
      c: "La cantidad de ionización producida por una partícula neutra.",
      d: "El coeficiente de absorción másico del plomo refinado."
    },
    correct: "a"
  },
  {
    id: 24,
    question: "Para la simulación y tratamiento de tumores localizados en la región del tórax, la inmovilización de los brazos hacia arriba tiene como objetivo:",
    options: {
      a: "Mejorar la comodidad general del paciente en la camilla.",
      b: "Evitar que los brazos queden incluidos en la trayectoria de los haces de radiación laterales u oblicuos.",
      c: "Disminuir los movimientos de la pared costal anterior.",
      d: "Facilitar la colocación de los tatuajes de referencia pélvicos."
    },
    correct: "b"
  },
  {
    id: 25,
    question: "La disminución severa del número de plaquetas en sangre periférica como consecuencia de la toxicidad hematológica se denomina:",
    options: {
      a: "Leucopenia.",
      b: "Anemia.",
      c: "Trombocitopenia.",
      d: "Agranulocitosis."
    },
    correct: "c"
  },
  {
    id: 26,
    question: "En un radionucleido inestable, la constante de desintegración radiactiva (λ) representa:",
    options: {
      a: "El tiempo necesario para que la actividad se reduzca a la mitad.",
      b: "La probabilidad de desintegración de un núcleo por unidad de tiempo.",
      c: "El número total de átomos desintegrados por segundo.",
      d: "La vida media biológica del isótopo en tejido blando."
    },
    correct: "b"
  },
  {
    id: 27,
    question: "En referencia al control de calidad mensual de los lásers mecánicos de la sala de tratamiento, la tolerancia máxima permitida de desviación es de:",
    options: {
      a: "± 1 mm.",
      b: "± 2 mm.",
      c: "± 5 mm.",
      d: "± 10 mm."
    },
    correct: "b"
  },
  {
    id: 28,
    question: "Un órgano de riesgo con organización tisular \"en serie\" (como la médula espinal) se caracteriza porque:",
    options: {
      a: "Su función depende de la integridad de la totalidad de sus subunidades (una dosis máxima puntual elevada puede invalidar el órgano completo).",
      b: "Soporta dosis muy elevadas siempre que no se irradie más del 50% de su volumen global.",
      c: "Carece de radiosensibilidad determinista a dosis convencionales.",
      d: "Su tasa de reparación celular es infinitamente superior a la del tumor primario."
    },
    correct: "a"
  },
  {
    id: 29,
    question: "La técnica dosimétrica \"In Vivo\" en radioterapia externa se utiliza para:",
    options: {
      a: "Calcular informáticamente las curvas de isodosis en el TPS.",
      b: "Medir de forma directa la dosis recibida por el paciente en la superficie cutánea durante la sesión.",
      c: "Calibrar de forma absoluta la tasa de dosis diaria de la máquina en condiciones estándar.",
      d: "Evaluar la respuesta biológica celular en muestras de sangre periférica."
    },
    correct: "b"
  },
  {
    id: 30,
    question: "En la señalización de zonas, una \"Zona Controlada\" con riesgo de irradiación externa alta se identifica mediante un trébol de color:",
    options: {
      a: "Verde.",
      b: "Amarillo.",
      c: "Naranja.",
      d: "Rojo."
    },
    correct: "b"
  },
  {
    id: 31,
    question: "En referencia a la física dosimétrica, el medio material de referencia universal utilizado en los fantomas para la calibración absoluta de los haces es:",
    options: {
      a: "Agua líquida.",
      b: "Plomo denso.",
      c: "Aire seco.",
      d: "Poliestireno expandido."
    },
    correct: "a"
  },
  {
    id: 32,
    question: "La técnica de Radioterapia Guiada por Imagen (IGRT) mediante sistemas ópticos superficiales (SGRT) destaca por:",
    options: {
      a: "Adquirir imágenes radiográficas continuas de alta energía durante la sesión.",
      b: "Monitorizar en tiempo real el contorno tridimensional de la piel del paciente sin añadir dosis de radiación ionizante.",
      c: "Calcular la dosis real absorbida en los órganos internos mediante sensores mecánicos.",
      d: "Sustituir de forma definitiva el uso de los lásers de posicionamiento de la sala."
    },
    correct: "b"
  },
  {
    id: 33,
    question: "El parámetro \"α/β\" (alfa/beta) derivado del modelo lineal-cuadrático nos da información sobre:",
    options: {
      a: "El coeficiente de atenuación lineal másico del tejido frente a electrones.",
      b: "La sensibilidad de un tejido frente a las variaciones en el fraccionamiento de la dosis.",
      c: "El porcentaje de células madre tumorales hipóxicas.",
      d: "El espesor de semirreducción geométrica de las barreras secundarias."
    },
    correct: "b"
  },
  {
    id: 34,
    question: "En braquiterapia de alta tasa de dosis (HDR), el radionucleido utilizado de forma más común es el:",
    options: {
      a: "Yodo-125.",
      b: "Iridio-192.",
      c: "Cesio-137.",
      d: "Cobalto-60."
    },
    correct: "b"
  },
  {
    id: 35,
    question: "La inflamación aguda de la mucosa oral con ulceraciones dolorosas secundaria al tratamiento radioterápico se denomina:",
    options: {
      a: "Mucositis.",
      b: "Esofagitis.",
      c: "Xerostomía reactiva.",
      d: "Candidiasis profunda."
    },
    correct: "a"
  },
  {
    id: 36,
    question: "En el diseño de un búnker de radioterapia externa, las barreras o blindajes \"primarios\" están destinados a atenuar:",
    options: {
      a: "Exclusivamente la radiación de fuga procedente del cabezal.",
      b: "El haz útil o directo de radiación emitido por la máquina.",
      c: "La radiación dispersa por el paciente y las paredes.",
      d: "Los neutrones secundarios generados en los colimadores."
    },
    correct: "b"
  },
  {
    id: 37,
    question: "El volumen geométrico delimitado en el TPS que representa la envolvente del CTV modificada por los movimientos internos de los órganos se denomina:",
    options: {
      a: "GTV.",
      b: "ITV (Internal Target Volume).",
      c: "PTV.",
      d: "PRV."
    },
    correct: "b"
  },
  {
    id: 38,
    question: "En la interacción de la radiación ionizante con las estructuras celulares, la acción \"indirecta\" se produce por:",
    options: {
      a: "La ionización directa de los enlaces químicos de la doble hélice del ADN.",
      b: "La interacción de la radiación con las moléculas de agua (radiólisis), generando radicales libres que dañan el ADN.",
      c: "La activación térmica de las proteínas del citoesqueleto citoplasmático.",
      d: "El bloqueo de los receptores de membrana por iones metálicos dispersos."
    },
    correct: "b"
  },
  {
    id: 39,
    question: "Para la inmovilización precisa de la región pélvica de un paciente en decúbito supino, el accesorio más extendido es:",
    options: {
      a: "La máscara termoplástica craneal de 3 puntos.",
      b: "El colchón de vacío o moldes de poliuretano personalizados para extremidades inferiores y pelvis.",
      c: "Soportes axilares de espuma blanda sueltos.",
      d: "Cinchas textiles elásticas de tracción manual."
    },
    correct: "b"
  },
  {
    id: 40,
    question: "En referencia al control de calidad diario de los sistemas acústicos y de video del búnker, su correcto funcionamiento es un requisito:",
    options: {
      a: "Opcional, pudiendo realizarse la sesión si el paciente permanece tranquilo.",
      b: "Imprescindible por motivos de seguridad, estando prohibido el tratamiento ante fallos en estos sistemas.",
      c: "Necesario únicamente en las primeras fracciones de la planificación.",
      d: "Destinado exclusivamente al registro administrativo de los tiempos de paso."
    },
    correct: "b"
  },
  {
    id: 41,
    question: "La magnitud dosimétrica \"Kerma\" se define como:",
    options: {
      a: "La energía media transferida por unidad de masa por partículas sin carga a partículas cargadas.",
      b: "La energía media absorbida por unidad de masa en un volumen de agua.",
      c: "La carga eléctrica total generada en un volumen de aire estándar.",
      d: "El coeficiente de absorción de energía de colisión másico."
    },
    correct: "a"
  },
  {
    id: 42,
    question: "En los sistemas de planificación de tratamientos (TPS), el cálculo de dosis basado en el \"Método de Monte Carlo\" destaca por:",
    options: {
      a: "Ser un algoritmo empírico rápido con correcciones geométricas simples.",
      b: "Ser un método estadístico que simula estocásticamente la trayectoria individual de miles de partículas para conseguir alta precisión.",
      c: "No tener en cuenta las heterogeneidades de densidad de los tejidos del paciente.",
      d: "Utilizar únicamente modelos analógicos bidimensionales basados en curvas de porcentaje de dosis en profundidad."
    },
    correct: "b"
  },
  {
    id: 43,
    question: "La complicación tardía de la radioterapia rectal o ginecológica caracterizada por la aparición de una comunicación anómala entre el recto y la vagina se denomina:",
    options: {
      a: "Proctitis actínica crónica.",
      b: "Fístula rectovaginal.",
      c: "Estenosis vaginal fibrosa.",
      d: "Úlcera mucosa obstructiva."
    },
    correct: "b"
  },
  {
    id: 44,
    question: "En referencia a las licencias del personal que opera instalaciones radiactivas en medicina, estas son otorgadas en España por:",
    options: {
      a: "El Ministerio de Sanidad y Consumo.",
      b: "El Consejo de Seguridad Nuclear (CSN).",
      c: "La Agencia Española de Medicamentos y Productos Sanitarios.",
      d: "La dirección gerencia del hospital correspondiente."
    },
    correct: "b"
  },
  {
    id: 45,
    question: "El accesorio equivalente a tejido que se coloca sobre la piel del paciente para eliminar el efecto de advenimiento de dosis (build-up) en fotones se denomina:",
    options: {
      a: "Filtro de cuña dinámico.",
      b: "Bolus.",
      c: "Bloque de colimación multiláminas.",
      d: "Plano de inclinación pélvica."
    },
    correct: "b"
  },
  {
    id: 46,
    question: "En la técnica de radioterapia estereotáctica extracraneal (SBRT) pulmonar, es frecuente asociar sistemas de:",
    options: {
      a: "Fijación rígida con marco invasivo atornillado.",
      b: "Control del movimiento respiratorio (gating/tracking o compresión abdominal) para reducir los márgenes del PTV.",
      c: "Inmovilización exclusiva con almohadas estándar de espuma.",
      d: "Sujeción manual directa por parte del personal de la sala."
    },
    correct: "b"
  },
  {
    id: 47,
    question: "La disminución del número total de leucocitos por debajo de los valores de referencia se conoce como:",
    options: {
      a: "Anemia.",
      b: "Leucopenia.",
      c: "Trombocitopenia.",
      d: "Eritrocitosis."
    },
    correct: "b"
  },
  {
    id: 48,
    question: "El componente de un acelerador lineal encargado de homogeneizar la intensidad del haz de fotones (que presenta un perfil apuntado en el eje central) se llama:",
    options: {
      a: "Lámina de dispersión (Scattering foil).",
      b: "Filtro aplanador (Flattening filter).",
      c: "Cámara de ionización de transmisión.",
      d: "Colimador multiláminas dinámico."
    },
    correct: "b"
  },
  {
    id: 49,
    question: "En el sistema internacional de estadificación de tumores malignos (TNM), la letra \"M\" hace referencia a:",
    options: {
      a: "El tamaño y extensión anatómica del tumor primario original.",
      b: "La afectación de las cadenas ganglionares linfáticas regionales.",
      c: "La presencia o ausencia de metástasis a distancia.",
      d: "El grado de diferenciación celular microscópico."
    },
    correct: "c"
  },
  {
    id: 50,
    question: "Al realizar el posicionamiento del paciente, si el Técnico Especialista observa una discrepancia significativa entre los tatuajes de la piel y los lásers de la sala respecto a la sesión anterior, debe:",
    options: {
      a: "Irradiar al paciente en la posición intermedia estimada por experiencia.",
      b: "No administrar la dosis, revisar el plan de tratamiento en el sistema de verificación y, si persiste la duda, consultar con el radiofísico u oncólogo.",
      c: "Modificar de forma manual las marcas de la piel pintando nuevos puntos.",
      d: "Aumentar de forma arbitraria el tamaño del campo colimado en la consola exterior."
    },
    correct: "b"
  },
  {
    id: 51,
    question: "En referencia a las radiaciones electromagnéticas ionizantes, los Rayos Gamma (γ) se originan físicamente en:",
    options: {
      a: "Transiciones electrónicas de las capas atómicas periféricas.",
      b: "Procesos de desexcitación de núcleos atómicos inestables.",
      c: "Frenado de electrones rápidos en un blanco de wolframio.",
      d: "La aniquilación de positrones térmicos libres."
    },
    correct: "b"
  },
  {
    id: 52,
    question: "La magnitud dosimétrica \"Dosis Absorbida\" se define matemáticamente como:",
    options: {
      a: "El cociente entre la energía media impartida por la radiación ionizante a la materia y la masa de dicha materia (D = dE/dm).",
      b: "La suma de las energías cinéticas iniciales de las partículas cargadas liberadas en el aire.",
      c: "El producto de la dosis equivalente por el factor de ponderación del tejido blando.",
      d: "La carga eléctrica generada por unidad de volumen gaseoso estándar."
    },
    correct: "a"
  },
  {
    id: 53,
    question: "Los sistemas informáticos de \"Registro y Verificación\" (R&V) en los servicios de radioterapia tienen el papel primordial de:",
    options: {
      a: "Calcular de forma automática las curvas de isodosis del plan primario.",
      b: "Comparar en tiempo real los parámetros físicos configurados en la máquina con los aprobados en el planificador, impidiendo el disparo ante discrepancias.",
      c: "Sustituir la obtención de imágenes portales de control óseo diario.",
      d: "Almacenar de forma exclusiva las citas administrativas del personal."
    },
    correct: "b"
  },
  {
    id: 54,
    question: "En el cáncer de nasofaringe (cavum), las cadenas ganglionares cervicales bilaterales suelen incluirse en el volumen de irradiación debido a:",
    options: {
      a: "Que los tumores de cavum nunca producen metástasis ganglionares distales.",
      b: "Su alta propensión y elevado riesgo de diseminación linfática microscópica precoz.",
      c: "Evitar la toxicidad cutánea localizada en la región submandibular.",
      d: "Que comparten el mismo origen vascular que la arteria oftálmica principal."
    },
    correct: "b"
  },
  {
    id: 55,
    question: "En la señalización de zonas, un trébol de color rojo sobre fondo blanco identifica una:",
    options: {
      a: "Zona de Libre Acceso público.",
      b: "Zona de Acceso Prohibido.",
      c: "Zona de Permanencia Limitada.",
      d: "Zona Controlada estándar."
    },
    correct: "b"
  },
  {
    id: 56,
    question: "La reducción de la apertura bucal inducida por la fibrosis de los músculos masticadores secundaria a radioterapia en cabeza y cuello se conoce como:",
    options: {
      a: "Trismus.",
      b: "Xerostomía crónica.",
      c: "Mucositis grado IV.",
      d: "Disfagia mecánica alta."
    },
    correct: "a"
  },
  {
    id: 57,
    question: "En referencia a la física cuántica, el fenómeno de \"Aniquilación\" de un positrón da como resultado la emisión de:",
    options: {
      a: "Un único fotón de megavoltaje con energía cinética variable.",
      b: "Dos fotones gamma de 0,511 MeV emitidos en direcciones opuestas (180 grados).",
      c: "Una partícula alfa de corto alcance en tejido blando.",
      d: "Un electrón libre acelerado en la guía de ondas."
    },
    correct: "b"
  },
  {
    id: 58,
    question: "El volumen blanco de planificación (PTV) se genera en el TPS añadiendo al CTV un margen que contempla:",
    options: {
      a: "Únicamente la extensión microscópica de la enfermedad subclínica.",
      b: "Las incertidumbres mecánicas de los equipos y las variaciones en el posicionamiento diario del paciente.",
      c: "El volumen total ocupado por los órganos de riesgo periféricos.",
      d: "La dosis de tolerancia de los tejidos sanos circundantes."
    },
    correct: "b"
  },
  {
    id: 59,
    question: "En la técnica de braquiterapia intracavitaria ginecológica empleada en el cáncer de cérvix, los aplicadores que se colocan en los fondos de saco vaginales se denominan:",
    options: {
      a: "Cilindros endovaginales puros.",
      b: "Colpostatos (o ovoides).",
      c: "Agujas intersticiales rígidas.",
      d: "Moldes superficiales de silicona blanda."
    },
    correct: "b"
  },
  {
    id: 60,
    question: "Al realizar el control de calidad diario del acelerador lineal, la coincidencia del campo luminoso con el campo de radiación debe verificarse admitiendo una tolerancia máxima de:",
    options: {
      a: "± 1 mm.",
      b: "± 2 mm.",
      c: "± 5 mm.",
      d: "± 10 mm."
    },
    correct: "b"
  },
  {
    id: 61,
    question: "La magnitud \"Dosis Efectiva\" (E) se utiliza en protección radiológica con el objetivo principal de:",
    options: {
      a: "Medir la energía exacta absorbida en un gramo de tejido tumoral primario.",
      b: "Evaluar el detrimento o riesgo biológico global de sufrir efectos estocásticos a largo plazo, teniendo en cuenta la radiosensibilidad de los órganos irradiados.",
      c: "Calibrar de forma absoluta la respuesta de los dosímetros personales de pozo.",
      d: "Cuantificar la dosis umbral de aparición de los efectos deterministas agudos."
    },
    correct: "b"
  },
  {
    id: 62,
    question: "En referencia a la física atómica, los átomos que poseen el mismo número de protones (Z) pero diferente número de neutrones se denominan:",
    options: {
      a: "Isóbaros.",
      b: "Isótopos.",
      c: "Isótonos.",
      d: "Isómeros nucleares."
    },
    correct: "b"
  },
  {
    id: 63,
    question: "Para la inmovilización de la cabeza en estudios de simulación por TC en pacientes con tumores cerebrales, el accesorio imprescindible es:",
    options: {
      a: "El colchón de vacío pélvico estándar.",
      b: "La máscara termoplástica fijada de forma rígida al soporte o base.",
      c: "Almohadas cilíndricas de espuma blanda sin anclaje mecánico.",
      d: "Cinchas elásticas de sujeción manual cruzadas."
    },
    correct: "b"
  },
  {
    id: 64,
    question: "Un punto definido en un histograma dosis-volumen (DVH) acumulativo como V50Gy = 10% para el recto significa que:",
    options: {
      a: "El 50% del volumen del recto recibe una dosis exacta de 10 Gy.",
      b: "El 10% del volumen del recto recibe una dosis igual o superior a 50 Gy.",
      c: "La dosis máxima absoluta permitida en todo el contorno rectal es de 10 Gy.",
      d: "El planificador informático ha rechazado el 10% de la dosis prescrita."
    },
    correct: "b"
  },
  {
    id: 65,
    question: "La complicación aguda de la radioterapia torácica caracterizada clínicamente por tos seca, disnea de esfuerzo y fiebre moderada se denomina:",
    options: {
      a: "Fibrosis pulmonar crónica.",
      b: "Neumonitis actínica.",
      c: "Esofagitis descamativa.",
      d: "Pleuritis bacteriana secundaria."
    },
    correct: "b"
  },
  {
    id: 66,
    question: "En protección radiológica, el control dosimétrico de los trabajadores expuestos mediante dosímetros personales de lectura diferida (TLD) se realiza de forma estándar con una periodicidad:",
    options: {
      a: "Diaria.",
      b: "Semanal.",
      c: "Mensual.",
      d: "Anual."
    },
    correct: "c"
  },
  {
    id: 67,
    question: "El componente de un acelerador lineal encargado de generar microondas de alta potencia para inyectarlas en la guía de ondas se denomina:",
    options: {
      a: "Cañón de electrones (Electron gun).",
      b: "Klystron (o Magnetrón).",
      c: "Blanco de wolframio (Target).",
      d: "Cámara de ionización doble."
    },
    correct: "b"
  },
  {
    id: 68,
    question: "El volumen tumoral macroscópico (GTV) se define como:",
    options: {
      a: "La extensión de la enfermedad microscópica subclínica inapreciable.",
      b: "La extensión y localización demostrable del crecimiento tumoral maligno (visible en la exploración clínica o pruebas de imagen).",
      c: "El volumen geométrico que engloba a los órganos de riesgo contorneados.",
      d: "La envolvente de seguridad informática calculada por el TPS inverso."
    },
    correct: "b"
  },
  {
    id: 69,
    question: "La inflamación de la mucosa rectal que produce dolor, tenesmo y deposiciones mucosanguinolentas durante la irradiación pélvica se conoce como:",
    options: {
      a: "Cistitis rádica.",
      b: "Proctitis actínica.",
      c: "Enteritis alta.",
      d: "Mucositis vaginal reactiva."
    },
    correct: "b"
  },
  {
    id: 70,
    question: "En referencia al control de calidad de la camilla del acelerador lineal, se debe verificar de forma periódica:",
    options: {
      a: "Exclusivamente el color del recubrimiento exterior polimérico.",
      b: "La precisión mecánica y digital de los desplazamientos longitudinales, laterales y verticales, así como la ausencia de flexión bajo peso.",
      c: "La resistencia eléctrica de las ruedas de transporte auxiliar sueltas.",
      d: "El grosor exacto de los cojines estándar de espuma blanda."
    },
    correct: "b"
  },
  {
    id: 71,
    question: "La interacción de los fotones con la materia mediante el \"Efecto Compton\" consiste en:",
    options: {
      a: "La absorción completa de la energía del fotón incidente por el núcleo atómico.",
      b: "El choque del fotón con un electrón libre o débilmente ligado, cediéndole parte de su energía y dispersándose.",
      c: "La creación de un par electrón-positrón al pasar cerca del campo nuclear.",
      d: "La dispersión elástica sin variación de la longitud de onda del fotón."
    },
    correct: "b"
  },
  {
    id: 72,
    question: "El margen informático añadido alrededor de un órgano de riesgo para contemplar sus movimientos internos fisiológicos o mecánicos durante el tratamiento se denomina:",
    options: {
      a: "PTV (Planning Target Volume).",
      b: "PRV (Planning Organ at Risk Volume).",
      c: "CTV (Clinical Target Volume).",
      d: "ITV (Internal Target Volume)."
    },
    correct: "b"
  },
  {
    id: 73,
    question: "En braquiterapia de baja tasa de dosis (LDR) permanente en cáncer de próstata, el radionucleido emisor de baja energía más comúnmente implantado en forma de \"semillas\" es el:",
    options: {
      a: "Iridio-192.",
      b: "Yodo-125.",
      c: "Cobalto-60.",
      d: "Cesio-137."
    },
    correct: "b"
  },
  {
    id: 74,
    question: "La toxicidad crónica e irreversible de las glándulas salivares debida a radioterapia en cabeza y cuello provoca de forma permanente:",
    options: {
      a: "Sialorrea extrema.",
      b: "Xerostomía (sequedad de boca).",
      c: "Mucositis exudativa persistente.",
      d: "Disfagia neurógena pura."
    },
    correct: "b"
  },
  {
    id: 75,
    question: "En protección radiológica laboral, la dosis efectiva límite establecida legalmente para un trabajador expuesto en un periodo de un año es de:",
    options: {
      a: "1 mSv.",
      b: "20 mSv.",
      c: "150 mSv.",
      d: "500 mSv."
    },
    correct: "b"
  },
  {
    id: 76,
    question: "La técnica de Radioterapia de Intensidad Modulada (IMRT) estática mediante la modalidad \"Step and Shoot\" se caracteriza porque:",
    options: {
      a: "Las láminas del colimador se mueven de forma continua mientras el haz está encendido.",
      b: "Las láminas se posicionan en una configuración fija, la máquina realiza el disparo con el haz encendido y se apaga mientras las láminas cambian a la siguiente configuración.",
      c: "El gantry gira de forma circular continua variando la tasa de dosis sincrónicamente.",
      d: "Utiliza únicamente bloques metálicos manuales fabricados en cerrobend."
    },
    correct: "b"
  },
  {
    id: 77,
    question: "En referencia a la física dosimétrica, el fenómeno físico de \"Advenimiento de Dosis\" (Build-up) en haces de fotones de alta energía se traduce clínicamente en:",
    options: {
      a: "Que la dosis máxima absoluta se deposita directamente sobre la superficie cutánea.",
      b: "Un efecto de protección de la piel, situándose la dosis máxima a una profundidad determinada bajo la superficie cutánea.",
      c: "Una caída instantánea de la dosis en los primeros milímetros de recorrido.",
      d: "La ausencia total de penetración del haz en tejidos biológicos profundos."
    },
    correct: "b"
  },
  {
    id: 78,
    question: "Un órgano de riesgo con organización tisular \"en paralelo\" (como el parénquima pulmonar) se caracteriza porque:",
    options: {
      a: "Su función depende de la integridad de una única subunidad crítica puntual.",
      b: "La función global se mantiene aceptable siempre que el volumen del órgano que recibe una dosis superior a un umbral quede limitado por debajo de un porcentaje determinado.",
      c: "Carece por completo de tolerancia dosimétrica determinista a la radiación.",
      d: "Su contorneo automático exige aplicar un margen informático de seguridad de 3 cm."
    },
    correct: "b"
  },
  {
    id: 79,
    question: "Los sistemas electrónicos de imagen portal (EPID) integrados en los aceleradores lineales modernos permiten:",
    options: {
      a: "Medir la dosis absoluta absorbida en la médula espinal del paciente de forma directa.",
      b: "Obtener imágenes portales bidimensionales utilizando el haz de tratamiento para verificar la colocación geométrica ósea frente a las DRR.",
      c: "Sustituir de forma definitiva la necesidad de un sistema de registro y verificación.",
      d: "Modificar de forma automática el espectro de energía cinética de las microondas."
    },
    correct: "b"
  },
  {
    id: 80,
    question: "En la señalización de zonas en una instalación radiactiva, un trébol de color verde sobre fondo blanco identifica una:",
    options: {
      a: "Zona Vigilada.",
      b: "Zona Controlada.",
      c: "Zona de Permanencia Limitada.",
      d: "Zona de Acceso Prohibido."
    },
    correct: "b"
  },
  {
    id: 81,
    question: "En referencia a los efectos biológicos de la radiación, aquellos efectos en los que la gravedad de la respuesta depende de la dosis recibida y para los que existe una dosis umbral se denominan:",
    options: {
      a: "Efectos estocásticos.",
      b: "Efectos deterministas (o reacciones tisulares).",
      c: "Efectos hereditarios probabilísticos.",
      d: "Efectos secundarios de latencia infinita."
    },
    correct: "b"
  },
  {
    id: 82,
    question: "La técnica de Radiocirugía Estereotáctica (SRS) intracraneal destaca por:",
    options: {
      a: "Administrar dosis fraccionadas convencionales a lo largo de 35 sesiones sobre grandes volúmenes.",
      b: "Administrar dosis ablativas de radiación muy elevadas en una única sesión (o en un número muy reducido) sobre lesiones pequeñas bien delimitadas.",
      c: "Utilizar de forma exclusiva haces de electrones superficiales sin colimación.",
      d: "Prescindir por completo de sistemas rígidos de inmovilización o guiado por imagen."
    },
    correct: "b"
  },
  {
    id: 83,
    question: "En los sistemas de inmovilización de cabeza y cuello, los reposacabezas indexados tienen la función primordial de:",
    options: {
      a: "Permitir la libre rotación cervical del paciente durante el disparo.",
      b: "Asegurar la reproducibilidad de la posición vertical y angular de la cabeza fijándose de forma exacta a la mesa.",
      c: "Aumentar la atenuación del haz útil de fotones posterior de forma deliberada.",
      d: "Sustituir la necesidad de fabricar una máscara termoplástica personalizada."
    },
    correct: "b"
  },
  {
    id: 84,
    question: "En un histograma dosis-volumen (DVH) diferencial, el eje de ordenadas representa:",
    options: {
      a: "La dosis total recibida acumulada por la estructura contorneada.",
      b: "El volumen absoluto o relativo de la estructura que recibe una dosis dentro de un intervalo específico determinado.",
      c: "El porcentaje global de supervivencia celular derivado del modelo lineal-cuadrático.",
      d: "El tiempo total de disparo expresado en unidades de monitor de la camilla."
    },
    correct: "b"
  },
  {
    id: 85,
    question: "La toxicidad pulmonar tardía secundaria a tratamientos de radioterapia torácica caracterizada por la sustitución de tejido alveolar por tejido conectivo fibroso se denomina:",
    options: {
      a: "Neumonitis actínica.",
      b: "Fibrosis pulmonar.",
      c: "Esofagitis grado III.",
      d: "Atelectasia bacteriana refleja."
    },
    correct: "b"
  },
  {
    id: 86,
    question: "En referencia a los dosímetros personales de termoluminiscencia (TLD), los cristales utilizados retienen la energía de la radiación ionizante mediante:",
    options: {
      a: "Reacciones químicas irreversibles de emulsión de plata.",
      b: "El atrapamiento de electrones en niveles energéticos metaestables (trampas) dentro de la red cristalina.",
      c: "La generación instantánea de una corriente eléctrica proporcional a la tasa de dosis.",
      d: "La desintegración natural de átomos radiactivos estables de litio."
    },
    correct: "b"
  },
  {
    id: 87,
    question: "En un acelerador lineal, la pieza de material de alta densidad contra la cual impactan los electrones para generar fotones de frenado se llama:",
    options: {
      a: "Cañón de electrones.",
      b: "Blanco (Target).",
      c: "Klystron.",
      d: "Filtro aplanador."
    },
    correct: "b"
  },
  {
    id: 88,
    question: "El volumen tratado (TV) se define como:",
    options: {
      a: "El volumen geométrico que contiene de forma exclusiva el GTV y CTV.",
      b: "El volumen de tejido que recibe una dosis considerada significativa en relación con la dosis prescrita por el oncólogo.",
      c: "El volumen total del cuerpo del paciente incluido en el estudio de simulación por TC.",
      d: "La anchura de la penumbra geométrica medida en el isocentro mecánico."
    },
    correct: "b"
  },
  {
    id: 89,
    question: "La inflamación de la mucosa esofágica secundaria a la irradiación mediastínica que cursa clínicamente con dolor y dificultad al tragar se conoce como:",
    options: {
      a: "Mucositis oral reactiva.",
      b: "Esofagitis (provocando disfagia y odinofagia).",
      c: "Gastritis actínica.",
      d: "Trismus muscular esofágico."
    },
    correct: "b"
  },
  {
    id: 90,
    question: "En referencia al control de calidad diario de los sistemas de enclavamiento (interlocks) de las puertas del búnker, se debe verificar que:",
    options: {
      a: "La puerta se abra de forma automática al finalizar el disparo de la sesión.",
      b: "La apertura accidental de la puerta durante el transcurso del tratamiento corte de forma instantánea el haz de radiación.",
      c: "Los indicadores luminosos exteriores permanezcan apagados durante el disparo.",
      d: "Se precise de una contraseña informática para bloquear el acceso mecánico."
    },
    correct: "b"
  },
  {
    id: 91,
    question: "La interacción de los fotones con la materia mediante el fenómeno de \"Producción de Pares\" exige una energía mínima umbral del fotón incidente de:",
    options: {
      a: "0,511 MeV.",
      b: "1,022 MeV.",
      c: "10 MeV.",
      d: "No existe energía umbral para este efecto cuántico."
    },
    correct: "b"
  },
  {
    id: 92,
    question: "El volumen que engloba un órgano de riesgo al que se le añade un margen de seguridad informática en el TPS se denomina:",
    options: {
      a: "PTV.",
      b: "PRV.",
      c: "CTV.",
      d: "ITV."
    },
    correct: "b"
  },
  {
    id: 93,
    question: "En la técnica de braquiterapia de \"Carga Diferida Automática\" (Afterloading), el principal beneficio para el personal sanitario consiste en:",
    options: {
      a: "Aumentar de forma biológica la radiosensibilidad de las células clonogénicas tumorales.",
      b: "Eliminar la exposición radiológica del personal al transferir la fuente de forma remota desde el contenedor blindado al aplicador con el búnker cerrado.",
      c: "Reducir la necesidad de verificar la colocación anatómica mediante pruebas de imagen.",
      d: "Permitir el uso de fuentes radiactivas líquidas no encapsuladas por vía tópica."
    },
    correct: "b"
  },
  {
    id: 94,
    question: "La toxicidad cutánea aguda inducida por radioterapia externa que cursa con eritema, descamación seca o húmeda y prurito en la zona de tratamiento se denomina:",
    options: {
      a: "Fibrosis dérmica tardía.",
      b: "Radiodermitis.",
      c: "Mucositis cutánea reactiva.",
      d: "Alopecia determinista localizada."
    },
    correct: "b"
  },
  {
    id: 95,
    question: "En protección radiológica, la señalización exterior de una \"Zona de Permanencia Limitada\" consta de un trébol acompañado de un contorno de color amarillo sobre fondo blanco, indicando que:",
    options: {
      a: "Existe riesgo de recibir una dosis superior al límite anual en una sola jornada laboral regular.",
      b: "Existe riesgo de recibir una dosis superior a los límites fijados si se permanece en la zona de forma continuada a lo largo del año.",
      c: "El acceso está prohibido de forma permanente a todo el personal cualificado.",
      d: "La zona se encuentra libre de cualquier tipo de riesgo de irradiación externa."
    },
    correct: "b"
  },
  {
    id: 96,
    question: "En referencia a las unidades de colimación de un acelerador lineal, las mandíbulas móviles secundarias (Jaws) se encargan de:",
    options: {
      a: "Homogeneizar el perfil de intensidad del haz útil de fotones primarios.",
      b: "Limitar la apertura geométrica máxima y rectangular del campo de tratamiento reduciendo la dosis fuera del área.",
      c: "Dispersar el fino haz original de electrones acelerados en la guía de ondas.",
      d: "Medir las unidades de monitor administradas mediante canales dobles de ionización."
    },
    correct: "b"
  },
  {
    id: 97,
    question: "La estrategia terapéutica oncológica en la cual la radioterapia se administra de forma previa a la cirugía con el fin de citorreducir el tamaño tumoral se denomina:",
    options: {
      a: "Radioterapia adyuvante.",
      b: "Radioterapia neoadyuvante (o de inducción).",
      c: "Radioterapia radical curativa.",
      d: "Radioterapia paliativa de urgencia."
    },
    correct: "b"
  },
  {
    id: 98,
    question: "En la interacción de los electrones con la materia, cuando un electrón es frenado o desviado por el campo eléctrico del núcleo atómico emitiendo un fotón, este proceso se llama:",
    options: {
      a: "Colisión elástica molecular.",
      b: "Radiación de frenado (Bremsstrahlung).",
      c: "Efecto fotoeléctrico inverso.",
      d: "Producción de electrones Auger."
    },
    correct: "b"
  },
  {
    id: 99,
    question: "En referencia a la física de la atenuación de los Rayos X, el espesor de material necesario para reducir la intensidad de un haz a la mitad de su valor inicial se denomina:",
    options: {
      a: "Coeficiente de atenuación lineal másico.",
      b: "Capa de semirreducción (CSR) o espesor de semirreducción.",
      c: "Factor de transmisión de la bandeja porta-bloques.",
      d: "Anchura de la penumbra geométrica del colimador."
    },
    correct: "b"
  },
  {
    id: 100,
    question: "Al finalizar el posicionamiento del paciente y antes de realizar el disparo desde la consola exterior, la última comprobación de seguridad obligatoria en pantalla exige al Técnico Especialista confirmar:",
    options: {
      a: "La presión barométrica absoluta de la sala de control exterior.",
      b: "La identidad exacta del paciente, la correspondencia del plan cargado, la energía elegida y las unidades de monitor prescritas.",
      c: "El nivel de almacenamiento informático disponible en el disco duro central.",
      d: "La planificación horaria de los turnos de trabajo del resto de compañeros."
    },
    correct: "b"
  },
  {
    id: 101,
    question: "En referencia a la física de la radiación, las partículas alfa (α) se caracterizan por:",
    options: {
      a: "Tener un poder de penetración extremadamente alto en el tejido humano.",
      b: "Estar compuestas por dos protones y dos neutrones, poseyendo alta transferencia lineal de energía (LET).",
      c: "Carecer por completo de carga eléctrica neta.",
      d: "Ser emitidas exclusivamente por aceleradores lineales de megavoltaje."
    },
    correct: "b"
  },
  {
    id: 102,
    question: "La magnitud que relaciona el daño biológico producido por un tipo de radiación respecto a una radiación de referencia se denomina:",
    options: {
      a: "Dosis equivalente equivalente.",
      b: "Eficacia Biológica Relativa (RBE).",
      c: "Factor de potenciación del oxígeno (OER).",
      d: "Coeficiente de atenuación lineal."
    },
    correct: "b"
  },
  {
    id: 103,
    question: "En un tratamiento de radioterapia externa, una sobredosis accidental debido a un error sistemático de calibración se clasifica como:",
    options: {
      a: "Un suceso adverso o incidente/accidente radiológico.",
      b: "Un efecto estocástico inevitable del tratamiento.",
      c: "Un error aleatorio tolerable por el planificador.",
      d: "Una práctica justificada según el criterio ALARA."
    },
    correct: "a"
  },
  {
    id: 104,
    question: "En el cáncer de próstata localizado de riesgo intermedio o alto, la combinación de radioterapia externa con hormonoterapia tiene como finalidad:",
    options: {
      a: "Reducir la toxicidad rectal y vesical de forma aguda.",
      b: "Potenciar el control tumoral local y a distancia mediante la privación androgénica.",
      c: "Evitar la necesidad de realizar una simulación por tomografía computarizada.",
      d: "Aumentar los niveles de testosterona circulante."
    },
    correct: "b"
  },
  {
    id: 105,
    question: "¿Qué tipo de blindaje estructural se diseña específicamente para atenuar de forma directa el haz útil de radiación procedente del cabezal de la máquina?",
    options: {
      a: "Barrera secundaria lateral.",
      b: "Blindaje contra radiación de fuga exclusivamente.",
      c: "Barrera primaria.",
      d: "Puerta del laberinto externa."
    },
    correct: "c"
  },
  {
    id: 106,
    question: "En referencia al espaciado o grosor de corte en los estudios de TC para planificación en la región torácica, se recomienda por lo general que sea de:",
    options: {
      a: "2 a 3 mm para garantizar una adecuada reconstrucción tridimensional.",
      b: "10 a 15 mm para agilizar el proceso de cálculo informático.",
      c: "Un valor variable superior a 2 cm en cada corte.",
      d: "Espesor de semirreducción metálica pura."
    },
    correct: "a"
  },
  {
    id: 107,
    question: "La técnica de tratamiento de radioterapia externa en la que el gantry gira de forma continua alrededor del paciente mientras las láminas del colimador y la tasa de dosis varían dinámicamente se denomina:",
    options: {
      a: "IMRT estática (Step and Shoot).",
      b: "Radioterapia convencional con campos opuestos.",
      c: "Arcoterapia Volumétrica Modulada (VMAT).",
      d: "Braquiterapia remota de alta tasa."
    },
    correct: "c"
  },
  {
    id: 108,
    question: "En un servicio de radioterapia, las zonas donde los trabajadores expuestos pueden recibir dosis superiores a los límites de dosis fijados para el público se dividen en:",
    options: {
      a: "Zonas de libre tránsito y zonas restringidas.",
      b: "Zonas controladas y zonas vigiladas.",
      c: "Zonas de alta tasa y zonas de baja tasa exclusivamente.",
      d: "Zonas de exclusión nuclear permanente."
    },
    correct: "b"
  },
  {
    id: 109,
    question: "¿Cuál de los siguientes tejidos u órganos del cuerpo humano presenta una organización tisular de subunidades en paralelo (donde la afectación de una zona pequeña no destruye la función global del órgano)?",
    options: {
      a: "La médula espinal.",
      b: "El parénquima pulmonar.",
      c: "El tronco del encéfalo.",
      d: "El quiasma óptico."
    },
    correct: "b"
  },
  {
    id: 110,
    question: "En referencia a la física atómica, los isótopos son átomos que poseen:",
    options: {
      a: "El mismo número de neutrones pero diferente número de protones.",
      b: "La misma masa atómica pero diferente número atómico.",
      c: "El mismo número de protones (Z) pero diferente número de neutrones.",
      d: "Carga eléctrica neta positiva variable."
    },
    correct: "c"
  },
  {
    id: 111,
    question: "Para la simulación por TC de tumores localizados en la región de cabeza y cuello, el accesorio de inmovilización imprescindible es:",
    options: {
      a: "El colchón de vacío pélvico estándar.",
      b: "La máscara termoplástica cervical o craneofacial fijada rígidamente al soporte.",
      c: "Las cinchas de tracción de extremidades superiores.",
      d: "Un depresor lingual metálico suelto."
    },
    correct: "b"
  },
  {
    id: 112,
    question: "En un histograma dosis-volumen acumulativo (DVH), un punto definido como V50 Gy = 10% en el recto significa que:",
    options: {
      a: "El 10% del volumen del recto recibe una dosis igual o superior a 50 Gy.",
      b: "El 50% del volumen del recto recibe una dosis exacta de 10 Gy.",
      c: "La dosis máxima absoluta en todo el recto es de 10 Gy.",
      d: "El planificador ha rechazado el 10% de la dosis en esa estructura."
    },
    correct: "a"
  },
  {
    id: 113,
    question: "La técnica de braquiterapia en la cual las fuentes radiactivas se introducen de forma temporal o permanente mediante agujas o tubos directamente aplicados en la glándula prostática se conoce como:",
    options: {
      a: "Braquiterapia intracavitaria vesical.",
      b: "Braquiterapia de contacto endorrectal.",
      c: "Braquiterapia intersticial prostática.",
      d: "Teleterapia conformada selectiva."
    },
    correct: "c"
  },
  {
    id: 114,
    question: "En el control de calidad diario del acelerador lineal, la tolerancia máxima admitida para la desviación de los lásers de posicionamiento respecto al isocentro mecánico en tratamientos convencionales es de:",
    options: {
      a: "5 mm.",
      b: "2 mm.",
      c: "10 mm.",
      d: "1 cm."
    },
    correct: "b"
  },
  {
    id: 115,
    question: "La manifestación psicológica reactiva caracterizada por una profunda tristeza, pérdida de interés por las actividades y desesperanza ante el diagnóstico oncológico requiere:",
    options: {
      a: "Valoración y soporte especializado por parte del servicio de Psicooncología o Psiquiatría.",
      b: "Ignorar los síntomas para no interferir en el ritmo de las sesiones de tratamiento.",
      c: "La suspensión unilateral del tratamiento radioterápico por parte del técnico.",
      d: "Tratamiento con radioterapia holocraneal a dosis bajas."
    },
    correct: "a"
  },
  {
    id: 116,
    question: "En referencia a los efectos biológicos de la radiación, el fenómeno por el cual las células irradiadas transmiten señales moleculares que inducen daños en células adyacentes no irradiadas se denomina:",
    options: {
      a: "Muerte mitótica diferida.",
      b: "Repoblación celular acelerada.",
      c: "Efecto espectador (Bystander effect).",
      d: "Radiosensibilización por oxígeno."
    },
    correct: "c"
  },
  {
    id: 117,
    question: "En la fase de verificación previa al tratamiento mediante imágenes de kilovoltaje (kV) u ortogonales en el acelerador lineal, el error aleatorio se minimiza principalmente mediante:",
    options: {
      a: "La correcta inmovilización del paciente y la verificación rigurosa de la posición antes de cada fracción.",
      b: "La modificación informática permanente del CTV en la consola de control.",
      c: "El incremento de la tasa de dosis del haz primario de fotones.",
      d: "La colimación manual con bloques de cerrobend en el cabezal."
    },
    correct: "a"
  },
  {
    id: 118,
    question: "¿Qué radionucleido emisor gamma con un periodo de semidesintegración de aproximadamente 74 días se utiliza de forma estándar en braquiterapia de alta tasa de dosis (HDR)?",
    options: {
      a: "Cobalto-60.",
      b: "Iridio-192.",
      c: "Cesio-137.",
      d: "Yodo-125."
    },
    correct: "b"
  },
  {
    id: 119,
    question: "La reducción patológica de la apertura bucal debida a la fibrosis de los músculos masticadores inducida por radioterapia en la región maxilofacial se denomina:",
    options: {
      a: "Trismus.",
      b: "Xerostomía crónica.",
      c: "Mucositis grado III.",
      d: "Disfagia neurógena."
    },
    correct: "a"
  },
  {
    id: 120,
    question: "En el diseño físico de un búnker de radioterapia, el laberinto tiene la función primordial de:",
    options: {
      a: "Facilitar el almacenamiento de los sistemas de inmovilización rotatorios.",
      b: "Reducir la intensidad de la radiación dispersa y de fuga que llega a la puerta de acceso exterior mediante múltiples reflexiones en las paredes.",
      c: "Aumentar el blindaje directo contra el haz primario útil de fotones.",
      d: "Evitar la entrada de luz natural en la sala de tratamiento."
    },
    correct: "b"
  },
  {
    id: 121,
    question: "La magnitud dosimétrica Kerma se define como el cociente entre la suma de las energías cinéticas iniciales de todas las partículas cargadas liberadas por partículas sin carga y:",
    options: {
      a: "La masa del volumen de material considerado (K = dEtr / dm).",
      b: "La carga eléctrica generada en condiciones estándar de presión.",
      c: "El tiempo total de exposición al haz electromagnético.",
      d: "El coeficiente de atenuación lineal del fantoma de agua."
    },
    correct: "a"
  },
  {
    id: 122,
    question: "En la escala de unidades Hounsfield (HU) de tomografía computarizada, el tejido óseo compacto presenta típicamente valores numéricos de:",
    options: {
      a: "Aproximadamente 0 HU.",
      b: "-1000 HU.",
      c: "Mayores de +1000 HU.",
      d: "-500 HU."
    },
    correct: "c"
  },
  {
    id: 123,
    question: "El volumen que delimita el oncólogo radioterápico y que contiene la extensión de la enfermedad tumoral microscópica subclínica no visible pero sospechosa se denomina:",
    options: {
      a: "CTV (Volumen Blanco Clínico).",
      b: "GTV (Volumen Tumoral Macroscópico).",
      c: "PTV (Volumen Blanco de Planificación).",
      d: "OAR (Órgano de Riesgo Contorneado)."
    },
    correct: "a"
  },
  {
    id: 124,
    question: "En protección radiológica laboral, la dosis efectiva límite establecida legalmente para un trabajador expuesto en un periodo de un año oficial es de:",
    options: {
      a: "1 mSv.",
      b: "150 mSv.",
      c: "20 mSv.",
      d: "500 mSv."
    },
    correct: "c"
  },
  {
    id: 125,
    question: "¿Qué técnica de radioterapia externa administra dosis ablativas muy altas de radiación en una sola sesión o en un número muy reducido de fracciones sobre lesiones intracraneales pequeñas?",
    options: {
      a: "Radiocirugía Estereotáctica (SRS).",
      b: "Radioterapia Holocraneal Convencional.",
      c: "Arcoterapia de megavoltaje fraccionada estándar.",
      d: "Braquiterapia intracavitaria con hilos de Iridio."
    },
    correct: "a"
  },
  {
    id: 126,
    question: "En referencia a las funciones del Técnico Especialista en Radioterapia, ante la sospecha fundada de que un parámetro de la máquina no es correcto durante la sesión, debe:",
    options: {
      a: "Interrumpir la irradiación inmediatamente mediante el pulsador de parada y avisar al oncólogo y al radiofísico.",
      b: "Continuar con la sesión de forma normal y comprobar el error al final del día.",
      c: "Modificar los valores numéricos directamente en el software sin detener el haz.",
      d: "Ignorar la alerta si el paciente permanece inmóvil en la mesa."
    },
    correct: "a"
  },
  {
    id: 127,
    question: "El accesorio equivalente a tejido que se sitúa sobre la superficie cutánea del paciente con el fin de eliminar el efecto de advenimiento de dosis (build-up) y asegurar la dosis prescrita en la piel se llama:",
    options: {
      a: "Filtro de cuña mecánico.",
      b: "Bolus.",
      c: "Bloque de colimación multiláminas.",
      d: "Plano de inclinación pélvica."
    },
    correct: "b"
  },
  {
    id: 128,
    question: "La agranulocitosis o descenso crítico de los neutrófilos en sangre periférica incrementa de forma severa el riesgo de contraer:",
    options: {
      a: "Hemorragias espontáneas digestivas.",
      b: "Infecciones graves y compromiso sistémico (sepsis).",
      c: "Anemia aplásica normocítica.",
      d: "Fibrosis pulmonar obstructiva diferida."
    },
    correct: "b"
  },
  {
    id: 129,
    question: "En la señalización de zonas en una instalación radiactiva, una Zona Controlada con riesgo de irradiación externa alta se identifica mediante un trébol de color:",
    options: {
      a: "Verde sobre fondo blanco limpio.",
      b: "Amarillo.",
      c: "Gris azulado.",
      d: "Naranja brillante."
    },
    correct: "b"
  },
  {
    id: 130,
    question: "El componente del acelerador lineal encargado de generar microondas de alta potencia para acelerar los electrones en la guía de ondas se denomina:",
    options: {
      a: "Klystron (o Magnetrón).",
      b: "Cañón de electrones.",
      c: "Blanco de wolframio.",
      d: "Cámara de ionización doble."
    },
    correct: "a"
  },
  {
    id: 131,
    question: "En referencia a los sistemas informáticos de registro y verificación (R&V), su papel crítico en la seguridad del paciente radica en que:",
    options: {
      a: "Comparan en tiempo real los parámetros físicos de la máquina con los aprobados en el TPS, impidiendo el disparo si no coinciden dentro de las tolerancias.",
      b: "Permiten el diseño automático de las curvas de isodosis del plan primario.",
      c: "Sustituyen por completo la necesidad de obtener imágenes portales de control.",
      d: "Calculan la densidad electrónica a partir del histograma de Hounsfield."
    },
    correct: "a"
  },
  {
    id: 132,
    question: "La inflamación actínica aguda de la mucosa rectal que produce tenesmo, dolor y deposiciones mucosanguinolentas durante la irradiación pélvica se denomina:",
    options: {
      a: "Cistitis rádica.",
      b: "Proctitis actínica.",
      c: "Enteritis alta.",
      d: "Mucositis rectal refractaria."
    },
    correct: "b"
  },
  {
    id: 133,
    question: "Para la inmovilización precisa de las extremidades inferiores y la pelvis en tratamientos de radioterapia externa pélvica, se recurre con frecuencia al accesorio denominado:",
    options: {
      a: "Colchón de vacío personalizado (Vac-Lok).",
      b: "Máscara termoplástica craneal de 3 puntos.",
      c: "Soporte inclinado de tórax de fibra de carbono.",
      d: "Reposacabezas de poliuretano de tipo plano."
    },
    correct: "a"
  },
  {
    id: 134,
    question: "En la interacción de la radiación con las estructuras biológicas, la acción directa de la radiación se produce cuando:",
    options: {
      a: "La radiación interactúa con el agua celular generando radicales libres secundarios.",
      b: "La radiación ioniza directamente la molécula de ADN, provocando su rotura.",
      c: "Los electrones periféricos cambian de capa sin emitir energía cinética.",
      d: "El oxígeno molecular bloquea la reparación de los enlaces de hidrógeno."
    },
    correct: "b"
  },
  {
    id: 135,
    question: "En referencia a las unidades de medida en radioterapia, el Gray (Gy) es la unidad del Sistema Internacional para expresar la magnitud de:",
    options: {
      a: "Dosis absorbida.",
      b: "Dosis equivalente biológica.",
      c: "Actividad radiactiva neta.",
      d: "Exposición en aire estándar."
    },
    correct: "a"
  },
  {
    id: 136,
    question: "El volumen geométrico delimitado en el planificador que representa la envolvente del CTV modificada por los movimientos fisiológicos internos de los órganos se denomina:",
    options: {
      a: "GTV (Volumen Tumoral Clínico).",
      b: "PTV (Volumen de Planificación de Campos).",
      c: "ITV (Volumen Blanco Interno).",
      d: "PRV (Volumen de Riesgo Asociado)."
    },
    correct: "c"
  },
  {
    id: 137,
    question: "En la técnica de radioterapia de intensidad modulada (IMRT) dinámica o de ventana deslizante ('Sliding Window'), las láminas del colimador se caracterizan por:",
    options: {
      a: "Moverse de forma continua mientras el haz de radiación está encendido administrando el perfil de dosis.",
      b: "Permanecer completamente fijas en una única posición estática durante todo el disparo.",
      c: "Desplazarse únicamente cuando el gantry realiza una rotación circular completa.",
      d: "Estar fabricadas de aluminio de bajo número atómico para filtrar electrones."
    },
    correct: "a"
  },
  {
    id: 138,
    question: "En protección radiológica operacional, el control dosimétrico mensual de los trabajadores expuestos en zonas controladas se realiza de forma estándar mediante:",
    options: {
      a: "Dosímetros personales de termoluminiscencia (TLD) o de lectura diferida equivalentes.",
      b: "Cámaras de ionización tipo pozo de gran volumen ambientales.",
      c: "Contadores Geiger-Müller portátiles de control diario.",
      d: "Análisis químicos continuos de orina de 24 horas."
    },
    correct: "a"
  },
  {
    id: 139,
    question: "La reducción irreversible de la función exocrina de las glándulas parótidas debido a dosis acumuladas superiores a su tolerancia biológica provoca de forma permanente:",
    options: {
      a: "Sialorrea refleja extrema.",
      b: "Xerostomía (sequedad de boca).",
      c: "Mucositis exudativa ulcerosa.",
      d: "Disfagia mecánica alta aislada."
    },
    correct: "b"
  },
  {
    id: 140,
    question: "¿Qué tipo de braquiterapia se aplica colocando aplicadores cilíndricos o moldes directamente sobre la superficie cutánea o accesibles para tratar lesiones superficiales?",
    options: {
      a: "Braquiterapia superficial o de contacto.",
      b: "Braquiterapia intersticial profunda.",
      c: "Braquiterapia intracavitaria remota.",
      d: "Endovascular selectiva con microesferas."
    },
    correct: "a"
  },
  {
    id: 141,
    question: "En referencia a la física cuántica de las radiaciones, el fenómeno de aniquilación de positrones da como resultado la emission de:",
    options: {
      a: "Dos fotones gamma de 0,511 MeV emitidos en direcciones opuestas (180 grados).",
      b: "Un único fotón de frenado de alta energía cinética.",
      c: "Una partícula alfa de corto alcance en el agua.",
      d: "Un electrón libre acelerado de baja energía."
    },
    correct: "a"
  },
  {
    id: 142,
    question: "Al realizar la alineación del paciente en la camilla utilizando el sistema de posicionamiento por lásers de la sala, el técnico especialista debe tomar como referencia de cruce espacial:",
    options: {
      a: "Las marcas o tatuajes puntuales realizados en la piel del paciente durante la simulación virtual.",
      b: "El borde exterior de los colchones de vacío mecánicos.",
      c: "La lectura visual estimada del contorno tumoral macroscópico.",
      d: "El centro geométrico del cabezal del colimador primario."
    },
    correct: "a"
  },
  {
    id: 143,
    question: "El documento clínico específico en el que se detallan de forma clara e individualizada la prescripción de dosis, el número de fracciones, los campos y la autorización firmada por el médico especialista se denomina:",
    options: {
      a: "Hoja de tratamiento o prescripción de radioterapia.",
      b: "Informe de alta dosimétrica externa.",
      c: "Certificado de calibración del búnker.",
      d: "Consentimiento informado opcional del paciente."
    },
    correct: "a"
  },
  {
    id: 144,
    question: "La toxicidad pulmonar aguda inducida por radioterapia torácica que cursa clínicamente con tos seca, disnea y fiebre moderada se conoce como:",
    options: {
      a: "Neumonitis actínica.",
      b: "Fibrosis pulmonar crónica.",
      c: "Esofagitis descamativa.",
      d: "Pleuritis bacteriana secundaria."
    },
    correct: "a"
  },
  {
    id: 145,
    question: "En referencia a los sistemas de guiado por imagen en el acelerador lineal (IGRT), el sistema electrónico de imagen portal (EPID) utiliza el propio haz de tratamiento de megavoltaje para:",
    options: {
      a: "Obtener imágenes radiográficas en 2D que permitan verificar la correcta colocación ósea frente a las DRR de referencia.",
      b: "Modificar de forma automática el espectro energético de los fotones útiles.",
      c: "Medir la dosis absoluta absorbida en los órganos en paralelo.",
      d: "Sustituir el uso de los enclavamientos mecánicos de la puerta."
    },
    correct: "a"
  },
  {
    id: 146,
    question: "El margen añadido informáticamente alrededor de un órgano de riesgo para contemplar sus movimientos internos fisiológicos o mecánicos durante el tratamiento se denomina:",
    options: {
      a: "PRV (Planning Organ at Risk Volume).",
      b: "PTV (Planning Target Volume).",
      c: "CTV (Clinical Target Volume).",
      d: "ITV (Internal Target Volume)."
    },
    correct: "a"
  },
  {
    id: 147,
    question: "En el tratamiento paliativo rápido del síndrome de compresión de la vena cava superior secundario a una masa tumoral mediastínica, la radioterapia externa tiene como objetivo prioritario:",
    options: {
      a: "Disminuir rápidamente el tamaño tumoral para liberar la obstrucción vascular y aliviar los síntomas de forma urgente.",
      b: "Erradicar por completo todas las células madre tumorales a largo plazo.",
      c: "Sustituir el tratamiento corticoideo sistémico pautado.",
      d: "Modificar el perfil molecular de la neoplasia pulmonar."
    },
    correct: "a"
  },
  {
    id: 148,
    question: "En un acelerador lineal de electrones, las mordazas o mandíbulas móviles (jaws) del sistema de colimación secundaria están fabricadas de materiales de alta densidad con el fin de:",
    options: {
      a: "Limitar la apertura geométrica del campo reduciendo la dosis de radiación fuera del área prescrita.",
      b: "Acelerar los fotones secundarios mediante campos magnéticos de alta frecuencia.",
      c: "Modificar el coeficiente de atenuación lineal del agua del fantoma.",
      d: "Medir las unidades de monitor en tiempo real."
    },
    correct: "a"
  },
  {
    id: 149,
    question: "La técnica de radioterapia externa adaptativa (ART) se caracteriza principalmente por:",
    options: {
      a: "Modificar la planificación dosimétrica a lo largo del tratamiento basándose en los cambios anatómicos o de tamaño tumoral del paciente observados en las imágenes periódicas.",
      b: "Utilizar únicamente unidades de telecobaltoterapia clásica sin sistemas informáticos.",
      c: "Administrar la dosis total prescrita en una única sesión ablativa fija.",
      d: "Prescindir de sistemas mecánicos de inmovilización en la mesa."
    },
    correct: "a"
  },
  {
    id: 150,
    question: "Al finalizar la jornada laboral en un servicio de radioterapia, el técnico especialista debe asegurarse de que la consola de control del acelerador lineal quede:",
    options: {
      a: "Cerrada de forma segura, con el software bloqueado mediante contraseña o llave de seguridad retirada para evitar accesos no autorizados.",
      b: "En modo de disparo automático continuo para pruebas internas.",
      c: "Con los sistemas de enclavamiento de la puerta del búnker desactivados.",
      d: "Conectada a la red de calibración externa de emergencia indefinidamente."
    },
    correct: "a"
  },
  {
    id: 151,
    question: "En referencia a la física de la interacción de los electrones con la materia, cuando un electrón rápido pasa cerca del núcleo atómico y es frenado o desviado emitiendo un fotón, este proceso se denomina:",
    options: {
      a: "Radiación de frenado (Bremsstrahlung).",
      b: "Interacción fotoeléctrica directa.",
      c: "Dispersión Compton elástica.",
      d: "Producción de positrones térmicos."
    },
    correct: "a"
  },
  {
    id: 152,
    question: "La magnitud que evalúa la probabilidad de que la radiación ionizante produzca un efecto estocástico perjudicial en el organismo a largo plazo se conoce como:",
    options: {
      a: "Dosis absorbida total.",
      b: "Dosis efectiva (E).",
      c: "Kerma en el aire de colisión.",
      d: "Exposición radiológica neta."
    },
    correct: "b"
  },
  {
    id: 153,
    question: "En referencia a los sistemas informáticos de planificación (TPS), el cálculo inverso ('Inverse Planning') es la modalidad empleada de forma estándar para diseñar tratamientos de:",
    options: {
      a: "Radioterapia de Intensidad Modulada (IMRT) y Arcoterapia Volumétrica (VMAT).",
      b: "Radioterapia convencional 2D sin colimación multiláminas.",
      c: "Ortovoltaje superficial exclusivamente.",
      d: "Tratamientos paliativos en sesión única de campos paralelos opuestos."
    },
    correct: "a"
  },
  {
    id: 154,
    question: "La complicación tardía grave tras la irradiación del sistema nervioso central o de la región craneal que consiste en la muerte celular focal del tejido cerebral sano se denomina:",
    options: {
      a: "Radionecrosis cerebral.",
      b: "Meningitis actínica aséptica.",
      c: "Edema cerebral agudo reversible.",
      d: "Glioma inducido determinista."
    },
    correct: "a"
  },
  {
    id: 155,
    question: "Un isótopo radiactivo decae de forma natural reduciendo su actividad original a la octava parte (1/8) una vez transcurrido un tiempo equivalente a:",
    options: {
      a: "Dos vidas medias biológicas netas.",
      b: "El inverso de la constante radiactiva multiplicado por ocho.",
      c: "Tres periodos de semidesintegración (3 x T 1/2).",
      d: "Un año oficial de almacenamiento blindado."
    },
    correct: "c"
  },
  {
    id: 156,
    question: "En la técnica de Radioterapia Guiada por Imagen (IGRT) mediante ultrasonidos (ecografía), su gran ventaja clínica en tumores como el de próstata consiste en:",
    options: {
      a: "Localizar de forma rápida los tejidos blandos antes de la sesión sin añadir dosis de radiación ionizante.",
      b: "Calcular el histograma dosis-volumen diferencial en tiempo real.",
      c: "Sustituir la necesidad de inmovilizar al paciente con colchones de vacío.",
      d: "Modificar de manera directa la energía de los haces de fotones de megavoltaje."
    },
    correct: "a"
  },
  {
    id: 157,
    question: "Según el modelo lineal-cuadrático de supervivencia celular, la relación alfa/beta (α/β) de un tejido nos aporta información directa sobre:",
    options: {
      a: "La sensibilidad de ese tejido al fraccionamiento de la dosis (valores bajos indican tejidos de respuesta tardía y valores altos indican tumores o tejidos de respuesta aguda).",
      b: "El coeficiente de atenuación lineal másico frente a electrones acelerados.",
      c: "El porcentaje de oxígeno disuelto en el citoplasma nuclear.",
      d: "El espesor de semirreducción geométrica del blindaje del búnker."
    },
    correct: "a"
  },
  {
    id: 158,
    question: "Aquella modalidad de braquiterapia en la que las fuentes radiactivas se colocan de forma permanente o temporal en el interior de un conducto anatómico natural (como el esófago o los bronquios) se denomina:",
    options: {
      a: "Braquiterapia endoluminal.",
      b: "Braquiterapia intersticial superficial.",
      c: "Braquiterapia intracavitaria ginecológica.",
      d: "Braquiterapia de contacto cutáneo."
    },
    correct: "a"
  },
  {
    id: 159,
    question: "En la legislación sobre protección radiológica, el límite de dosis equivalente anual para la piel de los trabajadores expuestos es de:",
    options: {
      a: "20 mSv.",
      b: "150 mSv.",
      c: "500 mSv.",
      d: "50 mSv."
    },
    correct: "c"
  },
  {
    id: 160,
    question: "Durante el transcurso de una sesión de tratamiento, las cámaras de video de circuito cerrado instaladas en el búnker permiten al técnico especialista:",
    options: {
      a: "Monitorizar de forma visual y continua al paciente para detener la irradiación de forma inmediata si se desplaza o necesita asistencia.",
      b: "Grabar la sesión con fines de control de calidad informático del gantry.",
      c: "Sustituir el uso de los sistemas de registro y verificación centralizados.",
      d: "Calcular de forma óptica la dosis absorbida en la piel del paciente."
    },
    correct: "a"
  },
  {
    id: 161,
    question: "En referencia a las radiaciones ionizantes corpusculares de carga negativa, los haces de electrones acelerados utilizados en radioterapia externa destacan físicamente por:",
    options: {
      a: "Presentar una masa en reposo muy pequeña, carga elemental negativa, corto alcance y caída rápida de dosis en profundidad.",
      b: "Ser fotones electromagnéticos generados por la transición de capas nucleares.",
      c: "Presentar una transferencia lineal de energía (LET) infinitamente superior a la de los iones de carbono.",
      d: "Carecer por completo de efecto de advenimiento de dosis (build-up)."
    },
    correct: "a"
  },
  {
    id: 162,
    question: "En el cáncer de pulmón microcítico (de células pequeñas) que presenta respuesta completa tras la quimiorradioterapia torácica, se indica con frecuencia la radioterapia holocraneal con intención:",
    options: {
      a: "Profiláctica (Irradiación Craneal Profiláctica o PCI) para disminuir el alto riesgo de desarrollar metástasis cerebrales.",
      b: "Paliativa exclusiva por dolor óseo de la base del cráneo.",
      c: "Neoadyuvante sistémica prequirúrgica.",
      d: "Abstención terapéutica adaptativa diferida."
    },
    correct: "a"
  },
  {
    id: 163,
    question: "El proceso físico por el cual un fotón de alta energía choca contra un electrón libre o débilmente ligado, cediéndole parte de su energía y dispersándose con una dirección y longitud de onda diferentes, se conoce como:",
    options: {
      a: "Efecto Compton.",
      b: "Efecto fotoeléctrico.",
      c: "Producción de pares.",
      d: "Efecto Auger secundario."
    },
    correct: "a"
  },
  {
    id: 164,
    question: "Para asegurar la inmovilización rígida y reproducible del tórax y los brazos en tratamientos de radioterapia de cáncer de mama o pulmón, se utiliza el accesorio denominado:",
    options: {
      a: "Plano o soporte de mama/tórax (Breast Board / Wing Board) con apoyabrazos indexados.",
      b: "Máscara termoplástica craneofacial de 5 puntos de anclaje rígido.",
      c: "Carcasa de fijación pélvica de vacío en decúbito prono.",
      d: "Compresor abdominal Belly Board de fibra de vidrio."
    },
    correct: "a"
  },
  {
    id: 165,
    question: "¿Qué parámetro físico de control de calidad evalúa la máxima variación de la dosis dentro de la región central del haz útil de radiación (región aplanada) a una profundidad de referencia?",
    options: {
      a: "Homogeneidad o uniformidad del haz.",
      b: "Simetría lateral del perfil de isodosis.",
      c: "Penumbra geométrica del colimador primario.",
      d: "Factor de transmisión de la bandeja porta-bloques."
    },
    correct: "a"
  },
  {
    id: 166,
    question: "La inflamación aguda de la mucosa esofágica secundaria a la radioterapia mediastínica cursa clínicamente con dolor al tragar y dificultad para el paso de alimentos, síntomas conocidos como:",
    options: {
      a: "Odinofagia y disfagia.",
      b: "Xerostomía y trismus muscular.",
      c: "Tenesmo y proctalgia digestiva.",
      d: "Náuseas e hiperemesis tardía."
    },
    correct: "a"
  },
  {
    id: 167,
    question: "En la estadificación TNM de un tumor maligno, la letra 'N' hace referencia específica a:",
    options: {
      a: "La presencia, ausencia y extensión de las metástasis en los ganglios linfáticos regionales.",
      b: "El tamaño y extensión local del tumor primario original.",
      c: "La existencia de metástasis tumorales en órganos a distancia.",
      d: "El grado de diferenciación histológica nuclear celular."
    },
    correct: "a"
  },
  {
    id: 168,
    question: "En protección radiológica, la señalización exterior de una Zona de Acceso Prohibido consta de un trébol de color rojo sobre fondo blanco, lo que indica que:",
    options: {
      a: "Existe un riesgo de exposición o contaminación extremadamente alto, estando prohibido el acceso a todo el personal no autorizado.",
      b: "Es una zona segura de libre tránsito para el público general durante la irradiación.",
      c: "Es una zona de acceso exclusivo para la calibración diaria de dosímetros de bolsillo.",
      d: "El acelerador lineal se encuentra apagado y en mantenimiento preventivo."
    },
    correct: "a"
  },
  {
    id: 169,
    question: "¿Qué elemento del cabezal de un acelerador lineal se introduce en la trayectoria del haz cuando se selecciona la modalidad de tratamiento con electrones para dispersar el fino haz original y conseguir un campo terapéutico uniforme?",
    options: {
      a: "Lámina de dispersión (Scattering foil).",
      b: "Filtro aplanador de fotones (Flattening filter).",
      c: "Colimador multiláminas de wolframio dinámico.",
      d: "Bloque aplicador cilíndrico de cerrobend."
    },
    correct: "a"
  },
  {
    id: 170,
    question: "Al analizar un histograma dosis-volumen (DVH) acumulativo para una planificación de radioterapia de próstata, el objetivo principal respecto a la curva de la vejiga es asegurar que:",
    options: {
      a: "La curva caiga lo más rápido posible hacia la izquierda, indicando que la mayor parte del volumen del órgano recibe dosis bajas por debajo de su tolerancia.",
      b: "La curva mantenga un perfil horizontal alto indicando una dosis uniforme del 100%.",
      c: "Su valor máximo coincida exactamente con la dosis de normalización del PTV.",
      d: "El volumen total de la estructura quede fuera del cálculo informático."
    },
    correct: "a"
  },
  {
    id: 171,
    question: "En referencia al daño indirecto producido por la radiación ionizante en las células, este se debe principalmente a:",
    options: {
      a: "La interacción de la radiación con las moléculas de agua (radiólisis), generando radicales libres que difunden y dañan el ADN.",
      b: "La ionización directa de los enlaces fosfodiéster de la doble hélice del ADN.",
      c: "La activación térmica de las proteínas del citoesqueleto citoplasmático.",
      d: "La transmutación nuclear del wolframio del blanco de frenado."
    },
    correct: "a"
  },
  {
    id: 172,
    question: "La técnica de radioterapia guiada por imagen de cuatro dimensiones (4D-IGRT) mediante control respiratorio por ventanas ('Gating respiratorio') consiste en:",
    options: {
      a: "Permitir el disparo del haz de radiación únicamente durante una fase específica del ciclo respiratorio del paciente, minimizando el margen del PTV.",
      b: "Aumentar de forma continua la tasa de dosis de unidades de monitor a lo largo de la inspiración.",
      c: "Modificar de forma manual la colimación de las mandíbulas secundarias en cada respiración.",
      d: "Mantener al paciente en apnea forzada inducida mediante sedación profunda."
    },
    correct: "a"
  },
  {
    id: 173,
    question: "La unidad de exposición radiológica en el Sistema Internacional de unidades se expresa en culombios por kilogramo (C/kg), aunque la unidad clásica no oficial sigue siendo el:",
    options: {
      a: "Roentgen (R).",
      b: "Gray (Gy).",
      c: "Rad (rad).",
      d: "Curie (Ci)."
    },
    correct: "a"
  },
  {
    id: 174,
    question: "En referencia a la carga de fuentes en braquiterapia, los sistemas modernos de 'Carga Diferida Automática' (Afterloading) aportan como principal beneficio:",
    options: {
      a: "Eliminar por completo la exposición radiológica del personal sanitario al desplazar de forma remota la fuente desde el contenedor blindado al aplicador.",
      b: "Aumentar de forma biológica la radiosensibilidad de las células tumorales hipóxicas.",
      c: "Prescindir de la necesidad de realizar controles de calidad dosimétricos en el búnker.",
      d: "Reducir el tiempo total de tratamiento a una fracción de segundo."
    },
    correct: "a"
  },
  {
    id: 175,
    question: "En el tratamiento radioterápico de urgencia de la compresión medular tumoral secundaria a metástasis vertebrales, la finalidad prioritaria de la radioterapia es:",
    options: {
      a: "Descomprimir rápidamente la médula espinal para aliviar el dolor y preservar o recuperar la función neurológica (marcha y esfínteres).",
      b: "Lograr la remisión completa y erradicación biológica a largo plazo del tumor primario.",
      c: "Sustituir por completo la necesidad de un corsé ortopédico de inmovilización.",
      d: "Modificar de forma estocástica el perfil molecular del canal raquídeo."
    },
    correct: "a"
  },
  {
    id: 176,
    question: "Aquella radiación ionizante electromagnética que se produce en la corteza atómica como consecuencia de la reorganización electrónica tras una vacante en una capa interna se denomina:",
    options: {
      a: "Rayos X característicos.",
      b: "Rayos X de frenado (Bremsstrahlung).",
      c: "Radiación Gamma (γ).",
      d: "Aniquilación de positrones térmicos."
    },
    correct: "a"
  },
  {
    id: 177,
    question: "En el control de calidad de un acelerador lineal, la verificación de la constancia de la dosis administrada (calibración de la tasa de dosis) se realiza de forma diaria por radiofísicos y técnicos, admitiéndose una tolerancia de desviación de:",
    options: {
      a: "± 2% o ± 3% respecto al valor de referencia.",
      b: "± 10% en condiciones estándar de calibración.",
      c: "± 0,5 Gy por cada unidad de monitor disparada.",
      d: "Un valor absoluto superior a 5 Grays diarios."
    },
    correct: "a"
  },
  {
    id: 178,
    question: "¿Qué tipo de haces externos de radioterapia se caracterizan por depositar la dosis de forma uniforme en los primeros centímetros y presentar una caída abrupta a una profundidad determinada, haciéndolos idóneos para tumores superficiales?",
    options: {
      a: "Haces de electrones.",
      b: "Fotones de alta energía de 15 MV.",
      c: "Haces de protones en el pico de entrada.",
      d: "Fotones procedentes de una unidad de telecobaltoterapia."
    },
    correct: "a"
  },
  {
    id: 179,
    question: "La xerostomía crónica e irreversible secundaria a radioterapia de cabeza y cuello cursa clínicamente con diversas manifestaciones en el paciente. Indica cuál NO es una de ellas:",
    options: {
      a: "Sialorrea persistente con exceso de saliva líquida y fluida.",
      b: "Sensación de sequedad bucal y necesidad constante de beber agua para tragar.",
      c: "Dificultad para hablar de forma prolongada y pérdida de los sentidos del gusto (disgeusia).",
      d: "Aumento significativo del riesgo de desarrollar caries dentales agresivas."
    },
    correct: "a"
  },
  {
    id: 180,
    question: "Los dosímetros personales de termoluminiscencia (TLD) utilizados de forma obligatoria por el personal de radioterapia estimulan la emisión de luz guardada en sus cristales mediante la aplicación de:",
    options: {
      a: "Calor de forma controlada (estimulación térmica) en un lector específico.",
      b: "Revelador químico líquido en condiciones de oscuridad estricta.",
      c: "Un haz de luz láser ultravioleta continuo de alta potencia.",
      d: "Un campo magnético oscilante de alta frecuencia."
    },
    correct: "a"
  },
  {
    id: 181,
    question: "En un acelerador lineal de electrones, la guía de ondas aceleradora se mantiene en condiciones de vacío extremo con el fin de:",
    options: {
      a: "Evitar que los electrones acelerados choquen con las moléculas de aire del interior, lo que provocaría pérdidas y dispersión del haz.",
      b: "Aumentar de forma directa la temperatura de las cavidades resonantes.",
      c: "Facilitar el enfriamiento del blanco de wolframio mediante convección.",
      d: "Prevenir la generación de neutrones secundarios de fuga térmica."
    },
    correct: "a"
  },
  {
    id: 182,
    question: "Un órgano de riesgo se clasifica clínicamente como un órgano con organización de subunidades en paralelo (como el parénquima pulmonar o el hígado) cuando:",
    options: {
      a: "La función global del órgano se mantiene intacta siempre que el volumen total irradiado por encima de una dosis umbral quede limitado.",
      b: "La lesión de una sola subunidad funcional pequeña incapacita por completo al órgano de forma irreversible.",
      c: "Presenta una alta sensibilidad estocástica a dosis fraccionadas inferiores a 1 Gy.",
      d: "Su contorneo en el TPS se realiza añadiendo un margen simétrico de 2 cm."
    },
    correct: "a"
  },
  {
    id: 183,
    question: "Los dosímetros in vivo mediante diodos semiconductores o MOSFET colocados sobre la piel del paciente tienen la función primordial de:",
    options: {
      a: "Verificar de forma directa y en tiempo real que la dosis administrada en la sesión coincide con la planificada en el TPS.",
      b: "Modificar la apertura de las láminas del colimador multiláminas dinámico.",
      c: "Generar la radiografía digital reconstruida (DRR) de control diario.",
      d: "Sustituir las cámaras de ionización de transmisión del cabezal."
    },
    correct: "a"
  },
  {
    id: 184,
    question: "En el apoyo y soporte emocional al paciente oncológico que inicia radioterapia, la intervención del Técnico Especialista debe basarse en:",
    options: {
      a: "La empatía, la escucha activa, resolver dudas mecánicas de la sesión y canalizar los problemas clínicos al oncólogo o psicólogo.",
      b: "Ocultar los posibles efectos secundarios del tratamiento para evitar que aumente su ansiedad.",
      c: "Modificar los fraccionamientos dosimétricos si observa al paciente muy cansado.",
      d: "Minimizar los síntomas del paciente indicándole que son de origen imaginario."
    },
    correct: "a"
  },
  {
    id: 185,
    question: "En referencia a la normativa española de instalaciones radiactivas, las licencias individuales que habilitan al personal cualificado para trabajar operando los equipos se denominan:",
    options: {
      a: "Licencias de Operador o de Supervisor de instalaciones radiactivas, expedidas por el CSN.",
      b: "Certificados de aptitud médica hospitalaria interna.",
      c: "Licencias de mantenimiento técnico de electromedicina de alta energía.",
      d: "Autorizaciones de explotación comercial de materiales radiactivos."
    },
    correct: "a"
  },
  {
    id: 186,
    question: "¿Qué magnitud física de transferencia de energía se define como el cociente entre la energía media perdida por una partícula cargada por colisiones atómicas al atravesar una distancia y la densidad del medio?",
    options: {
      a: "Poder de frenado másico por colisión.",
      b: "Transferencia Lineal de Energía de restricción térmica.",
      c: "Coeficiente de absorción de energía de colisión neta.",
      d: "Eficacia Biológica Relativa de frenado lineal."
    },
    correct: "a"
  },
  {
    id: 187,
    question: "En el control de calidad mecánico del acelerador lineal, la verificación de la horizontalidad y la ausencia de flexión de la camilla bajo una carga simulada pesada (peso estándar de un paciente) tiene como objetivo:",
    options: {
      a: "Garantizar la precisión geométrica del isocentro evitando desplazamientos del PTV durante la rotación del gantry.",
      b: "Controlar el desgaste de los motores eléctricos de elevación vertical.",
      c: "Modificar informáticamente los valores de la escala de unidades Hounsfield.",
      d: "Asegurar el confort térmico del paciente en decúbito supino."
    },
    correct: "a"
  },
  {
    id: 188,
    question: "Al planificar el tratamiento de radioterapia externa de un tumor maligno de próstata, el volumen total contorneado que incluye la próstata y las vesículas seminales visibles se define como:",
    options: {
      a: "GTV.",
      b: "CTV.",
      c: "PTV.",
      d: "OAR."
    },
    correct: "b"
  },
  {
    id: 189,
    question: "La reducción patológica del número total de hematíes o de la concentración de hemoglobina en sangre circulante por debajo de los valores normales se denomina:",
    options: {
      a: "Anemia.",
      b: "Leucopenia.",
      c: "Trombocitopenia.",
      d: "Neutropenia."
    },
    correct: "a"
  },
  {
    id: 190,
    question: "En la señalización de zonas en instalaciones radiactivas, una Zona Vigilada con riesgo únicamente de irradiación externa se identifica visualmente mediante un trébol de color:",
    options: {
      a: "Gris azulado sobre fondo blanco limpio.",
      b: "Verde sobre fondo blanco limpio.",
      c: "Amarillo con puntas radiales discontinuas.",
      d: "Verde con un borde negro grueso."
    },
    correct: "a"
  },
  {
    id: 191,
    question: "En el cabezal de un acelerador lineal moderno, las cámaras de ionización de transmisión integradas están diseñadas de forma doble (dos canales independientes) con el fin de:",
    options: {
      a: "Garantizar la redundancia y la seguridad, cortando de forma automática el haz si falla uno de los canales de medida.",
      b: "Medir de forma síncrona los fotones y los electrones generados en el blanco.",
      c: "Modificar de forma dinámica el coeficiente de atenuación lineal del aire.",
      d: "Controlar los lásers de posicionamiento mecánico de la sala."
    },
    correct: "a"
  },
  {
    id: 192,
    question: "La fístula rectovaginal inducida de forma tardía por radioterapia pélvica de alta dosis se clasifica clínicamente como un efecto de tipo:",
    options: {
      a: "Tardío y determinista.",
      b: "Agudo y estocástico.",
      c: "Tardío y estocástico.",
      d: "Agudo y hereditario."
    },
    correct: "a"
  },
  {
    id: 193,
    question: "Para asegurar la inmovilización precisa y la reproducibilidad de la posición en decúbito prono de un paciente que va a recibir radioterapia en el área pélvica (como en tumores de recto), se utiliza con frecuencia:",
    options: {
      a: "El dispositivo Belly Board (tablero con apertura abdominal) combinado con marcas en la piel.",
      b: "La máscara termoplástica craneal de 3 puntos fijada a la base de la camilla.",
      c: "Soportes axilares de espuma blanda indexados en la cabecera.",
      d: "Cinchas textiles de tracción elástica sin fijación fija a la mesa."
    },
    correct: "a"
  },
  {
    id: 194,
    question: "Al realizar la calibración dosimétrica absoluta de un haz de fotones de alta energía en el acelerador lineal por el servicio de Radiofísica, el detector de referencia estándar utilizado es:",
    options: {
      a: "Una cámara de ionización cilíndrica de tipo Farmer calibrada, introducida en un fantoma de agua.",
      b: "Un contador Geiger-Müller portátil de lectura directa digital.",
      c: "Un cristal termoluminiscente de fluoruro de litio de lectura diferida.",
      d: "Una película radiográfica de emulsión de plata convencional."
    },
    correct: "a"
  },
  {
    id: 195,
    question: "En braquiterapia de alta tasa de dosis (HDR) ginecológica empleada tras una cirugía de cáncer de endometrio, el aplicador cilíndrico introducido en la cavidad vaginal tiene el objetivo de:",
    options: {
      a: "Administrar una dosis precisa y homogénea en la mucosa de la cúpula vaginal para prevenir recidivas locales, protegiendo la vejiga y el recto.",
      b: "Irradiar de forma profiláctica todas las cadenas ganglionares ilíacas comunes.",
      c: "Sustituir de forma definitiva la necesidad de un tratamiento de radioterapia externa.",
      d: "Servir como dispositivo de fijación mecánica externa para la camilla."
    },
    correct: "a"
  },
  {
    id: 196,
    question: "En la estrategia de tratamiento oncológico, la radioterapia que se administra con la intención de erradicar por completo todas las células tumorales clonogénicas y lograr la curación del paciente se denomina:",
    options: {
      a: "Radioterapia radical o curativa.",
      b: "Radioterapia paliativa sintomática.",
      c: "Radioterapia adyuvante profiláctica pura.",
      d: "Radioterapia neoadyuvante de citorreducción."
    },
    correct: "a"
  },
  {
    id: 197,
    question: "En la interacción de los rayos X por la materia, el espesor de material necesario para reducir la intensidad del haz a la mitad de su valor inicial se denomina:",
    options: {
      a: "Semiespesor o espesor de semirreducción.",
      b: "Espesor de atenuación.",
      c: "Coeficiente de atenuación lineal.",
      d: "Espesor de disminución relativa."
    },
    correct: "a"
  },
  {
    id: 198,
    question: "Teniendo en cuenta que, como resultado de la irradiación, la respuesta de la célula puede ser distinta, indica qué respuesta o respuestas pretende producir la radioterapia en la célula:",
    options: {
      a: "Muerte celular o muerte diferida.",
      b: "Muerte celular.",
      c: "Muerte diferida, muerte celular o célula viable.",
      d: "Muerte diferida, muerte celular o célula viable, pero modificada en su genoma."
    },
    correct: "a"
  },
  {
    id: 199,
    question: "¿Cómo se define el proceso que destruye microorganismos en la piel mediante sustancias químicas sin afectar sensiblemente a los tejidos?",
    options: {
      a: "Antisepsia.",
      b: "Desinfección.",
      c: "Esterilización.",
      d: "Sepsis."
    },
    correct: "a"
  },
  {
    id: 200,
    question: "En referencia a la tomografía computarizada 4D, es cierto que:",
    options: {
      a: "El movimiento respiratorio durante la realización del estudio puede provocar artefactos.",
      b: "Es un estudio de larga duración.",
      c: "En el estudio de tipo prospectivo se adquieren imágenes en continuo.",
      d: "Todas las respuestas anteriores son correctas."
    },
    correct: "a"
  },
  {
    id: 201,
    question: "En referencia a la magnitud radiológica 'exposición', podemos afirmar que:",
    options: {
      a: "Tiene en cuenta el valor absoluto de la carga total de todos los iones de un mismo signo producidos en un volumen de agua.",
      b: "Al igual que el Kerma, se utiliza para medir la energía de fotones y de protones.",
      c: "Para su correcta medida, hay que tener en cuenta el concepto de 'equilibrio electrónico'.",
      d: "La ICRU recomienda utilizar las unidades de medida del Sistema Internacional, que es el Roentgen (R)."
    },
    correct: "c"
  },
  {
    id: 202,
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
    id: 203,
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
    id: 204,
    question: "Los aceleradores lineales modernos:",
    options: {
      a: "Suelen acelerar partículas pesadas como los protones.",
      b: "Utilizan cavidades resonantes para aumentar la energía cinética de los electrones.",
      c: "No precisan de sistemas de refrigeración de agua.",
      d: "Todas las respuestas anteriores son correctas."
    },
    correct: "b"
  },
  {
    id: 205,
    question: "En referencia al Trastorno Adaptativo en el paciente oncológico, podemos afirmar que:",
    options: {
      a: "Es una reacción normal que no precisa de soporte psicológico.",
      b: "Se caracteriza por una respuesta desproporcionada al estrés del diagnóstico o tratamiento.",
      c: "Afecta a la totalidad de los pacientes oncológicos de forma irreversible.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    correct: "b"
  },
  {
    id: 206,
    question: "La cistitis rádica aguda:",
    options: {
      a: "Es un effect secundario que aparece de forma inmediata al finalizar el tratamiento.",
      b: "Cursa clínicamente con disuria, polaquiuria y tenesmo vesical.",
      c: "Suele tratarse con antibioterapia de amplio espectro de forma sistemática.",
      d: "Es una complicación grave que obliga a suspender la radioterapia."
    },
    correct: "b"
  },
  {
    id: 207,
    question: "En referencia a la tomografía computarizada (TC) de simulación, el grosor de corte óptico para la planificación de tratamientos en la zona de cabeza y cuello es de:",
    options: {
      a: "1 a 3 mm.",
      b: "5 a 10 mm.",
      c: "Mayor de 10 mm.",
      d: "Es indiferente para el cálculo de la dosis."
    },
    correct: "a"
  },
  {
    id: 208,
    question: "El colimador multiláminas (MLC) de un acelerador lineal:",
    options: {
      a: "Permit conformar el haz de radiación adaptándose a la forma geométrica del PTV.",
      b: "Está fabricado de materiales con bajo número atómico.",
      c: "Es un sistema de colimación fija no motorizada.",
      d: "Sustituye por completo al colimador primario de la máquina."
    },
    correct: "a"
  },
  {
    id: 209,
    question: "En la señalización de zonas en una instalación radiactiva, una 'Zona Vigilada' se identifica mediante un trébol de color:",
    options: {
      a: "Gris azulado.",
      b: "Verde.",
      c: "Amarillo.",
      d: "Naranja."
    },
    correct: "a"
  },
  {
    id: 210,
    question: "La magnitud dosimétrica 'Dosis Equivalente' se mide en el Sistema Internacional en:",
    options: {
      a: "Gray (Gy).",
      b: "Sievert (Sv).",
      c: "Roentgen (R).",
      d: "Becquerel (Bq)."
    },
    correct: "b"
  },
  {
    id: 211,
    question: "En un histograma dosis-volumen (DVH) acumulativo:",
    options: {
      a: "El eje de abscisas representa el volumen del órgano y el de ordenadas la dosis.",
      b: "Permit evaluar de forma cualitativa la distribución espacial de la dosis.",
      c: "Cada punto de la curva representa el volumen de una estructura que recibe una dosis igual o superior a un valor determinado.",
      d: "Todas las respuestas anteriores son correctas."
    },
    correct: "c"
  },
  {
    id: 212,
    question: "La braquiterapia intersticial consiste en:",
    options: {
      a: "La colocación de las fuentes radiactivas en el interior de una cavidad anatómica.",
      b: "La colocación de las fuentes radiactivas directamente en el interior del tejido tumoral.",
      c: "La aplicación de moldes radiactivos sobre la superficie cutánea.",
      d: "El uso de fuentes radiactivas no encapsuladas por vía sistémica."
    },
    correct: "b"
  },
  {
    id: 213,
    question: "En referencia al control de calidad diario del acelerador lineal, la tolerancia para la constancia de la dosis administrada suele ser de:",
    options: {
      a: "± 1%.",
      b: "± 2% o ± 3%.",
      c: "± 5%.",
      d: "± 10%."
    },
    correct: "b"
  },
  {
    id: 214,
    question: "La xerostomía severa como efecto secundario agudo en pacientes tratados de tumores de cabeza y cuello está provocada principalmente por la irradiación de:",
    options: {
      a: "Las glándulas parótidas.",
      b: "La mucosa oral mucosa de la lengua.",
      c: "Los ganglios linfáticos submandibulares.",
      d: "El tiroides."
    },
    correct: "a"
  },
  {
    id: 215,
    question: "En protección radiológica operacional, el límite de dosis efectiva anual para los miembros del público es de:",
    options: {
      a: "1 mSv.",
      b: "5 mSv.",
      c: "20 mSv.",
      d: "50 mSv."
    },
    correct: "a"
  },
  {
    id: 216,
    question: "El volumen blanco clínico (CTV) engloba:",
    options: {
      a: "El volumen tumoral macroscópico observable (GTV).",
      b: "El GTV más un margen para la enfermedad microscópica subclínica.",
      c: "El CTV más un margen por incertidumbres en el posicionamiento diario.",
      d: "El volumen de tejido sano que recibe una dosis significativa."
    },
    correct: "b"
  },
  {
    id: 217,
    question: "La interacción de los fotones con la materia mediante el 'Efecto Fotoeléctrico' se caracteriza por:",
    options: {
      a: "Ser el effect predominante a energías muy elevadas (Megavoltaje).",
      b: "La absorción completa del fotón incidente por un electrón ligado de un átomo.",
      c: "La dispersión del fotón con pérdida de energía.",
      d: "La producción de un par electrón-positrón."
    },
    correct: "b"
  },
  {
    id: 218,
    question: "Para la inmovilización de pacientes en tratamientos de radioterapia pélvica, el dispositivo 'Belly Board' se utiliza con el objetivo principal de:",
    options: {
      a: "Desplazar las asas intestinales fuera del campo de irradiación por gravedad.",
      b: "Inmovilizar la articulación coxo-femoral de forma rígida.",
      c: "Aumentar la reproducibilidad del posicionamiento en decúbito supino.",
      d: "Evitar los movimientos respiratorios diafragmáticos."
    },
    correct: "a"
  },
  {
    id: 219,
    question: "En referencia a las funciones del Técnico Especialista en Radioterapia, ante una alarma del sistema durante la sesión de tratamiento, su primera actuación debe ser:",
    options: {
      a: "Reiniciar el sistema informático desde la consola exterior.",
      b: "Parar la irradiación inmediatamente si el sistema no lo ha hecho de forma automática.",
      c: "Entrar al búnker para comprobar el estado físico del paciente.",
      d: "Modificar los parámetros del colimador para continuar el disparo."
    },
    correct: "b"
  },
  {
    id: 220,
    question: "La unidad de medida de la actividad de un radionucleido en el Sistema Internacional es el:",
    options: {
      a: "Curie (Ci).",
      b: "Becquerel (Bq).",
      c: "Gray (Gy).",
      d: "Sievert (Sv)."
    },
    correct: "b"
  },
  {
    id: 221,
    question: "En la técnica de Arcoterapia Volumétrica Modulada (VMAT):",
    options: {
      a: "El gantry permanece fijo en varias posiciones angulares estáticas.",
      b: "La tasa de dosis, la velocidad de giro del gantry y el movimiento de las láminas varían de forma dinámica.",
      c: "Se utilizan campos fijos conformados con bloques de cerrobend.",
      d: "No es necesario realizar sistemas de guiado por imagen (IGRT)."
    },
    correct: "b"
  },
  {
    id: 222,
    question: "En la escala de unidades Hounsfield (HU) utilizada en tomografía computarizada, el valor asignado al agua líquida pura es de:",
    options: {
      a: "-1000 HU.",
      b: "0 HU.",
      c: "+1000 HU.",
      d: "+100 HU."
    },
    correct: "b"
  },
  {
    id: 223,
    question: "El parámetro físico 'Transferencia Lineal de Energía' (LET) se define como:",
    options: {
      a: "La energía media transferida por una partícula cargada al medio por unidad de longitud recorrida.",
      b: "La velocidad de pérdida de energía de los fotones en el aire standard.",
      c: "La cantidad de ionización producida por una partícula neutra.",
      d: "El coeficiente de absorción másico del plomo refinado."
    },
    correct: "a"
  },
  {
    id: 224,
    question: "Para la simulación y tratamiento de tumores localizados en la región del tórax, la inmovilización de los brazos hacia arriba tiene como objetivo:",
    options: {
      a: "Mejorar la comodidad general del paciente en la camilla.",
      b: "Evitar que los brazos queden incluidos en la trayectoria de los haces de radiación laterales u oblicuos.",
      c: "Disminuir los movimientos de la pared costal anterior.",
      d: "Facilitar la colocación de los tatuajes de referencia pélvicos."
    },
    correct: "b"
  },
  {
    id: 225,
    question: "La disminución severa del número de plaquetas en sangre periférica como consecuencia de la toxicidad hematológica se denomina:",
    options: {
      a: "Leucopenia.",
      b: "Anemia.",
      c: "Trombocitopenia.",
      d: "Agranulocitosis."
    },
    correct: "c"
  },
  {
    id: 226,
    question: "En un radionucleido inestable, la constante de desintegración radiactiva (λ) representa:",
    options: {
      a: "El tiempo necesario para que la actividad se reduzca a la mitad.",
      b: "La probabilidad de desintegración de un núcleo por unidad de tiempo.",
      c: "El número total de átomos desintegrados por segundo.",
      d: "La vida media biológica del isótopo en tejido blando."
    },
    correct: "b"
  },
  {
    id: 227,
    question: "En referencia al control de calidad mensual de los lásers mecánicos de la sala de tratamiento, la tolerancia máxima permitida de desviación es de:",
    options: {
      a: "± 1 mm.",
      b: "± 2 mm.",
      c: "± 5 mm.",
      d: "± 10 mm."
    },
    correct: "b"
  },
  {
    id: 228,
    question: "Un órgano de riesgo con organización tisular 'en serie' (como la médula espinal) se caracteriza porque:",
    options: {
      a: "Su función depende de la integridad de la totalidad de sus subunidades (una dosis máxima puntual elevada puede invalidar el órgano completo).",
      b: "Soporta dosis muy elevadas siempre que no se irradie más del 50% de su volumen global.",
      c: "Carece de radiosensibilidad determinista a dosis convencionales.",
      d: "Su tasa de reparación celular es infinitamente superior a la del tumor primario."
    },
    correct: "a"
  },
  {
    id: 229,
    question: "La técnica dosimétrica 'In Vivo' en radioterapia externa se utiliza para:",
    options: {
      a: "Calcular informáticamente las curvas de isodosis en el TPS.",
      b: "Medir de forma directa la dosis recibida por el paciente en la superficie cutánea durante la sesión.",
      c: "Calibrar de forma absoluta la tasa de dosis diaria de la máquina en condiciones estándar.",
      d: "Evaluar la respuesta biológica celular en muestras de sangre periférica."
    },
    correct: "b"
  },
  {
    id: 230,
    question: "En la señalización de zonas, una 'Zona Controlada' con riesgo de irradiación externa alta se identifica mediante un trébol de color:",
    options: {
      a: "Verde.",
      b: "Amarillo.",
      c: "Naranja.",
      d: "Rojo."
    },
    correct: "b"
  },
  {
    id: 231,
    question: "En referencia a la física dosimétrica, el medio material de referencia universal utilizado en los fantomas para la calibración absoluta de los haces es:",
    options: {
      a: "Agua líquida.",
      b: "Plomo denso.",
      c: "Aire seco.",
      d: "Poliestireno expandido."
    },
    correct: "a"
  },
  {
    id: 232,
    question: "La técnica de Radioterapia Guiada por Imagen (IGRT) mediante sistemas ópticos superficiales (SGRT) destaca por:",
    options: {
      a: "Adquirir imágenes radiográficas continuas de alta energía durante la sesión.",
      b: "Monitorizar en tiempo real el contorno tridimensional de la piel del paciente sin añadir dosis de radiación ionizante.",
      c: "Calcular la dosis real absorbida en los órganos internos mediante sensores mecánicos.",
      d: "Sustituir de forma definitiva el uso de los lásers de posicionamiento de la sala."
    },
    correct: "b"
  },
  {
    id: 233,
    question: "El parámetro 'α/β' (alfa/beta) derivado del modelo lineal-cuadrático nos da información sobre:",
    options: {
      a: "El coeficiente de atenuación lineal másico del tejido frente a electrones.",
      b: "La sensibilidad de un tejido frente a las variaciones en el fraccionamiento de la dosis.",
      c: "El porcentaje de células madre tumorales hipóxicas.",
      d: "El espesor de semirreducción geométrica de las barreras secundarias."
    },
    correct: "b"
  },
  {
    id: 234,
    question: "En braquiterapia de alta tasa de dosis (HDR), el radionucleido utilizado de forma más común es el:",
    options: {
      a: "Yodo-125.",
      b: "Iridio-192.",
      c: "Cesio-137.",
      d: "Cobalto-60."
    },
    correct: "b"
  },
  {
    id: 235,
    question: "La inflamación aguda de la mucosa oral con ulceraciones dolorosas secundaria al tratamiento radioterápico se denomina:",
    options: {
      a: "Mucositis.",
      b: "Esofagitis.",
      c: "Xerostomía reactiva.",
      d: "Candidiasis profunda."
    },
    correct: "a"
  },
  {
    id: 236,
    question: "En el diseño de un búnker de radioterapia externa, las barreras o blindajes 'primarios' están destinados a atenuar:",
    options: {
      a: "Exclusivamente la radiación de fuga procedente del cabezal.",
      b: "El haz útil o directo de radiación emitido por la máquina.",
      c: "La radiación dispersa por el paciente y las paredes.",
      d: "Los neutrones secundarios generados en los colimadores."
    },
    correct: "b"
  },
  {
    id: 237,
    question: "El volumen geométrico delimitado en el TPS que representa la envolvente del CTV modificada por los movimientos internos de los órganos se denomina:",
    options: {
      a: "GTV.",
      b: "ITV (Internal Target Volume).",
      c: "PTV.",
      d: "PRV."
    },
    correct: "b"
  },
  {
    id: 238,
    question: "En la interacción de la radiación ionizante con las estructuras celulares, la acción 'indirecta' se produce por:",
    options: {
      a: "La ionización directa de los enlaces químicos de la doble hélice del ADN.",
      b: "La interacción de la radiación con las moléculas de agua (radiólisis), generando radicales libres que dañan el ADN.",
      c: "La activación térmica de las proteínas del citoesqueleto citoplasmático.",
      d: "El bloqueo de los receptores de membrana por iones metálicos dispersos."
    },
    correct: "b"
  },
  {
    id: 239,
    question: "Para la inmovilización precisa de la región pélvica de un paciente en decúbito supino, el accesorio más extendido es:",
    options: {
      a: "La máscara termoplástica craneal de 3 puntos.",
      b: "El colchón de vacío o moldes de poliuretano personalizados para extremidades inferiores y pelvis.",
      c: "Soportes axilares de espuma blanda sueltos.",
      d: "Cinchas textiles elásticas de sujeción manual."
    },
    correct: "b"
  },
  {
    id: 240,
    question: "En referencia al control de calidad diario de los sistemas acústicos y de video del búnker, su correcto funcionamiento es un requisito:",
    options: {
      a: "Opcional, pudiendo realizarse la sesión si el paciente permanece tranquilo.",
      b: "Imprescindible por motivos de seguridad, estando prohibido el tratamiento ante fallos en estos sistemas.",
      c: "Necesario únicamente en las primeras fracciones de la planificación.",
      d: "Destinado exclusivamente al registro administrativo de los tiempos de paso."
    },
    correct: "b"
  },
  {
    id: 241,
    question: "La magnitud dosimétrica 'Kerma' se define como:",
    options: {
      a: "La energía media transferida por unidad de masa por partículas sin carga a partículas cargadas.",
      b: "La energía media absorbida por unidad de masa en un volumen de agua.",
      c: "La carga eléctrica total generada en un volumen de aire estándar.",
      d: "El coeficiente de absorción de energía de colisión másico."
    },
    correct: "a"
  },
  {
    id: 242,
    question: "En los sistemas de planificación de tratamientos (TPS), el cálculo de dosis basado en el 'Método de Monte Carlo' destaca por:",
    options: {
      a: "Ser un algoritmo empírico rápido con correcciones geométricas simples.",
      b: "Ser un método estadístico que simula estocásticamente la trayectoria individual de miles de partículas para conseguir alta precisión.",
      c: "No tener en cuenta las heterogeneidades de densidad de los tejidos del paciente.",
      d: "Utilizar únicamente modelos analógicos bidimensionales basados en curvas de porcentaje de dosis en profundidad."
    },
    correct: "b"
  },
  {
    id: 243,
    question: "La complicación tardía de la radioterapia rectal o ginecológica caracterizada por la aparición de una comunicación anómala entre el recto y la vagina se denomina:",
    options: {
      a: "Proctitis actínica crónica.",
      b: "Fístula rectovaginal.",
      c: "Estenosis vaginal fibrosa.",
      d: "Úlcera mucosa obstructiva."
    },
    correct: "b"
  },
  {
    id: 244,
    question: "En referencia a las licencias del personal que opera instalaciones radiactivas en medicina, estas son otorgadas en España por:",
    options: {
      a: "El Ministerio de Sanidad y Consumo.",
      b: "El Consejo de Seguridad Nuclear (CSN).",
      c: "La Agencia Española de Medicamentos y Productos Sanitarios.",
      d: "La dirección gerencia del hospital correspondiente."
    },
    correct: "b"
  },
  {
    id: 245,
    question: "El accesorio equivalente a tejido que se coloca sobre la piel del paciente para eliminar el efecto de advenimiento de dosis (build-up) en fotones se denomina:",
    options: {
      a: "Filtro de cuña dinámico.",
      b: "Bolus.",
      c: "Bloque de colimación multiláminas.",
      d: "Plano de inclinación pélvica."
    },
    correct: "b"
  },
  {
    id: 246,
    question: "En la técnica de radioterapia estereotáctica extracraneal (SBRT) pulmonar, es frecuente asociar sistemas de:",
    options: {
      a: "Fijación rígida con marco invasivo atornillado.",
      b: "Control del movimiento respiratorio (gating/tracking o compresión abdominal) para reducir los márgenes del PTV.",
      c: "Inmovilización exclusiva con almohadas estándar de espuma.",
      d: "Sujeción manual directa por parte del personal de la sala."
    },
    correct: "b"
  },
  {
    id: 247,
    question: "La disminución del número total de leucocitos por debajo de los valores de referencia se conoce como:",
    options: {
      a: "Anemia.",
      b: "Leucopenia.",
      c: "Trombocitopenia.",
      d: "Eritrocitosis."
    },
    correct: "b"
  },
  {
    id: 248,
    question: "El componente de un acelerador lineal encargado de homogeneizar la intensidad del haz de fotones (que presenta un perfil apuntado en el eje central) se llama:",
    options: {
      a: "Lámina de dispersión (Scattering foil).",
      b: "Filtro aplanador (Flattening filter).",
      c: "Cámara de ionización de transmisión.",
      d: "Colimador multiláminas dinámico."
    },
    correct: "b"
  },
  {
    id: 249,
    question: "En el sistema internacional de estadificación de tumores malignos (TNM), la letra 'M' hace referencia a:",
    options: {
      a: "El tamaño y extensión anatómica del tumor primario original.",
      b: "La afectación de las cadenas ganglionares linfáticas regionales.",
      c: "La presencia o ausencia de metástasis a distancia.",
      d: "El grado de diferenciación celular microscópico."
    },
    correct: "c"
  },
  {
    id: 250,
    question: "Al realizar el posicionamiento del paciente, si el Técnico Especialista observa una discrepancia significativa entre los tatuajes de la piel y los lásers de la sala respecto a la sesión anterior, debe:",
    options: {
      a: "Irradiar al paciente en la posición intermedia estimada por experiencia.",
      b: "No administrar la dosis, revisar el plan de tratamiento en el sistema de verificación y, si persiste la duda, consultar con el radiofísico u oncólogo.",
      c: "Modificar de forma manual las marcas de la piel pintando nuevos puntos.",
      d: "Aumentar de forma arbitraria el tamaño del campo colimado en la consola exterior."
    },
    correct: "b"
  },
  {
    id: 251,
    question: "En referencia a las radiaciones electromagnéticas ionizantes, los Rayos Gamma (γ) se originan físicamente en:",
    options: {
      a: "Transiciones electrónicas de las capas atómicas periféricas.",
      b: "Procesos de desexcitación de núcleos atómicos inestables.",
      c: "Frenado de electrones rápidos en un blanco de wolframio.",
      d: "La aniquilación de positrones térmicos libres."
    },
    correct: "b"
  },
  {
    id: 252,
    question: "La magnitud dosimétrica 'Dosis Absorbida' se define matemáticamente como:",
    options: {
      a: "El cociente entre la energía media impartida por la radiación ionizante a la materia y la masa de dicha materia (D = dE/dm).",
      b: "La suma de las energías cinéticas iniciales de las partículas cargadas liberadas en el aire.",
      c: "El producto de la dosis equivalente por el factor de ponderación del tejido blando.",
      d: "La carga eléctrica generada por unidad de volumen gaseoso estándar."
    },
    correct: "a"
  },
  {
    id: 253,
    question: "Los sistemas informáticos de 'Registro y Verificación' (R&V) en los servicios de radioterapia tienen el papel primordial de:",
    options: {
      a: "Calcular de forma automática las curvas de isodosis del plan primario.",
      b: "Comparar en tiempo real los parámetros físicos configurados en la máquina con los aprobados en el planificador, impidiendo el disparo ante discrepancias.",
      c: "Sustituir la obtención de imágenes portales de control óseo diario.",
      d: "Almacenar de forma exclusiva las citas administrativas del personal."
    },
    correct: "b"
  },
  {
    id: 254,
    question: "En el cáncer de nasofaringe (cavum), las cadenas ganglionares cervicales bilaterales suelen incluirse en el volumen de irradiación debido a:",
    options: {
      a: "Que los tumores de cavum nunca producen metástasis ganglionares distales.",
      b: "Su alta propensión y elevado riesgo de diseminación linfática microscópica precoz.",
      c: "Evitar la toxicidad cutánea localizada en la región submandibular.",
      d: "Que comparten el mismo origen vascular que la arteria oftálmica principal."
    },
    correct: "b"
  },
  {
    id: 55,
    question: "En la señalización de zonas, un trébol de color rojo sobre fondo blanco identifica una:",
    options: {
      a: "Zona de Libre Acceso público.",
      b: "Zona de Acceso Prohibido.",
      c: "Zona de Permanencia Limitada.",
      d: "Zona Controlada estándar."
    },
    correct: "b"
  },
  {
    id: 256,
    question: "La reducción de la apertura bucal inducida por la fibrosis de los músculos masticadores secundaria a radioterapia en cabeza y cuello se conoce como:",
    options: {
      a: "Trismus.",
      b: "Xerostomía crónica.",
      c: "Mucositis grado IV.",
      d: "Disfagia mecánica alta."
    },
    correct: "a"
  },
  {
    id: 257,
    question: "En referencia a la física cuántica, el fenómeno de 'Aniquilación' de un positrón da como resultado la emisión de:",
    options: {
      a: "Un único fotón de megavoltaje con energía cinética variable.",
      b: "Dos fotones gamma de 0,511 MeV emitidos en direcciones opuestas (180 grados).",
      c: "Una partícula alfa de corto alcance en tejido blando.",
      d: "Un electrón libre acelerado en la guía de ondas."
    },
    correct: "b"
  },
  {
    id: 258,
    question: "El volumen blanco de planificación (PTV) se genera en el TPS añadiendo al CTV un margen que contempla:",
    options: {
      a: "Únicamente la extensión microscópica de la enfermedad subclínica.",
      b: "Las incertidumbres mecánicas de los equipos y las variaciones en el posicionamiento diario del paciente.",
      c: "El volumen total ocupado por los órganos de riesgo periféricos.",
      d: "La dosis de tolerancia de los tejidos sanos circundantes."
    },
    correct: "b"
  },
  {
    id: 259,
    question: "En la técnica de braquiterapia intracavitaria ginecológica empleada en el cáncer de cérvix, los aplicadores que se colocan en los fondos de saco vaginales se denominan:",
    options: {
      a: "Cilindros endovaginales puros.",
      b: "Colpostatos (o ovoides).",
      c: "Agujas intersticiales rígidas.",
      d: "Moldes superficiales de silicona blanda."
    },
    correct: "b"
  },
  {
    id: 260,
    question: "Al realizar el control de calidad diario del acelerador lineal, la coincidencia del campo luminoso con el campo de radiación debe verificarse admitiendo una tolerancia máxima de:",
    options: {
      a: "± 1 mm.",
      b: "± 2 mm.",
      c: "± 5 mm.",
      d: "± 10 mm."
    },
    correct: "b"
  },
  {
    id: 261,
    question: "La magnitud 'Dosis Efectiva' (E) se utiliza en protección radiológica con el objetivo principal de:",
    options: {
      a: "Medir la energía exacta absorbida en un gramo de tejido tumoral primario.",
      b: "Evaluar el detrimento o riesgo biológico global de sufrir efectos estocásticos a largo plazo, teniendo en cuenta la radiosensibilidad de los órganos irradiados.",
      c: "Calibrar de forma absoluta la respuesta de los dosímetros personales de pozo.",
      d: "Cuantificar la dosis umbral de aparición de los efectos deterministas agudos."
    },
    correct: "b"
  },
  {
    id: 262,
    question: "En referencia a la física atómica, los átomos que poseen el mismo número de protones (Z) pero diferente número de neutrones se denominan:",
    options: {
      a: "Isóbaros.",
      b: "Isótopos.",
      c: "Isótonos.",
      d: "Isómeros nucleares."
    },
    correct: "b"
  },
  {
    id: 263,
    question: "Para la inmovilización de la cabeza en estudios de simulación por TC en pacientes con tumores cerebrales, el accesorio imprescindible es:",
    options: {
      a: "El colchón de vacío pélvico estándar.",
      b: "La máscara termoplástica fijada de forma rígida al soporte o base.",
      c: "Almohadas cilíndricas de espuma blanda sin anclaje mecánico.",
      d: "Cinchas elásticas de sujeción manual cruzadas."
    },
    correct: "b"
  },
  {
    id: 264,
    question: "Un punto definido en un histograma dosis-volumen (DVH) acumulativo como V50Gy = 10% para el recto significa que:",
    options: {
      a: "El 50% del volumen del recto recibe una dosis exacta de 10 Gy.",
      b: "El 10% del volumen del recto recibe una dosis igual o superior a 50 Gy.",
      c: "La dosis máxima absoluta permitida en todo el contorno rectal es de 10 Gy.",
      d: "El planificador informático ha rechazado el 10% de la dosis prescrita."
    },
    correct: "b"
  },
  {
    id: 265,
    question: "La complicación aguda de la radioterapia torácica caracterizada clínicamente por tos seca, disnea de esfuerzo y fiebre moderada se denomina:",
    options: {
      a: "Fibrosis pulmonar crónica.",
      b: "Neumonitis actínica.",
      c: "Esofagitis descamativa.",
      d: "Pleuritis bacteriana secundaria."
    },
    correct: "b"
  },
  {
    id: 266,
    question: "En protección radiológica, el control dosimétrico de los trabajadores expuestos mediante dosímetros personales de lectura diferida (TLD) se realiza de forma estándar con una periodicidad:",
    options: {
      a: "Diaria.",
      b: "Semanal.",
      c: "Mensual.",
      d: "Anual."
    },
    correct: "c"
  },
  {
    id: 267,
    question: "El componente de un acelerador lineal encargado de generar microondas de alta potencia para inyectarlas en la guía de ondas se denomina:",
    options: {
      a: "Cañón de electrones (Electron gun).",
      b: "Klystron (o Magnetrón).",
      c: "Blanco de wolframio (Target).",
      d: "Cámara de ionización doble."
    },
    correct: "b"
  },
  {
    id: 268,
    question: "El volumen tumoral macroscópico (GTV) se define como:",
    options: {
      a: "La extensión de la enfermedad microscópica subclínica inapreciable.",
      b: "La extensión y localización demostrable del crecimiento tumoral maligno (visible en la exploración clínica o pruebas de imagen).",
      c: "El volumen geométrico que engloba a los órganos de riesgo contorneados.",
      d: "La envolvente de seguridad informática calculada por el TPS inverso."
    },
    correct: "b"
  },
  {
    id: 269,
    question: "La inflamación de la mucosa rectal que produce dolor, tenesmo y deposiciones mucosanguinolentas durante la irradiación pélvica se conoce como:",
    options: {
      a: "Cistitis rádica.",
      b: "Proctitis actínica.",
      c: "Enteritis alta.",
      d: "Mucositis vaginal reactiva."
    },
    correct: "b"
  },
  {
    id: 270,
    question: "En referencia al control de calidad de la camilla del acelerador lineal, se debe verificar de forma periódica:",
    options: {
      a: "Exclusivamente el color del recubrimiento exterior polimérico.",
      b: "La precisión mecánica y digital de los desplazamientos longitudinales, laterales y verticales, así como la ausencia de flexión bajo peso.",
      c: "La resistencia eléctrica de las ruedas de transporte auxiliar sueltas.",
      d: "El grosor exacto de los cojines estándar de espuma blanda."
    },
    correct: "b"
  },
  {
    id: 271,
    question: "La interacción de los fotones con la materia mediante el 'Efecto Compton' consiste en:",
    options: {
      a: "La absorción completa de la energía del fotón incidente por el núcleo atómico.",
      b: "El choque del fotón con un electrón libre o débilmente ligado, cediéndole parte de su energía y dispersándose.",
      c: "La creación de un par electrón-positrón al pasar cerca del campo nuclear.",
      d: "La dispersión elástica sin variación de la longitud de onda del fotón."
    },
    correct: "b"
  },
  {
    id: 272,
    question: "El margen informático añadido alrededor de un órgano de riesgo para contemplar sus movimientos internos fisiológicos o mecánicos durante el tratamiento se denomina:",
    options: {
      a: "PTV (Planning Target Volume).",
      b: "PRV (Planning Organ at Risk Volume).",
      c: "CTV (Clinical Target Volume).",
      d: "ITV (Internal Target Volume)."
    },
    correct: "b"
  },
  {
    id: 273,
    question: "En braquiterapia de baja tasa de dosis (LDR) permanente en cáncer de próstata, el radionucleido emisor de baja energía más comúnmente implantado en forma de 'semillas' es el:",
    options: {
      a: "Iridio-192.",
      b: "Yodo-125.",
      c: "Cobalto-60.",
      d: "Cesio-137."
    },
    correct: "b"
  },
  {
    id: 274,
    question: "La toxicidad crónica e irreversible de las glándulas salivares debida a radioterapia en cabeza y cuello provoca de forma permanente:",
    options: {
      a: "Sialorrea extrema.",
      b: "Xerostomía (sequedad de boca).",
      c: "Mucositis exudativa persistente.",
      d: "Disfagia neurógena pura."
    },
    correct: "b"
  },
  {
    id: 275,
    question: "En protección radiológica laboral, la dosis efectiva límite establecida legalmente para un trabajador expuesto en un periodo de un año es de:",
    options: {
      a: "1 mSv.",
      b: "20 mSv.",
      c: "150 mSv.",
      d: "500 mSv."
    },
    correct: "b"
  },
  {
    id: 276,
    question: "La técnica de Radioterapia de Intensidad Modulada (IMRT) estática mediante la modalidad 'Step and Shoot' se caracteriza porque:",
    options: {
      a: "Las láminas del colimador se mueven de forma continua mientras el haz está encendido.",
      b: "Las láminas se posicionan en una configuración fija, la máquina realiza el disparo con el haz encendido y se apaga mientras las láminas cambian a la siguiente configuración.",
      c: "El gantry gira de forma circular continua variando la tasa de dosis sincrónicamente.",
      d: "Utiliza únicamente bloques metálicos manuales fabricados en cerrobend."
    },
    correct: "b"
  },
  {
    id: 277,
    question: "En referencia a la física dosimétrica, el fenómeno físico de 'Advenimiento de Dosis' (Build-up) en haces de fotones de alta energía se traduce clínicamente en:",
    options: {
      a: "Que la dosis máxima absoluta se deposita directamente sobre la superficie cutánea.",
      b: "Un efecto de protección de la piel, situándose la dosis máxima a una profundidad determinada bajo la superficie cutánea.",
      c: "Una caída instantánea de la dosis en los primeros milímetros de recorrido.",
      d: "La ausencia total de penetración del haz en tejidos biológicos profundos."
    },
    correct: "b"
  },
  {
    id: 278,
    question: "Un órgano de riesgo con organización tisular 'en paralelo' (como el parénquima pulmonar) se caracteriza porque:",
    options: {
      a: "Su función depende de la integridad de una única subunidad crítica puntual.",
      b: "La función global se mantiene aceptable siempre que el volumen del órgano que recibe una dosis superior a un umbral quede limitado por debajo de un porcentaje determinado.",
      c: "Carece por completo de tolerancia dosimétrica determinista a la radiación.",
      d: "Su contorneo automático exige aplicar un margen informático de seguridad de 3 cm."
    },
    correct: "b"
  },
  {
    id: 279,
    question: "Los sistemas electrónicos de imagen portal (EPID) integrados en los aceleradores lineales modernos permiten:",
    options: {
      a: "Medir la dosis absoluta absorbida en la médula espinal del paciente de forma directa.",
      b: "Obtener imágenes portales bidimensionales utilizando el haz de tratamiento para verificar la colocación geométrica ósea frente a las DRR.",
      c: "Sustituir de forma definitiva la necesidad de un sistema de registro y verificación.",
      d: "Modificar de forma automática el espectro de energía cinética de las microondas."
    },
    correct: "b"
  },
  {
    id: 280,
    question: "En la señalización de zonas en una instalación radiactiva, un trébol de color verde sobre fondo blanco identifica una:",
    options: {
      a: "Zona Vigilada.",
      b: "Zona Controlada.",
      c: "Zona de Permanencia Limitada.",
      d: "Zona de Acceso Prohibido."
    },
    correct: "b"
  },
  {
    id: 281,
    question: "En referencia a los efectos biológicos de la radiación, aquellos efectos en los que la gravedad de la respuesta depende de la dosis recibida y para los que existe una dosis umbral se denominan:",
    options: {
      a: "Efectos estocásticos.",
      b: "Efectos deterministas (o reacciones tisulares).",
      c: "Efectos hereditarios probabilísticos.",
      d: "Efectos secundarios de latencia infinita."
    },
    correct: "b"
  },
  {
    id: 282,
    question: "La técnica de Radiocirugía Estereotáctica (SRS) intracraneal destaca por:",
    options: {
      a: "Administrar dosis fraccionadas convencionales a lo largo de 35 sesiones sobre grandes volúmenes.",
      b: "Administrar dosis ablativas de radiación muy elevadas en una única sesión (o en un número muy reducido) sobre lesiones pequeñas bien delimitadas.",
      c: "Utilizar de forma exclusiva haces de electrones superficiales sin colimación.",
      d: "Prescindir por completo de sistemas rígidos de inmovilización o guiado por imagen."
    },
    correct: "b"
  },
  {
    id: 283,
    question: "En los sistemas de inmovilización de cabeza y cuello, los reposacabezas indexados tienen la función primordial de:",
    options: {
      a: "Permitir la libre rotación cervical del paciente durante el disparo.",
      b: "Asegurar la reproducibilidad de la posición vertical y angular de la cabeza fijándose de forma exacta a la mesa.",
      c: "Aumentar la atenuación del haz útil de fotones posterior de forma deliberada.",
      d: "Sustituir la necesidad de fabricar una máscara termoplástica personalizada."
    },
    correct: "b"
  },
  {
    id: 284,
    question: "En un histograma dosis-volumen (DVH) diferencial, el eje de ordenadas representa:",
    options: {
      a: "La dosis total recibida acumulada por la estructura contorneada.",
      b: "El volumen absoluto o relativo de la estructura que recibe una dosis dentro de un intervalo específico determinado.",
      c: "El porcentaje global de supervivencia celular derivado del modelo lineal-cuadrático.",
      d: "El tiempo total de disparo expresado en unidades de monitor de la camilla."
    },
    correct: "b"
  },
  {
    id: 285,
    question: "La toxicidad pulmonar tardía secundaria a tratamientos de radioterapia torácica caracterizada por la sustitución de tejido alveolar por tejido conectivo fibroso se denomina:",
    options: {
      a: "Neumonitis actínica.",
      b: "Fibrosis pulmonar.",
      c: "Esofagitis grado III.",
      d: "Atelectasia bacteriana refleja."
    },
    correct: "b"
  },
  {
    id: 286,
    question: "En referencia a los dosímetros personales de termoluminiscencia (TLD), los cristales utilizados retienen la energía de la radiación ionizante mediante:",
    options: {
      a: "Reacciones químicas irreversibles de emulsión de plata.",
      b: "El atrapamiento de electrones en niveles energéticos metaestables (trampas) dentro de la red cristalina.",
      c: "La generación instantánea de una corriente eléctrica proporcional a la tasa de dosis.",
      d: "La desintegración natural de átomos radiactivos estables de litio."
    },
    correct: "b"
  },
  {
    id: 287,
    question: "En un acelerador lineal, la pieza de material de alta densidad contra la cual impactan los electrones para generar fotones de frenado se llama:",
    options: {
      a: "Cañón de electrones.",
      b: "Blanco (Target).",
      c: "Klystron.",
      d: "Filtro aplanador."
    },
    correct: "b"
  },
  {
    id: 288,
    question: "El volumen tratado (TV) se define como:",
    options: {
      a: "El volumen geométrico que contiene de forma exclusiva el GTV and CTV.",
      b: "El volumen de tejido que recibe una dosis considerada significativa en relación con la dosis prescrita por el oncólogo.",
      c: "El volumen total del cuerpo del paciente incluido en el estudio de simulación por TC.",
      d: "La anchura de la penumbra geométrica medida en el isocentro mecánico."
    },
    correct: "b"
  },
  {
    id: 289,
    question: "La inflamación de la mucosa esofágica secundaria a la irradiación mediastínica que cursa clínicamente con dolor y dificultad al tragar se conoce como:",
    options: {
      a: "Mucositis oral reactiva.",
      b: "Esofagitis (provocando disfagia y odinofagia).",
      c: "Gastritis actínica.",
      d: "Trismus muscular esofágico."
    },
    correct: "b"
  },
  {
    id: 290,
    question: "En referencia al control de calidad diario de los sistemas de enclavamiento (interlocks) de las puertas del búnker, se debe verificar que:",
    options: {
      a: "La puerta se abra de forma automática al finalizar el disparo de la sesión.",
      b: "La apertura accidental de la puerta durante el transcurso del tratamiento corte de forma instantánea el haz de radiación.",
      c: "Los indicadores luminosos exteriores permanezcan apagados durante el disparo.",
      d: "Se precise de una contraseña informática para bloquear el acceso mecánico."
    },
    correct: "b"
  },
  {
    id: 291,
    question: "La interacción de los fotones con la materia mediante el fenómeno de 'Producción de Pares' exige una energía mínima umbral del fotón incidente de:",
    options: {
      a: "0,511 MeV.",
      b: "1,022 MeV.",
      c: "10 MeV.",
      d: "No existe energía umbral para este efecto cuántico."
    },
    correct: "b"
  },
  {
    id: 292,
    question: "El volumen que engloba un órgano de riesgo al que se le añade un margen de seguridad informática en el TPS se denomina:",
    options: {
      a: "PTV.",
      b: "PRV.",
      c: "CTV.",
      d: "ITV."
    },
    correct: "b"
  },
  {
    id: 293,
    question: "En la técnica de braquiterapia de 'Carga Diferida Automática' (Afterloading), el principal beneficio para el personal sanitario consiste en:",
    options: {
      a: "Aumentar de forma biológica la radiosensibilidad de las células clonogénicas tumorales.",
      b: "Eliminar la exposición radiológica del personal al transferir la fuente de forma remota desde el contenedor blindado al aplicador con el búnker cerrado.",
      c: "Reducir la necesidad de verificar la colocación anatómica mediante pruebas de imagen.",
      d: "Permitir el uso de fuentes radiactivas líquidas no encapsuladas por vía tópica."
    },
    correct: "b"
  },
  {
    id: 294,
    question: "La toxicidad cutánea aguda inducida por radioterapia externa que cursa con eritema, descamación seca o húmeda y prurito en la zona de tratamiento se denomina:",
    options: {
      a: "Fibrosis dérmica tardía.",
      b: "Radiodermitis.",
      c: "Mucositis cutánea reactiva.",
      d: "Alopecia determinista localizada."
    },
    correct: "b"
  },
  {
    id: 295,
    question: "En protección radiológica, la señalización exterior de una 'Zona de Permanencia Limitada' consta de un trébol acompañado de un contorno de color amarillo sobre fondo blanco, indicando que:",
    options: {
      a: "Existe riesgo de recibir una dosis superior al límite anual en una sola jornada laboral regular.",
      b: "Existe riesgo de recibir una dosis superior a los límites fijados si se permanece en la zona de forma continuada a lo largo del año.",
      c: "El acceso está prohibido de forma permanente a todo el personal cualificado.",
      d: "La zona se encuentra libre de cualquier tipo de riesgo de irradiación externa."
    },
    correct: "b"
  },
  {
    id: 296,
    question: "En referencia a las unidades de colimación de un acelerador lineal, las mandíbulas móviles secundarias (Jaws) se encargan de:",
    options: {
      a: "Homogeneizar el perfil de intensidad del haz útil de fotones primarios.",
      b: "Limitar la apertura geométrica máxima y rectangular del campo de tratamiento reduciendo la dosis fuera del área.",
      c: "Dispersar el fino haz original de electrones acelerados en la guía de ondas.",
      d: "Medir las unidades de monitor administradas mediante canales dobles de ionización."
    },
    correct: "b"
  },
  {
    id: 297,
    question: "La estrategia terapéutica oncológica en la cual la radioterapia se administra de forma previa a la cirugía con el fin de citorreducir el tamaño tumoral se denomina:",
    options: {
      a: "Radioterapia adyuvante.",
      b: "Radioterapia neoadyuvante (o de inducción).",
      c: "Radioterapia radical curativa.",
      d: "Radioterapia paliativa de urgencia."
    },
    correct: "b"
  },
  {
    id: 298,
    question: "En la interacción de los electrones con la materia, cuando un electrón es frenado o desviado por el campo eléctrico del núcleo atómico emitiendo un fotón, este proceso se llama:",
    options: {
      a: "Colisión elástica molecular.",
      b: "Radiación de frenado (Bremsstrahlung).",
      c: "Efecto fotoeléctrico inverso.",
      d: "Producción de electrones Auger."
    },
    correct: "b"
  },
  {
    id: 299,
    question: "En referencia a la física de la atenuación de los Rayos X, el espesor de material necesario para reducir la intensidad de un haz a la mitad de su valor inicial se denomina:",
    options: {
      a: "Coeficiente de atenuación lineal másico.",
      b: "Capa de semirreducción (CSR) o espesor de semirreducción.",
      c: "Factor de transmisión de la bandeja porta-bloques.",
      d: "Anchura de la penumbra geométrica del colimador."
    },
    correct: "b"
  },
  {
    id: 300,
    question: "Al finalizar el posicionamiento del paciente y antes de realizar el disparo desde la consola exterior, la última comprobación de seguridad obligatoria en pantalla exige al Técnico Especialista confirmar:",
    options: {
      a: "La presión barométrica absoluta de la sala de control exterior.",
      b: "La identidad exacta del paciente, la correspondencia del plan cargado, la energía elegida y las unidades de monitor prescritas.",
      c: "El nivel de almacenamiento informático disponible en el disco duro central.",
      d: "La planificación horaria de los turnos de trabajo del resto de compañeros."
    },
    correct: "b"
  }
];