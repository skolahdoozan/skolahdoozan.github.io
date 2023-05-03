function printHello()
{
    document.getElementById('printHello').innerHTML = 'Hello There!';
}

printHello();

function addition(a, b)
{
    var s = a + b;
    return s;
}

var sum = addition(3, 5);
document.getElementById('addition').innerHTML = '3 + 5 = <b>' + sum + '</b>';

let longDecimalValue = 2313.327851394;
let roundedDown = Math.floor(longDecimalValue);
let roundedUp = Math.ceil(longDecimalValue);

document.getElementById('rounded').innerHTML = longDecimalValue + ' rounded up using .ceil(): <b>' 
+ roundedUp +'</b> <br>' + longDecimalValue + 'rounded down using .floor(): <b>' + roundedDown +
 '</b>'

 var fruits = ['apple', 'orange', 'banana', 'cherry', 'strawberry', 'mango'];
 var output = '[';
for (var i =0; i <fruits.length; i++)
{
    if (i != fruits.length - 1)
        output += fruits[i] + ', ';
    else
        output += fruits[i] + ']';
}

document.getElementById('arrayContents1').innerHTML = output;

var numbers = [];
var count = 5 + Math.floor(Math.random() * 11);
for (var i = 0; i <= count; i++)
{
    numbers.push(Math.floor(Math.random() * 100));
}

output = '[';

// for (var i=0; i < numbers.length; i++)
// {
//     if (i != numbers.length -1)
//         output += numbers[i] + ', ';
//     else
//         output += numbers[i] + ']';
// }

numbers.forEach((number, index) => {
    if (index != numbers.length -1)
        output += numbers[index] + ', ';
    else
        output += numbers[index] + ']';
} );
document.getElementById('arrayContents2').innerHTML = output;


// function timesThree (value)
// {
//     return value * 3;
// }

var timesThree = numbers.map(function(number){
    return number * 3;
})

output = '[';

timesThree.forEach((number, index) => {
    if (index != timesThree.length -1)
        output += number + ', ';
    else
        output += number + ']';
} );

document.getElementById('arrayContents3').innerHTML = output;

var sorted = numbers.sort(function sortFunction (a, b){
    return b - a;
});

output = '[';

sorted.forEach((number, index) => {
    if (index != sorted.length -1)
        output += number + ', ';
    else
        output += number + ']';
} );

document.getElementById('arrayContents4').innerHTML = output;

var sorted = numbers.sort(function sortFunction (a, b){
    return a-b;
});

output = '[';

sorted.forEach((number, index) => {
    if (index != sorted.length -1)
        output += number + ', ';
    else
        output += number + ']';
} );

document.getElementById('arrayContents5').innerHTML = output;

var sliced = sorted.slice(0, 4);

output = '[';

sliced.forEach((number, index) => {
    if (index != sliced.length -1)
        output += number + ', ';
    else
        output += number + ']';
} );

document.getElementById('arrayContents6').innerHTML = output;
