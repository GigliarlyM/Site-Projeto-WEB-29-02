// preparar o espaco para o quiz
const divContainer = document.querySelector('div#container')
const NOME_ID = 'quiz-'
let quizAtual = 0

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

        document.querySelector('p#quiz-' + (numeroQuestao + 1)).className += ' acerto'

        console.log('Resposta correta!')
        passarQuiz()
    } else {
        console.log('Resposta incorreta!')
    }
}

const temPergunta = () => {
    if (listaQuestoes.length <= quizAtual) {
        console.log('Fim das questoes')
        // window.location.href = '/index.html'
        window.location.replace('/index.html')

        return false
    } else {
        return true
    }
}

const passarQuiz = () => {
    console.log(quizAtual);
    removerElementos()
    quizAtual++
    if (temPergunta()) {
        adicionarElementos()
    }
}


