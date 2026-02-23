 // *******************myfilter***********************
Array.prototype.myfilter = function(Callback){
    const result = [];
     for(let i =0;i < this.length;i++)
     {

        if(Callback(this[i])){
        result.push(this[i]);
        }
     }
    return result;    
}
const num = [2,5,4,9,8]
console.log(num.myfilter( n => n >= 5));  // [5,,9,8]

// **********************mymap3**************************
Array.prototype.myMap = function(Callback){
const result = [];
for (let i =0 ;i<this.length; i++){
    result.push(Callback(this[i], i, this));
}

return result;
}    
const num1 = [2,5,4,9,8 ]
console.log(num1.myMap(n => n*3));

//*******************myreduce************************************ */
Array.prototype.myreduce = function (Callback,initialvalue){
    let accumulator = initialvalue ;
    for (let i = 0;i <this.length ; i++){
         accumulator = Callback(accumulator,this[i]);

    }
    return accumulator;

}
 const num2 =[2,5,4,9,8]
console.log(num2.myreduce((acc,cur)=> acc + cur,0));


