//    For Loop:
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1); // This will print numbers 0 through 4
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
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value); // This will print numbers 1 through 5
}
for (var i_2 = 0; i_2 < 5; i_2++) {
    console.log(i_2);
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
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
    var name_1 = names_1[_a];
    console.log(name_1);
}
var person = {
    name: 'Sultan',
    age: 25,
    city: 'Riyadh'
};
for (var property in person) {
    console.log("".concat(property, ": ").concat(person[property]));
}
var num1 = 0, num2 = 1, nextTerm;
console.log('Fibonacci Series:');
console.log(num1); // print 0
console.log(num2); // print 1
for (var i_3 = 3; i_3 <= 10; i_3++) {
    nextTerm = num1 + num2;
    console.log(nextTerm);
    // update values of num1 and num2
    num1 = num2;
    num2 = nextTerm;
}
