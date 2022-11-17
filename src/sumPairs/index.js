/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
// let result = [];
// for(let i=0;i<=A.length;i++){
//     for(let j=1;j<=A.length;j++){
//         if(i !== j){
//             if(i+j == N && result.indexOf([i, j]) == -1 && result.indexOf([j, i] == -1)){
//                 result.push([i, j]);
//                 console.log(result);
//                 }}}}
// return result;
let numbers = new Map();
let solution = new Map();
// let value = [];
// for (let i=0;i<=A.length;i++){
//     numbers.set(A[i], value);
//     }
//     for(let i =0;i<=A.length;i++){
//         let diff = N-A[i];
//         if(diff !== A[i]){
//     if(numbers.get(diff)){
//         solution.set([A[i], diff]);
//     }
//         }
//     }
//     let result = [...solution];
//     return result;
for (let e of A) {
    numbers.set(e, e);
  }
  for (let e of A) {
    let diff = N - e;
    if (diff !== e) {
      if (numbers.has(diff)) {
        solution.set(Math.min(e, diff), Math.max(e, diff));
      }
    }
  }

  return Array.from(solution);
}

module.exports = sumPairs;
