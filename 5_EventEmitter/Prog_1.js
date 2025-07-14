
const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('greet',(data)=>{
    console.log(`my name is ${data.name}, my age is ${data.age}`);
})


emitter.emit('greet',{name:'Pratik',age:23});
