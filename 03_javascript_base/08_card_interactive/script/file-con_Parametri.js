const modulo=document.querySelector('form');
const campo_nome=document.querySelector('input');
const campo_email=document.querySelector('input[name="email"]');
const campo_phone=document.querySelector('input[name="tel"]');
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


modulo.addEventListener('submit', function(e){
    verificaDati(e);

    verificaCampo(campo_nome, regexNome, 'Devi inserire il nome');
    verificaCampo(campo_email, regexEmail, 'La tua mail è sbagliata');
    verificaCampo(campo_phone, regexPhone, 'Telefono obbligatorio');
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
    cardNome.textContent=campo_nome.value.trim();
    cardEmail.textContent=campo_email.value.trim();
    cardPhone.textContent=campo_phone.value.trim();

    pagina_modulo.style.display='none';
    pagina_card.style.display='block';
}

function validazioneDati(){
    const campi_errore=document.querySelectorAll('.errore');

    return campi_errore.length==0;
}

