<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Roles en Scrum'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: texto-imagen 8:4
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") En el núcleo de Scrum, se encuentran tres roles fundamentales: el #[em Product Owner], el #[em Scrum Master] y el Equipo de Desarrollo. Estos no son simplemente cargos administrativos, sino roles bien definidos que permiten la autogestión, colaboración constante y entrega continua de valor. Entenderlos a profundidad es esencial para cualquier equipo que busque implementar metodologías ágiles de manera efectiva y sostenible (Heras del Dedo y Álvarez García, 2017).

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: infografia-1
      .bg-full-width.bg-color-info.mb-5
        .px-4.px-md-5.pt-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/infografia1.svg', alt='', style="width: 100%;").mx-auto

                .bg-color-white.box-shadow.p-3(x="25%" y="55%" numero="+")
                  h5 Scrum Master
                  p - Apoya en la adopción del marco de referencia.
                  p - Hace de coach al Product Owner.
                  p - Establece acuerdos y prepara el entorno, para adoptar prácticas ágiles.

                .bg-color-white.box-shadow.p-3(x="66%" y="25%" numero="+")
                  h5 Product Owner
                  p - Define la visión del negocio.
                  p - Ayuda a crear el acta constitutiva del proyecto y su presupuesto.

                .bg-color-white.box-shadow.p-3(x="63.5%" y="66%" numero="+")
                  h5 Development Team
                  p - Se empieza a visualizar y negociar su composición.
                  p - Experto para desarrollar el producto.

      // Bloque: titulo-segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Funciones del Product Owner

      p(data-aos="fade-left").mb-4 El #[em Product Owner] (PO) representa la voz del cliente y del negocio dentro del equipo Scrum. Es quien posee la responsabilidad final sobre el producto, asegurando que cada funcionalidad desarrollada responda a una necesidad real del usuario o del mercado. Su papel es crítico, dado que una mala priorización, puede llevar al desarrollo de funcionalidades inútiles o al uso ineficiente de los recursos del equipo.

      p(data-aos="fade-left").mb-5 Conozcamos sus funciones:

      // Bloque: slyder-a
      .bg-full-width.bg-fondo-slider.mb-0
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/2.png")
              .col-lg-7.order-lg-1
                h3 Gestión del #[em Product Backlog]
                p El Product Owner crea y mantiene actualizado el Product Backlog, una lista priorizada de funcionalidades, requisitos y mejoras. No se trata simplemente de listar tareas, sino de articular la estrategia del producto en unidades funcionales de trabajo. Cada ítem debe tener un propósito claro y estar valorado en función de su impacto y complejidad.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/3.png")
              .col-lg-7.order-lg-1
                h3 Maximización del valor del producto
                p La principal responsabilidad del PO, es asegurar que el equipo trabaje en lo más valioso en cada momento. Esto se logra mediante el refinamiento continuo del backlog y el análisis de métricas como ROI, satisfacción del cliente o time to market. En contextos de alta incertidumbre, como startups tecnológicas, esta función adquiere aún más importancia.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/4.png")
              .col-lg-7.order-lg-1
                h3 Colaboración con los #[em stakeholders]
                p El PO debe alinear continuamente las expectativas del cliente, los objetivos del negocio y la capacidad técnica del equipo. Actúa como un puente estratégico que traduce la visión del negocio en especificaciones que el equipo pueda construir, sin perder de vista los intereses de los usuarios finales.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5.text-white
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[strong Ejemplo aplicado.] Una empresa de e-commerce quiere desarrollar una nueva funcionalidad de "recomendaciones personalizadas". El Product Owner evalúa que, aunque esta función podría mejorar la retención, su desarrollo inicial sería costoso. Decide priorizar primero mejoras en el tiempo de carga del sitio, basándose en métricas reales de abandono. Esta decisión permite maximizar el valor con recursos limitados, demostrando la importancia de un PO estratégico.

      // Bloque: titulo-segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Funciones del #[em Scrum Master]

      p(data-aos="fade-left").mb-4 El #[em Scrum Master] (SM) no es un jefe ni un gestor de personas, sino un facilitador del proceso Scrum. Su rol es velar por la comprensión e implementación efectiva del marco de trabajo y eliminar los obstáculos que impiden el avance del equipo. Actúa como un mentor, un coach y, en muchos casos, como un protector del equipo frente a las interrupciones externas o dinámicas disfuncionales (Monte Galiano, 2016).

      p(data-aos="fade-left").mb-5 Conozcamos sus funciones:

      // Bloque: TabsC
      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Garantizar la adherencia al marco de Scrum" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Garantizar la adherencia al marco de Scrum
              p Uno de los errores más comunes en las organizaciones es "adaptar Scrum" de forma incorrecta, eliminando eventos claves o fusionando roles. El Scrum Master debe garantizar que el equipo respete los pilares de Scrum: transparencia, inspección y adaptación, y que practique los valores de compromiso, coraje, foco, apertura y respeto.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/6.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Fomentar la mejora continua" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Fomentar la mejora continua
              p En cada iteración, el equipo debe aprender y mejorar. El SM facilita sesiones de retrospectiva, donde se analizan aciertos y errores, y se plantean mejoras concretas. Este enfoque promueve una cultura organizacional orientada al aprendizaje, una ventaja competitiva en mercados volátiles.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/7.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Remoción de impedimentos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Remoción de impedimentos
              p El SM identifica y elimina todo aquello que impide al equipo alcanzar sus metas: cuellos de botella, herramientas ineficientes, conflictos internos o dependencias externas. Esta función, aunque muchas veces invisible, tiene un impacto directo en la productividad y motivación del equipo.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/8.png', alt='')

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5.text-white
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[strong Ejemplo aplicado.] En un equipo de desarrollo de aplicaciones móviles, se detecta que las pruebas de calidad se realizan manualmente y consumen demasiado tiempo. El Scrum Master propone implementar herramientas de integración continua y automatización de pruebas. Esta acción reduce el tiempo de entrega y mejora la calidad, ejemplificando cómo el Scrum Master aumenta el valor sin escribir una sola línea de código.

      // Bloque: titulo-segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Interacción entre roles Scrum

      p(data-aos="fade-left").mb-4 El #[em Scrum Master] (SM) no es un jefe ni un gestor de personas, sino un facilitador del proceso Scrum. Su rol es velar por la comprensión e implementación efectiva del marco de trabajo y eliminar los obstáculos que impiden el avance del equipo. Actúa como un mentor, un coach y, en muchos casos, como un protector del equipo frente a las interrupciones externas o dinámicas disfuncionales (Monte Galiano, 2016).

      p(data-aos="fade-left").mb-5 Conozcamos sus funciones:

      // Bloque: acordeon-img 8:4
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Product Owner y Equipo de Desarrollo")
              p Esta relación debe basarse en la confianza mutua. El PO confía en que el equipo tiene la capacidad técnica para ejecutar, mientras que el equipo confía en que el PO prioriza con criterio. El diálogo entre ambos debe ser continuo: desde el refinamiento del backlog hasta la revisión de entregas.

            .div(titulo="Scrum Master y Product Owner")
              p Aunque ambos roles son complementarios, pueden surgir tensiones. Por ejemplo, el PO puede querer cambios durante el Sprint, mientras que el SM protege la estabilidad del Sprint. Estas situaciones deben resolverse desde el entendimiento de que ambos buscan lo mismo: maximizar el valor entregado.

            .div(titulo="Scrum Master y Equipo de Desarrollo")
              p El SM es un apoyo constante para el equipo. No dirige, sino que empodera. Brinda herramientas, fomenta la autonomía, media en conflictos y construye un entorno seguro para experimentar y aprender. Cuando esta relación es fuerte, los equipos alcanzan niveles altos de rendimiento y satisfacción.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0

      // Bloque: imagen-texto-iconobloque 4:8
      .row.mb-5
        //- .col-lg-3
        //-   figure
        //-     img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
        .col-lg
          p(data-aos="fade-left").mb-4 #[strong Ejemplo aplicado.] Durante una retrospectiva, el equipo expresa que las historias están mal definidas y requieren múltiples aclaraciones. El Scrum Master propone incluir sesiones de refinamiento con el Product Owner antes de cada Sprint Planning. Esta decisión mejora la claridad, reduce el desperdicio y fortalece la colaboración entre roles.

          .bg-color-6.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los roles en Scrum no son jerárquicos ni rígidos. Son estructuras de colaboración dinámica que, cuando se entienden y se ejercen correctamente, transforman la manera en que se conciben y entregan productos. La claridad en las funciones, la fluidez en la interacción y el respeto por los valores ágiles constituyen la base de un equipo Scrum exitoso. Esta comprensión no solo es útil en proyectos de software, sino en cualquier entorno que demande innovación, adaptabilidad y entrega continua de valor.

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28993" target="_blank" rel="noopener noreferrer") Escalona, I. (2009). Planeación integral agregada e interrelación de los sistemas intermitentes con el MRP y filosofía JIT, kanban, reingeniería. El Cid Editor. 
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=UjcAJ3tjg8o" target="_blank" rel="noopener noreferrer") Mujer Cronopio. (2022). AGILE MANIFESTO [1/4]. ¿Solo para ingenieros? ¡NO! [video]. YouTube.
              
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
