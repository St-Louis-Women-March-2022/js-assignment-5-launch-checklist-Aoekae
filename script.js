// Write your JavaScript code here!

const scriptHelper = require("./scriptHelper.js")


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

        let listedPlanetsResponse = myFetch();

        listedPlanetsResponse.then(function (result) {

        listedPlanets = result;

   }).then(function () {
        let planets = pickPlanet(listedPlanets)
        addDestinationInfo(document, planets.name, planets.diameter, planets.star, planets.distance, planets.image, planets.moons)
        })
    });   
});