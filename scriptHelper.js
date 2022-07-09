// Write your helper functions here!
// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    // Here is the HTML formatting for our mission target div.
//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

function validateInput(testInput) {

    let result;
 
    if (testInput === "") {
        result = 'Empty'
    } else if (isNaN(testInput) === true) {
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
    let faulty = document.getElementById("faultyItems");
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
    }

    if (currentResults[1] === ''){
        copilotStatus.innerHTML = "Copilot not ready!"
    }

    if (currentResults[0] === '' || currentResults[1] ==='' || currentResults[2] ==='' || currentResults[3] ===''){
        alert ('All Fields Required!')
    }
    

    if (currentResults[2] < 10000){
        fuelStatus.innerHTML = "Not enough fuel for journey"
        faulty.style.visibility="visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
    }

    if (currentResults[3] > 10000) {
        cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off.'
        faulty.style.visibility="visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
    }

    if (currentResults[2] >= 10000 && currentResults[3] <= 10000 && currentResults[0] !=='' && currentResults[1] !=='') {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
    }
}


// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
