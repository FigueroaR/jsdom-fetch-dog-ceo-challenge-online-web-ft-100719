console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    //getDogs();
    
    //getDogBreeds();
    changeLinkColor();
    filterDogs();
})

function getDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //console.log(myJson);
        let pics = document.getElementById("dog-image-container")
        myJson.message.forEach( dog => {
            pics.innerHTML += `
                <img src="${dog}">
            `
        })
    });
}


function getDogBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //console.log(myJson);
        let breeds = document.getElementById("dog-breeds")
        Object.keys(myJson.message).forEach( breed => {
            breeds.innerHTML += `
                <li>${breed}</li>
            `
        })    
    })
    
}


function changeLinkColor(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        //console.log(myJson);
        let breeds = document.getElementById("dog-breeds")
        Object.keys(myJson.message).forEach( breed => {
             breeds.addEventListener('click', function(event) {
                event.target.style.color = "green";
            });    
        })
    })
}


function filterDogs(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        let letters = document.getElementById("breed-dropdown")
        let breeds = document.getElementById("dog-breeds")
        
        letters.addEventListener("change", function (e){ 
            breeds.innerHTML = ""
            let dogs = Object.keys(myJson.message).filter(dog => {
                return dog.startsWith(e.target.value)

            })  
            console.log("dogs", dogs)

            dogs.forEach( breed => {               
                breeds.innerHTML += `
                <li>${breed}</li>
            ` 
            })
        }) 

        
    })
}