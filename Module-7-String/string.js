// let firstName = "Tushar";
// let middleName = "Singh";
// let lastName = "Senger";

// let fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName)
// let fullName2 = `${firstName} ${middleName} ${lastName}`
// console.log(fullName2)

// console.log(`My name is ${fullName}`)

// let a = 10;
// let b = 20;
// let c = 30;
// let strhh = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`
// console.log(strhh)

// let gamma = `str = ${2+3+5+8-9}`
// console.log(gamma)


// let str = new String("Tushar") // constructor way
// console.log(str)

// let str = "google developer group";
// let str2 = "GDG\nMGMCOET" ;//10
// let str3 = "Hello \\n Bhai";
// console.log(str, str.length)
// console.log(str2, str2.length)
// console.log(str3, str3.length)

// let stry = "hello world"

// console.log(stry[1])
// console.log(stry[5])
// console.log(stry[7])

// str[7] = "u"; //  immutable
// console.log(str) ;

// let str2 = "";
// for(let ch of str){
//     str2 = str + ch + " "; // print h e l l o   w o r l d
// }
// console.log(str2)

// for(let key in str){
//     console.log(key) // print index 0 1 2 3 4 5 6 7 8 9
// }


// methods
// let str = "Hello   "
// let upperCaseStr = str.toUpperCase();
// let lowerCaseStr = str.toLowerCase();
// let trimmedStr = str.trim();
// console.log(str, upperCaseStr, lowerCaseStr);
// console.log(str+ "tushar");
// console.log(trimmedStr + "tushar");

// let firstName = "Tushar"
// let middleName = "Singh"
// let lastName = "Senger"
// let fullName = firstName + middleName + lastName
// let fullName2 = firstName.concat(middleName, lastName)
// console.log(firstName)
// console.log(fullName)
// console.log(fullName2)


let str = "I am a boy, and i am a boy"
let check = str.includes("bts");
console.log(check)
console.log(str.indexOf("z"))
console.log(str.charAt(2))

console.log(str.replace("boy", "girl"))
console.log(str.replaceAll("boy", "girl"))

// let username = "@gdg_mgmcoet"

// console.log(username.slice(-8,11))
// console.log(username.substring(-8,11))

// let str = "alpha beta gamma"
// console.log(str.split(" "))


// let str = "i am a boy"
// str = str.replace("boy", "girl")
// console.log(str)


// question1
// let fullName = prompt("Enter your full name");

// let username =  `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
// console.log(username)

// question 2

// let str = prompt("Enter any string");
// let ch = prompt("Enter any character");

// let count=0;
// for (let val of str) {
//     if (val.toLowerCase() === ch.toLowerCase()) {
//         count++;
//     }
// }
// for (let index in str) {
//     if (str[index].toLowerCase() === ch.toLowerCase()) {
//         console.log("occurence position = ", index)
//         count++;
//     }
// }
// console.log("Count =", count)

// question 3

// let str = "hello i am a boy alsdjf ldsjflds f"
// console.log(str.split(" ").length)