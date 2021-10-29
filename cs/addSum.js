// const array = [1, -1, 0];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// if (sum == 0){
//     console.log("True")
// }else {
//     console.log("False")
// }
// console.log(sum);

// Below is the correct code that you wanted. The code above is the one I thought was what you guys wanted.


function toZero(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            sum = arr[i]+arr[j]
        } 
        if(sum === 0){
            return true;}
        }
            return false;
        }

