const EventEmitter = require("events")

const event = new EventEmitter()



event.on("Myname",() => {
   console.log("Hii")
})

event.emit("Myname")