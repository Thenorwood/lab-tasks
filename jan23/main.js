// gop button calls this function
function selectingACreature(){


//grabs the value of the option selected in the select box
  let selectedCreature = document.getElementById("creatureSelector").value;



//costume variable gathers info based on selection and populates in switch statement
let costume;

switch (selectedCreature) {
  case "Wizard":
   
    
    costume ="Wizards should wear pointy hats and carry wands!";
    break;
  
  case "Dragon":
   

   costume ="Dragons should wear fiery costumes and breathe imaginary fire!";
    break;
  
  case "Fairy":
   costume="Fairies should wear sparkly dresses and spread glitter magic!";
    break;
  
  case "Unicorn":
   costume ="Unicorns should wear horned headbands and have rainbow-colored manes!";
    break;
  
  default:
   costume="Hmm, I'm not sure what costume to give to this guest.";
}

//output costume info on page
document.getElementById("root").innerHTML = costume;



}