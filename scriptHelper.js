// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML =

        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src = "${imgeUrl}">`;

}
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
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`;
        document.getElementById("copilotStatus").innerHTML = `Pilot ${copilot} is ready for launch.`;
    } else {
        alert("Pilot and Co pilot names must be strings.")
        return;

    }
    


    if (fuelCheck === "Not a Number" || cargoCheck === "Not a Number") {
        alert("Fuel Level and Cargo mass gotta be numbers!")
        return;
    }

    const launchStatusElement = document.getElementById('launchStatus');
    const faultyItemsElement = document.getElementById('faultyItems');

    let fuelStatus = "";
    let cargoStatus = "";

    if (Number(fuelLevel < 10000)){
        fuelStatus = "not enough fuel"
    } else {
        fuelStatus = "Fuel is good for launch!"
    }
    
    if (Number(cargoStatus > 10000)){
        cargoStatus = "bad"
    } else {
        cargoStatus = "good"
    }
    document.getElementById("fuelStatus").innerHTML = fuelStatus;
    document.getElementById("cargoStatus").innerHTML = cargoStatus;

    if(fuelStatus.includes("not enough fuel") || cargoStatus.includes("bad")){
        launchStatusElement.innerHTML = "Shuttle not ready for launch";
        launchStatusElement.style.color = "red";
        faultyItemsElement.style.visability = "visible";
    } else {
        launchStatusElement.innerHTML = "Shuttle is ready for launch";
        launchStatusElement.style.color = "green";
        faultyItemsElement.style.visibility = "hidden";
    }

    

 };


 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()* planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;