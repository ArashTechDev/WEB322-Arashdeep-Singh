const EventEmitter = require("events")
const trafficLightsEmitter = new EventEmitter()
const lights = [
    {color:"Red",duration:5000},
    {color:"Yellow",duration:2000},
    {color:"Green", duration: 5000}
]

let index = 0

function changeLight(){
    console.log(lights[index].color)
    trafficLightsEmitter.emit('light-changed',lights[index].color)
    setTimeout(()=>{
        index++

        if (index == 3){
            index = 0
        }
        changeLight();
    },lights[index].duration);

   

    

    
}


//EventEmitter
trafficLightsEmitter.on("light-changed", (color) => {
    console.log("The light just changed to: " + color)
})

changeLight();