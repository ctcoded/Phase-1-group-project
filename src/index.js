const apiBase = 'https://weatherdbi.herokuapp.com/data/weather/chicago' 
function bootPage(){
 
  fetch(apiBase)
  .then(response => response.json())
  .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', bootPage)