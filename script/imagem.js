//Script para trocar as imagens do card1.

var btesquerdo = document.getElementById('btn-esquerdo');
var btdireito = document.getElementById('btn-direito');

var card = document.getElementById('card1');

var link = document.getElementById('link1')

var numero = 1;

btdireito.addEventListener('click', alteracard1);
btesquerdo.addEventListener('click', alteracard2);

//Função do botão direito.
function alteracard1(){
    switch(numero){
        case 1:
            card.src = 'imagens/modelos/elink2.jpg'
            link.href = '/modelos/pagina2.html'
            numero = numero + 2
            break
        case 3:
            card.src = 'imagens/modelos/elink3.jpg'
            link.href = '/modelos/pagina4.html'
            numero = numero + 1
            break
        case 4:
            card.src = 'imagens/modelos/elink4.jpg'
            link.href = '/modelos/pagina3.html'
            break
        default:
            card.src = 'imagens/modelos/elink1.jpg'
            link.href = '/modelos/pagina1.html'
            break
    }
}

//Função do botão esquerdo.
function alteracard2(){
    switch(numero){
        case 4:
            card.src = 'imagens/modelos/elink3.jpg'
            link.href = '/modelos/pagina4.html'
            numero = numero - 1
            break
        case 3:
            card.src = 'imagens/modelos/elink2.jpg'
            link.href = '/modelos/pagina2.html'
            numero = numero - 2
            break
        case 1:
            card.src = 'imagens/modelos/elink1.jpg'
            link.href = '/modelos/pagina1.html'
            break
        default:
            card.src = 'imagens/modelos/elink1.jpg'
            link.href = '/modelos/pagina1.html'
            break
    }
}

