class Alien{
    name='Edmondo'
    type='Grigio'
    lives=100
    weapons=[]

    increaseLives(){this.lives++}

    decreaseLives(){
        if(this.lives>0){
            this.lives--
        }else{
            alert('Numerom minimo di vite ragiunto!')
        }
    }

    addWeapons(weapon){
        this.weapons.push(weapon)
    }

    removeWeapons(codice_arma){
        this.weapons=this.weapons.filter(w=> w!==codice_arma)
    }

    createPanel(obj){
        let strPanel=''
        strPanel=`
            <h4>Ciao io sono ${this.name}</h4>
            <h5>Ecco le mie caratteristiche:</h5>
            <ul>`

        for(let prop in obj){
            if(prop==='name'||prop==='weapons') continue
            strPanel+=`<li>${prop}: ${obj[prop]}</i>`
        }

        strPanel+=`</ul>`;

        // panelArmi.innerHTML=obj.createPanelWeapons()
        panelArmi.innerHTML=this.createPanelWeapons()

        return strPanel;
    }

    createPanelWeapons(){

        let strPanelArmi=''

        if(this.weapons.length===0){
            strPanelArmi=`<p>Nessuna arma selezionata. Scegline una dall'arsenale qui sotto.</p>`;
            return strPanelArmi;
        }

        for(let w of this.weapons){
            strPanelArmi+=`
                <div>
                    <h6>${w}</h6>    
                    <img src="img/${w}.png" draggable="false">
                    <i class="fa fa-trash" id="${w}"></i>    
                </div>`
        }

        return strPanelArmi
        
    }

}

const alien=new Alien();

const panel=document.getElementById('panel')
const panelArmi=document.getElementById('panelArmi')
const btn_lives=document.querySelectorAll('.button-container button')

panel.innerHTML=alien.createPanel(alien)
// panelArmi.innerHTML=alien.createPanelWeapons()
console.log(panelArmi.innerHTML);

btn_lives.forEach(b=>{
    b.addEventListener('click',(e)=>{
        if(e.currentTarget.id==='plus'){
            alien.increaseLives()
        }else{
            alien.decreaseLives()
        }
    })
})




let armaSelezionata;

//Funzionalità aggiunta armi con 
document.querySelectorAll('#arsenale img').forEach(w=>{
    w.addEventListener('dragstart', (e)=>{
        const armaDragged=e.dataTransfer.setData('text/plain',e.target.name)

        armaSelezionata=e.target
    })
})




panelArmi.addEventListener('dragover', e=>e.preventDefault())

panelArmi.addEventListener('drop', e=>{
    e.preventDefault()

    const armaDroppata=e.dataTransfer.getData('text/plain')

    alien.addWeapons(armaDroppata)

    panelArmi.innerHTML=alien.createPanelWeapons()

    document.querySelector('#arsenale div').removeChild(armaSelezionata)
})

panelArmi.addEventListener('click', e=>{
    console.log('click');
    const icona_delete=e.target.closest('i');
    const div_arma=e.target.closest('div')

    if(!icona_delete || div_arma.id) return;

    alien.removeWeapons(icona_delete.id)

    panelArmi.removeChild(div_arma)

    panelArmi.innerHTML=alien.createPanelWeapons()

    document.querySelector('#arsenale div').appendChild(armaSelezionata)
    
})