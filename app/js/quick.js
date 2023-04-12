const arr1 = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23];
let count1 = 0;


const quickSort = (array) => {
   if (array.length <= 1){
      return array;
   }

   let pivotIndex = Math.floor(array.length / 2);
   let pivot      = array[pivotIndex];
   let less       = [];
   let greater    = [];

   for (let i = 0; i < array.length; i++) {
      count1++;
      if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }     
   }

   return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.time('FirstWay');
quickSort(arr1);
console.timeEnd('FirstWay');

const arr2 = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23];
let count2 = 0;

const sortJS = (arr) => {
   return arr.sort((a, b) => {
      a - b;
      count2++;
   })
}

console.time('FirstWay');
sortJS(arr2);
console.timeEnd('FirstWay');