// Create a Business Name Generator by combining list of  adjectives , shopname and  another word to create unique business names.

// Adjectives:
// Crazy
// Amazing
// Fire 

// Shopname :
// Engine
// Foods
// Garments

// Another word:
// Bros
// Limited
// Hub


let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let shopnames = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let anotherwords = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}
function random(obj) {
    let keys = Object.keys(obj)
    let randomIndex = Math.floor(Math.random() * keys.length)
    let randomKey = keys[randomIndex]
    return obj[randomKey]
}

let businessNames = random(adjectives) + " " + random(shopnames) + " " + random(anotherwords)
console.log("Business Name: " + businessNames)