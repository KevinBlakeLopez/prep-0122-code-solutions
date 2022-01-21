const person = {
  firstName: 'Emil',
  lastName: 'Nolde',
  hobby: 'smoking pipe tobacco'
};
console.log(person);

const fullName = person.firstName + person.lastName;

console.log(`The person's name is: ${fullName}.`);
person.job = 'painter';
console.log(`The person's current job is: ${person.job}.`);
person.previousJob = 'furniture factory worker';
console.log(`The person's previous job was: ${person.previousJob}.`);
console.log(person);
