// Vue resources
import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import HeaderComponent from './components/header/header.js';
import MiddleComponent from './components/middle/middle.js';
import MovieScheduleComponent from './components/movie-schedule/movie-schedule.js';
import HomeComponent from './components/home/home.js';
import FooterComponent from './components/footer/footer.js';

// Main scss with components styles imported
import MainCSS from './css/main.scss';

// Use of vue resources
Vue.use(VueRouter);

// Routes
const routes = [
    { path: '/home', alias: '/', name: 'home', component: Vue.component('home') },
    { path: '/sobre', name: 'about', component: Vue.component('movie-schedule') },
    { path: '/cidade/:city', name: 'schedule', component: Vue.component('movie-schedule') }
];

const router = new VueRouter({
    routes,
    base: window.location.href
});

// Instance of main app with components
let nocinemaApp = new Vue({
    el: '#nocinemaApp',
    router,
    components: {
        'header-component': HeaderComponent,
        'middle-component': MiddleComponent
    }
});
