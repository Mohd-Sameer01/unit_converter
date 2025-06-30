function conversion() {
    let myinput = document.getElementById("input");
    let input = myinput.value;
     myinput.value = "";
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let paragraph = document.getElementById("answersheet");
    

   if (input === '') {
    let nothing = `<p>please enter value first!</p>`
    paragraph.innerHTML = nothing;
    return;
   } 

  let calculation = {
    
    Kilometer: 1000000000,
    Meter: 1000000,
    Centimeter: 10000,
    Milimeter: 1000,
    Micrometer: 1
  };

  let from = calculation[fromUnit];
  let to = calculation[toUnit];

  let answer = from / to;
  
  let show = answer * input;

  let display = `<p>${input} ${fromUnit} =  ${show} ${toUnit}</p>`

  paragraph.innerHTML = display;
 
  }


  function okay() {
    let paragraph = document.getElementById("answersheet");
    paragraph.innerHTML = '';
  }
    


