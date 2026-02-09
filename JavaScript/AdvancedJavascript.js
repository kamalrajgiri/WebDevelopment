console.log("Advanced Javascript ")

async function sleep (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
resolve(45)

        },1000);
    })
}

//Using IIFE to call async function
// (async function main(){
//    let a = await sleep();
//    let b = await sleep();
// console.log(a); 
// console.log(b);33
// })()

function sum (a,b,c){
    return a+b+c;
}

//Destructuring
(async function main(){
//    let [x,y,...rest] = [1,5,7,8 ,9,10]
//    console.log(x,y,rest)
let obj = {
    a:1,
    b:2,
    c:3
}
let {a,b} = obj
console.log(a,b)

//Spread Operator
let arr= [1,4,6]
// console.log(sum(arr[0],arr[1],arr[2]))
// console.log(arr[0]+arr[1]+arr[2])
console.log(sum(...arr))
})()

const wakeUP = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I am awake now")
        }, 1000);
    })
}
const wakeUPNow = async (a,b,c)=>{
    let msg = await wakeUP();
    console.log(msg);
return a+b+c;
}

(async function main(){
    let res = await wakeUPNow(1,2,3);
    console.log(res);
})()