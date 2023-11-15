const { createApp } = Vue;

const prova = {
    data: function () {
        return {
            message: 'Hello World',
        }
    },
};

createApp(prova).mount('#app')