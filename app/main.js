import Vue from 'vue';

import MiddleComponent from './components/middle-component/middle-component.js';
import MovieScheduleComponent from './components/movie-schedule-component/movie-schedule-component.js';

import MainCSS from './css/main.scss';

let nocinemaApp = new Vue({
    el: '#app',
    components: {
	'middle-component': MiddleComponent,
        'movie-schedule-component': MovieScheduleComponent
    }
});
