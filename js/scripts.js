// var pigLatin = function(word) {
//   vowels = ["a", "e", "i", "o", "u"];
//   if(vowels.indexOf(word.charAt(0)) !== -1) {
//     return word + "ay";
//   } else {
//     word.slice(1) + word.slice(0,1);
//
//   }
// };


var pigLatin = function(word) {
  vowels = ["a", "e", "i", "o", "u"];
  while (vowels.indexOf(word.charAt(0)) === -1) {
    word = word.slice(1) + word.slice(0,1);
  }
  return word + "ay";
};
