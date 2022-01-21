function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

const convertHoursToMinutes = hours => hours * 60;

console.log(convertHoursToMinutes(2));

const getGreeting = name => `Hello ${name}!`;
console.log(getGreeting('World'));

const addAndMultiplyBy5 = (num1, num2) => (num1 + num2) * 5;
console.log(addAndMultiplyBy5(10, 5));

const multiplyAndDivideBy5 = (num1, num2) => (num1 * num2) / 5;
console.log(multiplyAndDivideBy5(35, 10));

const subtractTwoNumbers = (num1, num2) => num1 - num2;
console.log(subtractTwoNumbers(22, 7));

const getCircleCircumference = radius => Math.PI * radius * 2;
console.log(getCircleCircumference(5));

const getFullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(getFullName('Connor', 'MacCleod'));

const cube = number => Math.pow(number, 3);
console.log(cube(25));
