


//I) Input
//O) Output
//C) Constraints
//E) Edge Cases


//objectValues();
var myObject = {};
var myArray = [ ];
function objectValues() {
    for(var key in myObject) {
        return myArray.push(myObject[key]);
    }
} console.log(myArray);


//keysToString();
function keysToString(obj) {
    var str = ' ';
    for (var key in obj){
        
    }
}
//valuesToString();
function valuesToString() {
    
}

//arrayOrObject();
function arrayOrObject(test) {
    if(Array.isArray(test)){
        return 'array';
    }if (typeof test === 'object'){
        return 'object';
    }
}console.log(arrayOrObject([]));

//capitalizeWord();
function capitalizeWord(string){
    return string[0].toUpperCase() + string.slice(1);
}console.log(capitalizeWord('jordan'));

function capitalizeAllWords(string){
    for (var i = 0; i < string.length; i++){
        
    }
    return 
} 