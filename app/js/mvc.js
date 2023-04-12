// view

const view = {
   messageArea: document.querySelector('#messageArea'),

   displayMessage (msg){
      messageArea.innerHTML = msg;
   },
   displayHit (location){
      let cell = document.getElementById(location);
      cell.classList.add('hit');
   },
   displayMiss (location){
      let cell = document.getElementById(location);
      cell.classList.add('miss')
   },
};

// model

const model = {
   boardSize: 7,
   numShips: 3,
   shipLenght: 3,
   shipsSunk: 0,
   ships: [
      {location: ['10', '20', '30'], hits: ['', '', '']},
      {location: ['32', '33', '34'], hits: ['', '', '']},
      {location: ['63', '64', '65'], hits: ['', '', '']},
   ],
   fire (guess){
      for (let i = 0; i < this.numShips; i++){
         let ship = this.ships[i].location.indexOf(guess);

         if (index){
            ship.hits[index] = 'hit';
            return true;
         }
      }

      return false;
   },
}