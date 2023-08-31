
let Cards = ["<div class ='card'> Valor de entrada </div>", "<div class = 'card'> Valor de saida </div>"]
let button = ["<button id = 'bt_01'> comprar aqui</button>", "<button id ='bt_02> Comprar depois </button>"]

for(let var_a = 0;var_a != 4 ;var_a++){
    

    if(var_a == 1 || var_a == 3){
        document.getElementById("campo").innerHTML+="<div id= '01'" +var_a+ ">Elemento especial</div>"
        document.getElementById("01" +var_a).style.backgroundcolor ="red"
    }
    else{
        document.getElementById("campo").innerHTML+="<h1>Elemento" +var_a+ "</h1></br>"
    }
}


let var_b = 10
while (var_b >= 0){

    if(var_b <=1){
        document.getElementById("campo").innerHTML += Cards [var_b]
        document.getElementById("campo").innerHTML += button [var_b]
        
    }

    document.getElementById("campo").innerHTML+="<h2>Elements"+var_b+"</h2></br>"
    var_b -= 1
}
document.getElementById("bt_01").addEventListener{"click", ()=>{

}