var toBeCalculated = [];
var justCalculated = false;

function equals () {
  //console.log(toBeCalculated);
  var calcStr = toBeCalculated.join(" ");
  if (calcStr.match(/[0-9 +-\/*]/)) {
    justCalculated = true;
    return eval(calcStr);
  }
  return [""];
}


$('#zero').click(function() {
  toBeCalculated.push(0);
});

$('#cancel').click(function() {
  toBeCalculated = "";
});

$('#calc').click(function() {
  toBeCalculated = [equals().toString()];
  $('#screen').html(toBeCalculated);
});

$('span:not([id=calc], [id=cancel], [id=zero])').click(function() {
  toBeCalculated.push(event.target.id);
});

$('span:not([id=calc]').click(function() {

    if (justCalculated === true) {
      var lastStr = toBeCalculated.slice(-1).toString();
      if (lastStr.match(/[0-9]/)) {
        var last = toBeCalculated.slice(-1);
        toBeCalculated = "";
        toBeCalculated = last;
        justCalculated = false;
      }
      else {
        justCalculated = false;
      }
    }

  $('#screen').html(toBeCalculated);
});

$("#screen").html("alert('lol')");
$("#calc").click();

//if next sting after eval has id of 0-9 clear toBeCalculated