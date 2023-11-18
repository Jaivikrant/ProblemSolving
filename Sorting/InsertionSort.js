const num = [54,34,57,36,86,74,43,0909,64,69,4,53,2,3,5];
function InsertionSort(array){
    const len = array.length;
    for(let i = 0; i< len; i++){
        if(array[i]<array[0]){

            // move number at array[i] to first position

            array.unshift(array.splice(i,1)[0]);
        }else{
            for(let j = 1; j<i; j++){
                if(array[i]>array[j-1] && array[i]<array[j])
                {
                    array.splice(j,0,array.splice(i,1)[0])
                }
            }
        }
    }
}
InsertionSort(num)
console.log(num);
