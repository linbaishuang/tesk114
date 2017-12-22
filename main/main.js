// Write your cade below:
module.exports = function main(wordA, wordB) {
    var reA = checkA(wordA, wordB);
    var reB = checkB(wordA, wordB);
    return reA + reB;
};

function checkA(woA,woB) {
    var count1 = 0;
    for(var i=0;i<woA.length;i++){
        for(var j=0;j<woB.length;j++){
            if(i === j && woA[i] === woB[j]){
                count1++;
            }
        }
    }
    return count1 + "A";
}

function checkB(woA,woB) {
    var count2 = 0;
    for(var i=0;i<woA.length;i++){
        for(var j=0;j<woB.length;j++){
            if(i !== j && woA[i] === woB[j]){
                count2++;
            }
        }
    }
    return count2 + "B";
}

