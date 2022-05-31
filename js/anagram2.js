// listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

exports.anagramsFor = function(word, listOfWords) {
  let tempList = [];
  let wordSplit = word.replace(/[^\w]/g, "").toLowerCase().split("");
  for (w in listOfWords) {
    let wSplit = listOfWords[w].replace(/[^\w]/g, "").toLowerCase().split("");
    let cnt = 0;   
    if (wordSplit.length === wSplit.length) {
      for (i = 0; i < wSplit.length; i++) {
        if (wSplit.includes(wordSplit[i])) {
          cnt++;
        }
      }
      if (cnt === wordSplit.length) {
        tempList.push(listOfWords[w])
      }
    }
  }
  listOfWords = tempList;
  return listOfWords
  };

