// var pigLatin = function(word) {
//   vowels = ["a", "e", "i", "o", "u"];
//   while (vowels.indexOf(word.charAt(0)) === -1) {
//     word = word.slice(1) + word.slice(0,1);
//   }
//   return word + "ay";
// };


var pigLatin = function(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var split_sentence = sentence.toLowerCase().split(/\W\s*/);
  var pig_sentence = [];

  for (var i = 0; i < split_sentence.length; i++) {
    while (vowels.indexOf(split_sentence[i].charAt(0)) === -1) {
      split_sentence[i] = split_sentence[i].slice(1) + split_sentence[i].slice(0,1);
    }
    pig_sentence.push(split_sentence[i] + "ay");
  }
  return pig_sentence.join(" ");
};
