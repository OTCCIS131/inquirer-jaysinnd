const inquirer = require('inquirer')
const chalk = require('chalk')

console.log('My Below Average Pizza Company')

let questions = [
    {
        name:'size',
        message:'What size pizza do you want?',
        default:'medium',
        
    },
    {
        name:'Toppings',
        message:'What toppings do you desire?',
        default:'Extra Cheddar!',
    },
    {
        name:'Extras',
        message:'Would you like anything else?',
        default:'Breadsticks',
    },

]
inquirer.prompt(questions).then(function ({size, Toppings, Extras}) {

    console.log(chalk.yellow("Your Order: " + "\n" + size + "Pizza" + "\n" + "with " + Toppings + "\n" + "Plus " + Extras))
    inquirer.prompt([{
        name:'Order',
        message:'is this correct?',
        type: 'confirm',
    }]).then(function({Order}))
});