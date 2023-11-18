const num = [54,34,57,36,86,74,43,64,69,4,53,2,3,5];
function bubblesort(array){
    const l = array.length;
    for(let i =0; i<l; i++){
        for(let j = 0; j<l; j++){
            if(array[j]>array[j+1]){

                //swaping them
                let temp =array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }

    }
}
bubblesort(num)
console.log(num);
