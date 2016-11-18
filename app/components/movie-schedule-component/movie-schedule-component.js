import Vue from 'vue';
import http from 'vue-resource';
import template from './movie-schedule-component-template.html';

Vue.use(http);

const MovieScheduleComponent = Vue.component('movie-schedule', {
    template,
    data() {
        return {
	    city: 'Florianópolis'
	}
    },
    created() {
        console.log('Component created.');
    },
    beforeMount() {
        this.$http
	    .get('http://api.nocinema.info/programacao/cidade/florianopolis')
	    .then((response) => {
	        console.log(response);
	    })
	    .catch((err) => {
	        console.log(err);
	    });
    }
});

export default MovieScheduleComponent;
