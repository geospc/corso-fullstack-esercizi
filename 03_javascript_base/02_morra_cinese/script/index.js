const bottone=document.getElementById('inizia');
const scelta=document.getElementById('scelta');

const card_you=document.getElementById('you')
const card_cpu=document.getElementById('cpu')

const img_forbice=document.getElementById('forbice');
const img_foglia=document.getElementById('foglia');
const img_sasso=document.getElementById('sasso');

const msg=document.getElementById('risultato')

const punteggio_you=document.getElementById('punteggioYou');
const punteggio_cpu=document.getElementById('punteggioCpu');

let conteggio_you=0;
let conteggio_cpu=0;
let scelta_you='';
let scelta_cpu='';

//Step1
bottone.addEventListener('click', startGame)

img_foglia.addEventListener('click', giocaFoglia)
img_forbice.addEventListener('click', giocaForbice)
img_sasso.addEventListener('click', giocaSasso)

//Funzione1
function startGame(){
    scelta.style.display='flex';
    card_you.style.backgroundImage = 'none';
    card_cpu.style.backgroundImage = 'none';
    msg.style.display = 'none';
}

function giocaFoglia(){
    scelta_you='foglia'
    console.log('Hai scelto: foglia')
    // card_you.style.backgroundImage='url("immagini/foglia.png")';
    scelta.style.display='none';
    card_you.style.backgroundImage='url("immagini/' + scelta_you + '.png")';
    sceltaCpu(); 
}

function giocaForbice(){
    scelta_you='forbice'
    console.log('Hai scelto: forbice')
    // card_you.style.backgroundImage='url("immagini/forbice.png")';
    scelta.style.display='none';
    card_you.style.backgroundImage='url("immagini/' + scelta_you + '.png")';
    sceltaCpu();
}

function giocaSasso(){
    scelta_you='sasso'
    console.log('Hai scelto: sasso')
    // card_you.style.backgroundImage='url("immagini/sasso.png")';
    scelta.style.display='none';
    card_you.style.backgroundImage='url("immagini/' + scelta_you + '.png")';
    sceltaCpu();
}


function sceltaCpu(){
    const img_cpu=Math.floor(Math.random()*3);
    // console.log(img_cpu);
        
    if(img_cpu===0){
        scelta_cpu='foglia'
        // card_cpu.style.backgroundImage='url("immagini/foglia.png")';
    }else if(img_cpu===1){
        scelta_cpu='forbice'
        // card_cpu.style.backgroundImage='url("immagini/forbice.png")';
    }else{
        scelta_cpu='sasso'
        // card_cpu.style.backgroundImage='url("immagini/sasso.png")';
    }    
    card_cpu.style.backgroundImage='url("immagini/' + scelta_cpu + '.png")';

    verificaVincitore();
}


function verificaVincitore(){
    // const scelta_cpu='';
    msg.style.display='block';

    if(scelta_you===scelta_cpu){
        msg.innerHTML='Partita Patta!'
    }else if(scelta_you==='sasso' && scelta_cpu==='forbice'||
        scelta_you==='foglia' && scelta_cpu==='sasso'||
        scelta_you==='forbice' && scelta_cpu==='foglia'
    ){
        conteggio_you++
        punteggio_you.innerHTML=conteggio_you;
        msg.innerHTML='Complimenti, Hai Vinto!'
    }else{
        conteggio_cpu++;
        punteggio_cpu.innerHTML=conteggio_cpu;
        msg.innerHTML='Mi Dispiace, Hai Perso! :('
    }

    if(conteggio_you==10){
        alert('VITTORIA!!')
        bottone.disabled=true;
    }else if(conteggio_cpu==10){
        alert('GAME OVER :(( !')
        bottone.disabled=true;
    }
}

