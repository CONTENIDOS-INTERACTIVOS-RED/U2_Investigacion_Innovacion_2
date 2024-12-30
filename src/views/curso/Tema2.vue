<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Negocios innovadores'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.svg', style='max-width: 90px').mx-auto
      .col-lg
        p.mb-0 El estudio de los #[b modelos de negocio innovadores], revela formas revolucionarias de crear, entregar y capturar valor, capaces de transformar industrias completas. Estos modelos superan las estructuras tradicionales al integrar elementos disruptivos que responden a las necesidades del mercado y aprovechan oportunidades emergentes.
    
    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6
            h4.mt-4 Características de los modelos de negocio innovadores:
            ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-terciario
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Transformación de la lógica empresarial:] redefinen la interacción con el mercado y la generación de ingresos.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Enfoque disruptivo:] incorporan plataformas digitales, economía colaborativa, suscripción, servitización o modelos circulares.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Propuestas híbridas:] combinan elementos digitales y físicos para crear experiencias únicas.
              
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t2/2.svg', alt='')
    .bg-full-width.bg-color-9.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 En #[b Colombia], estos modelos están ganando terreno en sectores como el tecnológico, social y financiero, donde startups y empresas tradicionales, integran prácticas innovadoras para mantenerse competitivas.
    p.mb-4.fw-bold(data-aos="fade-up") Componentes esenciales de un modelo de negocio innovador:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/3.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Propuesta de valor')
            p.mb-0 Solución única ofrecida al cliente
          div(numero='2' titulo='Segmentos de clientes')
            p.mb-0 Público objetivo claramente definido.
          div(numero='3' titulo='Canales')
            p.mb-0 Vías utilizadas para entregar valor al cliente.
          div(numero='4' titulo='Relaciones con clientes')
            p.mb-0 Estrategias para construir y mantener relaciones.
          div(numero='5' titulo='Fuentes de ingresos')
            p.mb-0 Formas de monetizar la propuesta de valor.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='6' titulo='Recursos claves')
            p.mb-0 Activos necesarios para operar el modelo.
          div(numero='7' titulo='Actividades claves')
            p.mb-0 Procesos y tareas esenciales para crear valor.
          div(numero='8' titulo='Alianzas estratégicas')
            p.mb-0 Socios que fortalecen la ejecución del modelo.
          div(numero='9' titulo='Estructura de costos')
            p.mb-0 Modelo financiero para sostener la operación.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png')

    .bg-full-width.bg-color-10.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t2/5.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Estos elementos permiten la creación de configuraciones únicas, generando ventajas competitivas sostenibles.
            p.mb-0.fw-bold Los casos prácticos en Colombia, son: 
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/6.png', alt='')
            .col-sm-12.col-lg-7
              h5.mb-3 Sector social
              p.mb-0 Modelos innovadores de negocio, como las empresas B y los emprendimientos sociales, combinan impacto social con sostenibilidad financiera. Por ejemplo, iniciativas que conectan comunidades rurales con mercados nacionales, mediante plataformas tecnológicas, han transformado economías locales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/7.png', alt='')
            .col-sm-12.col-lg-7
              h5.mb-3 Sector tecnológico
              p.mb-0 Las empresas de software como servicio (SaaS) han desarrollado modelos escalables que integran servicios en la nube con personalización, respondiendo a las necesidades específicas del mercado latinoamericano.

    .bg-full-width.bg-fondo-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-7
            p.mb-4  Como mencionan Puello-Socarrás y Ballén Buitrago (2021), estos modelos no solo generan valor económico, sino que también abordan problemas sociales y ambientales cuando se desarrollan con un enfoque integral. Según Miranda González (2023), la auténtica innovación requiere un enfoque sistemático que combine creatividad estratégica con un conocimiento profundo de las necesidades del mercado. Estas prácticas permiten que las organizaciones se adapten y prosperen en entornos altamente competitivos y en constante transformación.
            .bg-color-white.shadow-soft.mb-0
              .px-5.py-4
                .row.justify-content-around.align-items-center
                  .col-md-auto.d-none.d-lg-block
                      img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
                  .col
                    .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Modelos de Negocio Innovadores 
                          p.mb-0 Para ampliar los conocimientos en los temas de investigación que ha estudiado, se recomienda explorar el siguiente video:
                        .col-sm-auto
                          a.boton.color-acento-botones(href='https://youtu.be/uWzelPlIGYs?si=HyWbzK8k7rz5oyAq' target='_blank')
                            span Ver video
                            i.fas.fa-arrow-right
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t2/8.svg', alt='')


    h2.mb-3(data-aos="fade-up") Estrategias de entrada al mercado
    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/9.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Las estrategias de entrada al mercado, son decisiones claves que determinan el éxito inicial y el desarrollo futuro de proyectos innovadores. Elegir una estrategia adecuada, requiere analizar el mercado objetivo, los recursos disponibles, las barreras de entrada y las capacidades organizacionales existentes, para competir de manera efectiva. Existen diferentes aproximaciones con ventajas y desafíos específicos:

    .bg-full-width.bg-fondo-8.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.mb-0
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t2/10.svg')
                  h4.text-center Entrada directa al mercado
                  p.mb-0.text-center Permite mayor control, pero requiere una inversión significativa.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t2/11.svg')
                  h4.text-center Alianzas estratégicas
                  p.mb-0.text-center Aprovechan la experiencia de actores locales, reduciendo riesgos.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t2/12.svg')
                  h4.text-center Licencias o franquicias
                  p.mb-0.text-center Generan ingresos pasivos, pero limitan el control sobre operaciones.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t2/13.svg')
                  h4.text-center Adquisiciones
                  p.mb-0.text-center Aseguran presencia inmediata, aunque con altos costos.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t2/14.svg')
                  h4.text-center Desarrollo gradual del mercado
                  p.mb-0.text-center Reduce riesgos, al permitir un crecimiento orgánico.

          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/t2/15.png')

    .bg-full-width.bg-color-19.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold En el caso colombiano, las estrategias exitosas han considerado factores como:
    .bg-full-width.bg-color-1.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-7.d-none.d-lg-block
            img(src='@/assets/curso/t2/16.png')
          .col-sm-12.col-lg-5
            ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-terciario
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Alianzas locales:] aprovechan redes empresariales y adaptan propuestas de valor, a las condiciones socioeconómicas.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Estrategias graduales:] adoptadas por plataformas de comercio electrónico, iniciando en nichos específicos para expandirse posteriormente, fortaleciendo la logística y construyendo una base sólida de usuarios.


    p.mb-4(data-aos="fade-up") Según Martínez-Gómez (2024), en Innovación y competitividad en las organizaciones, el éxito de una estrategia depende de su alineación con las competencias organizacionales, las características del mercado y las tendencias competitivas. Este enfoque asegura la viabilidad a largo plazo de iniciativas innovadoras y consolida su posición en mercados complejos.
    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Gestión de la innovación
             p.mb-4 Se invita a leer el documento para comprender cómo la gestión de la innovación, aborda la financiación estratégica, el escalamiento eficiente y la sostenibilidad, como pilares para transformar ideas en realidades impactantes.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Gestión de la innovación
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/17.png', alt='')

    .bg-full-width.bg-color-white.shadow-soft.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Temas sociales, ambientales y de gobernanza
                p.mb-0 Para ampliar los conocimientos en los temas de investigación estudiados, se sugiere explorar el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://youtu.be/ln-UqKWZDZA?si=-nnIsjJxMdcAJ-Fv' target='_blank')
                  span Ver video
                  i.fas.fa-arrow-right

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
