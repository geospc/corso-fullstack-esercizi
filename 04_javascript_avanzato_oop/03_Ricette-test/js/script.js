class Ricette {
    constructor(ricetta){
        this.id=ricetta.id;
        this.nome=ricetta.name;
        this.ingredienti=ricetta.ingredients || [];          //array
        this.istruzioni=ricetta.instructions || [];           //array
        this.tempoPreparazione=ricetta.prepTimeMinutes;
        this.difficolta=ricetta.difficulty;
        this.cucina=ricetta.cuisine;
        this.tags=ricetta.tags || [];              //array
        this.immagine=ricetta.image;
        this.rating=ricetta.rating;
        this.pasto=ricetta.mealType;
    }

    mostraRicette(){
        // card_container.innerHTML=''

        const card_ricetta=document.createElement('article')
        card_ricetta.className='card'


        card_ricetta.innerHTML+=`
            <img alt="" src="${this.immagine}" loading="lazy">
            <div class="content">
                <div class="title">${this.nome}</div>
                <div class="muted">${this.cucina} </div>
                <div class="tags">

                    ${this.tags.map(t=> '<span class="tag">' + t +  '</span>').join('')}
                    
                </div>
            </div>

            <div class="actions">
                <span class="pill"> ⭐${this.rating} </span>
                ${this.pasto.map(t=> '<span class="pill">' + t +  '</span>').join('')}
                ${this.tags.map(t=> '<span class="pill">' + t +  '</span>').join('')}

                <span class="pill"> ${this.tempoPreparazione} min</span>
                <button class="btn" data-id="${this.id}"> Dettaglio </button>
            </div>`




        const btn=card_ricetta.querySelector('.btn')

        btn.addEventListener('click',()=>{
            this.mostraDettagli()
        })
        // card_container.appendChild(this.mostraRicette())
        // card_container.appendChild(card_ricetta)
        return card_ricetta
    }

    mostraDettagli(){
        const card_dettagli=document.createElement('div')
        card_dettagli.innerHTML+=`
            <img alt="" src="${this.immagine}" style="width:100%; height:180px; object-fit:cover; border-radius:10px">
            <h3 style="margin: 10px 0 6px 0"> ${this.nome} </h3>
            <div class="muted">${this.cucina}</div>

            <div class="kpis">
                <span class="pill"> ⭐${this.rating} </span>
                <span class="pill">${this.difficolta}</span>

                ${this.pasto.map(t=> '<span class="pill">' + t +  '</span>').join('')}

                ${this.tags.map(t=> '<span class="pill">' + t +  '</span>').join('')}

                
            </div>

            <h4> Ingredienti </h4>
            <div class="ingredients">

                ${this.ingredienti.map(t=> '<span class="pill">' + t +  '</span>').join('')}

            </div>

            <h4>Passi</h4>
            <ol class="steps">
                ${this.istruzioni.map(t=> '<li>' + t +  '</li>').join('')}

            </ol>`
        dettagli_container.innerHTML = ''       // pulisco il dettaglio precedente
    dettagli_container.appendChild(card_dettagli)  // mostro il nuovo
    }
}


const card_container=document.getElementById('cards')
const dettagli_container=document.getElementById('detailContent')
const input=document.getElementById('q')
let istanze_ricette=[]

getPiatti()

async function getPiatti(){
        card_container.innerHTML=''

    // istanze_ricette=[]
    try{
        const request= await fetch('https://dummyjson.com/recipes');
        
        const dati = await request.json();

        const lista_ricette=dati.recipes
// console.log(lista_ricette);

        lista_ricette.forEach(ricetta=>{
            const ist_ricetta= new Ricette(ricetta)

            card_container.appendChild(ist_ricetta.mostraRicette())
        })
        
    }catch(erroe){
        console.error(erroe)
    }

    
}

input.addEventListener('input', ()=>{
    const testo = input.value.trim()
    searchPiatti(testo)
})

async function searchPiatti(piatti){
        card_container.innerHTML=''
        // let piatti=input.value.trim()


    try{
        const req= await fetch(`https://dummyjson.com/recipes/search?q=${piatti}`)

        const data=await req.json()

        const lista_ricette=data.recipes

        lista_ricette.forEach(ricetta=>{
            const ist_ricetta= new Ricette(ricetta)

            card_container.appendChild(ist_ricetta.mostraRicette())
        })

    }catch(errore){
        console.error(erroe)

    }
}

async function newPiatti() {
    try{

    }catch(err){
        console.error(err)

    }
}