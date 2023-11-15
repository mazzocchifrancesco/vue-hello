const { createApp } = Vue;

const prova = {
    data: function () {
        return {
            message: 'Hello World',
            pic: 'https://picsum.photos/600/400'
        }
    },
};

createApp(prova).mount('#app')