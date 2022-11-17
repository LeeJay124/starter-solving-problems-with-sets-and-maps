/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
//     let results = new Map();
//     if(words.length == 0) return results;
//     let value = [];

// for(let i=0;i<words.length;i++){
//     let current = words[i];
//     console.log(current);
//     let lower = current.toLowerCase();
//     let wordSet = new Set(lower);
    
//     let wordArray = [...wordSet];
//    let wordArraySorted =  wordArray.sort((a, b)=>a-b);
//    results.set(wordArraySorted, []);
//     let joinedArray = wordArray.join("");
//     if(results.get(wordArray) !== undefined){
//         results.set(wordArray, joinedArray);
//     }
//     else{
//         results.set(wordArray, joinedArray);
//     }
// }
// return results;
const results = new Map();
  words.forEach((word) => {
    let distinctLetters = Array.from(new Set(word.split("")))
      .sort()
      .join("");
    if (results.has(distinctLetters)) {
      results.get(distinctLetters).push(word);
    } else {
      results.set(distinctLetters, [word]);
    }
  });
  return results;
}

module.exports = sameLetters;
