// Vue resources
import Vue from 'vue';

// Import templates
import template from './header.template.html';

// Instance of header component
const HeaderComponent = Vue.extend({
    template,
    data() {
        return {
    	    city: 'Florianópolis',
    	    cinema: 'Cinemark'
	    }
    } 
});

export default HeaderComponent;