let scarpe=[
    {id: 1, nome: 'Nike Mind 002', prezzo:139.99, taglia:[38, 40, 41], colore: 'Bianco', url:'images/1.avif', disponibile:false},
    {id: 2, nome: 'Nike Air Max 95 Big Bubble', prezzo:189.99, taglia:[40,41], colore: 'Midnight Navy', url:'images/3.avif', disponibile:false},
    {id: 3, nome: 'Nike Dunk Low', prezzo:129.99, taglia:[36,37,38,39,40], colore: 'Desert Khaki', url:'images/5.avif', disponibile:true},
    {id: 4, nome: 'Nike Moon Shoe OG', prezzo:99.99, taglia:[41,42], colore: 'Cacao Wow', url:'images/7.avif', disponibile:false},
    {id: 5, nome: 'Nike Metcon 10', prezzo:139.99, taglia:[40,41,42], colore: 'Grey Fog', url:'images/9.avif', disponibile:false},
    {id: 6, nome: 'Nike Pegasus 42', prezzo:139.99, taglia:[37,39,40], colore: 'Photon Dust', url:'images/11.avif', disponibile:true},
    {id: 7, nome: 'Nike Hybrid RN', prezzo:139.99, taglia:[37,38,39,40], colore: 'Laser Crimson', url:'images/13.avif', disponibile:true},
    {id: 8, nome: 'LeBron Witness 9', prezzo:109.99, taglia:[42], colore: 'Antracite', url:'images/15.avif', disponibile:false},
    {id: 9, nome: 'Ja 3 "Animal Pack"', prezzo:134.99, taglia:[36,37,39,41], colore: 'Safety Orange', url:'images/17.avif', disponibile:false},
    {id: 10, nome: 'Nike P-6000', prezzo:119.99, taglia:[38,39], colore: 'Argento metallizzato', url:'images/19.avif', disponibile:true}
    
]

const card_container=document.querySelector('.container')

mostraScarpe()
// setTimeout(cancellaScarpa ,5000)
// cancellaScarpa()

function mostraScarpe(){
    card_container.innerHTML = ''

    scarpe.forEach(shoe=>{

        const card=document.createElement('div');
        card.style.width= '18rem';
        card.classList.add('card')

        card.innerHTML+=
        `<img src="${shoe.url}" class="card-img-top" alt="immagine della scarpa ${shoe.nome}">
        <div class="card-body">
            <h6 class="card-title">${shoe.id}</h6>
            <h5 class="card-title">${shoe.nome}</h5>
            <p class="card-text"><b>Prezzo:</b> ${shoe.prezzo}</p>
            <p class="card-text"><b>Taglia:</b> ${shoe.taglia.join(' - ')}</p>
            <p class="card-text"><b>Colore:</b> ${shoe.colore}</p>
            <p class="card-text"><b>Disponibile:</b> ${shoe.disponibile?'Sì':'No'}</p>
            <a href="#" class="btn btn-primary w-100">Go somewhere</a>
        </div>`

        card_container.append(card);
    })
}


function cancellaScarpa(){
    let scarpeFiltrate=[]

    for(let i in scarpe){
        const scarpa=scarpe[i]
        let tagliaTroppoGrande=false

        for(let j in scarpa.taglia){
            if(scarpa.taglia[j] > 40){
                tagliaTroppoGrande = true;
            }
        }

        // if(scarpa.taglia>40) tagliaTroppoGrande=true

        if(!tagliaTroppoGrande) scarpeFiltrate.push(scarpa)
    }
    // const scarpa=scarpe.filter(s=> !s.taglia.some(t=>t>40));

    scarpe=scarpeFiltrate
    mostraScarpe()
}


