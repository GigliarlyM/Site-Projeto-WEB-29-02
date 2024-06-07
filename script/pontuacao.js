var questoesAcertadas = 0

const adicionarAcerto = () => {
    questoesAcertadas++
    // console.log(questoesAcertadas)
    // document.querySelector('p#acertos').textContent = 'Acertos:'+ questoesAcertadas
}

const apresentarPontuacao = () => {
    console.log('Acertos: '+ questoesAcertadas + ', quantidade de questoes: '+ quantidadeQuestoes)
}