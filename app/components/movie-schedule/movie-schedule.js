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
    beforeMount() {
        this.fetchSchedules();
    },
    methods: {
        fetchSchedules() {
            this.$http.get(`http://localhost:3000/programacao/cidade/${this.$route.params.city}`)
              .then((response) => {
                  this.schedules = response.data;
              })
              .catch((err) => {
                  console.log(err);
            });

            this.$http.get(`http://localhost:3000/programacao/cidade/${this.$route.params.city}/proxima`)
              .then((response) => {
                  this.next = response.data;
              })
              .catch((err) => {
                  console.log(err);
            });        }
    },
    watch: {
        '$route': 'fetchSchedules'
    }
});

export default MovieScheduleComponent;
