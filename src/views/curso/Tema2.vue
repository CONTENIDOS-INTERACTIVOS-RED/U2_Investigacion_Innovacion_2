<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Ciclos de Sprint'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: img-bloque
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En el marco de Scrum, el Sprint es el corazón del proceso de desarrollo ágil. Cada Sprint es una iteración con duración fija, generalmente entre 1 y 4 semanas, durante las cuales el equipo de desarrollo trabaja para entregar un incremento funcional del producto. Estos ciclos permiten adaptarse al cambio, validar resultados de forma temprana y generar valor continuo. Comprender cómo se estructura un Sprint y cuáles son sus componentes claves, es esencial para garantizar el éxito del enfoque ágil (Monte Galiano, 2016).
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')


      // Bloque: titulo-segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Fases del Sprint

      p La comprensión de las fases del Sprint es fundamental para garantizar el éxito en la aplicación del marco de trabajo Scrum, ya que cada etapa cumple un rol específico en la entrega continua de valor.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5.text-white
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/2.png', alt='')
            .col-lg-8
              h3.mb-4(data-aos="flip-up") Fases del Sprint
              p.mb-4(data-aos="fade-right") En el PDF Fases del Sprint, se describen de manera detallada las cinco fases esenciales que estructuran cada iteración: la planificación, la ejecución del trabajo, el Daily Scrum, la revisión y la retrospectiva. Este recurso permite visualizar cómo estas fases interrelacionadas promueven la mejora continua, la colaboración del equipo y la adaptación ágil a los cambios del proyecto.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Fases del Sprint


      // Bloque: titulo-segundo
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Sprint Backlog

      p Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

      // Bloque: video-fondo
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/5Y1NqrEX_gw?si=EzgZ7YFgcxhV5pDT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque: titulo-segundo
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Estimación y velocidad

      // Bloque: img-bloque
      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La estimación del esfuerzo y el seguimiento de la velocidad del equipo, son pilares del planeamiento ágil. Estas prácticas permiten establecer expectativas realistas y tomar decisiones informadas sobre qué se puede entregar y cuándo (De Zunzunegui, 2023).
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/3.png', alt='')

      // Bloque: Título simple
      h3.mb-4 Estimación en Scrum

      p.mb-4 La estimación en Scrum no trata de predecir con precisión matemática el tiempo exacto de cada tarea, sino de dimensionar el esfuerzo relativo entre tareas.

      p.mb-4 #[strong Los métodos comunes de estimación, son:]

      // Bloque: tarjetas-boton
      div.row.justify-content-center.align-items-stretch.mb-5
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/4.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-4.text-center Planning Poker
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Técnica colaborativa basada en la serie de Fibonacci (1, 2, 3, 5, 8, 13...).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Cada miembro estima en secreto el esfuerzo y se comparan las respuestas para discutir discrepancias.

        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/5.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-2.text-center T-Shirt Sizing
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Se utiliza cuando los requerimientos aún son vagos. Se asignan tamaños tipo S, M, L, XL a las tareas.
              li.mb-4
                i.fas.fa-arrow-circle-right
                | Útil en etapas iniciales de proyectos grandes.

        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/6.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-4.text-center Three-Point Estimation
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Se calcula el promedio ponderado de tres escenarios: optimista, más probable y pesimista.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Permite calcular el riesgo asociado a tareas inciertas.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Ejemplo práctico. El equipo debe desarrollar un panel de administración. En una sesión de Planning Poker, algunos estiman que tomará 8 puntos y otros 13. La discrepancia se debe a distintos criterios sobre la complejidad del diseño. Esta discusión lleva a descubrir que se necesitan nuevas validaciones de usuarios, lo que aumenta la estimación y mejora el entendimiento de la tarea.

      // Bloque: Título simple
      h2.mb-4 Velocidad del equipo (Team Velocity)

      p.mb-4 La velocidad es una medida empírica que indica cuántos puntos de historia logra completar el equipo en un Sprint. Es única para cada equipo y no debe compararse entre grupos, puesto que depende de su contexto, experiencia y dinámica.

      // Bloque: img-acordeon 4:8
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="¿Cómo se calcula?")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se suman los puntos completados (solo los realmente terminados, según la DoD) al final de cada Sprint.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Tras varios #[em Sprints], se puede obtener una velocidad promedio.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo]. Si en tres #[em Sprints] el equipo ha completado 25, 28 y 30 puntos, la velocidad media será 27.6 puntos. Esto permite planificar qué tanto trabajo se puede asumir en #[em Sprints] futuros.

            .div(titulo="Aplicación estratégica de la estimación y velocidad")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Evita sobrecarga de trabajo]: al conocer su velocidad, el equipo no selecciona más trabajo del que puede asumir.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Permite ajustes realistas del alcance]: si se retrasa un entregable, se puede replantear el backlog sin comprometer la calidad.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Fomenta la mejora continua]: los equipos pueden reflexionar sobre qué factores aumentaron o redujeron su velocidad.

            .div(titulo="Advertencia común en la práctica profesional")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Usar la velocidad como herramienta de presión o comparación entre equipos es una mala práctica. Scrum valora la sostenibilidad del trabajo, no la competencia interna.

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/8346" target="_blank" rel="noopener noreferrer") Juárez Núñez, H. (2006). Los sistemas just-in-time/ Kanban, un paradigma productivo. Red Política y Cultura. 

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ZDRy5YN19W4" target="_blank" rel="noopener noreferrer") Software Guru. (2013). Webinar Gratuito "Aplicando los 12 principios del Manifiesto ágil a la Gestión de tus proyectos" [video]. YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

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
