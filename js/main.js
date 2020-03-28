Vue.component('poster', {
    props: {
        thumbnail: String,
        source: String
    },

    template: `
    <li>
        <a href="#" @click.prevent="load-asset">
            <img :src="'../images/' + thumbnail" alt="movie poster">
        </a>
    </li>
    `
})

var vm = new Vue({
    el: "#app",

    data: {
        assets: [
            {name: "101 Dalmations", thumbnail: "1960_dalmation.jpg", source: "../assets/101.mp4"},
            {name: "Close to you", thumbnail: "1970_closetoyou.jpg", source: "../assets/closetoyou.mp3"}
        ],

        hidePlayer: false
    }
})