
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
    console.log("preloop");
    console.log(katzDeliLine);
    for (let i = 0; i < katzDeliLine.length; i++){
      sentenceEnd += current;
    }
    sentence += sentenceEnd;
    console.log(sentence);
    return sentence
  }
}