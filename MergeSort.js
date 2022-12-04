function mergeSort(array){
    if (array.length == 1) {
        return array;
    }
    else{
        let leftArray = array.slice(0,array.length/2)
        let rightArray = array.slice(array.length/2);
        // mergeSort(leftArray);
        // mergeSort(rightArray);
        // let mergedArray = merge(leftArray,rightArray);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
       
    }
    
   
}

function merge(list1 , list2){
    let i = 0;
    let j = 0;
    let k = 0;
    let c = [];
    let m = list1.length;
    let n = list2.length;
    while (m > i && n > j) {
        if(list1[i] < list2[j]){
            c[k] = list1[i];
            k++;
            i++;
        }
        else{
            c[k] = list2[j]
            k++;
            j++;
        }
    }
    for (i;i<=m;i++){
        c[k] = list1[i];
        k++;
    }
    for (j;j<=n;j++){
        c[k] = list2[j];
        k++;
    }
    return c;
}

let array = [1,2,4,9,13,15];
let array2 = [3,7,8,11,12];
let arrayToBeSorted = [13,4,6,11,9,10];
console.log(mergeSort(arrayToBeSorted));
// console.log(merge(array, array2));