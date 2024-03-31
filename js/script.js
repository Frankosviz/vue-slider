
import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {
            slides: slides,
            shouldApplyClass: true,
            activeIndexSlide: 0
        }    
    },
    methods: {

    },
    computed(){

    },
    mounted() {

    }  
}).mount('#app')