function calcular() {
    var nota1 =
    parseInt(document.getElementById("nota1").value);
    var nota2 =
    parseInt(document.getElementById("nota2").value);
    var nota3 =
    parseInt(document.getElementById("nota3").value);
    var nota4 =
    parseInt(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var elementoResultado = document.getElementById("Resultado"); 

    if (media >5) {
        elementoResultado.innerHTML = "Parabéns você foi aprovado, sua média é: " + media;
      }else if (media >=4.5 ) {
        elementoResultado.innerHTML = "Você está de exame, sua média é: " +  media;
    } else {
      elementoResultado.innerHTML = "Infelizmente você foi reprovado, sua média é: " + media;
    }

     
}

function clearIUnputFields(){
  document.getElementById("nota1").value = '';
  document.getElementById("nota2").value = '';
  document.getElementById("nota3").value = '';
  document.getElementById("nota4").value = '';
  document.getElementById("Resultado").innerText = '';
}


