//    For Loop:

for (let i = 0; i < 5; i++) {
  console.log(i); // This will print numbers 0 through 4
}


//   While Loop:

var i = 0;
while (i < 5) {
  console.log(i); // This will print numbers 0 through 4
  i++;
}


//     Do-While Loop



var i = 0;
do {
  console.log(i); // This will print numbers 0 through 4
  i++;
} while (i < 5);



//    For-of Loop


var array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value); // This will print numbers 1 through 5
}




for (let i = 0; i < 5; i++) {
  console.log(i);
}




var i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}





var i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}





var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);





var i = 5;

do {
  console.log(i);
  i--;
} while (i >= 1);





var i = 5;

do {
  console.log(i);
  i--;
} while (i >= 1);
















var names = ['Ahmed', 'Sara', 'Ali', 'Fatima'];

for (let name of names) {
  console.log(name);
}




var person = {
    name: 'Sultan',
    age: 25,
    city: 'Riyadh'
  };
  
  for (let property in person) {
    console.log(`${property}: ${person[property]}`);
  }





  var num1 = 0, num2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(num1); // print 0
console.log(num2); // print 1

for (let i = 3; i <= 10; i++) {
    nextTerm = num1 + num2;
    console.log(nextTerm);

    // update values of num1 and num2
    num1 = num2;
    num2 = nextTerm;
}










