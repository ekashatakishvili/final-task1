

const burgerBtn =document.querySelector('.burger-btn');
const navEl = document.querySelector('.main-nav');
// fetching planets
 
//main part
const API_URL ='https://planets-api.vercel.app/api/v1/planets/';
const planetName =document.querySelector('.planet-name');
const planetPicture=document.querySelector('.planet-picture-container');
const planetDescription=document.querySelector('.short-description');
const wikiSource= document.querySelector('#wiki-link');

//ADDITIONAL DETAILS
const rotationDays= document.querySelector('#rotation-days');
const revolutionTime= document.querySelector('#revolution-time');
const radius =document.querySelector('#radius-size');
const temperature =document.querySelector('#temperature')
const overview =document.querySelector('.overview');
const structure =document.querySelector('.structure');
const surface =document.querySelector('.surface');
const overviewHighlight =document.querySelector('.overview-info');
const structureHighlight =document.querySelector('.structure-info');
const surfaceHighlight =document.querySelector('.surface-info');

//PLANETS 

const planets=document.querySelectorAll('.planets');

const getPlanet = async (name ='Mercury') => {
  const response =await fetch(API_URL + name);
  const data=await response.json ();
   render(data);
    
};


const render =(data) => {
  planetPicture.innerHTML= `<img class="planet-picture"
  src= "${data.images.planet}" />`
  planetName.textContent=data.name.toUpperCase();
  const planetDetails =
  planetDescription.textContent=data.overview.content;
  wikiSource.href=`${data.overview.source}`;
  rotationDays.textContent= data.rotation;
  revolutionTime.textContent=data.revolution;
  radius.textContent=data.radius;
  temperature.textContent=data.temperature;
  console.log(data);

structure.addEventListener ('click', ()=>{
    planetDescription.textContent=data.structure.content;
    wikiSource.href=`${data.structure.source}`;
    planetPicture.innerHTML= `  <img class="planet-picture"
  src= "${data.images.internal}" />`
    structureHighlight.classList.add('active');
    surfaceHighlight.classList.remove('active');
    overviewHighlight.classList.remove('active');
  
})

surface.addEventListener ('click', ()=>{
  planetDescription.textContent=data.geology.content;
  wikiSource.href=`${data.geology.source}`;
  planetPicture.innerHTML= `
  <img class="geology-pic"
  src= "${data.images.geology}" />
  <img class="planet-picture" src= "${data.images.planet}" />   `
  surfaceHighlight.classList.add('active');
  overviewHighlight.classList.remove('active');
  structureHighlight.classList.remove('active');

})
overview.addEventListener ('click', ()=>{
  planetDescription.textContent=data.overview.content;
  wikiSource.href=`${data.overview.source}`;
  planetPicture.innerHTML= `<img class="planet-picture"
  src= "${data.images.planet}" /> 
  `
  overviewHighlight.classList.add('active');
  structureHighlight.classList.remove('active');
  surfaceHighlight.classList.remove('active');
})

};
getPlanet();




for (let i = 0; i < planets.length; i++) {
  const activePlanet=planets[i];
   activePlanet.addEventListener('click', ()=> {
    getPlanet(name = activePlanet.textContent);
    console.log(activePlanet.textContent);
   
    if (navEl.classList.contains('show')){
      navEl.classList.remove('show');
    }
    if (overviewHighlight.classList.contains('active')){
      overviewHighlight.classList.remove('active');
    }
    if (structureHighlight.classList.contains('active')){
      structureHighlight.classList.remove('active');
    }
    if (surfaceHighlight.classList.contains('active')){
      surfaceHighlight.classList.remove('active');
    }
  })
 
}

// overview.addEventListener('click', ()=> {
//   overview.textContent=data.overview.content;
// })





burgerBtn.addEventListener('click', ()=> {
  if (navEl.classList.contains('show')){
    navEl.classList.remove('show');
  }else {
    navEl.classList.add('show');
    
  }
});
