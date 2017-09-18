const inquirer = require('inquirer')
const chalk = require('chalk')

console.log('My Below Average Pizza Company')

let questions = [
    {
        name:'size',
        message:'What size pizza do you want?',
        default:'medium',
        message:'what toppings would you like?'
    }
    {
        name: //start over the same way here.
    }
]
inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
});