let greeting = "Hello Butthead!"

console.log(greeting);

/** 
 * kommentar
 * over
 * flere
 * linjer
 */

//tall variabler

let a = 10
let b = 32
let c = a + b
console.log(c)

//egendefinert variabel

let william = { 
    name: "William White",
    hp: 100,
    age: 32,
    alive: true,
}

console.log(william)

console.log(william.name)




// let gameRunning = false
// while (gameRunning)


// render game state
// read user input
// update game state with user input
// make AI move 



// game loop

// let repetitionCount = 0

// while (repetitioncount < 10)
// {
 //   console.log(repetitioncount)
 //   repetitionCount = repetitionCount + 1
// }

// hp redution

while (william.hp > 0)

{
let random = Math.random ()
if (random < 0.5) {
    console.log("player taking damage")
    william.hp = william.hp - 1
}

if (william.hp <= 0) {
    console.log("william er dau")
}
else
    console.log("william lever")
}


/** Under er et eksempel på hvordan kode hvordan variabler varierer ut ifra andre verdier.
 *   
 * En lternativ måte å kode dette på er: let isGameOver = william.alive ? "this is true" : "this is false"
*/

let isGameOver = false



if (william.alive)


{
    console.log("han lever!")
    isGameOver = false
}

else

{ 
    console.log("han er dau!")
    isGameOver = true
}






console.log(william.hp)
