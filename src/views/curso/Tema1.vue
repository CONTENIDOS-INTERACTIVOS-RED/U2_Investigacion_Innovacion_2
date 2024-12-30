<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Gestión de la innovación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 La gestión de la innovación en Colombia, presenta un ecosistema dinámico que impulsa la competitividad y el desarrollo sostenible en un entorno globalizado. Este sistema integra actores claves, como entidades gubernamentales, empresas privadas, universidades y centros de investigación, quienes trabajan conjuntamente, para fomentar la innovación a través de políticas públicas, incentivos fiscales y programas de apoyo.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/1.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/2.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Marco normativo
            p.mb-0.text-center Basado en directrices como el CONPES 4069 y la Ley 1286, que fortalecen el Sistema Nacional de Ciencia, Tecnología e Innovación. 
            p.mb-0.text-center #[b Ejemplo:] permiten diseñar estrategias alineadas con prioridades nacionales, como proyectos en agroindustria.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/3.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Sectores innovadores
            p.mb-0.text-center Sectores claves, como tecnológico, agroindustrial y de servicios, adoptan tecnologías y modelos de negocio innovadores. 
            p.mb-0.text-center #[b Ejemplo:] Tecnologías 4.0 en agricultura y transformación digital en servicios financieros.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/4.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Herramientas de gestión
            p.mb-0.text-center Metodologías ágiles y herramientas como incubadoras y aceleradoras, para fomentar la innovación empresarial. 
            p.mb-0.text-center #[b Ejemplo:] Startups en fintech, desarrollan soluciones tecnológicas apoyadas por incubadoras.

    .bg-full-width.bg-fondo-7.mb-5(data-aos="fade-up")
      .px-4.px-md-5.pb-md-3
        h2.mb-3 Proceso de gestión de la innovación
        p.mb-5.fw-bold La gestión de la innovación en Colombia incluye etapas sistemáticas como:
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-3
            .card-color.h-100
              .card-color__title.bg-color-14.p-3
                h4.mb-0.text-center Planificación estratégica
              .card-color__text.bg-color-1.p-3
                p.mb-0.text-center Identificación de oportunidades y definición de objetivos.
        
          .col-sm-12.col-lg-3
            .card-color.h-100
              .card-color__title.bg-color-15.p-3
                h4.mb-0.text-center.text-white Asignación de recursos 
              .card-color__text.bg-color-12.p-3
                p.mb-0.text-center Destinación de capital humano, financiero y tecnológico.

      
          .col-sm-12.col-lg-3
            .card-color.h-100
              .card-color__title.bg-color-16.p-3
                h4.mb-0.text-center Desarrollo de capacidades
              .card-color__text.bg-color-8.p-3
                p.mb-0.text-center Creación de habilidades organizacionales y culturales.

        
          .col-sm-12.col-lg-3
            .card-color.h-100
              .card-color__title.bg-color-17.p-3
                h4.mb-0.text-center Evaluación de resultados
              .card-color__text.bg-color-3.p-3
                p.mb-0.text-center Medición del impacto en productividad y competitividad.

        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/5.svg', alt='')
          .col-sm-12.col-lg-8
            h2.mb-3 Avances y retos
            p.mb-5 Según el Observatorio Colombiano de Ciencia y Tecnología (2023), la inversión en innovación ha crecido constantemente, aunque aún está por debajo de otros países de la región. Germán García et al. (2022), señalan la necesidad de un enfoque sistémico que integre tecnología, organización y cultura. López Cantos (2018), subraya la importancia de fortalecer capacidades internas y redes de colaboración.
            .bg-color-white.shadow-soft.mb-5
              .px-5.py-4
                .row.justify-content-around.align-items-center
                  .col-md-auto.d-none.d-lg-block
                      img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
                  .col
                    .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Portal oficial de Colombia Fintech
                          p.mb-0 Para ampliar los conocimientos sobre investigación científica, se recomienda consultar: Colombia Fintech. (s.f.). Portal oficial de Colombia Fintech. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href='https://colombiafintech.co/' target='_blank')
                           span Ir al sitio
                           i.fas.fa-arrow-right



    #t_1_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.1] Ecosistema de innovación colombiano
    p.mb-4(data-aos="fade-up") El ecosistema de innovación en Colombia, se define como una red integrada por actores, instituciones y relaciones que trabajan en conjunto, para impulsar el desarrollo tecnológico y la innovación. A lo largo de las últimas décadas, este ecosistema ha evolucionado de manera significativa, adaptándose a las dinámicas globales y locales.
    .bg-full-width.bg-fondo-8.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.mb-0
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/7.svg')
                  h4.text-center Universidades
                  p.mb-0.text-center Fomentan la investigación y formación de talento en innovación.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/8.svg')
                  h4.text-center Centros de investigación
                  p.mb-0.text-center Generan conocimiento y desarrollan soluciones tecnológicas.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/9.svg')
                  h4.text-center Empresas y startups
                  p.mb-0.text-center Implementan innovaciones para responder a desafíos del mercado.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/10.svg')
                  h4.text-center Entidades gubernamentales
                  p.mb-0.text-center Diseñan políticas y financian proyectos de innovación.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/11.svg')
                  h4.text-center Incubadoras y aceleradoras
                  p.mb-0.text-center Apoyan el crecimiento y consolidación de empresas emergentes.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/12.svg')
                  h4.text-center Fondos de inversión
                  p.mb-0.text-center Proveen financiamiento para proyectos tecnológicos e innovadores.

          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/t1/6.png')

    h2.mb-3(data-aos="fade-up") Políticas públicas y regulación
    .bg-full-width.bg-color-17.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 El liderazgo de Minciencias se complementa con las iniciativas del MinTIC y el Ministerio de Industria y Comercio, que desarrollan políticas e incentivos para fomentar la innovación. Estas acciones buscan consolidar un marco normativo y financiero, que impulse la investigación y el desarrollo, en sectores estratégicos de la economía.
    .bg-full-width.bg-fondo-9.mb-5(data-aos="fade-up")
      .px-5.pt-4.mb-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-8.mb-0
              h4 Casos de éxito
              p.mb-0 Ejemplos como Rappi, Platzi y Tpaga, reflejan el impacto positivo del ecosistema. Estas empresas han aprovechado los programas de aceleración, financiamiento y mentorías, ofrecidos por incubadoras y fondos de inversión, para escalar sus operaciones y consolidarse en mercados nacionales e internacionales.
          .col-sm-12.col-lg-4.d-none.d-lg-block.mb-0
            img.mb-0(src='@/assets/curso/t1/13.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-up")
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/14.png', alt='')
          .col-sm-12.col-lg-8
            p.mb-3 Perdomo Charry (2020) destaca que la interacción entre los actores del ecosistema ha facilitado la creación de redes de colaboración, permitiendo desarrollar soluciones innovadoras para desafíos locales y regionales. Este enfoque colaborativo, ha generado valor compartido, fortaleciendo la capacidad de innovación en el país.
            .bg-color-white.shadow-soft.mb-0
              .px-5.py-4
                .row.justify-content-around.align-items-center
                  .col-md-auto.d-none.d-lg-block
                      img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
                  .col
                    .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Investigación científica
                          p.mb-0 Para ampliar los conocimientos sobre investigación científica, se sugiere consultar el siguiente recurso:
                          p.mb-0 Rappi. (s.f.). Portal oficial de Rappi Colombia. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href='https://www.rappi.com.co/' target='_blank')
                           span Ir al sitio
                           i.fas.fa-arrow-right


    h2.mb-3(data-aos="fade-up") Dinámica de innovación
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/15.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Avanzando hacia la comprensión de la innovación sectorial, se reconoce cómo las dinámicas de innovación moldean y transforman distintos sectores económicos y sociales. Cada sector presenta sus particularidades y ritmos de innovación, adaptándose a necesidades específicas y contextos únicos.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/16.png', alt='')
    .bg-color-18.mb-5(data-aos="fade-up")
      .p-5
        ImagenInfografica.color-secundario.mb-0
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1/17.svg')
          .tarjeta.bg-white.p-3(x="17.7%" y="88.5%" numero="+")
            .h5.mb-2 Agropecuario
            p Se centra en la optimización de procesos productivos y adopción de tecnologías como riego inteligente, uso de drones y desarrollo de variedades resistentes a plagas. Estas iniciativas, incrementan la productividad y favorecen la sostenibilidad.

          .tarjeta.bg-white.p-3(x="36.2%" y="10.3%" numero="+")
            .h5.mb-2 Industrial
            p Los principales motores son la automatización y la eficiencia energética, permitiendo mayor competitividad en mercados globalizados.

          .tarjeta.bg-white.p-3(x="57.8%" y="88.5%" numero="+")
            .h5.mb-2 Tecnológico
            p Innovación caracterizada por ciclos rápidos de desarrollo y la búsqueda constante de soluciones digitales.
            p #[b Ejemplo:] startups en fintech y edtech.

          .tarjeta.bg-white.p-3(x="75.6%" y="10.7%" numero="+")
            .h5.mb-2 Comercial
            p Enfocado en la mejora de la experiencia del cliente y la optimización de canales de distribución, mediante herramientas avanzadas.

          .tarjeta.bg-white.p-3(x="94.2%" y="88.5%" numero="+")
            .h5.mb-2 Social
            p Aborda problemáticas comunitarias y busca mejorar la calidad de vida de poblaciones vulnerables, mediante proyectos innovadores.


    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/18.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-3 En el caso colombiano, la evolución de estas dinámicas ha sido significativa. Programas como Colombia Científica y los Centros de Desarrollo Tecnológico Sectorial, han fomentado la colaboración entre universidades, empresas y el Estado, fortaleciendo el ecosistema de innovación. En el sector agropecuario, por ejemplo, la implementación de sistemas de riego inteligente y monitoreo con drones, ha transformado prácticas tradicionales, logrando incrementos sostenibles en la productividad.
        .bg-color-white.shadow-soft.mb-0
          .px-5.py-4
            .row.justify-content-around.align-items-center
              .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
              .col
                .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Talleres de socialización del MECE
                      p.mb-0 Para ampliar los conocimientos en los temas de investigación estudiados, se sugiere explorar el siguiente video:
                    .col-sm-auto
                      a.boton.color-acento-botones(href='https://youtu.be/g9aQUC-Pqu4?si=iRMSDyFTyk17lRT9' target='_blank')
                        span Ver video
                        i.fas.fa-arrow-right

    #t_1_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.2] Transferencia de tecnología en los sectores
    .bg-full-width.bg-color-16.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold La transferencia de tecnología en Colombia, se ha convertido en un eje clave para el desarrollo económico y la competitividad. Este proceso implica la difusión de conocimientos, técnicas y productos innovadores, desde el ámbito académico y de investigación hasta el sector empresarial y productivo.

    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h3.mb-1 Transferencia tecnológica
            p.mb-0 Para ampliar los conocimientos en los temas de investigación estudiados, se sugiere explorar el siguiente video:
          .col-sm-auto
            a.boton.color-acento-botones(href='https://youtu.be/v6HIfBbkw20?si=RnU3kvXvMg7mXQMT' target='_blank')
              span Ver video
              i.fas.fa-arrow-right

    #t_1_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.3] Entorno del negocio
    p.mb-5(data-aos="fade-up") El entorno del negocio es un ecosistema dinámico que impacta directamente en el desarrollo y éxito de las empresas. Este entorno se compone de factores interrelacionados, que moldean tanto las oportunidades como los desafíos empresariales.
    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Económicos
              p Influyen en la planificación financiera a través de tasas de interés, inflación y tipo de cambio.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/19.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Políticos y legales
              p Determinan el marco regulatorio y las políticas que afectan la operación empresarial.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/20.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Sociales
              p Cambian las preferencias y comportamientos del consumidor, exigiendo ajustes en productos y servicios.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/21.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Tecnológicos
              p Transforman los modelos de negocio, mediante la digitalización y la innovación.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/22.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ambientales
              p Impulsan prácticas sostenibles y regulaciones relacionadas con el impacto ecológico.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/23.png', alt='')


    .bg-full-width.bg-fondo-10.mb-5(data-aos="fade-up")
      .px-5.pt-0.mb-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-8.mb-0
              p.mb-0  En Colombia, el entorno empresarial ha evolucionado significativamente, en la última década. Factores como la transformación digital, los acuerdos comerciales internacionales y el enfoque en sostenibilidad, han generado tanto oportunidades como retos. La pandemia, por ejemplo, aceleró la adopción del comercio electrónico, obligando a muchas empresas a transformar rápidamente sus modelos de negocio y reforzando la importancia de la flexibilidad estratégica.
              p.mb-0 Un caso destacado es el del sector comercial, donde la rápida digitalización, redefinió la interacción con los consumidores, priorizando el comercio electrónico y las plataformas digitales. Esto muestra cómo el entorno del negocio, exige adaptabilidad y capacidad para anticipar cambios.
          .col-sm-12.col-lg-4.d-none.d-lg-block.mb-0
            img.mb-0(src='@/assets/curso/t1/24.svg', alt='')
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/24.png', alt='')
          .col-lg-7
             h2.mb-4 Tendencias globales y locales en innovación
             p.mb-4 Se invita a explorar cómo las tendencias globales y locales en innovación están transformando los sectores productivos y sociales. Desde la adopción de tecnologías emergentes como la inteligencia artificial y la economía circular hasta iniciativas locales como ciudades inteligentes y la transformación digital de pymes en Colombia, estas tendencias redefinen la forma de crear valor.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Tendencias globales y locales en innovación

    #t_1_4.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.4] #[i RoadMap] tecnológico y embudo de ventas (#[i Pipeline])
    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
            .col-sm-12.col-lg-8
              p.mb-4 El #[i RoadMap] tecnológico es una herramienta estratégica que permite visualizar y planificar la evolución tecnológica de una organización, alineando objetivos estratégicos con capacidades tecnológicas para alcanzar metas. Este recurso integra dimensiones como mercado, producto, tecnología y recursos, estableciendo hitos y puntos críticos para la innovación. 
              .bg-color-12.p-4
                p.mb-0 En el contexto colombiano, sectores como el tecnológico y los clusters productivos, han adoptado esta herramienta con apoyo de instituciones como el SENA y Minciencias, fortaleciendo la competitividad global. Por ejemplo, en el sector del desarrollo de software, los #[i RoadMaps] han facilitado la planificación de productos y la anticipación de cambios tecnológicos, en mercados dinámicos.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/t1/25.png', alt='')
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.justify-content-center.mb-4
                  .col-sm-6.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/t1/26.svg', alt='').mx-auto
                h4.mb-2.text-center Mercado
                p.mb-0.text-center Identifica necesidades actuales y futuras, para ajustar soluciones tecnológicas.

          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.justify-content-center.mb-4
                  .col-sm-6.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/t1/27.svg', alt='').mx-auto
                h4.mb-2.text-center Producto
                p.mb-0.text-center Permite planificar la evolución de los productos, conforme a las tendencias.

          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.justify-content-center.mb-4
                  .col-sm-6.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/t1/28.svg', alt='').mx-auto
                h4.mb-2.text-center Tecnología
                p.mb-0.text-center Ayuda a seleccionar y desarrollar tecnologías claves para mantener la competitividad.

          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.justify-content-center.mb-4
                  .col-sm-6.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/t1/29.svg', alt='').mx-auto
                h4.mb-2.text-center Recursos
                p.mb-0.text-center Asegura la disponibilidad de capacidades humanas, financieras y técnicas.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/30.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 Según Martínez-Gómez (2024), el #[i RoadMap] Tecnológico, no solo es una herramienta de planificación, sino un proceso estratégico para prever cambios y alinear esfuerzos de innovación, con los objetivos organizacionales.
        .bg-color-8.p-4
          p.mb-0 El #[b embudo de ventas o pipeline], por su parte, es una herramienta que permite gestionar el proceso de conversión de prospectos en clientes. Este modelo estratégico describe el recorrido del cliente, desde el primer contacto hasta la compra, identificando y mejorando cada etapa del proceso comercial.

    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6
            h4 Las etapas del embudo de ventas y estrategias aplicadas:
            ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-terciario
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Consciencia.] Creación de contenido relevante y estrategias de alcance.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Interés.] Generación de interés mediante demostraciones de valor.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Consideración.] Resaltado de beneficios y diferenciadores del producto o servicio.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 #[b Intención.] Ofrecimiento de incentivos para avanzar hacia la compra.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 #[b Decisión.] Cierre del trato con enfoque en la satisfacción del cliente.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/31.svg', alt='')

    .bg-full-width.bg-color-16.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 En Colombia, la transformación digital ha impulsado el uso de herramientas como CRM y marketing automatizado, mejorando el seguimiento y la personalización del pipeline. Por ejemplo, empresas de retail han adoptado estrategias omnicanal que integran puntos de contacto físicos y digitales, personalizando experiencias y mejorando tasas de conversión.

    .bg-full-width.bg-color-white.shadow-soft.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h3.mb-1 Embudo de ventas
            p.mb-0 Para ampliar los conocimientos en los temas de investigación estudiados, se sugiere explorar el siguiente video:
          .col-sm-auto
            a.boton.color-acento-botones(href='https://www.youtube.com/live/zXc2YwI5xmQ' target='_blank')
              span Ver video
              i.fas.fa-arrow-right



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
