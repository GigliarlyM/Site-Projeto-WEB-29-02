var questoesAcertadas = 0

const adicionarAcerto = () => {
    questoesAcertadas++
    // console.log(questoesAcertadas)
    // document.querySelector('p#acertos').textContent = 'Acertos:'+ questoesAcertadas
}

const calcularPontosPorcentagem = () => {
    console.log('Acertos: '+ questoesAcertadas + ', quantidade de questoes: '+ quantidadeQuestoes)

    return questoesAcertadas / quantidadeQuestoes
}

const parabenizar = () => {
    let h2Parabens = document.createElement('h2')
    h2Parabens.className = 'light-blue align-center'
    let acertosPorcentagem = ( calcularPontosPorcentagem() * 100 ).toString()
    h2Parabens.textContent = "SUA PONTUACAO FOI DE " + acertosPorcentagem.substring(0, 4) + "%"

    return h2Parabens
}