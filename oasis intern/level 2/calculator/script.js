const input =  document.querySelector(".input-box");
const buttons = document.querySelectorAll("button");
const symbols = ["%", "/", "+", "-", ".", "="];
let display= "";

const evaluvate = (btnValue) => {
    if (btnValue === "=" && display !== ""){
        display = eval(display.replace("%", "/100"))
    }

    else if ( btnValue === "AC"){
          display="";
    }
    else if (btnValue === "DEL") {
        display = display.toString().slice(0,-1);

    }
    else{

        if(display === "" && symbols.includes(btnValue)) return;
        display += btnValue;
    }
    input.value = display;
};

buttons.forEach( (button) => {
    button.addEventListener("click", (e) => evaluvate(e.target.dataset.value));

});