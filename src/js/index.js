let imagens = document.querySelectorAll(".imagem")
const botoes = document.querySelectorAll(".botoes")

let listaDeImagens = [imagens[0], imagens[1], imagens[2], imagens[3]]

let inicioDaTela = listaDeImagens[0]

let botaodireito = botoes[1]
let botaoesquerdo = botoes[0]



botaodireito.addEventListener("click", () => {
    let telaPrincipal = inicioDaTela
    if (telaPrincipal == listaDeImagens[0]) {
        inicioDaTela = listaDeImagens[1]
        listaDeImagens[1].classList.add("selecionada")
        listaDeImagens[0].classList.remove("selecionada")

    } if (telaPrincipal == listaDeImagens[1]) {
        inicioDaTela = listaDeImagens[2]
        listaDeImagens[2].classList.add("selecionada")
        listaDeImagens[1].classList.remove("selecionada")



    } if (telaPrincipal == listaDeImagens[2]) {
        inicioDaTela = listaDeImagens[3]
        listaDeImagens[3].classList.add("selecionada")
        listaDeImagens[2].classList.remove("selecionada")

    } if (telaPrincipal == listaDeImagens[2]) {

        inicioDaTela = listaDeImagens[3]
        listaDeImagens[3].classList.add("selecionada")
        listaDeImagens[2].classList.remove("selecionada")





    }

  
    inativarbotaoesquerdo()
    inativarbotaodireito()
    
})


botaoesquerdo.addEventListener("click", () => {
    let telaPrincipal = inicioDaTela
    if (telaPrincipal == listaDeImagens[1]) {

        inicioDaTela = listaDeImagens[0]
        listaDeImagens[0].classList.add("selecionada")
        listaDeImagens[1].classList.remove("selecionada")

    } if (telaPrincipal == listaDeImagens[2]) {
        inicioDaTela = listaDeImagens[1]
        listaDeImagens[1].classList.add("selecionada")
        listaDeImagens[2].classList.remove("selecionada")


    } if (telaPrincipal == listaDeImagens[3]) {

        inicioDaTela = listaDeImagens[2]
        listaDeImagens[2].classList.add("selecionada")
        listaDeImagens[3].classList.remove("selecionada")

    }

    inativarbotaoesquerdo()
    inativarbotaodireito()
})


let inativarbotaoesquerdo = function(){
 

if(inicioDaTela == listaDeImagens[0]){
    botoes[0].classList.add("opaco")
    botoes[0].disabled = true

}else{
    botoes[0].classList.remove("opaco")
    botoes[0].disabled = false
}
 

}

inativarbotaoesquerdo()



let inativarbotaodireito = function(){
 

    if(inicioDaTela == listaDeImagens[3]){
        botoes[1].classList.add("opaco")
        botoes[1].disabled = true
        
    }else{
        botoes[1].classList.remove("opaco")
        botoes[1].disabled = false
    }
     
    
    }