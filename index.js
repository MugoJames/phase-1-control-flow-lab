function scuberGreetingForFeet(somenumber){
  // Write your code here!
  let result;

  if (somenumber <= 400){
    result='This one is on me!';

  }else if (somenumber > 400 && somenumber <= 2000){
    result ="That will be twenty bucks.";
  }else if (somenumber > 2000 && somenumber <= 2500){
    result="I will gladly take your thirty bucks.";
  }else if (somenumber > 2500) {
    result="No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  //Write your code here!
  return city === 'NYC'? "Ok, sounds good." : "No go.";



}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}