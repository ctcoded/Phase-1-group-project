const apiBase = 'https://weatherdbi.herokuapp.com/data/weather/' //the location is a reformat of {location}

function bootPage(){
    fetch(apiBase + location)
    .then(response => response.json)
    .then((data) => console.log(data))
}


document.addEventListener('DOMContentLoaded', bootPage)
