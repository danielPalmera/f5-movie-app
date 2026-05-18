Unidad 4: Enrutamiento en Aplicaciones Angular
Esta unidad es fundamental para construir aplicaciones de una sola página (SPA) complejas y bien estructuradas con Angular. Aprenderás a configurar y gestionar rutas, a navegar entre vistas, a trabajar con parámetros de URL dinámicos y a implementar rutas anidadas para layouts flexibles. El enrutamiento es clave para proporcionar una experiencia de usuario fluida y una arquitectura lógica en tus aplicaciones web.

La duración estimada de esta unidad es de 4 horas.

Objetivos de aprendizaje
Entender el concepto de enrutamiento en aplicaciones de una sola página (SPA) y el papel del Router de Angular.
Configurar el módulo de rutas de Angular en un proyecto.
Definir rutas estáticas y dinámicas con parámetros.
Implementar la navegación declarativa y la navegación programática en Angular.
Utilizar rutas anidadas y router-outlet para layouts compartidos.
Acceder a los parámetros de URL.
Implementar rutas comodín (**) y **redirecciones** para la gestión de errores 404.
Fundamentos Teóricos
Temas de investigación
¿Cómo gestiona Angular el enrutamiento client-side sin recarga completa de la página?
¿Qué ventajas ofrece el Router de Angular para la modularidad y escalabilidad de una aplicación?
¿Cuál es la diferencia entre navegación declarativa y programática en Angular? ¿Cuándo utilizarías cada una?
¿Cómo los parámetros de URL y los parámetros de consulta permiten compartir estado a través de las rutas?
¿Por qué son importantes las rutas anidadas y el router-outlet en aplicaciones con diseños complejos o jerárquicos?
¿Cuál es la función de un RouterModule.forRoot() y un RouterModule.forChild()? (Aunque estamos con standalone, es bueno entender el concepto de rutas del módulo principal vs módulos hijos).
¿Cómo se gestiona una ruta no encontrada (404) en Angular?
Glosario
Router, routerLink, router-outlet, Ruta Estática, Ruta Dinámica, Parámetro de URL, Parámetro de Consulta (Query Parameter), Ruta Anidada (Nested Route), Redirección, Ruta Comodín (**), ActivatedRoute, Router Service

Actividades
A lo largo de diferentes actividades construirás una aplicación de gestión de películas con Angular que incluirá:

Una página de inicio (Home).
Un listado de películas (MovieList).
Una página de detalles para cada película (MovieDetails).
Gestión de errores 404 para rutas no encontradas.
Actividad 1: Configuración Básica de Enrutamiento y Rutas Estáticas
En esta actividad configurarás el módulo de enrutamiento de Angular y definirás las rutas básicas estáticas para una aplicación de películas (Movie App).

Objetivo
Configurar el Router de Angular.
Crear y asociar componentes a rutas.
Implementar navegación básica con routerLink.
Pasos a Seguir
Crea un nuevo proyecto Angular con el nombre movie-app con estilos de tailwindCSS
Esto generará un proyecto con los componentes autónomos por defecto y un archivo de rutas inicial (src/app/app.routes.ts).
Crear componentes básicos de página:
Genera los componentes:
home
movie-list
movie-details
not-found
Dentro de cada componente, simplemente añade un h1 con el nombre de la página (ej: <h1>Bienvenido al Catálogo de Películas</h1> en el componente Home).
Configura las siguientes rutas en src/app/app.routes.ts:
ruta raíz: '' al componente "Home",
ruta de redirección al componente "Home". Trabaja el atributo pathMatch.
ruta 'movies' al componente MovieList,
ruta dinámica: 'movies/:movieId' al componente MovieDetails,
ruta comodín:'**' al componente NotFound


En la plantilla src/app/app.html:
Limpia el código dejando solo la etiqueta
Crea una barra de navegación con las siguientes indicaciones:
Ruta Inicio --> "/"
Ruta Películas --> "movies"
Resalta las rutas activas con negrita o subrayado. (tip: investiga las propiedades routerLink y routerLinkActiveOptions)
Da estilos a la barra de navegación.

