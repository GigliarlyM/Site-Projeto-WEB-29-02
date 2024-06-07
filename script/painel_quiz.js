const numeroQuestao = document.querySelector('#numero-questoes')
let listaElemNumeroQuestoes = new Array()

for (let i = 1; i <= quantidadeQuestoes; i++) {
    let pNumero = document.createElement("p")
    pNumero.textContent = i
    if (i == 1) pNumero.className = "bg-yellow"
    let nomeId = "indice-quiz-"+i
    pNumero.id = nomeId

    listaElemNumeroQuestoes.push(pNumero.id)
    
    numeroQuestao.appendChild(pNumero)
    // pNumero.setAttribute("id", "bg-blue")
}

const alterarAtributo = (elemento, atributo, valor) => {
    console.log(elemento);
    let elementAltera = document.querySelector('#'+elemento)
    console.log(elementAltera);

    if (elementAltera) {
        elementAltera.setAttribute(atributo, valor)
    }
    
}