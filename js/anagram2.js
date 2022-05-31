// listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

exports.anagramsFor = function(word, listOfWords) {
    
    let tempList = listOfWords
    
    let wordSplit = word.replace(/[^\w]/g, "").toLowerCase().split("");
    // console.logS(listOfWords,wordSplit)
    for (w in listOfWords) {
        console.log(w,listOfWords[w])
      let wSplit = listOfWords[w].replace(/[^\w]/g, "").toLowerCase().split("");
      console.log(wSplit)
      let cnt = 0;
    //   console.log(wordSplit.length, wSplit.length)
      if (wordSplit.length, wSplit.length) {
        for (i = 0; i < listOfWords.length; i++) {
            // console.log(wSplit,i)
          if (wSplit.includes(wordSplit[i])) {
            cnt++;
          }
        }
      }//console.log(listOfWords)
    //   console.log(cnt, wordSplit.length)
      if (cnt !== wordSplit.length) {
        tempList.splice(w, 1);
        // console.log(tempList)
        
      }
 
    } 
    
    listOfWords = tempList
    return listOfWords
  };

