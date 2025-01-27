const form = document.getElementById("form-sorteador");
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const resultDiv = document.getElementById("resultado");
const drawBtn = document.getElementById("sortear-btn");
const clearBtn = document.getElementById("limpar-btn");

// Função para gerar um número aleatório
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showResult(number, min, max) {
  resultDiv.textContent = "Sorteando...";

  let cont = 0;
  const animation = setInterval(() => {
    resultDiv.textContent = `Sorteando... ${generateRandomNumber(min, max)}`;
    cont++;
    if (cont > 15) {
      clearInterval(animation);
      resultDiv.textContent = `Número sorteado: ${number}`;
    }
  }, 100);
}

// Função limpar campos
function clearFields() {
  minInput.value = "";
  maxInput.value = "";
  resultDiv.textContent = "";
}

// Função principar do clique do botão de sortear
function clickDrawButton() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  // Validação dos campos de entrada
  if (isNaN(min) || isNaN(max)) {
    return alert("Por favor, insira valores numéricos");
  }

  if (min >= max) {
    return alert("O número MÍNIMO deve ser menor que o número MÁXIMO!");
  }

  // Sortea um número
  const drawnNumber = generateRandomNumber(min, max);

  showResult(drawnNumber, min, max);
}

drawBtn.addEventListener("click", clickDrawButton);
clearBtn.addEventListener("click", clearFields);
