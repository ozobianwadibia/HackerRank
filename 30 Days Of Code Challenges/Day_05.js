// checking out loops

function printMultiples(n) {
    for (let i = 1; i <= 10; i++)  {
        // console.log(`${n} x ${i} = ${n*i}`);
        process.stdout.write((`${n} x ${i} = ${n*i}` + '\n'));
    }
   console.log('');
}

printMultiples(5);
printMultiples(7);
printMultiples(10);
printMultiples(2);
printMultiples(8);