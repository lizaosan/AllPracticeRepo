var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

app.message = 'Lizaosan is the best!';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

app2.message = '可是我被v-once擋掉了改不了';

var arr = [true, false];
var bol = arr[Math.floor(Math.random() * arr.length)];

var lizao = new Vue({
    el: '#lizao',
    data: {
        message: '被你看到了',
        seen: bol
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: bol
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function (
        ) { return this.message.split('').reverse().join('') }
    }
})

var app5 = new Vue({
    el: '#app-5',
    computed: { 
        fullName: { 
            get: function () { return this .firstName + ' ' + this.lastName},
            set: function ( newValue ) {
            var names = newValue.split( ' ' ),
            this.firstName = names[ 0 ],
            this.lastName = names[names .length - 1 ]}
        }
    
    },
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    }
})






