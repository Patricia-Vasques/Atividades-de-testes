/* Descrição do exercício
Utilizando TDD, crie uma função que recebe um número (em segundos)
e transforma no formato “_h _m _s”.
Dica: escreva testes para os valores 30, 350 e 3725*/


//Função para  converter o tempo em segundos para o formato "h-m-s"
function converteSegundosParaFormato(segundos) {
  
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
  
    return `${horas}h ${minutos}m ${segundosRestantes}s`;
  }
  
// Testes
describe("Tempo em segundos para formato", () => {
  // Teste 1: Verifica se a função retorna '0h 0m 30s' para 30 segundos
    it("Deve retornar '0h 0m 30s' para 30 segundos", () => {
      const resultado = converteSegundosParaFormato(30);
      const resultadoEsperado= "0h 0m 30s";
  
      // Usa o expect para verificar se o resultado da função é igual ao resultado esperado
      expect( resultado).toEqual(resultadoEsperado);
    });
  
    // Teste 2: Verifica se a função retorna '0h 5m 50s' para 350 segundos
    it("Deve retornar '0h 5m 50s' para 350 segundos", () => {
      const  resultado = converteSegundosParaFormato(350);
      const resultadoEsperado = "0h 5m 50s";
  
      expect( resultado).toEqual(resultadoEsperado);
    });
  
    // Teste 3: Verifica se a função retorna '1h 2m 5s' para 3725 segundos
    it("Deve retornar '1h 2m 5s' para 3725 segundos", () => {
      const resultado = converteSegundosParaFormato(3725);
      const resultadoEsperado = "1h 2m 5s";
  
      expect(resultado).toEqual(resultadoEsperado);
    });
  });