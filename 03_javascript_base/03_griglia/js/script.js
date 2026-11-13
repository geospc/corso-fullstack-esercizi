const lista=document.querySelector('.lista')
// const numeri=document.querySelectorAll('.lista li')
console.log(lista)

/*1***********************************/
//stampa in pagina 90 <li> con i numeri da 1 a 90, se il numero è pari colora il background di azzurro, se è dispari di verde, se è un multiplo di 10 colora il background di giallo.

// let constenutoLista='';

// for(let i=1; i<=90; i++){
//     let classe;
//     if(i%10==0){
//         classe='ten';
//     }else if(i%2==0){
//         classe='even'
//     }else{
//         classe='odd'
//     }
// constenutoLista +="<li class="+ classe + ">" + i + "</li>";

// }
// lista.innerHTML=constenutoLista;



/*2*****************************************/
// Bonus
//crea un array con i 90 numeri e modifica lo script per usare gli elementi dell'array.

const numeri=[];

for(let i=0; i<=90; i++){
    numeri[i]=i;
}

let constenutoLista='';

for(let i=1; i<numeri.length; i++){

    let classe;

    if(numeri[i]%10==0){
        classe='ten';
    }else if(numeri[i]%2==0){
        classe='even'
    }else{
        classe='odd'
    }

    constenutoLista +="<li class="+ classe + ">" + i + "</li>";
}
    lista.innerHTML=constenutoLista;







