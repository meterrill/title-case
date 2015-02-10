var titleCase = function(word) {

  var wordArray = word.split(" ");
  var newTitle = "";
  var noCapArray = ["the", "and", "of", "an", "it", "when", "for", "but", "or", "a", "so"];
  var counter = noCapArray.indexOf(word);

  wordArray.forEach(function(word) {
    counter = noCapArray.indexOf(word, counter + 1);
    if (counter === -1) {
      var firstLetter = word.charAt(0).toUpperCase();
      var newWord = firstLetter + word.slice(1).toLowerCase();
      newTitle += newWord + " ";
    } else {
      var newWord = word.toLowerCase();
      newTitle += newWord + " ";
    };
  });
    return newTitle.trim();
};
