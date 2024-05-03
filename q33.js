"use strict";
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ordinalSuffix = ["st", "nd", "rd", "th"];
for (let i = 0; i < n.length; i++)
    for (let j = 0; j < ordinalSuffix.length; j++) {
        console.log(n[i] + ordinalSuffix[j]);
    }
// {
// n.forEach(num => {
//if(num==1){
// console.log(num + ordinalSuffix[0] );
// }
// else if(num==2){
// console.log(num + ordinalSuffix[1]);
// }
// else if(num==3){
// console.log(num + ordinalSuffix[2]);
// }
// else{
// console.log(num + ordinalSuffix[3]);
// }
// })
// }
