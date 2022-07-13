// Write your JavaScript code here!

// const scriptHelper = require("./scriptHelper.js")


window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        event.preventDefault()
    
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");        
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
   
        let faulty = document.getElementById("faultyItems");

        formSubmission(document, faulty, pilotName, copilotName, fuelLevel, cargoMass)

        let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();

        listedPlanetsResponse.then(function (result) {
console.log(`the result is ${result[0].value}`)
        listedPlanets = result;

   }).then(function () {
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

//it gets to the pick planets part of the function, it's seeing the parts of the function it should

    let planets = pickPlanet(listedPlanets)

       console.log(planets)

       console.log(`planets.name is ${planets}`)

    //    console.log(planets.imageUrl)

    addDestinationInfo(document, planets.name, planets.diameter, planets.star, planets.distance, planets.moons, planets.imageUrl)

   })
          
});   
});