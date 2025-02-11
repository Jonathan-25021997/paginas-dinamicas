function gerarDiaDaSemana(){

const diaDaSemana = new Date().toLocaleDateString("pt-br", {
    weekday: "long"
});
const data = new Date().toLocaleDateString("pt-br")
const hora = new Date().toLocaleTimeString("pt-br" ,{
    hour: "numeric",
    minute: "numeric"
}) 

const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`   //aqui quando vamos imprimir na tela em um estilo colocamos crazi, e para editar a ordem colocamos ${}

    return dataCompleta

}

export default gerarDiaDaSemana;