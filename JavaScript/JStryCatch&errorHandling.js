console.log("Javascript Try Catch and Error Handeling")

let a = prompt("Enter a number") 
let b= prompt ("Enter second number")

// let sum = Number(a) + Number(b)
if (isNaN(a)||isNaN(b))
{
    // console.error("SyntaxError : Sorry this is not allowed")
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)
// console.log ("the sum is",sum)

function main(){
    let x =1;
try {
    console.log ("the sum is",sum *x)
    return true
} catch (error) {
    console.log("Error aaigayo la ")
    return false
}
// finally do not have any effecf in this but when this is in function and function is returning something after retun function do not work further and the message is not seen but if we use finally it shows message
finally{
    console.log("Files are being closed and db connection is being closed")
}}

let k= main();
// try{
//     hey;
// } catch(err){
//     alert(err.name)
//     alert(err.message)
//     alert(err.stack)
// }