'use strict';

function Accumulator (startingValue) {
   this.value = startingValue;

   this.read = function (){
      this.value += +prompt('Plus?', 0);
   }
}

const basic = new Accumulator(4);

basic.read();

console.log(basic.value);