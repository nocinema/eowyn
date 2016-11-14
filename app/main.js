import Vue from 'vue';

import AppComponent from './components/app-component/app-component.js';

new Vue({
    el: '#app',
    components: {
        'app-component': AppComponent
    }
});
