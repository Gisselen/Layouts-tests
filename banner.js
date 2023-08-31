
let Contador = 0

document.getElementById("bt_prox").addEventListener("click",BtProxFuncao,false)
document.getElementById("bt_ant").addEventListener("click",BtAntFuncao,false)


let banner_principal = ["tema1", "tema2", "tema3", "tema4"]

function BtProxFuncao(){
    
    if(Contador >=4){ //VERIFICA SE O CONTADOR É MAIOR QUE 4
        Contador-=1
       document.getElementById(banner_principal[Contador]).style.visibility = "hidden"
       contador = 0
       document.getElementById(banner_principal[Contador]).style.visibility = "visible"
    }

  else{ //CONTADOR MENOR QUE 3
    if (Contador == 0){
        document.getElementById(banner_principal[Contador]).style.visibility = "hidden"
        document.getElementById(banner_principal[Contador]).style.visibility = "visible"
    }

    else{
        
        document.getElementById(banner_principal[Contador]).style.visibility = "hidden"
        document.getElementById(banner_principal[Contador]).style.visibility = "visible"

    }
    Contador+=1
  } 
}

function BtAntFuncao(){
    if (Contador<=0){
        document.getElementById(banner_principal[Contador]).style.visibility = "hidden"
        document.getElementById(banner_principal[3]).style.visibility = "visible"
        Contador = 4
    }

    else{
        if (Contador >= 4){
            document.getElementById(banner_principal[Contador-1]).style.visibility = "hidden"
            Contador = 0
        }
    else{
        document.getElementById(banner_principal[Contador]).style.visibility = "hidden"
    }

    if (Contador !=0){
        Contador -=1
    }
    
    document.getElementById(banner_principal[Contador]).style.visibility = "visible"

    }
}