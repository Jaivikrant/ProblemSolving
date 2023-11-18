const num = [54,34,57,36,86,74,43,64,69,4534,53,2,3,5];
function selectionSort(array){
    const len = array.length;
    for(let i = 0; i<len; i++){
        let min = i;
        let temp = array[i]
        for(let j=i+1; j<len; j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
}
selectionSort(num);
console.log(num);
