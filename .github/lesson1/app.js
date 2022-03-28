/**
 * Import and Export
• Create a folder name Lesson1.
• Create 3 JS files (student, app, helper) under the folder.
  Code in the Exports and Imports slide
• Update app.js file and log out all imported objects.
• Create a new JS file package.json. Copy and paste code below
*/
import Student from './student.js';
import { myFun } from './helper.js';
import { MAX_VALUE } from './helper.js';

const student1 = new Student('Simon');
console.log(student1.sayHi());
console.log(student1.sayYourAge());
console.log(myFun());
console.log(MAX_VALUE);


