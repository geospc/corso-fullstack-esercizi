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

    verificaNome();
    verificaEmail();
    verificaPhone();
    verificaPrivacy();

    if(validazioneDati()){
        mostraCard();
    }
})

function verificaDati(evento){
    evento.preventDefault();
}


function verificaNome(){
    const nome= campo_nome.value.trim();
    const controlloNome=regexNome.test(nome)
    if(!controlloNome){
        campo_nome.classList.add('errore');
        campo_nome.nextElementSibling.textContent='Devi inserire il nome'
    }else{
        campo_nome.classList.remove('errore');
        campo_nome.nextElementSibling.textContent=''

    }
}

function verificaEmail(){
    const email= campo_email.value.trim();
    const controlloEmail=regexEmail.test(email)
    if(!controlloEmail){
        campo_email.classList.add('errore');
        campo_email.nextElementSibling.textContent='La tua mail è sbagliata'
    }else{
        campo_email.classList.remove('errore');
        campo_email.nextElementSibling.textContent=''
    }
}

function verificaPhone(){
    const phone= campo_phone.value.trim();
    const controlloPhone=regexPhone.test(phone)
    if(!controlloPhone){
        campo_phone.classList.add('errore');
        campo_phone.nextElementSibling.textContent='Telefono obbligatorio'
    }else{
        campo_phone.classList.remove('errore');
        campo_phone.nextElementSibling.textContent=''
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

        spanErrore.textContent=''
    }
}



function mostraCard(){
    cardNome.textContent=campo_nome.value.trim()
    cardEmail.textContent=campo_email.value.trim()
    cardPhone.textContent=campo_phone.value.trim()

    pagina_modulo.style.display='none'
    pagina_card.style.display='block'
}

function validazioneDati(){
    const campi_errore=document.querySelectorAll('.errore')

    return campi_errore.length==0
}

