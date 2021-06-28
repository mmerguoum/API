new Vue({
    el: '#app',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=QLi62waIoE5d0SSH68SqcVjmIJzdBKac4Mf66xyx')
            .then(response => (this.info = response))
    }
})