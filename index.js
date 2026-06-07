/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-value");
const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");

convertBtn.addEventListener("click", function() {

    //Example:20 meters = 65.616 feet | 20 feet = 6.096 meters
    lengthOutput.textContent = `${inputValue.value} meters = ${(inputValue.value * 3.281).toFixed(3)} feet | ${inputValue.value} feet = ${(inputValue.value / 3.281).toFixed(3)} meters`
    volumeOutput.textContent = `${inputValue.value} liters = ${(inputValue.value * 0.264).toFixed(3)} gallons | ${inputValue.value} gallons = ${(inputValue.value / 0.264).toFixed(3)} liters`
    massOutput.textContent = `${inputValue.value} kilograms = ${(inputValue.value * 2.204).toFixed(3)} pounds | ${inputValue.value} pounds = ${(inputValue.value / 2.204).toFixed(3)} kilograms`
})
