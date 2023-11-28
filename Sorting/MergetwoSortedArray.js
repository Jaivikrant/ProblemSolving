function solution(arr1, arr2) {
    let a = arr1.length;
    let b = arr2.length;

    let arr3 = [];
    let i = 0, j = 0;
    while (i < a && j < b) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i++]);
        }
        else {
            arr3.push(arr2[j++]);
        }
    }
    while (i < a) 
        arr3.push(arr1[i++]);
    
    while (j < b) 
        arr3.push(arr2[j++]);
    

    return arr3;
}
let arr1 = [3, 4, 42, 54, 57, 76, 500],
    arr2 = [34, 50, 52, 70, 88, 96, 646];
console.log(solution(arr1, arr2));
