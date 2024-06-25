var questoesAcertadas = 0

const adicionarAcerto = () => {
    questoesAcertadas++
    // console.log(questoesAcertadas)
    // document.querySelector('p#acertos').textContent = 'Acertos:'+ questoesAcertadas

    return questoesAcertadas
}

const calcularPontosPorcentagem = (questAcert = questoesAcertadas, quantQuest = quantidadeQuestoes) => {
    console.log('Acertos: '+ questAcert + ', quantidade de questoes: '+ quantQuest)

    return questAcert / quantQuest
}

const parabenizar = () => {
    let h2Parabens = document.createElement('h2')
    h2Parabens.className = 'light-blue align-center'
    let acertosPorcentagem = ( calcularPontosPorcentagem() * 100 ).toString()
    h2Parabens.textContent = "SUA PONTUACAO FOI DE " + acertosPorcentagem.substring(0, 4) + "%"

    return h2Parabens
}

module.exports = { adicionarAcerto, calcularPontosPorcentagem, parabenizar }