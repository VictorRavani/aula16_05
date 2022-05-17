/*alert("Seja Bem Vindo");
document.write("TESTE");
prompt("Digite Algo:");
resp = confirm("SIM");
Nome ="Maria";
var Nome1 ="jose";
var a,b;
a = 5;
b ="5Kg de açucar";
document.write("O valor da variárevel é:" + a);
document.write("<p>"+"O valor da variável B é:" + b + "<p>");
document.write("<p>"+"O valor da variável A dividido por 2 é:" + a/2 + "<p>");
document.write("<p>"+"O valor da variável B dividido por 2 é:" + b/2 +"<p>");

var c, interiro, flutuante;
c = "45.78 Kg de açucar";
interiro = parseInt(c);
flutuante = parseFloat(c);
document.write("O valor da variárevel é:" + c);
document.write("<p>" + "O valor da variável B é:" + interiro + "<p>");
document.write("<p>" + "O valor da variável A dividido por 2 é:" + interiro / 2 + "<p>");
document.write("<p>" + "O valor da variável B dividido por 2 é:" + flutuante + "<p>");

a = 6, b = 3, c = 1;
document.write((a > b) && (b > c));

a = 6, b = 3, c = 1;
alert((a > b) || (b == c));

a = 6, b = 3, c = 1;
alert(a != b);

*/
//resp = confirm("Próximo dia?");

//for (xDia = 0; xDia < 7; xDia ++)
//{

//hoje = new Date();
//diaSemana = new Array(7);
//diaSemana[0] = "Frango Frito";
//diaSemana[1] = "Bife a Rolê";
//diaSemana[2] = "Panqueca";
//diaSemana[3] = "Macarrão";
//diaSemana[4] = "Churrasco";
//diaSemana[5] = "Saladão";
//diaSemana[6] = "Peixe frito";
//document.write("o número da semana é:" + " " + (xDia + 1));
//document.write("<p><b>" + "hoje é:" + diaSemana[xDia]);

//diaSemana = new Array(7);
//diaSemana[0] = "R$ 20,00";
//diaSemana[1] = "R$ 35,00";
//diaSemana[2] = "R$ 32,00";
//diaSemana[3] = "R$ 62,30";
//diaSemana[4] = "R$ 95,00";
//diaSemana[5] = "R$ 13,00";
//diaSemana[6] = "R$ 68,00";
//document.write("<p><b>" + "Preço:" + diaSemana[xDia]);
//alert("Seja Bem Vindo");

//}


//a= 5;
//alert(++a +2);
//alert("a=" + a);

//a=5;
//alert(a++ + 2);
//alert("a="+ a);

//a = 5
//b = --a +2;
//document.write("a=" +a);
//document.write("b="+b);

//document.write("<p><b>" + "Usando o método toUpperCase" + "</p></b>");
//A = new String("Olá Pessoal");
//b = new String("Sejam benvindos ao JavaScript");
//document.write(A.toUpperCase());
//document.write(b.toUpperCase());
//document.write("<p><b>" + "Você poderá usar:" + "</p></b>");
//document.write("<p>" + A.toUpperCase() + b.toUpperCase() + "</p>");
//document.write("<p><b>" + "Usando o método toLowerCase" + "</p></b>");

//document.write(A.toLowerCase());
//document.write(b.toLowerCase());
//document.write("<p><b>" + "Você poderá usar:" + "</p></b>");
//document.write("<p>" + A.toLowerCase() + b.toLowerCase() + "</p>");

function imc(){
const nome =document.getElementById('nome').value;
const altura =document.getElementById('altura').value;
const peso =document.getElementById('peso').value;
const resultado =document.getElementById('resultado').value;

if (nome !== '' && altura !== '' && peso !== ''){

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC <18.5){
        classificacao = 'abaixo do peso.';
    }else if (valorIMC <25){
       classificacao = 'com peso ideal. Parabéns!!'; 
    }else if (valorIMC <30){
        classificacao = 'Levemente a cima do peso';
    }else if (valorIMC <35){
        classificacao = 'Obesidade grau I';
    }else if (valorIMC <40){
        classificacao = 'Obesidade grau II';
    }else{
        classificacao = 'Obesidade grau III. Cuidado!!';
}
      
     resultado.textContent = '${nome} seu IMC é $ {valorIMC} e você está %{clasificacao}'

} else {
    resultado.textContent = 'Preencha todos os campos!!';
    
}




}



