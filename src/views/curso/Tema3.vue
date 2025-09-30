<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Herramientas de seguimiento'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: bloque-img
      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En el desarrollo de software ágil, el seguimiento eficiente del trabajo es esencial para mantener la transparencia, priorizar tareas, gestionar tiempos y facilitar la colaboración del equipo. En este contexto, herramientas como JIRA y Trello, se han consolidado como plataformas claves que permiten implementar prácticas de Scrum y otras metodologías ágiles de forma estructurada (Castillo, 2010).

      // Bloque: titulo-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Uso de JIRA en Scrum

      // Bloque: texto-color-imagen 8:4
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 JIRA es una herramienta desarrollada por Atlassian, especializada en la gestión de proyectos ágiles. Permite organizar Sprints, gestionar historias de usuario, planificar releases, automatizar flujos de trabajo y generar reportes de rendimiento.

          .bg-color-6.p-4(data-aos="fade-left")
            p.mb-4 #[strong Ventajas de JIRA para Scrum:]
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Gestión detallada del backlog de producto.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Seguimiento visual de las tareas por Sprint.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Automatización de flujos de trabajo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Integración con herramientas de desarrollo (Bitbucket, GitHub).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Informes ágiles #[em (burndown chart, velocity chart, control chart)].
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

      // Bloque: Título simple
      h2.mb-4 Ejemplo práctico paso a paso
      p Configuración de un Sprint en JIRA.

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Paso 1 - Crear un proyecto Scrum")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se selecciona el tipo de proyecto "Scrum software development".
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se asigna un nombre al proyecto, como "Desarrollo Plataforma E-commerce".

            .div(titulo="Paso 2 - Construcción del Product Backlog")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se ingresan las historias de usuario siguiendo el formato: "Como [rol], quiero [acción] para [beneficio]".
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo]. "Como cliente, quiero ver el historial de mis pedidos para gestionar mis compras."

            .div(titulo="Paso 3 - Planificación del Sprint")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se seleccionan historias del backlog y se agregan al Sprint actual.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se estima el esfuerzo con puntos de historia.

            .div(titulo="Paso 4 - Inicio del Sprint")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se define duración (por ejemplo, 2 semanas) y se asignan tareas a los miembros del equipo.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se visualiza el tablero tipo kanban que muestra el progreso: To Do – In Progress – Done.

            .div(titulo="Paso 5 - Seguimiento")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se realizan Daily Stand-ups con el tablero visible para revisar bloqueos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se consultan gráficos como el Burndown Chart para revisar la tendencia de finalización de tareas.

      // Bloque: titulo-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Trello para equipos ágiles

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 Trello, también propiedad de Atlassian, es una herramienta de gestión visual basada en el sistema Kanban. Aunque no está diseñada específicamente para Scrum, su simplicidad y flexibilidad la hacen ideal para pequeños equipos ágiles o startups.

          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-4 #[strong Principales características:]
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Interfaz intuitiva con tableros, listas y tarjetas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Personalización a través de Power-Ups (automatizaciones, integraciones).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Colaboración visual en tiempo real.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Ideal para visualizar flujo de trabajo.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")

      // Bloque: Título simple
      h2.mb-4 Ejemplo paso a paso
      p Configuración de un tablero ágil en Trello.

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/5.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Paso 1 - Crear un tablero nuevo")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Nombrarlo como "Sprint 5 – Módulo de Registro".
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definir listas: Backlog, To Do, In Progress, QA, Done.

            .div(titulo="Paso 2 - Agregar tarjetas de tareas")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ejemplo de tarjeta: "Diseñar formulario de registro de usuario".
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Descripción, checklist, fecha de entrega, asignación al diseñador.

            .div(titulo="Paso 3 - Uso de etiquetas")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Rojo para tareas urgentes, azul para tareas en desarrollo, verde para completadas.

            .div(titulo="Paso 4 - Seguimiento diario")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Durante la reunión diaria, se mueven tarjetas entre listas, según el avance.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se agregan comentarios para indicar bloqueos o dependencias.

            .div(titulo="Paso 5 - Automatización (Power-Up de Butler)")
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Por ejemplo, mover tarjetas automáticamente a Done cuando se marque el checklist como completo.

      // Bloque: titulo-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Comparación JIRA vs Trello

      // Bloque: bloque-img
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En la gestión de proyectos ágiles, la elección de la herramienta adecuada puede ser tan crucial como la metodología misma. Tanto JIRA como Trello, desarrolladas por Atlassian, ofrecen enfoques diferentes para el seguimiento del trabajo. Mientras JIRA está diseñada específicamente para metodologías ágiles como Scrum y Kanban, Trello responde a una lógica de gestión visual más genérica y flexible. Comparar ambas herramientas, no solo implica revisar sus funciones, sino analizar cómo estas impactan en la dinámica del equipo, la transparencia del proyecto y la capacidad de escalar el trabajo.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')

      // Bloque: tarjetas-3 (2 cards)
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
            .custom-image-card__text.p-4
              p.mb-0 JIRA fue creado con el objetivo de gestionar proyectos de desarrollo de software con un enfoque ágil. Incluye módulos avanzados que permiten configurar proyectos Scrum, planificar Sprints, administrar historias de usuario y obtener reportes precisos del desempeño del equipo. Su diseño responde a entornos complejos y colaborativos donde la trazabilidad, la documentación y la integración con herramientas de desarrollo son críticas.
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
            .custom-image-card__text.p-4
              p.mb-0 Trello, en cambio, fue pensado inicialmente como una herramienta de gestión de tareas para cualquier tipo de equipo. Su enfoque visual basado en tarjetas y listas, facilita la organización del trabajo, pero no contempla de manera nativa, los artefactos Scrum, como backlog, Sprints o puntos de historia. No obstante, su flexibilidad la convierte en una excelente alternativa para equipos pequeños, iniciativas ligeras o proyectos educativos.

      // Bloque: Título simple
      h2.mb-4 Gestión de proyectos Scrum
      p.mb-4 La principal diferencia operativa radica en el nivel de soporte que cada herramienta ofrece para los artefactos y ceremonias de Scrum:

      // Bloque: tabla
      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Elementos Scrum

      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.bg-color-tabla.text-white Elemento Scrum
              th.bg-color-tabla.text-white JIRA
              th.bg-color-tabla.text-white Trello
          tbody
            tr
              td Product Backlog
              td Integrado, con priorización y jerarquías.
              td Requiere creación manual de listas.
            tr
              td Sprint Planning
              td Panel de planificación de Sprint.
              td Manual, usando listas y tarjetas.
            tr
              td Sprint Backlog
              td Asociado al Sprint activo.
              td Equivale a una lista de tareas en Trello.
            tr
              td Daily Scrum
              td Panel en tiempo real por miembro/equipo.
              td Actualización manual por tarjetas.
            tr
              td Review y Retrospective
              td Generación de informes automáticos.
              td Manual, con comentarios o listas.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 JIRA permite relacionar historias de usuario con tareas técnicas, bugs, subtareas, y dependencias. Esta estructura refleja de forma más fidedigna la complejidad de un proyecto real, donde los elementos están interrelacionados. Por ejemplo, si una historia de usuario depende de una tarea de diseño previa, JIRA puede bloquearla hasta que esa tarea se complete. En Trello, esto debe gestionarse manualmente, lo que puede generar errores de coordinación en proyectos complejos.

      // Bloque: Título simple
      h2.mb-4 Escalabilidad y personalización

      // Bloque: TabsC
      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="JIRA" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 JIRA
              p Destaca por su escalabilidad. Es capaz de manejar múltiples equipos en paralelo, con configuraciones distintas para cada proyecto. Se pueden definir flujos de trabajo personalizados, tipos de issues, reglas de automatización, y tableros de seguimiento distintos, según las necesidades del equipo.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/10.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Trello" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Trello
              p Trello, aunque limitado en este sentido, ofrece una experiencia más simple, lo que puede ser una ventaja para proyectos pequeños o prototipos que no requieren estructuras complejas.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/11.png', alt='')

      // Bloque: texto-color-imagen 8:4
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Uno de los factores clave en la gestión ágil es la capacidad de medir el rendimiento del equipo. JIRA ofrece una suite de reportes automáticos, como:

          .bg-color-4.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Burndown Chart. Muestra el trabajo pendiente en un Sprint.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Velocity Chart. Ayuda a predecir la capacidad futura del equipo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Cumulative Flow Diagram. Indica cuellos de botella y flujo de trabajo.

          p(data-aos="fade-left").mb-4 Trello, por su parte, no cuenta con estos informes de manera predeterminada. Sin embargo, se pueden obtener mediante Power-Ups (complementos), aunque con una funcionalidad limitada y muchas veces en versión de pago.

          p(data-aos="fade-left") #[strong Ejemplo práctico.] Un equipo de desarrollo que trabaja en un producto SaaS a largo plazo se beneficiará enormemente de los reportes de JIRA para optimizar su rendimiento Sprint tras Sprint. En contraste, un equipo de marketing que organiza campañas mensuales, podría funcionar eficientemente con Trello, porque no requiere estimaciones ni métricas complejas.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")

      // Bloque: Título simple
      h2.mb-4 Costos y curva de aprendizaje

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 Aunque ambas herramientas tienen versiones gratuitas, su acceso a funciones avanzadas varía.

          .bg-color-6.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong JIRA.] Requiere mayor tiempo de capacitación, pero su potencial es amplio. Ideal para organizaciones con equipos técnicos estructurados.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong Trello.] Intuitivo, de rápida adopción, pero con limitaciones en proyectos de alta complejidad.

          p(data-aos="fade-left") La elección entre JIRA y Trello no debe basarse únicamente en la interfaz o el precio, sino en la alineación con la complejidad del proyecto y el nivel de madurez del equipo. Para equipos Scrum con una necesidad profunda de planificación, trazabilidad y mejora continua, JIRA es claramente superior. Sin embargo, para equipos pequeños, con dinámicas ligeras y sin requerimientos técnicos exigentes, Trello ofrece una solución práctica, rápida y visualmente atractiva.

          p(data-aos="fade-left") Ambas herramientas promueven la transparencia y la colaboración, pilares fundamentales del marco Scrum. Su elección estratégica puede marcar la diferencia entre un equipo que reacciona ante los cambios y uno que se adapta con agilidad y confianza.

      // Bloque: figura-completa
      .titulo-figura.mb-2
        h5 Figura 1. 
        span Trello vs Jira

      figure.bg-color-1.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in", style="max-width: 900px").mx-auto


      p(data-aos="fade-left") El dominio de herramientas como JIRA y Trello, no solo optimiza el seguimiento de los proyectos, sino que potencia la autogestión del equipo, facilita la visibilidad de las tareas y contribuye a la entrega continua de valor. En un entorno ágil, elegir la herramienta adecuada puede marcar la diferencia entre un equipo organizado y uno desbordado por la incertidumbre.
      
      // Bloque: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre metodologías ágiles.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569" target="_blank" rel="noopener noreferrer") Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor.
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ccSS4C5GYxs" target="_blank" rel="noopener noreferrer") Mobiliza Academy. (2021). Las mejores metodologías ágiles para el Desarrollo de Software [video]. YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema3,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
