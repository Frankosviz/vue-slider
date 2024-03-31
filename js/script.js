
import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {
            slides: slides,
            activeIndexSlide: 0
        }    
    },
    methods: {
        nextSlide(){
            this.activeIndexSlide++
        },
        prevSlide(){
            this.activeIndexSlide--
        }
    },
    computed(){

    },
    mounted() {

    }  
}).mount('#app')