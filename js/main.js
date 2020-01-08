import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

//set up a viewmodel and use the Vue framework
//imports should always be at the very top of the document

const my_vm = (() => {
    //variables, or define components... wtvr

    let vue_VM = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Joe", role: "Prof"},
                {name: "John", role: "Prof"},
                {name: "Jarrod", role: "Prof"},
                {name: "Trevor", role: "Prof"},
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app");
})();