Verifica que la navegación entre las páginas "Inicio" y "Películas" funciona.

Actividad 2: Rutas Dinámicas y Navegación Programática
Implementarás rutas dinámicas para mostrar los detalles de películas individuales y aprenderás a navegar programáticamente entre rutas.

Objetivo
Definir rutas con parámetros de URL.
Acceder a los parámetros de ruta utilizando ActivatedRoute.
Utilizar Router para la navegación programática.
Pasos a Seguir

Usa un servicio para proporcionar datos al catálogo:
Crea un servicio con el nombre movies-service que incluya un array de 3 películas de prueba. Los datos serán:
id (string)
title (string)
director (string)
genre (string)

Crea un interface con el nombre Movie, en un archivo aparte para tipar los datos del array.

Modifica el componente MovieList para mostrar un listado de películas y enlaces dinámicos:

Inyecta el servicio MovieService en el componente MovieList.
Lee la lista de películas en el template.

Crea enlaces a cada película utilizando routerLink con un array de parámetros para la ruta dinámica: [routerLink]="['/movies', movie.id]".

    Modifica el componente MovieDetails para acceder a los parámetros de ruta:
    Sigue la documentación oficial para obtener el parámetro de la ruta: movieId.
    
Con el movieId, busca la película correspondiente en tu array de datos.
Implementa un botón "Volver al listado" que utilice la navegación programática con Router.navigate() para volver al listado.
Incorpora en el template una vista para el caso de que el parámetro no devuelva ninguna película. (tip: utiliza @if para la renderización selectiva)
Aplica estilos a la lista y a la ficha de la película.

Re-factoriza el proyecto para recuperar el parámetro mediante Input Signal. Puedes seguir la documentación para hacer esto.

Actividad 3: Rutas Anidadas, Layout y Gestión de Errores 404
Refactoriza la estructura de rutas para incluir un layout compartido e implementa la gestión de rutas no encontradas.

Objetivo
Crear un componente de layout para una estructura de página compartida.
Utilizar rutas anidadas para organizar la navegación.
Implementar una ruta comodín para gestionar errores 404.
Realizar redirecciones de rutas.
Pasos a Seguir
Crea un componente Layout:
Genera un nuevo componente: layout.
En layout.ts, asegúrate de importar RouterOutlet y RouterLink.
En la plantilla del componente Layout, añade la estructura de tu layout (cabecera, navegación, pie de página) y un router-outlet en el área del contenido principal.
Refactoriza app.routes.ts para utilizar rutas anidadas con el Layout:
Define una ruta principal que utilice Layout y añade las demás rutas como hijos dentro de un array children.
Asegúrate de que el componente NotFound se mantiene fuera de las rutas anidadas para capturar cualquier ruta no válida.
Crea el contenido de la página 404 e introduce una ruta inexistente para probarla.
Autoevaluación
 Puedo explicar la diferencia entre aplicaciones multipágina y SPAs.
 Sé configurar el Router de Angular en un proyecto.
 Puedo definir rutas estáticas y dinámicas con parámetros.
 Sé utilizar routerLink para navegación declarativa.
 Puedo utilizar Router.navigate() para navegación programática.
 Sé acceder a los parámetros de URL con ActivatedRoute.
 Puedo utilizar rutas anidadas y router-outlet para layouts compartidos.
 Sé trabajar con parámetros de consulta (queryParamMap) y fragmentos de URL.
 Puedo implementar una ruta comodín (**) y redirecciones para páginas no encontradas.
 Sé estructurar una aplicación Angular con enrutamiento complejo.
Referencias
Angular Router – everything you need to know about
Documentación Oficial de Angular: Routing & Navigation
Angular Routing Tutorial (Angular.dev)
RouterLink API Reference
RouterOutlet API Reference
ActivatedRoute API Reference
Router Service API Reference
Patrones de Rutas Dinámicas
Client-Side Routing Explained (MDN Web Docs)