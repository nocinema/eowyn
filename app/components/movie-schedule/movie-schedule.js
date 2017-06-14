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
            schedules: [],
            next: {}
	    }
    },
    created() {
        console.log('Component created.');
    },
    beforeMount() {
        this.$http.get('http://localhost:3000/programacao/cidade/florianopolis')
    	    .then((response) => {
    	        this.schedules = response.data;
    	    })
    	    .catch((err) => {
    	        console.log(err);
        });

        this.$http.get('http://localhost:3000/programacao/cidade/florianopolis/proxima')
          .then((response) => {
              this.next = response.data;
          })
          .catch((err) => {
              console.log(err);
        });

    }
});

export default MovieScheduleComponent;
