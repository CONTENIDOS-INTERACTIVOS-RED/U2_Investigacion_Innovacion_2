<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Introducción'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: imagen-texto-color 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 En el desarrollo ágil de software, la correcta gestión de equipos representa un factor decisivo para alcanzar productos de calidad en tiempos competitivos. La metodología Scrum, una de las más difundidas dentro del enfoque ágil, proporciona un marco estructurado que promueve la colaboración, la organización efectiva del trabajo y la entrega continua de valor. En esta unidad, se profundiza en los componentes claves de Scrum relacionados con la gestión de equipos, los roles esenciales que lo componen, los ciclos iterativos denominados sprints y las herramientas digitales que facilitan su implementación.

          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Al finalizar esta unidad, se espera que se comprendan y apliquen los fundamentos organizativos de Scrum, se identifiquen con claridad los roles y responsabilidades del Product Owner, el Scrum Master y el equipo de desarrollo, se reconozca la importancia del ciclo de Sprint en la planificación y ejecución del trabajo, y se valoren herramientas como JIRA y Trello, para el seguimiento de actividades en equipos ágiles.

      // Bloque: iconobloque-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-4.p-4.mb-5(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este conocimiento resulta fundamental para desenvolverse en entornos laborales modernos, donde se privilegia la adaptabilidad, la colaboración y la entrega incremental de productos. Dominar estos conceptos permite una participación activa y estratégica en equipos de desarrollo, contribuyendo de forma significativa, a la eficiencia del proceso y a la satisfacción del cliente. Como ejemplo, muchas empresas tecnológicas emplean Scrum para iterar rápidamente sus productos digitales, ajustándose a los cambios del mercado y a las necesidades del usuario.

          p(data-aos="fade-left") #[strong La unidad se estructura en tres temas principales:]

        .col-lg-4
          figure
            img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")

      // Bloque: iconos-color (3 columnas)
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 1
                p.mb-0 Los roles en Scrum.

        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 2
                p.mb-0 Los ciclos de Sprint.

        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 3
                p.mb-0 Las herramientas de seguimiento.

      // Bloque: bg-full-color
      .bg-full-width.bg-color-1
        .px-4.px-md-5.py-4
          p.mb-3 Cada tema se desglosa en subtemas que permitirán un abordaje progresivo y práctico del contenido. Se invita a interactuar activamente con los recursos disponibles, participar en las actividades propuestas y reflexionar sobre la aplicación de estos conceptos en contextos reales.
          
          p.mb-0 Se recomienda revisar previamente, los fundamentos generales de metodologías ágiles abordados en la unidad anterior, con el fin de contextualizar mejor los contenidos y aprovechar al máximo las actividades formativas de esta sección.
      

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
