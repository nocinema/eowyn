// Vue resources
import Vue from 'vue';

// Import templates
import template from './middle.template.html';

// Instance of middle component
const MiddleComponent = Vue.extend({
    template,
    data() {
        return {
    	    city: 'Florianópolis',
    	    cinema: 'Cinemark'
	    }
    } 
});

export default MiddleComponent;