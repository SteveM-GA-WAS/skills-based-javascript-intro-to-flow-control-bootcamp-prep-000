function basicTeenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!";
  }
}
basicTeenager(14);

function teenager(age) {
 if (age >= 13 && age <=19) {
   return "You are a teenager!";
 } else {
   return "You are not a teenager";
 }
}
teenager(14);

function ageChecker(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else if (age > 19){
    return "You are a grownup";
  }
}
ageChecker(54);

function ternaryTeenager(age) {
return age >= 13 && age <=19  ? "You are a teenager" : "You are not a teenager"
}
ternaryTeenager(19);

function switchAge(age) {
    switch(age) {
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      return "You are a teenager";
      default:
        return "You have an age";
    }
}
switchAge(12);
