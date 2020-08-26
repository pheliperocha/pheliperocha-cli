'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const open = require('open')
const chalkAnimation = require('chalk-animation')

console.log(`\nHello, this is ${chalk.bgBlack.yellow.bold(` Phelipe Rocha `)}!\n`)

inquirer.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'value',
    choices: [
      { name: `🖥️   ${chalk.bold('Github')}`, value: 'https://github.com/pheliperocha' },
      { name: `🌐  ${chalk.bold('Website')}`, value: 'https://pheliperocha.com' },
      { name: `📃  ${chalk.bold('Linkedin')}`, value: 'https://www.linkedin.com/in/pheliperocha/' },
      { name: `📩  ${chalk.bold('E-mail')}`, value: 'mail:phelipeafonso@gmail.com' },
    ]
  }
]).then((answer) => {
  // open(answer.value)
  chalkAnimation.neon(chalk.yellow.bgBlack.bold(`\n ${chalk.underline(answer.value)} \n`), 2)
})