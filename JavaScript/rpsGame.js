let rpsOptions = ['Rock', 'Paper', 'Scissors'];
let playerOne = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
let playerTwo = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

let result = `Player One: ${playerOne}, Player Two: ${playerTwo}`;

function rps(){
  if(playerOne === playerTwo) {
    console.log(result)
    console.log("It's a tie!");
  } 
  
  else if(playerOne[0] && playerTwo[2]){
    console.log(result)
    console.log("Player One Won!");
  } 

  else if(playerOne[1] && playerTwo[0]){
    console.log(result)
    console.log("Player One Won!");
  }

  else if(playerOne[2] && playerTwo[1]){
    console.log(result)
    console.log("Player One Won!");
  }
  else {
    console.log(result)
    console.log("Player Two Won!");
  }
}

rps();
