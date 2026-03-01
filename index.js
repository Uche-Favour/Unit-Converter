
let inputTab = document.getElementById("input-tab");
let lengthDp = document.getElementById("length-dp");
let volumeDp = document.getElementById("volume-dp");
let massDp = document.getElementById("mass-dp");

const toggle = document.getElementById('toggleInput');

const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', ()=>{
    console.log("clicked")
    let value = inputTab.value;
    converter(value)
})

function converter(num){
    
    //for feet to meters
    let meters2Feet = num * 3.28084;
    meters2Feet = meters2Feet.toFixed(3);
    //for meters to feet
    let feet2Meters = num * 0.3048;
    feet2Meters = feet2Meters.toFixed(3);
    lengthDp.textContent = `${num} meters = ${meters2Feet} feet | ${num} feet = ${feet2Meters} meters`;

    //for litres to gallons
    let litre2Gal = num / 3.78541;
    litre2Gal = litre2Gal.toFixed(3);
    //for gallons to litres
    let gal2Litre = num * 3.78541;
    gal2Litre = gal2Litre.toFixed(3);
    volumeDp.textContent = `${num} litres = ${litre2Gal} gallons | ${num} gallons = ${gal2Litre} litres`;

    //for kilos to pounds
    let kilo2Pound = num * 2.20462;
    kilo2Pound = kilo2Pound.toFixed(3);
    //for pounds to kilograms
    let pound2Kilo = num / 2.20462;
    pound2Kilo = pound2Kilo.toFixed(3);
    massDp.textContent = `${num} kilos = ${kilo2Pound} pounds | ${num} pounds = ${pound2Kilo} kilos`;


}
