// Write your JavaScript code here!

// const scriptHelper = require("./scriptHelper.js")
// const htmlFile = require("./index.html")

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        event.preventDefault()
    
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");        
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
   
        let faulty = document.getElementById("faultyItems");

// if (pilotName === '' || copilotName=== '' || fuelLevel=== '' || cargoMass=== ''){
//     alert('All Fields are Required!')
// }

        formSubmission(document, faulty, pilotName, copilotName, fuelLevel, cargoMass)


//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
          
});   
});