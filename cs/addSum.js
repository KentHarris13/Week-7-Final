const array = [1, -1];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

if (sum == 0){
    console.log("True")
}else {
    console.log("False")
}
console.log(sum);

