function intersection(a, b) {
let aSorted = a.sort((a, b)=>a-b);
let bSorted = b.sort((a, b)=>a-b);
if(a.length == 0 || b.length == 0) return [];
let result = [];
for(let i = 0; i<aSorted.length;i++){
    if(bSorted.indexOf(aSorted[i]) !== -1 && result.indexOf(aSorted[i]) == -1 ){
        
        result.push(aSorted[i]);
    }
}
let set = new Set(result);
let finalResult = [...set];

return finalResult;

}

module.exports = intersection;
