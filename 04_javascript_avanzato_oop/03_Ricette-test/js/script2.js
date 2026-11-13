class Ricette {
    constructor(ricetta){
        this.id = ricetta.id;
        this.nome = ricetta.name;
        this.ingredienti = ricetta.ingredients;
        this.istruzioni = ricetta.instructions;
        this.tempoPreparazione = ricetta.prepTimeMinutes;
        this.difficolta = ricetta.difficulty;
        this.cucina = ricetta.cuisine;
        this.tags = ricetta.tags;
        this.immagine = ricetta.image;
        this.rating = ricetta.rating;
        this.pasto = ricetta.mealType;
    }

    creaCard(){
        const card = document.createElement('article');
        card.className = 'card'; // occhio: nel CSS la classe è "card", non "cards"!

        card.innerHTML = `
            <img alt="" src="${this.immagine}" loading="lazy">
            <div class="content">
                <div class="title">${this.nome}</div>
                <div class="muted">${this.cucina}</div>
                <div class="tags">
                    ${this.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="actions">
                <span class="pill">⭐ ${this.rating}</span>
                <span class="pill">${this.pasto}</span>
                <span class="pill">${this.tempoPreparazione} min</span>
                <button class="btn">Dettaglio</button>
            </div>
        `;

        return card;
    }
}

const card_container = document.getElementById('cards');
let ricette = []; // array globale che conterrà tutte le istanze

getPiatti()

async function getPiatti(){
        card_container.innerHTML=''

    // istanze_ricette=[]
    try{
        const request= await fetch('https://dummyjson.com/recipes');
        
        const dati = await request.json();

        // const lista_ricette=dati.recipes
// console.log(lista_ricette);

        dati.recipes.forEach(ricetta=>{
              const istanza = new Ricette(ricetta);
   ricette.push(istanza);
   card_container.appendChild(istanza.creaCard());
        })

        
    }catch(erroe){
        console.error(erroe)
    }

    
}
