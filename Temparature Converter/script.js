const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const kelvinE1 = document.getElementById("kelvin");

function computeTemp(event) {
   const currentValue = +event.target.value; 
   
    switch (event.target.name) {
        case "celsius":
        kelvinE1.value = (currentValue + 273.32).toFixed(2);  //conversion formulas
        fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2); //conversion formulas
          break;
        
        case "fahrenheit":
        celsiusE1.value = ((currentValue -32) /1.8).toFixed(2);//conversion formulas
        kelvinE1.value = ((currentValue - 32)/ 1.8 + 273.32).toFixed(2);//conversion formulas
         break;

        case "kelvin":
        celsiusE1.value = (currentValue - 273.32).toFixed(2);//conversion formulas
        fahrenheitE1.value = ((currentValue -273.32)* 1.8 + 32).toFixed(2);//conversion formulas
         break;
        default:
        break;
    }
}
