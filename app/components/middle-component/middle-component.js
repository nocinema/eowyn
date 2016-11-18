import Vue from 'vue';
import template from './middle-component-template.html';

const data = {
  city: 'Florianópolis'
};

const AppComponent = Vue.extend({
    template,
    data() {
        return {
	    city: 'Florianópolis'
	}
    } 
});

export default AppComponent;
