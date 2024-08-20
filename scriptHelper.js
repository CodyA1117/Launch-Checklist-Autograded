// Write your helper functions here!

require ('cross-fetch/polyfill');

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
        <img src = "${imageUrl}">`;

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
    if (typeof testInput === "string") {
        if (testInput.trim() === "") {
            return "Empty";
        } else if (isNaN(Number(testInput))) {
            return "Not a Number";
        } else {
            return "Is a Number";
        }
    } else if (typeof testInput === "number") {
        if (isNaN(testInput)) {
            return "Not a Number";
        } else {
            return "Is a Number";
        }
    }
    return "Invalid Input";

 }

 
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotCheck = validateInput(pilot);
    let copilotCheck = validateInput(copilot);
    let fuelCheck = validateInput(fuelLevel);
    let cargoCheck = validateInput(cargoLevel);

    if (pilotCheck === "Empty" || copilotCheck === "Empty" || fuelCheck === "Empty" || cargoCheck === "Empty"){
       alert("All fields are required.");
       return ;
    }

    if (pilotCheck === "Not a Number" && copilotCheck === "Not a Number"){
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`;
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
        fuelStatus = "Fuel level too low for launch"
    } else {
        fuelStatus = "Fuel level high enough for launch"
    }
    
    if (Number(cargoLevel > 10000)){
        cargoStatus = "Cargo mass too heavy for launch"
    } else {
        cargoStatus = "Cargo mass low enough for launch"
    }
    document.getElementById("fuelStatus").innerHTML = fuelStatus;
    document.getElementById("cargoStatus").innerHTML = cargoStatus;

    if(fuelStatus.includes("too low") || cargoStatus.includes("too heavy")){
        launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusElement.style.color = "red";
        faultyItemsElement.style.visibility = "visible";
    } else {
        launchStatusElement.innerHTML = "Shuttle is Ready for Launch";
        launchStatusElement.style.color = "green";
        faultyItemsElement.style.visibility = "visible";
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