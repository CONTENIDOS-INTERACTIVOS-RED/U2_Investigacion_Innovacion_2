<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
      .bg-full-width-2.bg-fondo-6.mb-0.px-3
        .p-5
          .row.justify-content-start.mb-0.align-items-center
            .col-sm-12.col-lg-6
              p.mb-4.mt-2 La innovación es clave para el desarrollo sostenible y la competitividad en Colombia. El país ha creado un ecosistema dinámico que conecta universidades, empresas y entidades gubernamentales, impulsando estrategias alineadas con prioridades nacionales y tendencias globales.
              p.mb-0 Sectores como el agroindustrial y tecnológico, destacan por adoptar modelos disruptivos y tecnologías emergentes. Alianzas estratégicas y programas de apoyo, facilitan la creación de soluciones innovadoras con impacto local e internacional.
      .bg-full-width.bg-color-13.mb-0.px-5.py-3
        p.mb-0.text-white Con herramientas como #[i RoadMaps] y métricas de innovación, Colombia fortalece su posición global, promoviendo un desarrollo competitivo y sostenible.
  </template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
