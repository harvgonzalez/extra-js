// create a function move that receives 2 arrays as arguments and removes the last element of the first and adds it to the second.
// i.e: arr1 = [1, 2, 3] arr2 = [4, 5]
// move(arr1, arr2).
// arr1 = [1, 2]
// arr2 = [4, 5, 3]

function move(arr1, arr2) {
    arr2.push(arr1[arr1.length -1])
    arr1.pop()

    console.log("arr1 = " + arr1);
    console.log("arr2 = " + arr2);

}


move([1, 2, 3], [4, 5]);