let numero = window.prompt("Digite um numero");
let total=numero/2;

 if(numero % 2 == 0){
    window.alert("Par")
 }else{
    window.alert("Impar");
 } 

 let exibir = window.confirm("deseja exibir a metade do numero?");
 if (exibir) {
     window.alert("A metade do número escolido é " + total);
 }





