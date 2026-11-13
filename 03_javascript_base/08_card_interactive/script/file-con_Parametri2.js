const modulo=document.querySelector('form');
// const campo_nome=document.querySelector('input');
// const campo_email=document.querySelector('input[name="email"]');
// const campo_phone=document.querySelector('input[name="tel"]');
const campo_privacy=document.getElementById('privacy');

const pagina_modulo=document.getElementById('modulo')
const pagina_card=document.getElementById('card')


const cardNome=document.querySelector('#card .nome span');
const cardEmail=document.querySelector('#card .mail span');
const cardPhone=document.querySelector('#card .phone span');

const regexNome= /^[A-Za-zÀ-ÖØ-öø-ÿ\s']{2,}$/;
const regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const regexPhone=/^\d{8,10}$/; //solo cell italiani
const regexPhone= /^\+?[0-9]\d{1,12}$/; //prefisso opzionale +39

//ARRAY

//Metodo1:
// const arrayCampi=[campo_nome, campo_email, campo_phone];
// const arrayRegex=[regexNome, regexEmail, regexPhone];
// const arrayMessaggi=['Devi inserire il nome', 'La tua mail è sbagliata', 'Telefono obbligatorio'];

//Metodo2:
// const arrayDaValidare=[
//     {campo: campo_nome, regex: regexNome, messaggio:'Devi inserire il nome'},
//     {campo: campo_email, regex: regexEmail, messaggio:'La tua mail è sbagliata'},
//     {campo: campo_phone, regex: regexPhone, messaggio:'Telefono obbligatorio'}
// ]

// Metodo3:
const arrayCampi=document.querySelectorAll('input:not(#privacy)');
const arrayRegex=[regexNome, regexEmail, regexPhone];
const arrayMessaggi=['Devi inserire il nome', 'La tua mail è sbagliata', 'Telefono obbligatorio'];




modulo.addEventListener('submit', function(e){
    verificaDati(e);

    //Metodo1/3:
        for(let i=0; i<arrayCampi.length; i++){
            verificaCampo(arrayCampi[i], arrayRegex[i], arrayMessaggi[i])
        }

    //Metodo2:
        // for(let i=0; i<arrayDaValidare.length; i++){
        //     verificaCampo(arrayDaValidare[i].campo, arrayDaValidare[i].regex, arrayDaValidare[i].messaggio)
        // }

    verificaPrivacy();

    if(validazioneDati()){
        mostraCard();
    }
})

function verificaDati(evento){
    evento.preventDefault();
}


function verificaCampo(campo, regex, messaggio){
    const valore_campo= campo.value.trim();
    const controlloCampo=regex.test(valore_campo)
    if(!controlloCampo){
        campo.classList.add('errore');
        campo.nextElementSibling.textContent=messaggio
    }else{
        campo.classList.remove('errore');
        campo.nextElementSibling.textContent=''
    }
}


function verificaPrivacy(){
    const controlloPrivacy=campo_privacy.checked;
    const spanErrore=campo_privacy.parentElement.querySelector('span')

    if(!controlloPrivacy){
        campo_privacy.classList.add('errore');
        spanErrore.textContent='Devi accettare le condizioni di utilizzo'
    }else{
        campo_privacy.classList.remove('errore');
        spanErrore.textContent='';
    }
}


function mostraCard(){
    // cardNome.textContent=campo_nome.value.trim();
    // cardEmail.textContent=campo_email.value.trim();
    // cardPhone.textContent=campo_phone.value.trim();

    cardNome.textContent=arrayCampi[0].value.trim();
    cardEmail.textContent=arrayCampi[1].value.trim();
    cardPhone.textContent=arrayCampi[2].value.trim();

    pagina_modulo.style.display='none';
    pagina_card.style.display='block';
}

function validazioneDati(){
    const campi_errore=document.querySelectorAll('.errore');

    return campi_errore.length==0;
}

