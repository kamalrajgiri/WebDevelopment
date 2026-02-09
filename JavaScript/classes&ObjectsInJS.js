console.log("Classes and Objects - Object Oriented Programmin in Javascript")

// let obj = {
//     a: 1, 
//     b: "Aagyat"
// }
// console.log(obj)


// let animal = {
//     eats : true
// };
// let rabbit ={
//     jumps : true
// };
// rabbit._proto_ = animal; // sets rabbit.[[prototype]] = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("Khannaxa")
    }
    jumps(){
        console.log("Dauddaxa")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name) //super is used for accessing data of super class
        // this.name = name
        console.log("Object is created and he is a lion ...")
    }
    eats(){
        super.eats()
        console.log("Sikar Khannaxa")//method overriding
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(l)


//getter and setter

class User{
    constructor(name){
        this.name = name
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length <4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John")
console.log(user.name); // John

user = new User(""); //name is too short
user.name = "Aagyat"
console.log(user.name)
console.log(user)