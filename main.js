let gato = 0
let peixe = 0

gato = window.prompt("Digite a velocidade do gato",gato)
peixe = window.prompt("Digite a velocidade do Peixe",peixe)


document.getElementById("gato").innerHTML+=gato
document.getElementById("peixe").innerHTML+=peixe


if(gato>peixe){
   gato = window.prompt("Digite a fome do gato",gato)
   if (gato>5){
       document.getElementById("campo").innerHTML+="O gato comeu o peixe"
   }
   else{
       document.getElementById("peixe").innerHTML+="O gato pegou o peixe mas não comeu"
   }
}

else{
    peixe = window.prompt("O Peixe voltou para a agua?",peixe)
    if(peixe =="sim"){
        document.getElementById("campo").innerHTML+="O peixe voltou para o mar"
    }
    else{
        document.getElementById("campo").innerHTML+="O Peixe Morreu sufocado!!"
    }
}
