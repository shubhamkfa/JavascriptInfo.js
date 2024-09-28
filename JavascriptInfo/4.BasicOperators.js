/* Terms: “unary”, “binary”, “operand”
Before we move on, let’s grasp some common terminology.

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
*/


// let x = 1
// x = -x
// console.log(x);//-1


// let y = 3, z = 1
// console.log(y - x); //4


/*
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.
*/

/*
Remainder %
The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance:
*/

// console.log( 5 % 2 ); // 1
// console.log( 8 % 3 ); //2
// console.log( 8 % 4 ); //0


/* Exponentiation **
The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as ab.

For instance:
*/

// console.log( 2 ** 2 ); // 2² = 4
// console.log( 2 ** 3 ); // 2³ = 8
// console.log( 2 ** 4 ); // 2⁴ = 16

/*
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½:
*/

// console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


//*************String Concatinations */
/* binary+
Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:

*/


// console.log(typeof ( '1' + 2 )); // "12"
// console.log(typeof( 2 + '1') ); // "21"



// console.log( 6 - '2' ); // 4, converts '2' to a number
// console.log( '6' / '2' ); // 3, converts both operands to numbers

/* Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
*/


//*************Important - Unary******* + */

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
console.log(Number(apples) + Number(oranges));


/* Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment ++ increases a variable by 1:


*Note*
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
*/

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3


let counter2 = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter2 ); // 1
