# Calendar App

A calendar app I created to improve my react and javascript.

## Challenges -> Start all app from 0.

- How to design a calendar/event list with as few clicks as posible and user friendly.
- How to sort all the information I need to develop the app into componets and their relationship to each other.
- Understand supabase and how it is used. Supabase is awesome, it has a great user design, because of that it is easier to understand what I am doing and to learn.
- How create a component where I control all the fetch and post.
- Use react-router.
- UX/UI desig.
- Responsive design.


## Steps 

I always start with a wireframe of the project to get a general idea of what I want to include and the flow. I like doing it on paper, I don't use a computer to avoid temptation to mix ornament design (like border-shadow...) in this part.

![Calendar wireframe](./readme/wireframe.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How it works

- Click on sign in or sign up then create an event with a form.
- See all events with their information.

## Technologies used

- React
- HTML
- CSS
- Supabase

## Responsive design.

I create a logo with text and without to adapt a small and big screen 

![Logo agenda peques](./readme/logos.png)

Responsive components design 

- Home screen
    This component show all the events. The events that a user creates have the option to delete and edit them once you are successful. Here is more useful to know about how to use supabase (authentication, database) ;).

![Home screen](./readme/events.png)

- Sign in component
    
    I created two diffents illustrations to use in small and big screen

![Sign in](./readme/sign_in.png)

- Sign up component

    I did two differents illustrations to small and big screen

![Sign up](./readme/sign_up.png)

- Create events components.

    I designed two differents screens. I created a illustrations two desktop.

![create events](./readme/create_events.png)

- Information event component.

![information events](./readme/info.png)



## CSS Animations

There are 3 states when the app is charged. It can be loading, loaded and without events. I did two svg animations, loading and empty events and the third animations is about when people sign up and has to check the email.

![animations](./readme/animations.png)

Email confirm animation.

![envelop animation](./readme/gif_envelop.gif)

Loading animation.

![loading animation](./readme/gif_loading.gif)

Empty events animation.

![empty events animation](./readme/gif_empty_events.gif)

## Colors 

I always start designing in black and white. It's the best option to find  a design  with balance and rhythm to make an order and their relationships . Then I make a color palette depending on the target. I don't use a color big palette when we use fewer colours we make greater use of creativity and achieve better results.

![colors](./readme/colors.png)


## What I have learned

- How to use supabase (authentication, database).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
