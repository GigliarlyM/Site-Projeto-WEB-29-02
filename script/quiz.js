// preparar o espaco para o quiz
const divContainer = document.querySelector('div#container')
const NOME_ID = 'quiz-'
const btnConfirma = document.querySelector('#btn-confirma')
let quizAtual = 0

btnConfirma.addEventListener('click', () => { confirmarQuiz() })

const adicionarElementos = (quiz = quizAtual) => {
    let pPergunta = document.createElement('p')
    pPergunta.className = 'light-blue'
    pPergunta.id = 'pergunta'
    pPergunta.textContent = listaQuestoes[quiz].pergunta
    divContainer.appendChild(pPergunta)

    listaQuestoes[quiz].alternativas.forEach(alternativa => {
        let pAlternativa = document.createElement('p')
        let numeroQuestao = listaQuestoes[quiz].alternativas.indexOf(alternativa)

        pAlternativa.className = 'alternativa quiz-' + (numeroQuestao + 1)
        pAlternativa.id = NOME_ID + (numeroQuestao + 1)
        pAlternativa.textContent = alternativa
        pAlternativa.addEventListener('click', () => verificarResposta(alternativa, numeroQuestao))

        divContainer.appendChild(pAlternativa)
    })
}

adicionarElementos()

const removerElementos = () => {
    divContainer.innerHTML = ''
}

const verificarResposta = (alternativaEscolhida, numeroQuestao) => {
    if (alternativaEscolhida == listaQuestoes[quizAtual].resposta) {
        adicionarAcerto()
        document.querySelector('p#quiz-' + (numeroQuestao + 1)).className += ' acerto'

    } else {
        // 'Resposta incorreta!'
    }
}

const temPergunta = () => {
    if (listaQuestoes.length <= quizAtual) {
        // Fim das questoes

        apresentarPontuacao()
        // window.location.href = '/index.html'
        // window.location.replace('/index.html')

        return false
    } else {
        return true
    }
}

const confirmarQuiz = () => {
    // clearTimeout( setTimeout(() => {}, 5000) )
    passarQuiz()
}

const passarQuiz = () => {

    removerElementos()
    quizAtual++

    if (temPergunta()) {
        adicionarElementos()

        alterarAtributo(
            listaElemNumeroQuestoes[quizAtual - 1],
            "class",
            " "
        )

        alterarAtributo(
            listaElemNumeroQuestoes[quizAtual],
            "class",
            "bg-yellow"
        )

    } 

}


