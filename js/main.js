function equals () {
  var arrToCalc = clickedIdOrClass();
  console.log(eval(arrToCalc));
  return eval(arrToCalc);
}

function clickedIdOrClass () {
  var toBeCalculated = [];
  $("span").click(function(event) {
    if (event.target.id === "zero") {
      toBeCalculated.push('0');
    }
    else if (event.target.id === "cancel") {
      toBeCalculated = [];
    }
    else if(event.target.id === "calc") {
      $('#screen').html(equals());
    }
    else {
      toBeCalculated.push(event.target.id);
    }
    $('#screen').html(toBeCalculated);
    console.log(toBeCalculated.join(''));
    return toBeCalculated.join('');
  });
}

clickedIdOrClass();