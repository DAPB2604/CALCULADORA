document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");
    const keys = document.getElementById("keys");

    keys.addEventListener("click", function (event) {
      if (event.target.tagName === 'BUTTON') {
        handleButtonClick(event);
      }
    });
 
    document.addEventListener("keydown", function (event) {
      const keyPressed = event.key;
  

      if (/[0-9\/\*\-\+\.\=\=]|Backspace|Enter/.test(keyPressed)) {
        event.preventDefault(); 
        handleButtonClick(keyPressed);
      }
    });
  

    display.addEventListener("click", function () {
      
      display.contentEditable = true;
   
      display.focus();
    });
  
   
    display.addEventListener("blur", function () {
    
      display.contentEditable = false;
    });
  
    function handleButtonClick(event) {
      const buttonText = event.target ? event.target.textContent : event;
      switch (buttonText) {
        case "=":
        
          display.value = eval(display.value);
          break;
        case "⌫":

          display.value = "";
          break;
        case "Enter":
            
            display.value = eval(display.value);
            break;
        case "%":
         
          display.value = eval(display.value) / 100;
          break;
        case "Backspace":
         
          display.value = display.value.slice(0, display.value.length - 1);
          break;
        default:
         
          display.value += buttonText;
      }
    }
  });
  
  