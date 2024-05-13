const inquirer = require('inquirer');


async function main() {
  const { num1, num2, operation } = await inquirer.prompt([
    {
      name: 'num1',
      message: 'Enter the first number:',
      type: 'number'
    },
    {
      name: 'num2',
      message: 'Enter the second number:',
      type: 'number'
    },
    {
      name: 'operation',
      message: 'Select operation:',
      type: 'list',
      choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
  ]);

  let result: number;
  switch (operation) {
    case 'Add':
      result = num1 + num2;
      break;
    case 'Subtract':
      result = num1 - num2;
      break;
    case 'Multiply':
      result = num1 * num2;
      break;
    case 'Divide':
      result = num1 / num2;
      break;
    default:
      result = NaN;
  }

  console.log(`Result: ${result}`);
}

main();
