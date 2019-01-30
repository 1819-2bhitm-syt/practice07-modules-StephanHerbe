const secret = 'abcdfg';
const text = 'Syt ist super!';

console.log("Text wird verschlüsselt...");


const verschluesseln = require("./encrypt.js");

const speicher = verschluesseln(secret,text);

console.log(speicher);

console.log("");
console.log("Text wird entschlüsselt...");

const entschluesseln = require("./decrypt.js");

const speicher2 = entschluesseln(secret,speicher);


console.log(speicher2);