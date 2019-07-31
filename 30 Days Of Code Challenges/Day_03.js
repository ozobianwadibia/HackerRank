// manipulating conditional statements

function conditionalsWithOperators(n) {
  if (n % 2 != 0) {
    console.log("Weird");
  } else if ((n % 2 == 0) && (n < 5)) {
    console.log("Not Weird");
  } else if ((n % 2 == 0) && (n >= 6) && (n <= 20)) {
    console.log("Weird");
  } else if ((n % 2 == 0) && (n > 20)) {
    console.log("Not Weird");
  }
}

conditionalsWithOperators(13);
conditionalsWithOperators(2);
conditionalsWithOperators(22);
conditionalsWithOperators(18);

