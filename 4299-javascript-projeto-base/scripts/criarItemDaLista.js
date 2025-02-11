import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item") //campo de digitacao
let contador = 0;  //let constroe uma variavel que nao e constante que permite fazer alteracoes dentro dela

export function criarItemDaLista() {
    
    if (inputItem.value === "") { //esta confirmando se o valor desse input e igual a uma string vazia 1 =  adicionar 2 iguais ou 3 iguais compara valores
        alert("Por favor, insira um item na lista!"); //alerta para caso vc clique no botao e nao sem nada na lista informa a mensagem
        return //caso tenha um return ele para e nao executa mais funcionalidades
    }


    const itemDaLista = document.createElement("li"); //criamos e anexamos itens a lista
    const containerItemDaLista = document.createElement("div"); //aqui criamos a div que esta no index 
    containerItemDaLista.classList.add("lista-item-container"); //aqui colocamos a classe que esta dentro da div
    const inputCheckbox = document.createElement("input")  //aqui constroe o input, o checkbox vai abaixo pois ele e o atributo
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++; //checkbox- corresponde ao id que seria checkbox-1 que aumentaria para -2 -3 -4
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;  //quando tiver informacoes ele colocara dentro da variavel o valor do campo de digitacao

    inputCheckbox.addEventListener("click" , function() {
        if (inputCheckbox.checked) {
    nomeItem.style.textDecoration = "line-through";
            } else {
                nomeItem.type.textDecoration = "none"
        } 
    }
)

    containerItemDaLista.appendChild(inputCheckbox); //appendChild conecta os elementos criados, ex: inputCheckbox que serve para informar o item e o nomeItem que insere o item
    containerItemDaLista.appendChild(nomeItem);

    const dataCompleta = gerarDiaDaSemana();

    itemDaLista.appendChild(containerItemDaLista) //aqui criamos o elemento pai, que esta unindo os elementos filhos ex: itemDaLista que anexa o elemento containerItemDaLista que anexa os elementos inputCheckbox e nomeItem
    
    
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)
   
    return itemDaLista;
}