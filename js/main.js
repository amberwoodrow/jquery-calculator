var toBeCalculated = [];

function equals () {
  console.log(toBeCalculated);
  var calcStr = toBeCalculated.join(" ");
  console.log((calcStr));
  console.log(eval(calcStr));
  return eval(calcStr);
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

$('span, span:not([id=calc]').click(function() {
  $('#screen').html(toBeCalculated);
});
