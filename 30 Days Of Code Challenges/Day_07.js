// reviewing array data structures

function reverseArray(arr) {
    let n = arr.length;
    let newArr = arr.reverse().join(' ');
    // console.log(newArr);
    process.stdout.write(newArr.toString());
    console.log();
}


reverseArray([1,2,3,4]);

reverseArray([20,30,40,50,60,70,80]);

reverseArray([100,90,80,70,60,50]);

reverseArray([6,8,7,9,0,2,-9,41,55]);
