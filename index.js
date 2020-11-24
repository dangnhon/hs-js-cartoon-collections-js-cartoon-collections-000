function dwarfRollCall(dwarfNames) {
  var names = [];
  for (var i = 0; i < dwarfNames.length; i++) {
    names += `${(i+1)}. ${dwarfNames[i]} `;
  }
  return names; 
}

function summonCaptainPlanet(planeteerCalls) {
 //This is the return an array of strings in number order. The reason we use the names variable and adding numerical counter (i+1) with dwarfName[i] is to return a new and filled array!!

//PAY SPECIAL ATTENTION TO WHERE YOU PUT THE "RETURN 'ARRAY' ELEMENT IN ALL FUNCTIONS. USUALLY IS NOT WIHTIN THE LOOPING FUNCTION. USUALLY PLACED OUTSIDE OF IT SO THE LOOP CAN BE UNDISTURBED. 

//REMEMBER: Interpolation ===> `${variable}` is when you use the variable name within the return string statement or wish to write less code overall. Concatenation ===> is the use of string qoutations "" to COMPOUND or ADD strings, numbers, variables, and etc to form a sentence. Both can get the same results but depending on the situation, one may be easier than the other (usually interpolation).

function dwarfRollCall(dwarfNames) {
  var names = [];
  for (var i = 0; i < dwarfNames.length; i++) {
    names += `${(i+1)}. ${dwarfNames[i]} `;
  }
  return names; 
}

//TEST YOUR FUNCTION BY USING THE CONSOL.LOG FUNCTION BELOW IN THE TEXT EDITOR (REMOVE "//==> ") PORTTION TO MAKE SURE THE CONSOLE IS PUTTING OUT THE DESIRED RESULTS.

//==> console.log(dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]))

//END FUNCTION #1.


//This is to uppercase all the letters in the array string and also add an exclamation point to the end of each one. Pay attention and review "For Loops" to see how and why they work. 
//Practice more with using the combo .push and .toUpperCase to get better understanding. Line 29 translates to adding "!" to uppercase planeteer arguments, then pushing it into the empty planeteerArray brackets to churn out the evolved array. (reading things backwards may help you better understand the concept) 
//Don't forget how important it is to include index or syntax [i] when using loops. This allows for everything throughout the argument to be "included" I guess. 

function summonCaptainPlanet(planeteerCalls) {
  var planeteerArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerArray.push(planeteerCalls[i].toUpperCase() + "!");
   
  }
    return planeteerArray;                   
}

//TEST YOUR FUNCTION BY USING THE CONSOL.LOG FUNCTION BELOW IN THE TEXT EDITOR (REMOVE "//==> ") PORTTION TO MAKE SURE THE CONSOLE IS PUTTING OUT THE DESIRED RESULTS.

//==> console.log(summonCaptainPlanet(["wind", "fire", "water", "heart"]))

//END FUNCTION #2.


//This function is to see if a call word is longer than 4 letters. Once again, look and review loops too fully comprehend when, where, and why to use it. 
// This is pretty simple, use the function argument (word) and if and else functions to simply figure out if an array has words longer than 4 and return true. Anything else is automatically false. 

function longPlaneteerCalls(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

//TEST YOUR FUNCTION BY USING THE CONSOL.LOG FUNCTION BELOW IN THE TEXT EDITOR (REMOVE "//==> ") PORTTION TO MAKE SURE THE CONSOLE IS PUTTING OUT THE DESIRED RESULTS.

//==> console.log(longPlaneteerCalls(["wind", "fire"])) 
//The one above is "short words array".

//The one below is the "assorted/long word array".
//==> console.log(longPlaneteerCalls(["earth", "wind", "heart", "fire"]))

//END FUNCTION #3. 


//This function is multi step and the hardest part is to figure out the portion where no cheese is in the list. Simply only had to exclude everything else by returning a string if no cheese is available. Overthinking it does not help. MAKE SURE TO KNOW THE DIFFERENCE AND WHEN TO USE THE = vs == vs === .The = is typically used for setting variables (var, let, const, etc.). The == checks to see if whatever on the left side is equaled to whatever on the right side, and the === is a strict eqaul meaning both sides MUST be exactly the same.

function findTheCheese(food) {
  for (var i = 0; i < food.length; i++) {
    if (food[i] == "cheddar") {
      return "cheddar";
    } else if (food[i] == "gouda") {
      return "gouda";
    } else if (food[i] == "camembert") {
      return "camembert";
    }
  }
  return "no cheese!";
}
 
//TEST YOUR FUNCTION BY USING THE CONSOL.LOG FUNCTION BELOW IN THE TEXT EDITOR (REMOVE "//==> ") PORTTION TO MAKE SURE THE CONSOLE IS PUTTING OUT THE DESIRED RESULTS.

//==> console.log(findTheCheese(["tomato soup", "cheddar", "oyster crackers", "gouda"]))

//==> console.log(findTheCheese(["crackers", "gouda", "thyme"]))

//==> console.log(findTheCheese(["garlic", "rosemary", "bread"]))

//END FUNCTION #4. 