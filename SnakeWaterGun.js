let player = prompt("Please enter your choice from S, W, G")
let choice = Math.floor(Math.random()*3)
let cpu = ["S", "W", "G"][choice]

const match = (cpu, player)=>{
    if(choice === player){
        return "Nobody"
    }

    //s-w
    if(cpu==="S" && player === "W"){
        return "cpu"
    }
    //w-g
    else if(cpu==="W" && player === "G"){
        return "cpu"
    }
    //s-g
    else if(cpu==="S" && player === "G"){
        return "player"
    }
    //w-s
    else if(cpu==="W" && player === "S"){
        return "player"
    }
    //g-s
    else if(cpu==="G" && player === "S"){
        return "cpu"
    }
    //g-w
    else if(cpu==="G" && player === "W"){
        return "player"
    }
}

let result = match(cpu, player)
document.write(`CPU:${cpu} <br>Player:${player} <br>The Winner is: ${result.toUpperCase()}`)

console.log(cpu);
console.dir(cpu);


