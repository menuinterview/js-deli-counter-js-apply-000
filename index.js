
function takeANumber (katzDeliLine, next){
  katzDeliLine.push(next);
  return `Welcome, ${next}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine (katzDeliLine){
  var sentence = "The line is currently: ";
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var sentenceEnd = "";
    console.log("preloop");
    var i = 0;
      var current = i+1;
      sentenceEnd = sentenceEnd + current;
      console.log("reached loop");
    sentence += sentenceEnd;
    console.log(sentence);
    return sentence
  }
}