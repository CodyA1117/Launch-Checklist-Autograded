// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
     if (testInput === "" || testInput.trim() ===""){
        return "Empty"
     } else if (isNaN(testInput)){
        return "Not a Number";

     } else {
        return "Is a Number"
     }

     



    
 }


 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotCheck = validateInput(pilot);
    let copilotCheck = validateInput(copilot);
    let fuelCheck = validateInput(fuelLevel);
    let cargoCheck = validateInput(cargoMass);

    if (pilotCheck === "Empty" || copilotCheck === "Empty" || fuelCheck === "Empty" || cargoCheck === "Empty"){
       alert("All fields are required.");
       return ;
    }

    if (pilotCheck === "Not a Number" || copilotCheck === "Not a Number"){
        alert("Pilot and Co-pilot names must be strings")
        return;
    }


    if (fuelCheck === "Not a Number" || cargoCheck === "Not a Number") {
        alert("Fuel Level and Cargo mass gotta be numbers!")
        return;
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;