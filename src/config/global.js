export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: ' Scrum y gestión de equipos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Roles en Scrum',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funciones del Product Owner',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Funciones del Scrum Master',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Interacción entre roles Scrum',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciclos de Sprint',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fases del Sprint',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sprint Backlog',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estimación y velocidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Beneficios y desafíos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Uso de JIRA en Scrum',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Trello para equipos ágiles',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comparación JIRA vs Trello',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122933',
    },
    {
      referencia:
        'Brunetta, H. (2023). OKRs y métricas de negocios: metodologías ágiles para resultados exitosos. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231789',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito. LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270594',
    },
    {
      referencia:
        'Monte Galiano, J. (2016). Implantar scrum con éxito. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58575',
    },
    {
      referencia:
        'Castillo, A. (2010). Conceptualización del proceso de implementación de software: perspectivas ágil y disciplinada. Revista Ciencia e Ingeniería, 31(3).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/17741',
    },
    {
      referencia:
        'Serrano Junco, C. L. (2022). Metodologías ágiles en las pymes: un modelo integral de auditoría en la gestión interna. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231777',
    },
  ],
  glosario: [
    {
      termino: 'Burndown Chart',
      significado:
        'Gráfico que muestra el trabajo pendiente en un Sprint, útil para evaluar el progreso diario.',
    },
    {
      termino: 'Daily Scrum',
      significado:
        'Reunión diaria de 15 minutos donde el equipo sincroniza su trabajo y detecta impedimentos.',
    },
    {
      termino: 'Definición de terminado',
      significado:
        'Criterios que deben cumplirse para considerar que una tarea está completamente finalizada.',
    },
    {
      termino: 'Epic',
      significado:
        'Gran bloque funcional compuesto por múltiples historias de usuario más pequeñas.',
    },
    {
      termino: 'Equipo de desarrollo',
      significado:
        'Grupo multidisciplinario que diseña, implementa y entrega funcionalidades en cada Sprint.',
    },
    {
      termino: 'Historia de usuario',
      significado:
        'Descripción breve y funcional de una necesidad del usuario, escrita desde su perspectiva.',
    },
    {
      termino: 'JIRA',
      significado:
        'Plataforma profesional de gestión ágil que soporta Scrum, Kanban y ofrece métricas detalladas.',
    },
    {
      termino: 'Kanban',
      significado:
        'Método de gestión visual de tareas que promueve el flujo continuo y la mejora gradual.',
    },
    {
      termino: 'Prioridad',
      significado:
        'Nivel de importancia asignado a cada tarea o historia en el Product Backlog.',
    },
    {
      termino: 'Product Backlog',
      significado:
        'Lista ordenada y priorizada de requisitos o funcionalidades deseadas para el producto.',
    },
    {
      termino: 'Product Owner',
      significado:
        'Rol responsable de maximizar el valor del producto, gestionando y priorizando el Product Backlog.',
    },
    {
      termino: 'Retrospectiva',
      significado:
        'Ceremonia Scrum al final del Sprint donde el equipo reflexiona sobre su trabajo y propone mejoras.',
    },
    {
      termino: 'Scrum',
      significado:
        'Marco ágil de trabajo que organiza el desarrollo de productos en ciclos cortos e iterativos llamados Sprints.',
    },
    {
      termino: 'Scrum Master',
      significado:
        'Facilitador del equipo Scrum que asegura el cumplimiento del marco ágil y elimina obstáculos.',
    },
    {
      termino: 'Sprint',
      significado:
        'Iteración de tiempo fijo, generalmente de 1 a 4 semanas, donde se entrega un incremento del producto.',
    },
    {
      termino: 'Sprint Backlog',
      significado:
        'Conjunto de tareas seleccionadas del Product Backlog que se desarrollan durante un Sprint.',
    },
    {
      termino: 'Trello',
      significado:
        'Herramienta de gestión visual basada en tableros, listas y tarjetas, útil para equipos ágiles.',
    },
    {
      termino: 'Velocidad (Velocity)',
      significado:
        'Métrica que indica la cantidad de trabajo completado por el equipo en un Sprint.',
    },
    {
      termino: 'Workflow',
      significado:
        'Flujo de trabajo que define los estados por los que pasa una tarea desde su inicio hasta su cierre.',
    },
  ],
}
