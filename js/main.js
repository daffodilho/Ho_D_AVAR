// const routes = [
//     { path: '/', name: 'movies', component: MovieComponent },
//     { path: '/music', name: 'music', component: MusicComponent },
//     { path: '*', name: 'error', component: ErrorComponent }
// ]

// const router = new VueRouter({
//     routes // short for routes: routes
// })

const vm = new Vue({
    data: {
        noAudio: true,
        noVideo: true
    },

    methods: {
        loadAudio(){
            this.noAudio = false;
            this.noVideo = true;
        },

        loadMovie(){
            this.noVideo = false;
            this.noAudio = true;
        },

        close(){
            this.noAudio = true;
            this.noVideo = true;
        }
    },

    
}).$mount("#app");