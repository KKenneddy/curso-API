const API = 'https://api.thedogapi.com/v1/images/search';

/*fetch(API)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });*/

async function getItem(){
    const res = await fetch(API);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

getItem();

const recargar = document.getElementById('recargar');
recargar.addEventListener('click', ()=>{
    recargar = getItem();
});