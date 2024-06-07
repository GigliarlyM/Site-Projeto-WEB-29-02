const numeroQuestao = document.querySelector('#numero-questoes')

for (let i = 1; i <= quantidadeQuestoes; i++) {
    let pNumero = document.createElement("p")
    pNumero.textContent = i
    if (i == 1) pNumero.id = "bg-blue"

    
    
    numeroQuestao.appendChild(pNumero)
    // pNumero.setAttribute("id", "bg-blue")
}

const alterarAtributo = (elemento, atributo, valor) => {

}