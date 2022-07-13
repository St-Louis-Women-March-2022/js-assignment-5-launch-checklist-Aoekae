// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");

   // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>  
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
   console.log(`how is the Add destination info function seeing the following variables
   ${typof(name)}
   ${typof(diameter)}
   ${typof(star)}
   ${typof(distance)}
   ${typof(moons)}
   ${typof(imageUrl)}
   
   `)
}

function validateInput(testInput) {

    let result;
 
    if (testInput === "") {
        result = 'Empty'
    } else if (isNaN(testInput)) {
        result = 'Not a Number'
    } else if (isNaN(testInput) === false) {
        result = 'Is a Number'
    }  
    return result;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let currentResults = [];
    let fieldsArray = [pilot, copilot, fuelLevel, cargoLevel];
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    // let faulty = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

 
    for (let index = 0; index < fieldsArray.length; index ++) {
        
        if ((validateInput(fieldsArray[index])==='Not a Number' || (validateInput(fieldsArray[index])==='Is a Number'))){
            currentResults.push(fieldsArray[index].value)
      }
    }

    currentResults[2] = Number(currentResults[2]);
    currentResults[3] = Number(currentResults[3]);

    if (currentResults[0] === ''){
        pilotStatus.innerHTML = "Pilot not ready!"
    } else if (validateInput(pilot)==='Not a Number') {
        pilotStatus.innerHTML = 'Pilot ' + currentResults[0] + ' is ready for launch'
        list.style.visibility ="visible" 
    }

    if (currentResults[1] === ''){
        copilotStatus.innerHTML = "Copilot not ready!"
    } else if (validateInput(copilot)==='Not a Number'){
        copilotStatus.innerHTML = 'Copilot ' + currentResults[1] + ' is ready for launch'
        list.style.visibility ="visible"
    }

    if (currentResults[0] === '' || currentResults[1] === '' || currentResults[2] === '' || currentResults[3] ===''){
        alert ('All Fields Required!')
    }

    if (validateInput(currentResults[0]) === "Is a Number" || validateInput(currentResults[1]) === "Is a Number" || validateInput(currentResults[2]) === "Not a Number" || validateInput(currentResults[3]) === "Not a Number") {
        alert ('Make sure to enter valid information for each field!')
    }
    
    if (currentResults[2] < 10000){
        fuelStatus.innerHTML = "Not enough fuel for journey"
        list.style.visibility="visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
    }
    
    if (currentResults[3] > 10000) {
        cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off.'
        list.style.visibility="visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
    } 
    
    if (currentResults[2] >= 10000 && currentResults[3] <= 10000 && currentResults[0] !=='' && currentResults[1] !=='') {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
        pilotStatus.innerHTML = `Pilot ${currentResults[0]} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${currentResults[1]} is ready for launch`
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

       return response.json() 
}); 
return planetsReturned;
}

function pickPlanet(planetsReturned) {
    planet = Math.floor(Math.random()*planetsReturned.length);
    return planet;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
