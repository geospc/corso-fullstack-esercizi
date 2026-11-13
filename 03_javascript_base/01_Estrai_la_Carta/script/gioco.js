const bottone=document.getElementById('gioca');
const me=document.querySelector('#you span');
const cpu=document.querySelector('#cpu span');
const msg=document.getElementById('messaggio')



bottone.onclick=function(){
    const numero_me=Math.floor(Math.random()*10)+1;
    const numero_cpu=Math.floor(Math.random()*10)+1;
    // console.log(numero);

    me.innerHTML=numero_me;

    cpu.innerHTML=numero_cpu;

        if(numero_me>numero_cpu){
            msg.innerHTML='Complimenti, hai vinto!';
            msg.style.color='blue';
        
        }else if(numero_me<numero_cpu){
                msg.innerHTML='Mi dispice, hai perso!';
                msg.style.color='red';
        }else{
            msg.innerHTML='Partita patta!';
            msg.style.color='yellow';
        }

}
