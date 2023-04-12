'use strict';
// O(log2N) 
// O - общее время выполнения
// N - количество иттераций

const array = [];
for (let i = 0; i < 16; i++){
   array.push(i);
}
let count = 0;


const binary = (array, item) => {
   let start = 0;
   let end   = array.length;
   let middle;
   let found = false;
   let position = -1;

   while (found === false && start <= end){
      count++
      middle = Math.floor((start + end) / 2);

      if (array[middle] === item){
         found = true;
         position = middle;
         return position;
      }
      if (item < array[middle]){
         end = middle - 1;
      } else {
         start = middle + 1;
      }
   }

   return position;
}

console.log(binary(array, 9), count);