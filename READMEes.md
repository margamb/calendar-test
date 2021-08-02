# Calendar App

Este documento está disponible en inglés [aquí](./README.md)

Una app de calendario que creé desde cero (bueno, con la ayuda de create react app 😅) para mejorar mi react y javascript. También diseñé toda la interfaz de usuario, hice las ilustraciones y la integré con supabase como backend.

La app es una lista de eventos donde los usuarios pueden registrarse y crear eventos, a los usuarios no registrados se les presentará una lista de los próximos eventos. La idea era mantenerla lo más simple posible para aprender bien las tecnologías, pero también crear algo utilizable en producción.


## Objetivos de aprendizaje al realizar esta aplicación 👩🏻‍🎓

Esta era una aplicación muy ambiciosa, cuando se me presentó la idea decidí ir a por ella porque me ayudaría a alcanzar algunos objetivos relacionados con mi formación como desarrolladora frontend, y a mostrar/mejorar mis habilidades de diseño.

Los objetivos que me propuse fueron:

- Diseñar una aplicación de calendario/lista de eventos, que sea fácil de usar, para mostrar y mejorar mis habilidades de diseño **UX/UI**.
- Ordenar toda la información necesaria para desarrollar la aplicación en **componentes reutilizables**.
- Entender supabase y cómo se utiliza. Supabase tiene un gran diseño de usuario, por lo que simplifica el **backend** y puedo entender mejor los conceptos del backend.
- Separar las llamadas a la api en su propio módulo/capa** para desacoplar la vista de la api, por lo que debería ser sencillo cambiar a un backend diferente si es necesario.
- Usa react-router para manejar toda la **navegación en el cliente**.
- Hacer el diseño **responsivo** para mostrar/mejorar mi CSS.
- Crear una **marca coherente** a través de la aplicación, para mostrar cómo puedo aprovechar mi experiencia como diseñadora.


## Wireframe design 🤓

Siempre empiezo con un wireframe del proyecto para tener una idea general de lo que quiero incluir y del flujo de usuario. Me gusta hacerlo en papel, no uso el ordenador para evitar la tentación de incluir decoración (como los colores) y centrarme en el flujo de usuarios y las características necesarias.

![Calendar wireframe](./readme/wireframe.jpg)


## Tecnologías utilizadas 👩🏻‍💻

- React
- React Router
- HTML
- CSS
- Supabase

## Responsive design 👩🏻‍🎨

A continuación empecé a crear las vistas y los componentes directamente en el navegador usando CSS, prefiero esto a usar una aplicación de diseño, porque me permite experimentar mejor con la forma en que se ven las cosas en diferentes tamaños de pantalla.

Los elementos como el logotipo y las ilustraciones se crearon con Affinity Designer y se exportaron como SVG.


### Logo
He creado dos versiones del logotipo con texto y sin él para adaptarlo a diferentes tamaños de pantalla.

![Logo agenda peques](./readme/logos.png)


### Pantalla de inicio
Este componente muestra todos los eventos. Los eventos que pertenecen al usuario autentificado tienen la opción de borrarlos y editarlos.

Al principio pensé en hacer una vista de calendario para que el usuario pudiera hacer clic en cualquier día y ver los eventos para ese día, pero esto era más difícil de implementar y después de pensar en cómo un usuario utilizaría la aplicación me di cuenta, que preferirían ver una lista de los próximos eventos, sin tener que hacer clic varias veces en cada día. Así que convertirlo en una lista fue un triunfo para todos.

![Home screen](./readme/events.png)

### Sign in component
    
He creado dos ilustraciones diferentes para utilizarlas en diferentes ventanas. La característica es tan simple como puede ser, la autenticidad es impulsada por supabase.

![Sign in](./readme/sign_in.png)

### Sign up component

También con dos ilustraciones diferentes en función del viewport. Se trata de pedir a un usuario los mínimos datos posibles para evitar la fricción al darse de alta. El correo electrónico luego debe ser confirmado, esta característica también es proporcionada por supabase, pero he creado una vista para informar al usuario para comprobar la confirmación del correo electrónico. La vista tiene una pequeña animación para hacerla más divertida, hay un gif incluido abajo que lo muestra.

![Sign up](./readme/sign_up.png)

### Create event and event information

Reutilicé la misma vista para editar y crear eventos, el truco fue hacer que el router de react compruebe si se pasa un id de evento existente como parámetro de la URL, si se incluye llamamos a la API para los detalles del evento y rellenamos el formulario con los detalles del evento, si no se pasa ningún id mostramos el componente en "modo creación". Entonces, dependiendo de este id, llamamos a la api para crear (si no hay id) o actualizar (si la url contiene un id).

![create events](./readme/create_events.png)


![information events](./readme/info.png)



## CSS Animations 👩🏻‍🎤

Hay 3 estados cuando la aplicación está obteniendo datos. Puede estar recuperando datos, eventos ya recuperados, y ya recuperados pero sin eventos devueltos (vacíos).

Hice un par de animaciones svg, una para esos estados de carga y otra para la pantalla de confirmación de correo electrónico, me encanta poner ese tipo de pequeños detalles que ayudan a dar la personalidad de la aplicación.

![animations](./readme/animations.png)

Email confirm animation.

![envelop animation](./readme/gif_envelop.gif)

Loading animation.

![loading animation](./readme/gif_loading.gif)

Empty events animation.

![empty events animation](./readme/gif_empty_events.gif)

## Colors 🌈
 
Siempre empiezo a diseñar en blanco y negro. Es la mejor opción para conseguir una sensación de equilibrio y ritmo en un diseño. Luego hago una paleta de colores en función del objetivo. Prefiero las paletas de colores pequeñas para que el diseño sea más coherente y elegante.

![colors](./readme/colors.png)


## Available Scripts

This was scaffolded using [create react app](https://github.com/facebook/create-react-app), so you can check their project for more info

Below I put a list of the most useful scripts included for quick reference:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

