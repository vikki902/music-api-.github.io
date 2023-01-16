
let cardContainer = document.getElementById('card-section');
let loading = document.getElementById('loading');
let input = document.getElementById('search-input')

document.getElementById('search').addEventListener('click',(e) =>{

e.preventDefault();
loading.style.display = "block";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c28065cc3mshbd99a738ad5682fp1109d7jsnf373c5f810af',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

fetch(`https://shazam.p.rapidapi.com/search?term=${input.value}&locale=en-US&offset=0&limit=5`, options)
    .then(response => response.json())
    .then(data =>{
        console.log(data)

        let hitsArr = data.artists.hits;
        cardContainer.innerHTML =""

        hitsArr.forEach(element => {
            cardContainer.innerHTML +=`

            <div class="card">
                <div class="img">
                    <img height="200px" width="200px" src="${element.artist.avatar}" alt="">
                </div>
        
                <div class="description">
                    <h3>${element.artist.name}</h3> 
                    <a href="${element.artist.weburl}" target="_blank"><i class="fa-solid fa-music"></i> Link to the song</a>
                </div>
                
           </div>

   
            `;   
        });

        loading.style.display="none"
       
    } )
    .catch(err => console.error(err));

})

