const display = document.getElementById("display");

function appendToDisplay(input){
    console.log(input); // Log the input to the console
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
