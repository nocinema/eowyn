// Vue resources
import Vue from 'vue';

// Import templates
import template from './header.template.html';

// Instance of header component
const HeaderComponent = Vue.extend({
    template,
    data() {
        return {
          cities: [],
          schedule: ''
        }
    },
    beforeMount() {
         this.$http.get('http://localhost:3000/cidades')
          .then((response) => {
              this.cities = response.data;
          })
          .catch((err) => {
              console.log(err);
        });
    }
});

export default HeaderComponent;
