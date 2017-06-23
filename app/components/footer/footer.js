// Vue resources
import Vue from 'vue';

// Import templates
import template from './footer.template.html';

// Instance of header component
const FooterComponent = Vue.component('footer-component', {
    template,
    data() {
        return {
          cities: [],
        }
    }
});

export default FooterComponent;
