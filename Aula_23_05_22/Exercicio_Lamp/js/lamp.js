var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')

botao.onclick = function(){
    //alert('Funcionou')
    if(botao.value == 'Acender'){
        lampada.src ='./img/acesa.png'
        botao.value = 'Apagar'
        botao.innerHTML = 'Apagar'
    }

    else{
        lampada.src='./img/apagada.png'
        botao.value = 'Acender'
        botao.innerHTML='Acender'
    }
}