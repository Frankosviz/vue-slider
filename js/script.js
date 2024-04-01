
import { slides } from './data.js';

const { createApp } = Vue;

createApp({
    data() {
        return {

            // Associo la const slides con un array 

            slides: slides,

            // Creo una variabile activeIndexSlide e la inizializzo a 0
            // Variabile che mi serve per tenere traccia dell'indice dell'elemento attivo nella lista slides. Inizializzo a 0 perchè all'avvio l'elemento attivo sarà il primo.

            activeIndexSlide: 0,
            clicked : false
        }
    },
    methods: {

        // Creo due metodi che mi permettono di andare avanti e indietro sulle miniature
        // Ma gli dico che: parlando di nextSlide: se l\'indice delle slide è minore della lunghezza dell'array slide - 1 allora incremento l'indice, altrimenti lo resetto a 0 
        // Parlando di prevSlide: se l'indice è maggiore di 0 allora può tornare indietro fino al primo elemento che ha indice 0
        
        nextSlide() {
            if (this.activeIndexSlide < this.slides.length - 1) {
                this.activeIndexSlide++
            } else {
                this.activeIndexSlide = 0
            }
        },
        prevSlide() {
            if (this.activeIndexSlide > 0) {
                this.activeIndexSlide--
            } else {
                this.activeIndexSlide = this.slides.length - 1
            }
        },
        goToSlide(index) {
            this.activeIndexSlide = index
        },
    },
    mounted() {

        // Setto l\'intervallo automatico di 2 secondi alle slide creando in mounted la funzione

        setInterval(this.nextSlide, 2000);
        this.nextSlide();
    }
}).mount('#app')