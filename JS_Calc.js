//may add in the future:
//negative button (different from 'subtract' button)

var calc = "";
var decimalOk = true; //true if last button click wasn't decimal or equals
var numberOk = true; //replaces a number if equals is hit, otherwise adds number normally
var decimalOk2 = true; //prevents multiple decimals with a number
var zeroOk = true;  //only used to prevent 0 from being pressed after +, -, *, or / is pressed (press the decimal button instead if need to use 0.something). I don't know if that's normal for a calculator (or if it would be better to remove this variable all together and find a better quality workaround), but the codepen demo for freeCodeCamp works that way so it should be ok for a calculator to work like that.
var emergencyBreak = 0;  //used if the while loop gets a little too crazy as an emergency stop

function zero() {
  if (calc.length<=15) {
  if (zeroOk) {
  if (numberOk){
  if (calc == "0") {
    calc ="0";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "0";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="0";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } //end if zeroOk
  }
  $("#display").html(calc);
}

function one() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="1";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "1";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="1";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function two() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="2";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "2";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="2";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function three() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="3";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "3";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="3";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function four() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="4";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "4";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="4";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function five() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="5";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "5";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="5";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function six() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="6";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "6";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="6";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function seven() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="7";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "7";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="7";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function eight() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="8";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "8";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="8";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function nine() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc ="9";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  } else {
    calc += "9";
    decimalOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="9";
    decimalOk = true;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function decimal() {
  if (calc.length<=15) {
  if (numberOk){
  if (calc == "0") {
    calc = "0.";
    decimalOk = false;
    decimalOk2 = false;
    zeroOk = true;
    equalPressed = false;
    $("#display").html(calc);
  }
  if (decimalOk && decimalOk2) {
    if (calc.charAt(calc.length-1) == "+" ||
      calc.charAt(calc.length-1) == "-" ||
      calc.charAt(calc.length-1) == "*" ||
      calc.charAt(calc.length-1) == "/") {
        calc +="0.";
    } else if (calc == "") {
      calc ="0.";
    } else {
      calc += ".";
    }
    decimalOk = false;
    decimalOk2 = false;
    zeroOk = true;
    equalPressed = false;
  }
  } else {
    calc ="0.";
    decimalOk = false;
    decimalOk2 = false;
    numberOk = true;
    zeroOk = true;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function add() {
  if (calc.length<=15) {
  if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/" ||
     calc.charAt(calc.length-1) == ".") {
    calc +="";
  } else {
    calc += "+";
    numberOk = true;
    decimalOk = true;
    decimalOk2 = true;
    zeroOk = false;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function subtract() {
  if (calc.length<=15) {
  if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/" ||
     calc.charAt(calc.length-1) == ".") {
    calc +="";
  } else {
    calc += "-";
    numberOk = true;
    decimalOk = true;
    decimalOk2 = true;
    zeroOk = false;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function multiply() {
  if (calc.length<=15) {
  if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/" ||
     calc.charAt(calc.length-1) == ".") {
    calc +="";
  } else {
    calc += "*";
    numberOk = true;
    decimalOk = true;
    decimalOk2 = true;
    zeroOk = false;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function divide() {
  if (calc.length<=15) {
  if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/" ||
     calc.charAt(calc.length-1) == ".") {
    calc +="";
  } else {
    calc += "/";
    numberOk = true;
    decimalOk = true;
    decimalOk2 = true;
    zeroOk = false;
    equalPressed = false;
  }
  }
  $("#display").html(calc);
}

function clearButton() {
  calc = "0";
  numberOk = true;
  decimalOk = true;
  decimalOk2 = true;
  zeroOk = true;
  equalPressed = false;
  $("#display").html(calc);
}

function equals() {
  if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/" ||
     calc.charAt(calc.length-1) == ".") {
    calc +="";
  } else {
  calc = eval(calc);
  calc = Math.round(calc*1000000000000000)/1000000000000000; //15 decimal places maximum, probably overkill to be honest
  calc = calc.toString();
  decimalOk = false;
  numberOk = false;
  decimalOk2 = true;
  zeroOk = true;
  equalPressed = true;
  }
  $("#display").html(calc);
}


function undoButton() {

   if (calc.charAt(calc.length-1) == "+" ||
     calc.charAt(calc.length-1) == "-" ||
     calc.charAt(calc.length-1) == "*" ||
     calc.charAt(calc.length-1) == "/") {
       calc = calc.substring(0, calc.length - 1);
       while (calc.charAt(calc.length-1) != "+" &&
     calc.charAt(calc.length-1) != "-" &&
     calc.charAt(calc.length-1) != "*" &&
     calc.charAt(calc.length-1) != "/") {
       calc = calc.substring(0, calc.length - 1);
       if (calc.length == 0) {
         calc = "0";
          numberOk = true;
          decimalOk = true;
          decimalOk2 = true;
          zeroOk = false;
          equalPressed = false;
         break;
       }
       emergencyBreak += 1;
       if (emergencyBreak >= 20) { //should never happen, here just in case
         emergencyBreak = 0;
          numberOk = true;
          decimalOk = true;
          decimalOk2 = true;
          zeroOk = true;
          equalPressed = false;
         break;
       }
     }
     }

while (calc.charAt(calc.length-1) != "+" &&
     calc.charAt(calc.length-1) != "-" &&
     calc.charAt(calc.length-1) != "*" &&
     calc.charAt(calc.length-1) != "/") {
       calc = calc.substring(0, calc.length - 1);
       if (calc.length == 0) {
         calc = "0";
          numberOk = true;
          decimalOk = true;
          decimalOk2 = true;
          zeroOk = false;
          equalPressed = false;
         break;
       }
       emergencyBreak += 1;
       if (emergencyBreak >= 20) { //should never happen, here just in case
         emergencyBreak = 0;
          numberOk = true;
          decimalOk = true;
          decimalOk2 = true;
          zeroOk = true;
          equalPressed = false;
         break;
       }
     }

  if (equalPressed) {
    calc = "0"; //i know this will run both conditionals and is therefore not the most efficient way to go about this, but I don't care enough to fix it because it works :D
    //also this part may not even be necessary anymore, but is good to have it here just in case
  }

  numberOk = true;
  decimalOk = true;
  decimalOk2 = true;
  zeroOk = false;
  equalPressed = false;

  emergencyBreak = 0;
  equalPressed = false;
  $("#display").html(calc);
}
