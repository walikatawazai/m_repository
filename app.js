
const app = Vue.createApp({
    //template: '<h2>i am the template</h2>'
    data(){
        return {
        title: 'function return value from app.js',
        name: 'Wali Mohammad',
        age: 30,
        show_hide_state: true,
        x:0,
        y:0,
        books_array: [
            {title: 'Vue javascript book' , author: 'Wali' , img: 'assets/1.jpg' },
            {title: 'React typescript book' , author: 'Naime' , img: 'assets/2.png' },
            {title: 'angolar typescript book' , author: 'Farid' , img: 'assets/3.png' }
        ],
        url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3'
    }
    },
    
    methods: {
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleEvent(){
            console.log('event')
        },
        toggleShowHideFunction(){
            this.show_hide_state =  !this.show_hide_state
        },
        changeNameFunction(){
            this.name = 'Katawazai'
            //console.log('You Clicked me')s
        }
    }

})
app.mount('#app')

//console.log('hello world vue.js file')