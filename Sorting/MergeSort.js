const num = [54,34,57,36,86,74,43,0909,64,69,4,53,2,3,5];
function mergeSort(array){
    if(array.length===1){
        return array;
    }

    //splitting the array into two
    let len = array.length;
    let middle = Math.floor(len/2);
    let left = mergeSort(array.slice(0,middle));
    let right = mergeSort(array.slice(middle));
return merge(left,right);
}
function merge(left,right){
    let sorted =[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right];
}
console.log(mergeSort([54,34,57,36,86,74,43,0909,64,69,4,53,2,3,5]));
