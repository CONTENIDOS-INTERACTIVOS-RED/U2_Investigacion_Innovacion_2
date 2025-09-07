<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Beneficios y desafíos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En los últimos años, las metodologías ágiles han emergido como un paradigma dominante en el desarrollo de software, revolucionando la forma en que los equipos gestionan y entregan proyectos. Frente a modelos tradicionales que a menudo presentan una estructura rígida y secuencial, las metodologías ágiles promueven una mayor flexibilidad, colaboración continua y adaptabilidad al cambio. Esto las convierte en una opción atractiva para organizaciones que buscan no solo eficiencia, sino también una respuesta más rápida y efectiva a las demandas del mercado y las expectativas de los clientes.
          
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 A pesar de los notables beneficios que ofrecen, la adopción de metodologías ágiles, no está exenta de desafíos. Las organizaciones deben estar preparadas para afrontar obstáculos como la resistencia cultural al cambio, la necesidad de equipos con habilidades ágiles, y la gestión de expectativas en entornos complejos y regulados. Este tema explora, tanto los beneficios que las metodologías ágiles aportan a los procesos de desarrollo de software, como los retos que se presentan durante su implementación, ofreciendo una visión crítica y realista de cómo sacar el máximo provecho de estas metodologías.
          
          p(data-aos="fade-left").mb-4 Además, se presentará un caso de éxito, en el que una organización ha logrado implementar con éxito prácticas ágiles, lo que demuestra cómo estos beneficios pueden materializarse en resultados tangibles y cómo los desafíos pueden superarse con una estrategia adecuada.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      
      // Bloque: título-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Beneficios de las metodologías ágiles
      
      p(data-aos="fade-left").mb-4 Las metodologías ágiles se han consolidado como una alternativa eficiente frente a los enfoques tradicionales de desarrollo de software, debido a su flexibilidad, orientación al cliente y capacidad de adaptación al cambio. A diferencia del enfoque en cascada, donde se requiere una planificación extensa y rígida desde el inicio, las metodologías ágiles promueven un ciclo iterativo que permite responder rápidamente a nuevas exigencias del mercado y a retroalimentación del cliente. Conozcamos algunos beneficios:
      
      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-left") 
          
          AcordionA(tipo="b")
            .div(titulo="Entrega temprana y continua de valor")
              p Gracias a los sprints o iteraciones, los equipos pueden liberar versiones funcionales del producto, desde etapas tempranas del proyecto. Esto permite a los stakeholders evaluar resultados tangibles y ajustar prioridades de forma constante. Por ejemplo, en un equipo Scrum, al final de cada sprint se entrega un incremento del producto, lo cual reduce la incertidumbre y mejora la satisfacción del cliente.
            
            .div(titulo="Colaboración continua entre los miembros del equipo y con el cliente")
              p Permite una mejor comprensión de los requerimientos y fomenta la cocreación. Esta interacción frecuente contribuye a reducir malentendidos y aumentar la calidad del producto final. La metodología ágil también potencia la motivación y compromiso del equipo, dado que se promueve la autonomía y se valora la contribución individual dentro del proceso colectivo
            
            .div(titulo="Capacidad de adaptación al cambio")
              p Las organizaciones que aplican prácticas ágiles no ven el cambio como una amenaza, sino como una oportunidad para mejorar el producto y alinearse mejor con las necesidades del usuario final. Esto representa una ventaja competitiva significativa, especialmente en entornos volátiles o altamente innovadores.
            
            .div(titulo="Mejora continua")
              p Las prácticas ágiles fomentan una mejora continua a través de reuniones como las retrospectivas, donde el equipo identifica fortalezas, debilidades y oportunidades de mejora. Esta cultura de reflexión y ajuste constante permite aumentar la eficiencia, eliminar cuellos de botella y mantener un ritmo sostenible de trabajo.
      
      // Bloque: título-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Retos de las metodologías
      
      // Bloque: color-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 #[b A pesar de los múltiples beneficios, la implementación de metodologías ágiles no está exenta de desafíos. Uno de los principales obstáculos es la resistencia al cambio cultural dentro de las organizaciones. Las estructuras jerárquicas tradicionales, pueden entrar en conflicto con los principios ágiles, los cuales promueven equipos auto gestionados y una toma de decisiones más horizontal.]
          
          p(data-aos="fade-left") #[b Conozcamos algunos retos:] Asimismo, el éxito de las metodologías ágiles depende, en gran medida, del compromiso del cliente y su participación activa durante el desarrollo. En contextos donde el cliente no puede dedicar tiempo suficiente, se pierde una de las fortalezas claves del enfoque ágil: la colaboración continua y la retroalimentación inmediata.
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in").mb-4.mb-lg-0
      
      // Bloque: SlyderA
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/5.png")
              .col-lg-7.order-lg-1
                h5 La falta de experiencia del equipo con prácticas ágiles, también puede afectar la correcta ejecución del proceso. Es común que equipos novatos malinterpreten los principios ágiles, aplicando las ceremonias de forma superficial, sin comprender el propósito detrás de cada una. Esto puede traducirse en entregas desorganizadas, falta de alineación y pérdida de foco en el valor para el cliente.
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/6.png")
              .col-lg-7.order-lg-1
                h5 Por otro lado, en proyectos con requerimientos contractuales estrictos o entornos regulados, puede ser difícil aplicar un enfoque ágil, sin introducir riesgos de cumplimiento. Si bien existen adaptaciones como el enfoque ágil escalado (SAFe), muchas veces se requiere una combinación de prácticas ágiles y tradicionales (modelo híbrido) para lograr un equilibrio.
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/7.png")
              .col-lg-7.order-lg-1
                h5 Finalmente, otro reto común es la escasa documentación. Aunque el Manifiesto Ágil valora más el software funcionando que la documentación extensiva, en ciertos proyectos (por ejemplo, en el sector financiero o de salud), la documentación sigue siendo un requisito fundamental. No contar con registros adecuados, puede dificultar la trazabilidad y mantenimiento del producto a largo plazo (Monte Galiano, 2016).
      
      // Bloque: título-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Caso de éxito: Spotify y su enfoque ágil escalado
      
      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
        .col-lg-7
          h5(data-aos="fade-left").mb-4 Caso de éxito: Spotify
          p(data-aos="fade-left").mb-4 Un caso paradigmático de éxito en la adopción de metodologías ágiles, es el de Spotify, una empresa que revolucionó no solo el mercado del #[em streaming] musical, sino también la forma en que se gestionan los equipos de desarrollo.
          
          p(data-aos="fade-left").mb-4 Spotify adoptó un enfoque ágil escalado basado en la creación de #[em squads], pequeños equipos multifuncionales y autónomos que funcionan como #[em mini-startups]. Cada #[em squad] es responsable de una funcionalidad específica y opera bajo principios ágiles, usando Scrum o Kanban, según su necesidad. Estos squads se agrupan en tribus, que permiten la coordinación entre múltiples equipos, sin perder agilidad.
          
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 Uno de los elementos más innovadores del modelo Spotify es su enfoque en la autonomía con alineación estratégica. Si bien los equipos tienen libertad para decidir cómo trabajar, todos están alineados con los objetivos generales de la empresa. Además, el uso de roles como chapter leads y guild coordinators, permite compartir buenas prácticas entre squads sin imponer estructuras rígidas.
          
          p(data-aos="fade-left").mb-4 Gracias a esta estructura, Spotify logró escalar el desarrollo de su plataforma global manteniendo una alta velocidad de entrega, mejora continua, innovación constante y satisfacción del usuario. El modelo de Spotify ha inspirado a numerosas empresas tecnológicas, a repensar la manera en que escalan sus procesos ágiles, adaptando el enfoque a sus propias necesidades (Monte Galiano, 2016).
      
      // Bloque: actividad
      Actividad(:cuestionario="cuestionario")
      
      // Bloque: material-complementario
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--azul.p-4
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema3/sintesis.svg")
              .col
                h4.mb-3 Material complementario
                p.mb-0 Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor. https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569 
                
                p.mb-0 Mobiliza Academy. (2021). Las mejores metodologías ágiles para el Desarrollo de Software [video]. YouTube. https://www.youtube.com/watch?v=ccSS4C5GYxs
</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',
  
  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },
  
  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'tema4' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2  
      // tema3 → cuestionarios.tema3
      // tema4 → cuestionarios.tema4
      cuestionario: cuestionarios.tema4
    }
  },
  
  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
