// Vue resources
import Vue from 'vue';

// Import templates
import template from './middle.template.html';

// Instance of middle component
const MiddleComponent = Vue.extend({
    template,
    data() {
        return {
          title: 'NoCinema'
	    }
    },
    beforeMount() {
        if (!this.$route.params.city) {
            this.title = 'NoCinema';
        } else {
            this.title = this.$route.params.city;
        }
    }
});

export default MiddleComponent;
