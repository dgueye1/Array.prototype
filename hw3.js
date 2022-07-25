//This is the test case
const arr = [1,2,3,4,5,6];

//map
Array.prototype.ourMap = function(cb) {
    const ourMapArr = [];
    for(let i = 0; i < this.length; i++){
        cb(ourMapArr.push(this[i]), i, this)
    }
}

//This is for map feel free to test
//arr.map((e, i, arr)=> {console.log(e, i, arr);});
//arr.ourMap((e, i, arr)=> {console.log(e, i, arr);});

//filter
Array.prototype.ourFilter = function(cb) {
    const ourFilterArr = [];
    for(let i = 0; i < this.length; i++){
        const verify = cb(this[i], i, this);
        if(verify){
            ourFilterArr.push(this[i]);
        }
    }
    return ourFilterArr;
}

//This is for filter feel free to test
//console.log(arr.filter(e => e % 2 === 0));
//console.log(arr.ourFilter(e => e % 2 === 0));


//reduce
Array.prototype.ourReduce = function(cb) {
    let addition = initialValue === undefined ? 0 : initialValue;
    for(let i = 0; i < this.length; i++){
        addition = cb(addition,this[i], i, this);
    }
    return addition;
}

//This is for reduce feel free to test
//const initialValue = 0;

//console.log(arr.reduce((previousValue, currentValue) => 
//previousValue + currentValue, initialValue));

//console.log(arr.ourReduce((previousValue, currentValue) => 
//previousValue + currentValue, initialValue));