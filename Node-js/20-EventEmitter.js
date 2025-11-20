// asli maal to yai se shuru hoga
const { log } = require('console');
const EventEmitter = require('events')
const customEmitter = new EventEmitter(); 
customEmitter.on('res',(name,id)=>{
    log(`data received with name ${name} and id : ${id}`);
})
customEmitter.on('res',()=>{
    log(`data received`);
})
customEmitter.emit('res','Divas',101); 

// thoda samajh nahi aaya ki iska use ho kaha rha hai Event Emitter ka 