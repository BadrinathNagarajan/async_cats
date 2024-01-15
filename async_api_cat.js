console.log('aflkvnlfa')


async function getdata(){
    let res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME',{
        method:'GET',
        'Content-Type':'application/json'
    })
    let data = await res.json();
    console.log(data)
    constructcards(data)
}


getdata();

async function constructcards(data){
    for(let i=0;i<data.length;i++){
        let ccontainer = document.getElementById('cardcontainer')
        let card = document.createElement('card')
        card.setAttribute('class','card')
        card.setAttribute('style','width:18rem')
        card.innerHTML=`<img src="${data[i].url}" class="card-img-top" alt="${data[i].id}">
        <div class="card-body">
          <h5 class="card-title">${data[i].id}</h5>
          
        </div>`

        ccontainer.appendChild(card)
    }
}