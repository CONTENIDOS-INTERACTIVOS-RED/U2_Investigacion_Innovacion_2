<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Instrumentos de divulgación científica y tecnológica'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Luego de revisar el marco político y normativo, así como las estrategias para el fomento de la CTeI en Colombia, se procederá a analizar los instrumentos que facilitan la gestión de la CTeI en instituciones educativas, empresas y organizaciones. Es importante señalar que un gran número de personas está vinculado a semilleros, grupos de investigación, departamentos de investigación y desarrollo, Oficinas de Transferencia de Resultados de Investigación (OTRI), empresas consultoras, entre otros. 
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t2/1.png', alt='')
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1]  Sistemas de información en CTeI
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/12.svg").mx-auto
      .col-sm-12.col-lg-8
        p.mb-4 La investigación y la innovación son fundamentales para el desarrollo y la competitividad de Colombia. Los sistemas de información en ciencia, tecnología e innovación (CTeI), son herramientas estratégicas que facilitan la gestión, el seguimiento y la evaluación de actividades científicas y tecnológicas.
        .bg-color-2.mb-3
          .px-3.py-4
            .row.align-items-start
              .col-lg-2.d-none.d-lg-block
                img.w-75(src="@/assets/curso/t2/13.svg").mx-auto
              .col-lg
                p.mb-0 Estas plataformas ofrecen soporte a la toma de decisiones, a la formulación de políticas y al fortalecimiento de las capacidades investigativas del país. Dos plataformas claves en este ámbito, son el Sistema Integral de Gestión de Proyectos (SIGP) y ScienTI, que se describen a continuación.
    
    h2.mb-3(data-aos="fade-up") a. Plataforma SIGP
    p.mb-3(data-aos="fade-up") El Sistema Integral de Gestión de Proyectos (SIGP), es una herramienta tecnológica avanzada diseñada para administrar y monitorear proyectos de investigación, desarrollo tecnológico e innovación. Su funcionalidad abarca todo el ciclo de vida de los proyectos, desde la formulación, hasta el cierre y la evaluación de impacto.
    .bg-full-width.bg-slyder.p-5.mb-5(data-aos="flip-up")
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Características principales
            p.mb-0  El SIGP cuenta con módulos para la formulación de propuestas, evaluación técnica y financiera, seguimiento de la ejecución y gestión de resultados. Facilita la interacción entre investigadores, evaluadores, gestores y entidades financiadoras, asegurando una gestión transparente y eficiente de los recursos públicos, destinados a CTeI.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t2/14.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Impacto en políticas públicas
            p.mb-0 El SIGP está alineado con las directrices del CONPES 4069 (DNP, 2022), que define la política nacional de CTeI para 2022-2031. Según el Banco Mundial (2023), ha mejorado la eficiencia en la administración de recursos destinados a proyectos de ciencia e innovación en Colombia.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t2/15.png', alt='')

    h2.mb-3(data-aos="fade-up") b. Plataforma ScienTI
    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/t2/16.svg").mx-auto
      .col-lg
        p.mb-4 La plataforma ScienTI es un sistema robusto que integra y organiza información sobre comunidades científicas, en Colombia. Está diseñada para registrar, clasificar y visibilizar la producción científica, los grupos de investigación, los investigadores y las instituciones que conforman el ecosistema de CTeI.
        h4.mb-0 Componentes principales
        p.mb-0 ScienTI incluye tres módulos principales:
    
    
    .bg-full-width.bg-color-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-10
            ImagenInfografica.color-secundario.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t2/18.svg')
              .tarjeta.bg-color-white.p-3(x="2.8%" y="20%" numero="+")
                p.fw-bold.mb-3 InstituLAC
                p.mb-0 Administra información de más de 500 instituciones activas en CTeI, incluyendo universidades, centros de investigación y empresas innovadoras.
              .tarjeta.bg-color-white.p-3(x="2.8%" y="20%" numero="+")
                p.fw-bold.mb-3 
                p.mb-0
              .tarjeta.bg-color-white.p-3(x="66.9%" y="8.3%" numero="+")
                p.fw-bold.mb-3 GrupLAC
                p.mb-0 Permite registrar y analizar la producción científica de más de 5,000 grupos de investigación, activos en Colombia.
              .tarjeta.bg-color-white.p-3(x="97.2%" y="91.5%" numero="+")
                p.fw-bold.mb-3 CvLAC
                p.mb-0 Funciona como repositorio de información curricular de más de 100,000 investigadores, destacando su formación, producción científica y trayectoria profesional.
    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg
        h4.mb-1 Contribuciones al ecosistema de CTeI
        p.mb-0 Estas plataformas permiten identificar capacidades científicas, evaluar la productividad de grupos de investigación y facilitar la creación de redes de colaboración. Según Maz-Machado et al. (2022), ScienTI ha mejorado la gestión de información científica en el país y ha fortalecido la visibilidad internacional de la producción académica colombiana.
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/t2/17.svg").mx-auto
    
    
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Modelos para la divulgación científica y tecnológica
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/2.png").mx-auto
      .col-sm-12.col-lg-8
        .bg-color-2.mb-3
          .px-3.py-4
            .row.align-items-start
              .col-lg-2.d-none.d-lg-block
                img.w-75(src="@/assets/curso/t2/3.svg").mx-auto
              .col-lg
                p.mb-0 Basados en la información gestionada en plataformas como ScienTI y SIGP, Colombia ha implementado modelos para divulgar las actividades y productos de CTeI. Entre los más destacados se encuentran el modelo de medición y categorización de grupos de investigación e investigadores, y el modelo Publindex para revistas científicas indexadas.
        h2.mb-3 a. Modelo de medición y categorización de grupos de I+D+i e investigadores
        p.mb-0 El Ministerio de Ciencia, Tecnología e Innovación, realiza convocatorias periódicas para el reconocimiento y medición de grupos de investigación, desarrollo tecnológico e innovación, así como de investigadores. Este modelo incluye la evaluación de la tipología de productos de CTeI, tales como:

    .bg-full-width.bg-color-3.mb-0(data-aos="flip-up")
      .px-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6
            ol.lista-ol--cuadro.lista-ol--cuadro--separador
              li.d-flex
                .lista-ol--cuadro__vineta.color-acento-contenido
                  span 1
                span Productos de generación de nuevo conocimiento (artículos científicos, libros).
              li.d-flex
                .lista-ol--cuadro__vineta.color-acento-contenido
                  span 2
                span Productos de desarrollo tecnológico e innovación (patentes, diseños industriales).
              li.d-flex
                .lista-ol--cuadro__vineta.color-acento-contenido
                  span 3
                span Productos de apropiación social del conocimiento.
              li.d-flex
                .lista-ol--cuadro__vineta.color-acento-contenido
                  span 4
                span Productos de divulgación pública de la ciencia.
              li.d-flex
                .lista-ol--cuadro__vineta.color-acento-contenido
                  span 5
                span.mb-0 Productos de formación de recurso humano en CTeI.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t2/4.svg', alt='')
    .bg-full-width.bg-color-10.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 La investigación científica se organiza mediante clasificaciones que valoran el desempeño de grupos e investigadores, fomentando la excelencia y el desarrollo.

    .bg-full-width.bg-fondo-5.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t2/5.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Clasificación de grupos
                    p.mb-0.text-center Los grupos de investigación se clasifican en categorías (A1, A, B, C y Reconocidos), según su productividad, trayectoria e impacto.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
                  img.custom-image-card__image.d-none.d-lg-block(src="@/assets/curso/t2/6.png" alt="")
                  .custom-image-card__text.p-4
                    h4.mb-2.text-center Clasificación de investigadores
                    p.mb-0.text-center Los investigadores son reconocidos en categorías como Senior, Asociado, Junior y Reconocido, basándose en publicaciones, dirección de proyectos y liderazgo científico.
    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-12
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 70px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Modelo de medición de grupos de investigación
                      p.mb-0 Se sugiere revisar el siguiente recurso que profundiza en el modelo de medición de grupos de investigación:
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://minciencias.gov.co/sistemas-informacion/modelo-medicion-grupos " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right


    h2.mb-3(data-aos="fade-up") b. Modelo Publindex: revistas científicas indexadas
    p.mb-3(data-aos="fade-up") Publindex es el sistema de evaluación y clasificación de revistas científicas en Colombia. Este modelo organiza las publicaciones en categorías (A1, A2, B y C), según estándares nacionales e internacionales, evaluando criterios como:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-sm-12.col-lg-3.mb-cus
        .bg-color-1.p-4.h-100
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t2/7.svg").mx-auto
            .col-lg
              p.mb-0 Política editorial.
              

      .col-sm-12.col-lg-3.mb-cus
        .bg-color-1.p-4.h-100
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t2/8.svg").mx-auto
            .col-lg
              p.mb-0 Gestión editorial.
              

      .col-sm-12.col-lg-3.mb-cus
        .bg-color-1.p-4.h-100
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t2/9.svg").mx-auto
            .col-lg
              p.mb-0 Visibilidad internacional.
              
      .col-sm-12.col-lg-3.mb-cus
        .bg-color-1.p-4.h-100
          .row.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t2/10.svg").mx-auto
            .col-lg
              p.mb-0 Impacto científico.


    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
         p.fw-bold.mb-3 Importancia
         p.mb-3 Publindex ha promovido la profesionalización de los procesos editoriales en Colombia, incentivando la calidad y la internacionalización de las revistas científicas. Según el Observatorio Colombiano de Ciencia y Tecnología (2023), las políticas de evaluación han elevado significativamente, el número de publicaciones indexadas en bases de datos internacionales, como Scopus y Web of Science.
         .bg-color-2.p-3
           p.mb-0 Los sistemas de información y los modelos de divulgación científica en Colombia, son pilares fundamentales para fortalecer el ecosistema de CTeI. Herramientas como SIGP y ScienTI han optimizado la gestión y visibilidad de las actividades científicas, mientras que los modelos de medición y Publindex, han incentivado la calidad y la pertinencia de la producción académica. Estos avances contribuyen al desarrollo sostenible y a la consolidación de Colombia, como un actor relevante en la investigación científica, a nivel regional e internacional.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/11.png").mx-auto




    #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Red Colombiana de Información Científica (RedCol)
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/19.svg").mx-auto
      .col-sm-12.col-lg-8
        p.mb-4 La Red Colombiana de Información Científica (RedCol), es una infraestructura nacional que articula los repositorios, sistemas de información y recursos digitales científicos, del país. Este sistema unificado, facilita el acceso a la producción científica colombiana, promoviendo la visibilidad y el impacto de la investigación, a nivel global.
        .bg-color-8.mb-3
          .px-3.py-4
            .row.align-items-start
              .col-lg-2.d-none.d-lg-block
                img.w-75(src="@/assets/curso/t2/20.svg").mx-auto
              .col-lg
                p.mb-0 A continuación, se describe el funcionamiento de RedCol, destacando su interoperabilidad tecnológica, su integración de repositorios y su aporte al fortalecimiento de la ciencia abierta en Colombia.

    .bg-full-width.bg-slyder.p-5.mb-0(data-aos="fade-up")
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Interoperabilidad y estándares internacionales
            p.mb-0 RedCol emplea tecnologías que aseguran la conexión y compatibilidad entre diferentes plataformas, integrando más de 60 repositorios institucionales y permitiendo el acceso a más de 800,000 documentos académicos.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t2/21.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Fortalecimiento de la ciencia abierta
            p.mb-0 La red promueve la democratización del conocimiento y la inserción de la ciencia colombiana, en contextos globales.
          .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/t2/22.png', alt='')
    .bg-full-width.bg-color-12.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.align-items-center
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/t2/23.svg").mx-auto
          .col-lg
            p.mb-0 López Cantos (2018), destaca que RedCol es una herramienta clave para la consolidación de la ciencia abierta en Colombia, facilitando la gestión de datos científicos y mejorando la visibilidad internacional de la producción académica.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/24.png").mx-auto
      .col-sm-12.col-lg-8
        .bg-color-10.px-5.py-4
          p.mb-0 Los repositorios institucionales, los eventos de divulgación científica y la RedCol, son componentes fundamentales del ecosistema de ciencia, tecnología e innovación, en Colombia. Estas herramientas no solo promueven la preservación y difusión del conocimiento, sino que también potencian la colaboración y la visibilidad internacional de la producción científica nacional. La articulación entre estas iniciativas, asegura un impacto positivo en el desarrollo del país y en la democratización del acceso al conocimiento.


    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-7
            h2.mb-4 Aspectos técnicos del trabajo de investigación e innovación
            p.mb-4 Se invita a revisar el documento titulado #[b Aspectos técnicos del trabajo de investigación e innovación], el cual aborda temas fundamentales relacionados con la estructura, redacción y aspectos formales de los trabajos académicos. Este material incluye información actualizada sobre las normas técnicas NTC 1486:2022, el manejo de estilos bibliográficos y el uso de herramientas, como los gestores de referencias.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/PEND.pdf')" target="_blank")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>  Aspectos técnicos del trabajo de investigación e innovación
          .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/25.png', alt='')


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
