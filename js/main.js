var toBeCalculated = []; // array of buttons pressed
var justCalculated = false; // checks to see if array has just been calculated

// deals with eval of string
function equals () {
  var calcStr = toBeCalculated.join(" "); // turns toBeCalculated to string to be evaled by .match and eval
  if (calcStr.match(/[0-9 +-\/*]/)) { // makes eval safe by making sure the string is only ints, operators and spaces.
    justCalculated = true; 
    return eval(calcStr);
  }
  return [""]; // empty string if string entered for eval does not match regex above
}

// I used ids to grab each number, or operator clicked and put it on the screen
$('#zero').click(function() { // id of 'zero' shows up on screen and array as 'zero', so here I caught it before 
  toBeCalculated.push(0);     // it is pushed to the array and push 0 instead
});

$('#cancel').click(function() { // empties array toBeCalculated on click of cancel id
  toBeCalculated = "";
});

$('#calc').click(function() { // calls the equals function to calc the array
  toBeCalculated = [equals().toString()]; // creates array with one element inside
  $('#screen').html(toBeCalculated); // sticks the calculated array on the screen
});

$('span:not([id=calc], [id=cancel], [id=zero])').click(function() { // displays all ids on screen except ones
  toBeCalculated.push(event.target.id);                             // mentioned
});

$('span:not([id=calc]').click(function() { // puts span clicked on screen
  // checks if array was just evaled. If I didn't check the result of the last evaluated array would stay on the
  // screen and a new number would be added and it would not know how to eval it. ex:
  //  6 being from last eval result: 6 5 + 3 can't eval 5 space 6
  if (justCalculated === true) { 
    var lastStr = toBeCalculated.slice(-1).toString(); // captures last span clicked and turns it to a string to be matched.
    if (lastStr.match(/[0-9]/)) { // checks to see if the span just clicked is a number
      var last = toBeCalculated.slice(-1); // stores last #
      toBeCalculated = ""; // empties array
      toBeCalculated = last; // reassigns last # to the array
      justCalculated = false; // makes false for next eval to function properly
    }
    else { // allows you to operate on the last evaled result
      justCalculated = false; 
    }
  }

  $('#screen').html(toBeCalculated); // puts span clicked on screen
});

$("#screen").html("alert('lol')"); // tests eval safty regex
$("#calc").click(); // tests eval safty regex