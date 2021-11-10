const obj = require('./data.json');

const arr = obj.data.list;


function getObjWithList(arr) {
    let a = { };
    arr.forEach((val,key) => {
    a[key] = val;
    });
    return a;
}

function getArrayOfSeries(arr) {
    let a = [ ];
    arr.forEach((val) => {
        a.push(val.attributes.series);
    });
    return a;
}


// Never use a Impure function, those are functions using global variable
 // cannot add a number to undefined. Both undefiend and number are a different type
// Never ever create global variables

function addSubs(array) {  // using local variables, best practice. Here it is a Pure function.
    let a =0;
    array.forEach((val) => {
        a = a + val.attributes.series.subscription.subscribers;
    });
    return a;
}

console.log(getObjWithList(arr));
console.log(getArrayOfSeries(arr));
console.log("Summation Of Subscribers"+' ' + addSubs(arr));  //