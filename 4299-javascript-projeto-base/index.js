
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {   //aqui temos um addEventListener que esta puxando o evento click e quando colocamos () => podemos selecionar um evento especifico para entrarmos nele
    //o evento ele anota tudo que vc faz entao ele sempre vai ser usado para listas ou formularios
    evento.preventDefault(); //ao utilizar o evento.preventDefault ele e bom para formulario, pois nao atualiza a pagina e ainda da pra usar os itens coletador
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);

}) 


verificarListaVazia(listaDeCompras);