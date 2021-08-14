let nome = "visitante";
let hora = 24;

if(hora < 12)
document.write("Bom dia. Seja bem vindo a WingSec Security " + nome);
else {
if(hora >= 13)
document.write("Boa tarde. Seja bem vindo a WingSec Security! " + nome);
else
document.write("Seja bem vindo. Estamos em horário de almoço");
}