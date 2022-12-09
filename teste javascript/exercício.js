const minhaDIV = document.getElementById("C");

function imprimirInput() {
  const input = document.getElementById("N");
  let contador = 0;
  while (contador < input.value) {
    minhaDIV.innerHTML += input.value;
    contador = contador + 1;
  }
}
