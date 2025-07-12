var a = 0, b =0, c = 0, d = 0, e = 0;


function contar(resposta){
if(resposta.value == 'a'){
    a++;
}
 if(resposta.value == 'b'){
     b++;
 }
 if(resposta.value == 'c'){
     c++;
}
 if(resposta.value == 'd'){
     d++;
 }
 if(resposta.value == 'e'){
     e++;
 }
}

function pegar(){
   
a = 0;
b = 0;
c = 0;
d = 0;
e = 0;

    const resposta = document.querySelectorAll('select');
    resposta.forEach(contar);
    document.getElementById('r1').value = 'exatas: ' + a;
    document.getElementById('r2').value = 'humanas: ' + b;
    document.getElementById('r3').value = 'sociais: '+ c;
    document.getElementById('r4').value = 'naturais: ' + d;
    document.getElementById('r5').value = 'econômica: ' + e;

    const element = document.getElementById('p2');
  element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
 
}


