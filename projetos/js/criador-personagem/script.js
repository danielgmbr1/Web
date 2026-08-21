// Jornada de programador

let botao = document.getElementById('criar');


botao.addEventListener('click', function(){
    console.log('CLIQUEI');
    let nome = document.getElementById('nome').value;
    let idade = Number(document.getElementById('idade').value);
    let experiencia = Number(document.getElementById('experiencia').value);
    let energia = Number(document.getElementById('energia').value);

    let ponto1;
    let ponto2;
    let ponto3;
    let media;


    //calcula idade

    if(idade < 1 || idade > 99){
        window.alert('Informe uma idade válida!')
        return;
    }

    if (idade  < 18){ //iniciante
        ponto1 = 5;
    }
    else if (idade < 26){//junior/pleno
        ponto1 = 7;
    }
    else if (idade < 32){ //experiente
        ponto1 = 9;
    }
    else if (idade < 45){ //senior
        ponto1 = 10;
    }
    else if (idade < 100){ 
        ponto1 = 8;
    }

    //calcula experiencia

    if(experiencia < 1 || experiencia > 10){
        window.alert('Informe uma experiência de 1 a 10!')
        return;
    }

    if (experiencia >= 1 && experiencia <= 3){
        ponto2 = 2;
    }
    else if (experiencia >= 4 && experiencia <= 6){
        ponto2 = 5;
    }
    else if (experiencia >= 7 && experiencia <= 9){
        ponto2 = 8;
    }
    else {
        ponto2 = 10;
    }


    //calcula energia

    if(energia < 1 || energia > 10){
        window.alert('Informe uma energia de 1 a 10!')
        return;
    }

    if (energia >= 1 && energia <= 5){
        ponto3 = 5;
    }
    else if (energia >= 6 && energia <= 8){
        ponto3 = 8;
    }
    else{
        ponto3 = 10;
    } 

    media = Math.round((ponto1 + ponto2 + ponto3) / 3);

    //mostrar media no campo 
    document.getElementById('resultado').innerText = `${nome}, seu status é nivel: ${media}`;

});