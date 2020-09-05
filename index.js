function dwarfRollCall(dwarfNames) {
  var names = [];
  for (var i = 0; i < dwarfNames.length; i++) {
    names += `${(i+1)}. ${dwarfNames[i]} `;
  }
  return names; 
}

function summonCaptainPlanet(planeteerCalls) {
  var planeteerArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerArray.push(planeteerCalls[i].toUpperCase() + "!");
   
  }
    return planeteerArray;                   
}

function longPlaneteerCalls(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}


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
