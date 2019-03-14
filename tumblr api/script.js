const form = document.getElementById('query-form');
const list = document.getElementById('list-data');
const buttons = document.getElementById('buttons');
const grid = document.querySelector('.grid')
const tagNames = ['bread','hamster','flowers','pasta','math'];

for (let i = 0; i < tagNames.length; i++) {
    let newButton = document.createElement('button');
    newButton.innerHTML = tagNames[i];
    newButton.classList.add('btn');
    newButton.classList.add('btn-info');
    newButton.classList.add('mr-3');
    buttons.appendChild(newButton);
}

// form.onsubmit = function(event){
//     event.preventDefault();
    
//     const queryTerm = query.value;
//     console.log(queryTerm);
    
//     getTaggedPhotos(queryTerm);
// }

let randomIndex = Math.floor(Math.random() * tagNames.length);
let tag = tagNames[randomIndex];

// function getTaggedPhotos(tagName){
fetch('https://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=SX5F59CbWJIZyp8aykxV6pVYeCXn1IqH0UnmBHgyZ8B90WtGCQ')
    .then(function(response){
        return response.json();
    })
    .then(function(result){               
        let items = result.response;
        
        for(let i = 0; i <items.length; i++){            
            if(items[i].photos != undefined){
                const imgSrc = items[i].photos[0].original_size.url;
                const img = document.createElement('img');
                img.src = imgSrc;
                
                grid.appendChild(img);
            }
        }
    })


buttons.onclick = function (event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == tag) {
        alert('Congrats , thats the correct answer. ');
        location.reload();
    } else {
        alert('See properly , try again .');
        location.reload();
    }
}
 