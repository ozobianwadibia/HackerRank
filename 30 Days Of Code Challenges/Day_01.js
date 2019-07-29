// doing something with number, float and string.

function mnanipulateNUmsAndString() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let v = 20;
    let a = 13.3;
    let r = 'what is the meaning of life?';
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    let integerSum = parseInt(i) + parseInt(v);
    console.log(integerSum);
    // Print the sum of the double variables on a new line.
    let doubleSum = parseFloat(d) + parseFloat(a);
    console.log(doubleSum.toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    let newString = s + r;
    console.log(newString);

}  

mnanipulateNUmsAndString();

