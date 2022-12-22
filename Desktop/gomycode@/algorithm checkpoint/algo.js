function algo(x) {
  var wordLong = x.length;
  var numberOfWords = 1;
  var numberOfVoyel = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] == " ") {
      numberOfWords += 1;
      wordLong -= 1;
    }
    if (
      x[i] == "a" ||
      x[i] == "o" ||
      x[i] == "u" ||
      x[i] == "i" ||
      x[i] == "e"
    ) {
      numberOfVoyel += 1;
    }

    var final = `sentence length is ${wordLong} and there are ${numberOfWords} words and ${numberOfVoyel} voyel`;
  }
  return final;
}
