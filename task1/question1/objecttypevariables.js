/* 
    Question: Create 3 variables of different OBJECT types.
*/


const development = {
    developer: "Oluwayimika Johnson",
    language: "JavaScript"
}


const departments = {
    computerScience : {
        levels : [100, 200, 300, 400, 500]
    },
    medicine : {
        levels : [100, 200, 300, 400, 500, 600, 700]
    }
}


let tasks = [
    {
        id: 1,
        task: "Send assignment to Dumela",
        completed: false
    },

    {
        id: 2,
        task: "Solve the assignment",
        completed: true
    }
]

const ages = [1, 2, 3, 4]

const name = "My name is Johnson"

console.log(typeof ages, typeof name)


// console.log(typeof voters.notEligible.ages)

console.log(typeof departments.computerScience.levels)