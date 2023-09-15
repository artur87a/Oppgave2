
function randomNumberGenerator() {
   let randomNumber = Math.floor((Math.random() * 500) + 1)
    randomNumberGenerert = randomNumber

    console.log(randomNumber)
    let generertNumber = document.getElementById("yourNumber");
generertNumber.textContent = randomNumberGenerert;

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
}


