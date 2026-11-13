class Scarpe{
    constructor(id, nome, prezzo, taglia, colore, url, disponibile){
        this.id=id;
        this.nome=nome;
        this.prezzo=prezzo;
        this.taglia=taglia;
        this.colore=colore;
        this.url=url;
        this.disponibile=disponibile;
    }
}

const nike_mind=new Scarpe (1, 'Nike Mind 002', 139.99, [38, 40, 41], 'Bianco', 'images/1.avif', false)
const nike_air_max=new Scarpe (2, 'Nike Air Max 95 Big Bubble', 189.99, [40,41], 'Midnight Navy', 'images/3.avif', false)
const nike_dunk_low=new Scarpe (3, 'Nike Dunk Low', 129.99, [36,37,38,39,40], 'Desert Khaki', 'images/5.avif', true)
const nike_moon=new Scarpe (4, 'Nike Moon Shoe OG', 99.99, [41,42], 'Cacao Wow', 'images/7.avif', false)
const nike_metcon=new Scarpe (5, 'Nike Metcon 10', 139.99, [40,41,42], 'Grey Fog', 'images/9.avif', false)
const nike_pegasus=new Scarpe (6, 'Nike Pegasus 42', 139.99, [37,39,40], 'Photon Dust', 'images/11.avif', true)
const nike_hybrid=new Scarpe (7,'Nike Hybrid RN', 139.99, [37,38,39,40], 'Laser Crimson','images/13.avif', true)
const nike_lebron=new Scarpe (8,'LeBron Witness 9', 109.99, [42], 'Antracite','images/15.avif', false)
const nike_animal=new Scarpe (9,'Ja 3 "Animal Pack"', 134.99,[36,37,39,41], 'Safety Orange','images/17.avif', false)
const nike_p=new Scarpe (10,'Nike P-6000', 119.99, [38,39], 'Argento metallizzato','images/19.avif', true)

const array_scarpe=[nike_mind, nike_air_max, nike_dunk_low, nike_moon, nike_metcon, nike_pegasus, nike_hybrid, nike_lebron, nike_animal, nike_p]

const card_container=document.querySelector('.container');


    

array_scarpe.forEach(shoe=>{

    let stringa='';

    for(let prop in shoe){
        // console.log(prop);
        // console.log(shoe[prop]);
        if(prop==='prezzo' || prop==='taglia' || prop==='colore' || prop==='disponibile'){
            stringa+=
            `<p class="card-text"><b>${prop[0].toUpperCase() + prop.slice(1)}:</b> 
                ${
                    prop === 'taglia'? shoe[prop].join(' - ')
                    :prop ==='prezzo'? shoe[prop] +' €' 
                    :prop==='disponibile'? (shoe[prop] ? 'Sì': 'No')
                    :shoe[prop] 
                }
            </p>`
        }
    }


    card_container.innerHTML+=`
        <div class="card" style="width: 18rem">
            <img src="${shoe.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title">${shoe.id}</h6>
                <h5 class="card-title">${shoe.nome}</h5>
                ${stringa}
                <a href="${shoe.disponibile ? '#' : ''}" class="btn btn-primary w-100 ${shoe.disponibile ? '' : 'disabled'}" >Compra</a>
            </div>
        </div>
        `
})
// console.log(array_scarpe);
// console.log(card_container);

// <p class="card-text"><b>Prezzo:</b> ${shoe.prezzo}</p>
// <p class="card-text"><b>Taglia:</b> ${shoe.taglia.join(' - ')}</p>
// <p class="card-text"><b>Colore:</b> ${shoe.colore}</p>
// <p class="card-text"><b>Disponibile:</b> ${shoe.disponibile ? 'Sì':'No'}</p>