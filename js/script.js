
import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {

            // Associo la const slides con un array 
            
            slides: slides,

            // Creo una variabile activeIndexSlide e la inizializzo a 0
            // Variabile che mi serve per tenere traccia dell'indice dell'elemento attivo nella lista slides. Inizializzo a 0 perchè all'avvio l'elemento attivo sarà il primo.
            
            activeIndexSlide: 0
        }    
    },
    methods: {

        // Creo due metodi che mi permettono di andare avanti e indietro sulle miniature
        
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