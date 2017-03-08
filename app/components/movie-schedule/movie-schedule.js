// Vue resources
import Vue from 'vue';
import http from 'vue-resource';

// Import templates
import template from './movie-schedule.template.html';

// Use of vue resources
Vue.use(http);

// Intance of movie schedule component
const MovieScheduleComponent = Vue.component('movie-schedule', {
    template,
    data() {
        return {
            schedule: this.sessions
	    }
    },
    created() {
        console.log('Component created.');
    },
    beforeMount() {
        this.sessions = [
            {
                "title": "A Era do Gelo: O Big Bang",
                "censorship": "Livre",
                "special": false,
                "hours": [
                    "12h50",
                    "17h30"
                ]
            },
            {
                "title": "A Era do Gelo: O Big Bang 3D",
                "censorship": "Dublado",
                "special": true,
                "hours": [
                    "15h10",
                    "19h50"
                ]
            },
            {
                "title": "A Lenda de Tarzan 3D",
                "censorship": "Dublado",
                "special": true,
                "hours": [
                    "13h30",
                    "18h50"
                ]
            },
            {
                "title": "A Lenda de Tarzan",
                "censorship": "12 Anos",
                "special": false,
                "hours": [
                    "20h50"
                ]
            },
            {
                "title": "A Lenda de Tarzan 3D",
                "censorship": "Legendado",
                "special": true,
                "hours": [
                    "16h10",
                    "21h40"
                ]
            },
            {
                "title": "Carrossel 2 - O Sumiço de Maria Joaquina",
                "censorship": "Livre",
                "special": false,
                "hours": [
                    "13h40",
                    "16h00",
                    "18h30"
                ]
            },
            {
                "title": "Caça-Fantasmas 3D",
                "censorship": "Dublado",
                "special": true,
                "hours": [
                    "13h00",
                    "18h20"
                ]
            }
        ];
    //     this.$http
    // 	    .get('http://api.nocinema.info/programacao/cidade/florianopolis')
    // 	    .then((response) => {
    // 	        console.log(response);
    // 	    })
    // 	    .catch((err) => {
    // 	        console.log(err);
	   // });
    }
});

export default MovieScheduleComponent;
