<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aliados para los procesos de innovación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-full-width.bg-color-12.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/1.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Los aliados en innovación proporcionan recursos, conocimientos y apoyo clave para desarrollar proyectos exitosos. En Colombia, destacan instituciones como Minciencias, iNNpulsa, el SENA y las Cámaras de Comercio, que facilitan desde la ideación hasta la comercialización.


    p.mb-4.fw-bold(data-aos="fade-up") Los tipos de aliados son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
          .col-sm-12.col-lg-3.mb-cus
            .card-color.h-100
              .card-color__title.bg-color-14.p-3.h-50
                h4.mb-0.text-center Gubernamentales
              .card-color__text.bg-color-1.p-3.h-50
                p.mb-0.text-center Financiamiento y políticas públicas.
        
          .col-sm-12.col-lg-3.mb-cus
            .card-color.h-100
              .card-color__title.bg-color-15.p-3.h-50
                h4.mb-0.text-center.text-white Universidades y centros de investigación
              .card-color__text.bg-color-12.p-3.h-50
                p.mb-0.text-center Capacidades técnicas.
      
          .col-sm-12.col-lg-3.mb-cus
            .card-color.h-100
              .card-color__title.bg-color-16.p-3.h-50
                h4.mb-0.text-center Organizaciones privadas
              .card-color__text.bg-color-8.p-3.h-50
                p.mb-0.text-center Mentoría y recursos.
        
          .col-sm-12.col-lg-3.mb-cus
            .card-color.h-100
              .card-color__title.bg-color-17.p-3.h-50
                h4.mb-0.text-center Asociaciones industriales
              .card-color__text.bg-color-3.p-3.h-50
                p.mb-0.text-center Conexiones y acceso a mercados.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .bg-color-1.p-4
          p.mb-0 Parques tecnológicos y colaboraciones entre startups, empresas y universidades, han acelerado procesos de innovación, reduciendo riesgos y maximizando impactos. Según Marín Marín y Boffo (2021), las alianzas estratégicas son esenciales para construir ecosistemas sostenibles y fortalecer capacidades organizacionales.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.png', alt='')

    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/3.png', alt='')
          .col-lg-7
             h2.mb-4 Cultura organizacional innovadora
             p.mb-4 En el documento, se explica cómo una cultura organizacional innovadora es esencial para promover la creatividad y la adaptación en un entorno competitivo. También se aborda la importancia de la gestión del cambio en los procesos de innovación, destacando prácticas como la comunicación estratégica, el liderazgo transformacional y la formación para facilitar transiciones exitosas.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Cultura organizacional innovadora

    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Cultura de innovación
                p.mb-0 Para ampliar los conocimientos en los temas de investigación estudiados, se sugiere explorar el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://youtu.be/IE0-mHKwTWo?si=VowezJFbjjeij6o7' target='_blank')
                  span Ver video
                  i.fas.fa-arrow-right

    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Gestión de portafolio de innovación
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-color-2.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La gestión del portafolio de innovación, permite administrar múltiples iniciativas simultáneamente, optimizando recursos, balanceando riesgos y maximizando el impacto estratégico. Este proceso considera factores como el nivel de innovación, horizonte temporal y retorno esperado, equilibrando proyectos de mejora continua y transformaciones disruptivas.

        p.mb-0 En Colombia, empresas líderes han adaptado metodologías globales a sus contextos, fortaleciendo sectores como energía, tecnología y retail. Estas organizaciones integran innovaciones en logística, comercio electrónico y experiencia del cliente para mantenerse competitivas. Según Miranda González (2023), una gestión efectiva del portafolio combina estructura y flexibilidad, permitiendo priorizar proyectos estratégicos mientras se responde a oportunidades emergentes.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/4.png', alt='')

    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Métricas y KPIs de innovación
    .bg-full-width.bg-color-17.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Las métricas de innovación son esenciales para evaluar el desempeño y ajustar estrategias. Estas se clasifican en:

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t3/6.svg', alt='')
          .col-sm-12.col-lg-6
            h4.mt-4 Características de los modelos de negocio innovadores:
            ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-terciario
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Métricas de entrada:] inversión en I+D y recursos asignados.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Métricas de proceso:] tiempo de desarrollo y tasa de éxito.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Métricas de salida:] productos lanzados e ingresos generados.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 #[b Métricas de impacto:] satisfacción del cliente y retorno sobre la inversión.

    
    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg
        p.mb-0 En Colombia, las empresas incorporan indicadores que miden sostenibilidad, impacto social y adaptabilidad. Por ejemplo, en el sector tecnológico, se analizan el tiempo de lanzamiento y la tasa de adopción de nuevas características para ajustar estrategias. Perdomo Charry (2020) enfatiza que estas métricas deben fomentar comportamientos alineados con la innovación organizacional.
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/t3/7.svg', style='max-width: 90px').mx-auto
    #t_3_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.3] Propiedad intelectual y protección de innovaciones
    p.mb-4.fw-bold(data-aos="fade-up") La propiedad intelectual protege y da valor a las innovaciones, garantizando ventajas competitivas en el mercado. Los instrumentos clave incluyen:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-3.mb-cus
        .card-color.h-100
          .card-color__title.bg-color-14.p-3.h-50
            h4.mb-0.text-center Patentes
          .card-color__text.bg-color-1.p-3.h-50
            p.mb-0.text-center Protegen invenciones técnicas.
    
      .col-sm-12.col-lg-3.mb-cus
        .card-color.h-100
          .card-color__title.bg-color-15.p-3.h-50
            h4.mb-0.text-center Derechos de autor
          .card-color__text.bg-color-12.p-3.h-50
            p.mb-0.text-center Resguardan obras creativas y software.

      .col-sm-12.col-lg-3.mb-cus
        .card-color.h-100
          .card-color__title.bg-color-16.p-3.h-50
            h4.mb-0.text-center Marcas registradas
          .card-color__text.bg-color-8.p-3.h-50
            p.mb-0.text-center Protegen elementos distintivos.
    
      .col-sm-12.col-lg-3.mb-cus
        .card-color.h-100
          .card-color__title.bg-color-17.p-3.h-50
            h4.mb-0.text-center Secretos comerciales
          .card-color__text.bg-color-3.p-3.h-50
            p.mb-0.text-center Mantienen información estratégica.


    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .bg-color-1.p-4
          p.mb-0 En Colombia, entidades como la Superintendencia de Industria y Comercio y la Dirección Nacional de Derechos de Autor, facilitan la protección de innovaciones. En el sector farmacéutico, la gestión de patentes ha permitido a empresas competir globalmente y generar valor, mediante licencias. Morales Cevallos et al. (2023) destacan que una estrategia sólida de propiedad intelectual, no solo protege innovaciones, sino que fomenta ventajas competitivas y transferencia tecnológica.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/8.png', alt='')
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/9.png', alt='')
          .col-lg-7
             h2.mb-4 Instituciones que apoyan la innovación
             p.mb-4 Se invita a explorar las instituciones que apoyan la innovación en Colombia, destacando su impacto en el fortalecimiento del ecosistema innovador. Entidades como Minciencias, iNNpulsa y el SENA, junto con aliados internacionales como Endeavor y organismos multilaterales, ofrecen recursos, formación y oportunidades de colaboración, esenciales para proyectos innovadores.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Instituciones que apoyan la innovación
    .row.justify-content-center.mb-0(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-5 Se ha culminado el recorrido integral por los diversos aspectos que conforman el ecosistema de innovación, desde sus fundamentos conceptuales, hasta los mecanismos institucionales que lo sustentan. Esta comprensión integral, permitirá abordar los proyectos de innovación con una perspectiva más informada y estratégica, aprovechando los distintos recursos y apoyos disponibles en el ecosistema colombiano de innovación.
        .bg-color-white.shadow-soft.mb-5
          .px-5.py-4
            .row.justify-content-around.align-items-center
              .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
              .col
                .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Alianzas para la innovación
                      p.mb-0 Para ampliar los conocimientos sobre alianzas para la innovación, se sugiere consultar el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones(href='https://www.innpulsacolombia.com/milab/' target='_blank')
                        span Ir al sitio
                        i.fas.fa-arrow-right
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/10.png', alt='')









</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
