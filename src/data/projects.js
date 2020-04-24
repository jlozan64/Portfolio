import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetodo from '../assets/projects/05.png'
import mynotes from '../assets/projects/06.png'
import thelogin from '../assets/projects/07.png'
import superheroes from '../assets/projects/08.png'
import moviesdb from '../assets/projects/09.png'
import blogapp from '../assets/projects/10.png'
import chatapp from '../assets/projects/11.png'
import chatapp from '../assets/projects/12.png'

const projects = [
  {
    name: 'Basic Todo App',
    description: 'A Vanilla HTML, JS and CSS Todo Application!',
    image: basictodo,
    hashtags: ['todo', 'html5', 'css', 'javascript'],
    url: 'https://basictodo.jjloz.xyz/'
  },
  {
    name: 'Todo App with Bootstrap',
    description: 'A Todo Application in Vanilla JavasCript and Bootstrap',
    image: todob,
    hashtags: ['todo', 'html5', 'javascript', 'bootstrap'],
    url: 'https://mynotes.jjloz.xyz/'
  },
  {
    name: 'Todo App with Tailwind',
    description: 'A Todo Application in Vanilla JavasCript and TailwindCSS',
    image: todot,
    hashtags: ['todo', 'html5', 'javascript', 'tailwind'],
    url: 'https://todot.jjloz.xyz/'
  },
  {
    name: 'Basic Inventory App',
    description: 'A Basic Inventory App in Vue.js',
    image: inventory,
    hashtags: ['inventory', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://inventory.jjloz.xyz/'
  },
  {
    name: 'Todo App with Tailwind and Vue.js',
    description: 'A Todo Application in Vue.js and TailwindCSS',
    image: vuetodo,
    hashtags: ['todo', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://vuetodo.jjloz.xyz/'
  },
  {
    name: 'Look at my notes',
    description: 'A Vue.js Application with Vuex, implementing a CRUD Notes app.',
    image: mynotes,
    hashtags: ['crud', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://mynotes.jjloz.xyz/'
  },
  {
    name: 'The Login',
    description: 'A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google.',
    image: thelogin,
    hashtags: ['firebase', 'auth', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://thelogin.jjloz.xyz/'
  },
  {
    name: 'Superheroes',
    description: 'A Vue.js Application with Vuex, implementing a search.',
    image: superheroes,
    hashtags: ['vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://superheroes.jjloz.xyz/'
  },
  {
    name: 'Movies Database',
    description: 'API with Vue.js Application Movies Database.',
    image: moviesdb,
    hashtags: ['API', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://moviesdb2.jjloz.xyz/'
  },
  {
    name: 'Blog App',
    description: 'Server Side app, using Node and Express and Frontend with Vue.',
    image: blogapp,
    hashtags: ['API', 'vuejs', 'node', 'express', 'frontend'],
    url: 'https://blogapp.jjloz.xyz/'
  },
  {
    name: 'Live Chat App',
    description: 'Live Chat Application using Firestore database.',
    image: chatapp,
    hashtags: ['API', 'vuejs', 'firestore', 'firebase', 'frontend'],
    url: 'https://chat.jjloz.xyz/'
  },
  {
    name: 'Shop App',
    description: 'A Pseudo Shop with Firebase.',
    image: shopapp,
    hashtags: ['API', 'vuejs', 'firebase', 'frontend'],
    url: 'https://shop.jjloz.xyz/'
  }
]

export default projects
