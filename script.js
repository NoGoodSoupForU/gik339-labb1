/*
var a = 3
let b = 4
const c = 5

console.log(a)
console.log(b)
console.log(c)

{
var a = 1
const b = 2
let c = 3 

console.log(a)
console.log(b)
console.log(c)
}
console.log(a)
console.log(b)
console.log(c)
*/
/* 1.*/ 
/*var är en variabel, var kan ändras och är global*/
/*let är en variabel som är global */
/*const är en variabel som inte kan ändras */

/* var är global, den bryr sig inte om block. När en variabel deklareras med var innuti ett block går den att använda även efter blocket. 
let och const är block-scoped. De finns bara inuti det block de deklarerats i. Försöker man använda dom utanför blocket får man att det ej är "defined"
Skillnaden mellan let och const är att en let variabel kan få ett nytt värde medans const måste få ett värde direkt när den deklareras*/ 

/* reflektion: 
före blocket: utskriften blir 3,4,5 alltså de yttre variablerna.
innut i blocket: utskriften blir 1,2,3 använder värderna i blocket. 
efter blocket: utskriften blir 1,4,5 
a är 1 eftersom var i blocket skrev över yttre a 
b och c är 4 och 5 igen eftersom let och const i blocket bara fanns där inne och försvann när blocket tog slut. */ 

const add = (a1, b2) => { 
    return a1 +b2;
};

console.log(add(2,3))

/* 1. reflektion: 
om jag hade använt let istället för const hade funktionen fungerat likadant.
Skillnaden blir att med let kan variabeln få ett nytt värde senare. 
Med const går det inte att råka skriva över på så vis blir det säkrare. 
2. function add(a1,b2) {
return a1 + b2;
}
ungefär samma funktion 
3. Att funktionen returnerar något betyder att den skickar tillbaka ett värde från där det anropades. 
Värdet kan sedan sparas i en variabel eller skrivas ut. 
När funktionen kommer till "return" slutar den köras. 
*/ 