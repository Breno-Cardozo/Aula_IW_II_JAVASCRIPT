function mostrar(){
    var p = document.getElementById('p');
    var img = document.getElementById('img');
    p.innerText = 'Segundo os meus cálculos você é um ';
    var ano = Number(document.getElementById('ano').value);
    var idade = 2022 - ano;
    var genero = document.getElementsByName('gene');
    for(var i = 0; i<genero.length;i++){
        if(genero[i].checked){
            var gener = genero[i].value;
        }
    }
    if(idade<=10 && idade >= 0){
        var ida = 'bebê';
    }
    else if(idade <=20 && idade > 10){
        var ida = 'adolescente';
    }
    else if(idade>20 && idade < 100){
        if(gener == 'masculino'){
            var ida = 'adulto';
        }
        else{
            var ida = 'adulta';
        }
    }
    if(gener == 'masculino'){
        p.innerText += ` um ${ida} de ${idade} anos:`;
        if(ida == 'bebê'){
            img.src = 'img/bb_masc.jpg';
        }
        else if(ida == 'adolescente'){
            img.src = 'img/adolescente_masc.jpg';
        }
        else if(ida == 'adulto'){
            img.src = 'img/cris.jpg';
        }
    }
    else{
        p.innerText += ` uma ${ida} de ${idade} anos.`;
        if(ida == 'bebê'){
            img.src = 'img/bb_fem.jpg';
        }
        else if(ida == 'adolescente'){
            img.src = 'img/adolescente_fem.jpg';
        }
        else if(ida == 'adulta'){
            img.src = 'img/geo.jpeg';
        }
    }
}