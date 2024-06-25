const {
    adicionarAcerto,
    calcularPontosPorcentagem,
    parabenizar
} = require('../script/pontuacao');

test('A adição de mais um acerto eh pra retornar um', () => {
    expect( adicionarAcerto() ).toBe(1);
});

test('O calculo da porcetagem deve ser zero', () => {
    expect( calcularPontosPorcentagem(0, 100) ).toBe(0)
})

// test('Um agrado', () => {
//     expect(parabenizar()).toBe( document.createElement('h2') )
// })