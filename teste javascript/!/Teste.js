
let nome = window.prompt ("qual seu nome ?")
while(nome.length < 3){
   window.alert("Nome inválido")
   nome = window.prompt ("qual seu nome?")
}
window.alert("bem vindo(a) " + nome)

let idade = window.prompt ("qual sua idade ?")

if(idade < 15){
    window.prompt("Qual o email do seu responsável?")
    window.alert ("Agora você tem acesso a página")
}else{
    window.alert("Bem Vindo(a)")
}


