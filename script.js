// script.js
function calcular() {
    // Obter os valores das entradas
    const entrada1 = parseFloat(document.getElementById('entrada1').value);
    const entrada2 = parseFloat(document.getElementById('entrada2').value);
    const operacao = document.getElementById('operacao').value;
  
    // Elemento onde o resultado será exibido
    const resultadoElement = document.getElementById('resultado');
  
    // Validar os valores inseridos
    if (isNaN(entrada1) || isNaN(entrada2)) {
      resultadoElement.textContent = 'Por favor, insira valores válidos!';
      return;
    }
  
    // Variável para armazenar o resultado
    let resultado;
  
    // Executar a operação selecionada
    switch (operacao) {
      case 'somar':
        resultado = entrada1 + entrada2;
        break;
      case 'subtrair':
        resultado = entrada1 - entrada2;
        break;
      case 'multiplicar':
        resultado = entrada1 * entrada2;
        break;
      case 'dividir':
        if (entrada2 === 0) {
          resultadoElement.textContent = 'Erro: divisão por zero!';
          return;
        }
        resultado = entrada1 / entrada2;
        break;
      default:
        resultadoElement.textContent = 'Operação inválida!';
        return;
    }
  
    // Exibir o resultado
    resultadoElement.textContent = `Resultado: ${resultado}`;
  }
  