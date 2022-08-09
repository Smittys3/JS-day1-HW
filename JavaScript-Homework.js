//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    for (let i = 0; i < dog_names.length; i++) {
        for(let j = 0; j < dog_string.length; j++) {
            if (dog_string[j].search(dog_names[i]))  {
                console.log(`Matched dog_name. ${dog_names[i]}`) 
            } else {
                console.log("No matches.")
            }
        }
    }
}
//Call method here with parameters
console.log(findWords(dog_names, dog_string));


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//            0        1         2       3       4        5
// I just wanted to see if I could do it another way outside of splice()
arr[0] = "even index";
arr[2] = "even index";
arr[4] = "even index";
console.log(arr)

// Using the splice() below
// For Loop Syntax -- for keyword(variable; condition ; incrementation/decrementation)
// syntax: if ( condition ) { code block }

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 'even index')
        }
    }
    return arr
} 
console.log(replaceEvens(arr));


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//========CODE WARS================
//     Remove String Spaces
// Instrcutions: Simple, remove the spaces from the string, then return the resultant string.
//=======Problem #1===========
function noSpace(x){
    return x.split(" ").join("")
  }

//========CODE WARS================
//     Multiply
// Instrcutions: Multiply
//=======Problem #2===========
function multiply(a, b){
    return a * b;
  }

