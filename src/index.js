const cities = [
    {
      id: 1,
      name: "chicago",
      image: "src/images/chicago.jpg",
    },
    {
      id: 2,
      name: "dallas",
      image: "src/images/dallas.jpg",
    },
    {
      id: 3,
      name: "denver",
      image: "src/images/denver.jpg",
    },
    {
      id: 4,
      name: "houston",
      image: "src/images/houston.jpg",
    },
    {
      id: 5,
      name: "losAngeles",
      image: "src/images/losAngeles.jpg",
    },
    {
      id: 6,
      name: "newYorkCity",
      image: "src/images/newYorkCity.jpg",
    },
    {
      id: 7,
      name: "philadelphia",
      image: "src/images/philadelphia.jpg",
    },
    {
      id: 8,
      name: "phoenix",
      image: "src/images/phoenix.jpg",
    },
    {
      id: 9,
      name: "sanAntonio",
      image: "src/images/sanAntonio.jpg",
    },
    {
      id: 10,
      name: "sanDiego",
      image: "src/images/sanDiego.jpg",
    },
    {
      id: 11,
      name: "sanJose",
      image: "src/images/sanJose.jpg",
    },
    {
      id: 12,
      name: "seattle",
      image: "src/images/seattle.jpg",
    }
  ];


//const apiBase = 'https://weatherdbi.herokuapp.com/data/weather/' //the location is a reformat of {location}

//function bootPage(){
    //fetch(apiBase + location)
    //.then(response => response.json)
    //.then((data) => console.log(data))
//}

function renderCities(cities) {
    const cityOptions = document.getElementById('locations');
    
    cities.forEach(city => {
        const image = document.createElement('img');
        image.src = city.image;
        image.style = style="width:100px;height:100px";
        
        cityOptions.appendChild(image)
    });
}

renderCities(cities)
//document.addEventListener('DOMContentLoaded', bootPage)