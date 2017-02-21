//IF
if (condition1) {
  statement1
} else if (condition2) {
 // statement2
} else if (condition3) {
 // statement3
} else {
  statementN
}

//switch-case
function sayDay(day){
  switch(day){
    case 1: console.log("Sunday");
      break;
    case 2: console.log("Monday");
      break;
    default:
      console.log("We live in a binary world. Go to Pluto");
  }
}

function debug(level,msg){
  switch(level){
    case "INFO": //intentional fall-through
    case "WARN" :  
    case "DEBUG": console.log(level+ ": " + msg);  
      break;
    case "ERROR": console.error(msg);  
  }
}