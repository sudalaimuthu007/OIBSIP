const resultValue = document.querySelector("#result-value");
const degreeValue = document.querySelector("#degrees");
const tempType    = document.querySelector("#temp-types");
const button      = document.querySelector("#btn");



window.addEventListener("load", () => {
    degreeValue.value ="";
    resultValue.innerHTML="";
});

button.addEventListener("click", (e) => {
    e.preventDefault();
    resultConverter();

    button.innerHTML ="<span><i class='fa fa-spinner fa-spin' style='color: #ffffff;'></i>Converting.. </span>";
    setTimeout(() => {
        button.innerHTML ="<span>Convert </span>";


    },1000)
});


function resultConverter() {
    let inputValue = degreeValue.value;


    setTimeout(() => {
        if(tempType.value === "Fahrenheit") {
            const fahrenheitToCelsius = (inputValue -32) * (5/9);
            resultValue.innerHTML     = `${fahrenheitToCelsius.toFixed(3)} &deg;
            c`;
        }
    
        else if(tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            resultValue.innerHTML     = `${kelvinToCelsius.toFixed(3)} &deg;
            c`;
        }

        else if(tempType.value === "Celsius") {
            const CelsiusTofahrenheit = (inputValue +32) * (5/9);

            resultValue.innerHTML     = `${CelsiusTofahrenheit.toFixed(3)} &deg;
            f`;
        }
        
        else if(tempType.value === "Select" && degreeValue.value == "") {
            resultValue.innerHTML = "<p style='color:red;font-size:0.5em'>Invalid</p>";
        } 
     
    

    },1100)

};
