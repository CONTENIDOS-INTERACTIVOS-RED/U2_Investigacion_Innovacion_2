<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ciencia, tecnología e innovación, en Colombia'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-color-1.px-5.py-4
          p.mb-0 Para iniciar el análisis de los elementos principales del conocimiento científico desde la perspectiva de la investigación en Colombia, resulta fundamental examinar el ecosistema de ciencia, tecnología e innovación (CTeI), en el país. Este sistema, dinámico y en constante transformación, tiene como objetivo impulsar el desarrollo nacional mediante la generación y aplicación del conocimiento científico. En él participan diversos actores, desde instituciones gubernamentales, hasta centros de investigación, universidades y empresas innovadoras, quienes trabajan en conjunto para fortalecer la capacidad científica del país. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t1/2.svg', alt='')
      .col-sm-12.col-lg-9
        p.mb-3.fw-bold La estructura del sistema CTeI en Colombia, se fundamenta en un marco normativo robusto que ha evolucionado para responder a las necesidades cambiantes del país. 
        p.mb-3 Incluye componentes relacionados con la educación, la investigación, el desarrollo e innovación (I+D+I), el emprendimiento, así como desafíos y oportunidades por afrontar. De acuerdo con el Observatorio Colombiano de Ciencia y Tecnología (2021), el sistema ha evidenciado un crecimiento significativo en la última década, reflejado en el aumento de la producción científica y la formación de investigadores. Sin embargo, todavía enfrenta retos importantes en términos de inversión y coordinación, entre los actores involucrados.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Marco legal y políticas públicas de CTeI la investigación científica
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 El marco legal de la Ciencia, Tecnología e Innovación (CTeI), en Colombia, comprende leyes, decretos y documentos CONPES, entre otros, que estructuran el Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTI) y definen estrategias, programas e instrumentos. A continuación, se presentan los componentes más relevantes:
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t1/3.png', alt='')

    h2.mb-3(data-aos="flip-up") a. CONPES 4069 - Política Nacional de Ciencia, Tecnología e Innovación
    p.mb-3(data-aos="flip-up") La Política Nacional de CTeI, plasmada en el CONPES 4069 del 2021, guía el desarrollo científico y tecnológico del país, mediante directrices estratégicas que fortalecen el ecosistema de innovación. Esta política se fundamenta en cinco ejes claves:
    .bg-full-width.bg-color-3.mb-0(data-aos="flip-up")
        .px-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/4.svg', alt='')
            .col-sm-12.col-lg-5
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 1
                  span #[b Desarrollo de talento humano] para la CTeI.
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 2
                  span #[b Fortalecimiento de capacidades nacionales] de investigación.

                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 3
                  span #[b Fomento de la innovación y productividad.]

                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 4
                  span #[b Apropiación social del conocimiento.]

                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 5
                  span #[b Fortalecimiento institucional] del sistema.
    .bg-full-width.bg-color-2.mb-5(data-aos="flip-up")
      .p-4
        p.mb-0 Estos ejes buscan generar sinergias entre los actores del sistema y maximizar el impacto de las inversiones en CTeI.
    
    h2.mb-3(data-aos="flip-up") b. Ley 2162 del 2021: creación del Ministerio de Ciencia, Tecnología e Innovación
    p.mb-4(data-aos="flip-up") La Ley 2162 del 2021, marco normativo actual para la CTeI en Colombia, creó el Ministerio de Ciencia, Tecnología e Innovación, transformando el antiguo COLCIENCIAS. Entre sus objetivos destacan:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-sm-12.col-lg-4.mb-cus
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t1/5.svg").mx-auto
            .col-lg
              p.mb-0 Formular políticas públicas en CTeI.

      .col-sm-12.col-lg-4.mb-cus
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t1/6.svg").mx-auto
            .col-lg
              p.mb-0 Promover el conocimiento científico y tecnológico.

      .col-sm-12.col-lg-4.mb-cus
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t1/7.svg").mx-auto
            .col-lg
              p.mb-0 Fortalecer el SNCTI.
    p.mb-0(data-aos="flip-up") Además, esta ley establece estrategias para fomentar el desarrollo sostenible, la transferencia tecnológica y la apropiación social del conocimiento.
    .bg-full-width.bg-fondo-3.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        h2.mb-3 c. Ley 1286 del 2009: fortalecimiento del Sistema Nacional de Ciencia, Tecnología e Innovación
        p.mb-3 La Ley 1286 del 2009, consolidó las bases institucionales de la CTeI en Colombia, promoviendo la generación, apropiación y divulgación del conocimiento científico. Entre sus logros destacan:
        
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.mb-cus
            .bg-color-5.p-4.h-100.br-15
              .row.align-items-start.flex-column
                .col-auto
                  .h2.mb-0.text-center.text-white 01
                .col.text-center
                  p.mb-0 Aumento del 45 % en grupos de investigación reconocidos.

          .col-sm-12.col-lg-4.mb-cus
            .bg-color-6.p-4.h-100.br-15
              .row.align-items-start.flex-column
                .col-auto
                  .h2.mb-0.text-center.text-white 02
                .col.text-center.px-3
                  p.mb-0.text-white Incremento en la participación empresarial en actividades de innovación tecnológica.

          .col-sm-12.col-lg-4.mb-cus
            .bg-color-7.p-4.h-100.br-15
              .row.align-items-start.flex-column
                .col-auto
                  .h2.mb-0.text-center.text-white 03
                .col.text-center.px-3
                  p.mb-0 Esta Ley marcó un hito en la canalización de recursos y la colaboración entre los actores del sistema.
    
    h2.mb-3(data-aos="flip-up")  d. Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTI)
    p.mb-3(data-aos="flip-up") El SNCTI, formalizado por el Decreto 1666 del 2021, es un ecosistema integrado que conecta a instituciones públicas, academia, sector privado y sociedad civil, para fortalecer las capacidades científicas y tecnológicas del país. Su estructura incluye:
    TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="CODECTI (Consejos Departamentales de CTeI)" :icono="require('@/assets/curso/temas/icon_tabB.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3.d-none.d-lg-block: img(src='@/assets/curso/t1/8.png', alt='')
          .col-lg-7
            h4 CODECTI (Consejos Departamentales de CTeI)
            p.mb-0 Máxima instancia de gobernanza a nivel regional.

      .py-4.py-md-5(titulo="Comités Universidad-Empresa-Estado" :icono="require('@/assets/curso/temas/icon_tabB.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3.d-none.d-lg-block: img(src='@/assets/curso/t1/9.png', alt='')
          .col-lg-7
            h4 Comités Universidad-Empresa-Estado
            p.mb-0 Promueven la colaboración intersectorial.
    .bg-full-width.bg-color-8.mb-0(data-aos="flip-up")
      .px-5.py-4
        .row.align-items-center
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/t1/10.svg").mx-auto
          .col-lg
            p.mb-0 En las regiones, los CODECTI reglamentados por el Decreto 0979 del 2024, actúan como organismos claves para articular la política de CTeI, con las necesidades locales.


    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="flip-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-12
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 70px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Sistema General de Regalías
                      p.mb-0 Se sugiere revisar el siguiente recurso, que profundiza en el tema del Sistema General de Regalías:
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=173951" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
    h2.mb-3(data-aos="flip-up") e. Instrumentos de financiamiento: Fondo de CTeI del Sistema General de Regalías (SGR)
    p.mb-4(data-aos="flip-up") El Fondo de CTeI del SGR, asigna el 10 % de las regalías nacionales a proyectos de CTeI, fomentando la descentralización de la investigación y fortaleciendo capacidades locales de innovación. Este mecanismo apoya:
    .bg-full-width.bg-color-2.mb-5(data-aos="flip-up")
        .px-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 1
                  span Creación de nuevos grupos de investigación en regiones históricamente desfavorecidas.
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 2
                  span Desarrollo de proyectos empresariales que integran tecnología y sostenibilidad.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/t1/11.svg', alt='')

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/t1/12.svg").mx-auto
      .col-lg
        p.mb-0 El marco legal y las políticas públicas en CTeI, han permitido consolidar un ecosistema articulado que promueve el desarrollo científico, tecnológico y la innovación en Colombia. A través de instrumentos como el CONPES 4069, las Leyes 2162 y 1286, el SNCTI y el Fondo de Regalías, se ha fortalecido en la investigación, la transferencia de tecnología y la apropiación social del conocimiento, logrando así avances significativos en la descentralización y sostenibilidad del desarrollo científico.



    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Educación y formación en CTeI

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/14.png").mx-auto
      .col-sm-12.col-lg-8
        .bg-color-1.mb-3
          .px-3.py-4
            .row.align-items-start
              .col-lg-2.d-none.d-lg-block
                img.w-75(src="@/assets/curso/t1/13.svg").mx-auto
              .col-lg
                p.mb-0 Además de la estructura legal, institucional y los instrumentos financieros para la Ciencia, Tecnología e Innovación (CTeI) en Colombia, una dimensión esencial, es la educación del talento humano y la formación de nuevas generaciones de científicos. En el país, se han diseñado estrategias, tanto para la educación superior como para los niveles de educación básica, secundaria y media, aunque persisten algunas brechas que requieren atención. A continuación, se detallan los principales aspectos de este enfoque.
        h2.mb-3 a. Fomento del talento humano: programas de becas, doctorados y estímulos para la investigación
        p.mb-0 Colombia cuenta con una variedad de programas que fortalecen el capital humano en CTeI. Estos incluyen becas para estudios de posgrado, apoyo a la formación doctoral y diferentes incentivos para promover la carrera investigativa. Estas estrategias están dirigidas a incrementar el número de investigadores y a fortalecer las capacidades nacionales en CTeI.
    .bg-full-width.bg-slyder.p-5.mb-5(data-aos="flip-up")
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Programas de apoyo
            p.mb-0  Estos programas incluyen becas completas para doctorados, estancias de investigación, participación en eventos científicos y formación en el exterior, liderados por el Ministerio de Ciencia, Tecnología e Innovación.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t1/15.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Impacto
            p.mb-0 Según Germán García et al. (2022), han fortalecido las instituciones académicas, creando redes de conocimiento y fomentado la formación de investigadores que contribuyen al desarrollo científico del país.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t1/16.png', alt='')

    .bg-full-width.bg-fondo-4.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        h2.mb-3 b. Integración de CTeI en el sistema educativo: desarrollo de competencias en áreas STEM
        p.mb-3 El enfoque en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM), busca formar una nueva generación de profesionales con competencias interdisciplinarias y prácticas para enfrentar los retos actuales. Este enfoque se ha extendido a la educación básica, secundaria y superior, mediante metodologías innovadoras como el aprendizaje basado en proyectos.
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t1/17.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Programas y estrategias STEAM
                    p.mb-0.text-center Los Ministerios de Educación, Ciencia, Tecnología e Innovación (CTeI) y TIC, desarrollan iniciativas para modernizar laboratorios, capacitar docentes y crear recursos educativos especializados. La política nacional de CTeI 2022-2031, considera estas áreas una prioridad estratégica.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t1/18.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Beneficios del enfoque STEM
                    p.mb-0.text-center Según López Cantos (2018), integrar las áreas STEM en el currículo educativo, prepara a los estudiantes para los desafíos de la cuarta revolución industrial, promoviendo la innovación y la competitividad.

    h2.mb-3(data-aos="flip-up") c. Brechas educativas en CTeI: desafíos en la formación en regiones rurales y comunidades vulnerables
    p.mb-3(data-aos="flip-up") A pesar de las estrategias desarrolladas, persisten importantes desigualdades entre las zonas urbanas y rurales, así como en comunidades vulnerables. Estas brechas se reflejan en aspectos como:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/19.png")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Acceso desigual") Limitaciones en conectividad digital, escasez de laboratorios y dificultades para atraer docentes capacitados, afectan las oportunidades de formación científica en zonas rurales.
          div(numero="2" titulo="Impacto en indicadores de formación científica") Según el Observatorio Colombiano de Ciencia y Tecnología (2023), estas brechas restringen significativamente el desarrollo territorial y la innovación regional.
          div(numero="3" titulo="Respuestas y estrategias") Programas de educación virtual en CTeI han facilitado la participación de estudiantes rurales en actividades científicas, destacando el potencial de tecnologías digitales. Acevedo-Jaramillo et al. (2022) subrayan la importancia de estrategias adaptadas a contextos locales para garantizar una formación equitativa.



    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-color-2.mb-3
          .px-3.py-4
            .row.align-items-start
              .col-lg-2.d-none.d-lg-block
                img.w-75(src="@/assets/curso/t1/21.svg").mx-auto
              .col-lg
                p.mb-0 La educación y formación en CTeI son fundamentales para garantizar el desarrollo científico y tecnológico de Colombia. A través de programas de apoyo al talento humano, la integración de las áreas STEM en el sistema educativo y estrategias para reducir brechas en comunidades vulnerables, el país está fortaleciendo su ecosistema científico. Sin embargo, es necesario continuar trabajando en la implementación de políticas diferenciadas que consideren las particularidades de cada región y aseguren el acceso equitativo a oportunidades educativas en CTeI.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/20.png").mx-auto

    .bg-full-width.bg-color-3.mb-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/22.png', alt='')
          .col-sm-12.col-lg-7
            h2.mb-4 Viabilidad económica
            p.mb-4 Se invita a leer el documento sobre #[b viabilidad económica], que presenta un análisis detallado de la inversión inicial, los costos proyectados y los ingresos estimados al primer año de operación. Se incluye un estado de resultados proyectado que refleja una utilidad neta de $6,020 USD y un balance general que evidencia una sólida estructura financiera con activos por $31,000 USD. Este análisis permite evaluar la rentabilidad y sostenibilidad del proyecto, proporcionando herramientas claves para la toma de decisiones estratégicas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/PEND.pdf')" target="_blank")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>  Viabilidad económica

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Retos y oportunidades de CTeI en Colombia
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        p.mb-3 A pesar de los avances logrados en ciencia, tecnología e innovación (CTeI) en Colombia, el país aún enfrenta desafíos significativos que requieren atención prioritaria. Estos incluyen la inclusión y democratización de la ciencia, la reducción de brechas regionales, la equidad de género, la fuga de cerebros y la falta de articulación entre actores claves. 
        .bg-color-3.p-4.mb-0
          p.mb-0 Al mismo tiempo, Colombia tiene oportunidades notables, como su potencial en biodiversidad, energías renovables y el crecimiento del ecosistema emprendedor, que pueden ser aprovechadas estratégicamente.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/23.svg").mx-auto
    h2.mb-3(data-aos="flip-up") a. Ciencia ciudadana: participación de la sociedad en proyectos científicos y tecnológicos
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/t1/24.svg").mx-auto
      .col-lg
        p.mb-0 La ciencia ciudadana está emergiendo como una herramienta clave para democratizar el conocimiento científico en Colombia, involucrando a la sociedad en procesos de investigación colaborativa. Este enfoque permite a los ciudadanos contribuir activamente al monitoreo ambiental, la recolección de datos sobre biodiversidad y el análisis de fenómenos sociales.

    .bg-full-width.bg-slyder.p-5.mb-5(data-aos="flip-up")
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Participación comunitaria
            p.mb-0  El Instituto Humboldt resalta el impacto de proyectos de ciencia ciudadana que incluyen monitoreos participativos y la creación de bases de datos con aportes comunitarios. Esto ha ampliado el alcance y la profundidad de la investigación científica.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t1/25.png', alt='')

        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Beneficios
            p.mb-0  Según Germán García et al. (2022), la ciencia ciudadana fomenta una mayor apropiación social del conocimiento y promueve una cultura científica inclusiva, enriqueciendo la investigación con perspectivas diversas.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t1/26.png', alt='')
    .bg-full-width.bg-fondo-5.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        h2.mb-3 b. Reducción de brechas regionales: estrategias para llevar CTeI a regiones apartadas y poblaciones indígenas
        p.mb-3 La desigualdad en el acceso a la ciencia y la tecnología, es uno de los retos más críticos en Colombia. Para abordar estas brechas, se han diseñado estrategias que incluyen infraestructura científica descentralizada y programas de capacitación, adaptados a las necesidades locales.
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t1/27.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Proyectos específicos
                    p.mb-0.text-center Según el DNP (2021), se han ejecutado más de 100 proyectos para fortalecer las capacidades científicas en regiones apartadas, con una inversión de 500 mil millones de pesos, en los últimos cinco años.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t1/28.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Conocimiento tradicional
                    p.mb-0.text-center López Cantos (2018), destaca la importancia de integrar el conocimiento ancestral en las estrategias de CTeI, mostrando cómo la combinación de saberes locales y la ciencia moderna, pueden generar soluciones sostenibles.

    h2.mb-3(data-aos="flip-up") c. Género y CTeI: promoción de la participación de mujeres en ciencia y tecnología
    p.mb-3(data-aos="flip-up") La promoción de la equidad de género es esencial para construir un ecosistema de CTeI más inclusivo en Colombia. Esto incluye iniciativas para aumentar la participación de mujeres en áreas STEM (ciencia, tecnología, ingeniería y matemáticas).
    TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Avances" :icono="require('@/assets/curso/temas/icon_tabB.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3.d-none.d-lg-block: img(src='@/assets/curso/t1/29.png', alt='')
          .col-lg-7
            h4 Avances
            p.mb-0 AvancDe acuerdo con el Observatorio Colombiano de Ciencia y Tecnología (2023), la participación femenina en grupos de investigación ha crecido un 35 % en los últimos cinco años.es

      .py-4.py-md-5(titulo="Barreras y soluciones" :icono="require('@/assets/curso/temas/icon_tabB.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3.d-none.d-lg-block: img(src='@/assets/curso/t1/30.png', alt='')
          .col-lg-7
            h4 Barreras y soluciones
            p.mb-0 Maz-Machado et al. (2022), resaltan la necesidad de políticas afirmativas y programas específicos para fomentar el liderazgo femenino, en la investigación, subrayando que la diversidad de género enriquece la producción de conocimiento.
    h2.mb-3(data-aos="flip-up") d. Baja inversión en I+D, fuga de cerebros y falta de articulación entre actores
    p.mb-3(data-aos="flip-up") La inversión en investigación y desarrollo (I+D), sigue siendo baja en comparación con los estándares internacionales, y la fuga de cerebros es un problema persistente, en el sistema de CTeI.
    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-10
            img(src="@/assets/curso/t1/31.svg").mx-auto

    h2.mb-3(data-aos="flip-up") e. Colombia como país megadiverso, potencial en energías renovables y crecimiento del ecosistema emprendedor
    p.mb-3(data-aos="flip-up") En contraste con los desafíos mencionados, Colombia tiene un gran potencial en áreas estratégicas que pueden impulsar su desarrollo en CTeI.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Megadiversidad") Colombia es uno de los países más biodiversos del mundo, con oportunidades únicas para investigaciones en biotecnología, servicios ecosistémicos y bioeconomía. El Instituto Humboldt estima que solo una fracción de este potencial, ha sido explorado.
          div(numero="2" titulo="Energías renovables") El país cuenta con un gran potencial para el desarrollo de energía solar, eólica y biomasa, lo que constituye una oportunidad clave para la transición hacia una economía sostenible.
          div(numero="3" titulo="Ecosistema emprendedor") Según el Ministerio de Comercio (2023), las startups enfocadas en biodiversidad y energías renovables, han atraído más de 200 millones de dólares en inversión, en los últimos dos años.

      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/t1/32.png")


    .bg-full-width.bg-color-2.mb-0(data-aos="flip-up")
      .px-5.py-4
        .row.align-items-center
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/t1/33.svg").mx-auto
          .col-lg
            p.mb-0 Colombia enfrenta desafíos estructurales en su sistema de CTeI, pero también cuenta con oportunidades significativas que, si se aprovechan adecuadamente, pueden posicionar al país como un líder en innovación y sostenibilidad en la región. La integración de la ciencia ciudadana, el fortalecimiento de la equidad de género, la reducción de brechas regionales y el desarrollo de áreas estratégicas como la biodiversidad y las energías renovables, son pasos esenciales para consolidar un ecosistema de CTeI inclusivo, competitivo y orientado al futuro.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
