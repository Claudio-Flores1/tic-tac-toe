const gridNumb = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
const playerX = "X";
const player0 = "0";
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
let isPlayerX = new Boolean(true); 

  function playerTurnCheck(id) {

      isPlayerX
      ? (
          document.getElementById(id).value = playerX
          ,checkWinner(playerX)
          ,isDraw()
          ,document.getElementById(id).disabled = true
          ,isPlayerX=false
          )
      : (  
          document.getElementById(id).value = player0
          ,checkWinner(player0)
          ,isDraw()
          ,document.getElementById(id).disabled = true
          ,isPlayerX = true
          )
  
  }

function checkWinner(player){
    if(winnerFound(player)){
        displayWinnerAndDisableGrid(player)
    }
}

function winnerFound(player) {
    const gridArray = new Array()
    gridNumb.forEach(ele =>{
        gridArray.push(document.getElementById(ele).value);
     })

    return WINNING_COMBINATIONS.some(combination =>{
        return combination.every(index => {
          return  gridArray[index] === player
        })
     })
}

function displayWinnerAndDisableGrid(winner) {
    document.getElementById('print')
    .innerHTML = "Player "+ winner + " won";
    gridNumb.forEach(ele =>{
        document.getElementById(ele).disabled = true;
     })
     window.alert('Player ' + winner + ' won');
}

function isDraw() {
    const gridArray = new Array()
    gridNumb.forEach(ele =>{
        gridArray.push(document.getElementById(ele).value);
     })

    if(!gridArray.includes("")){
        document.getElementById('print')
        .innerHTML = "Draw!";
        gridNumb.forEach(ele =>{
            document.getElementById(ele).disabled = true;
         })
         window.alert('Draw!');
    }
  }

 
// Function to reset game
function gameReset() {
    location.reload();
    gridNumb.forEach(ele =>{
        document.getElementById(ele).valued = '';
     })
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0

 




// const board = document.getElementsByClassName("grid")
// const restartGame = document.getElementsByClassName("bttn")
// const clearGame = document.getElementsByClassName("bttn2")
// const currentPlayerEle = document.querySelector("#current-player");
// const cross = "X"
// const oh = "O"
// let currentPlayer = ""
// turn = 0
// let grids = ['', '', '', '', '', '', '', '', '',];

// console.log(board);

// for ( const grid of board){
//     grid.addEventListener("click", updateGrid);}

// function updateGrid () {
//        grids[index] = currentPlayer
//        grids.context = currentPlayer;
//     }


// function gridChange () {
//     if (turn == 1 || turn % 2 !== 0) {
//         player = "X";
//     } else {
//         player = "O";
//     }
// }
//     for (let i = 0; i < tiles.length; i++) {
//         if (
//             e.target.textContent == tiles[i].textContent &&
//             tiles[i].textContent !== "X" &&
//             tiles[i].textContent !== "O"
//         )
// }


















// let board = ['', '', '', '', '', '', '', '', '',];
// let currentPlayer = "X";
// let gameOn = true;
// let active = false;
// const winCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];









// grids.addEventListener("clicked", currentPlayer)
  
// gridBox.addEventListener("click")

// startGame()

// function startGame() {
//     grids.addEventListener("click", gridClicked)
//     restartButton.addEventListener("click", restartGame)
//     //needs status text for whats happening i.e turn 
//     active = true
// }

// function gridClicked() {
//     const gridIndex = this.getAttribute("gridIndex");

//     if (board[gridIndex] != "" || !running) {
//         return;
//     }
//     updateGrid(this, gridIndex);
//     checkWinner()

// }

// function updateCell() {
//     board[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }

// function updateChoice(grid, index)

// function addChoice(e) {
//     if (turn == 1 || turn % 2 != 0) {
//         choice = "X";
//     } else {
//         choice = "O";
//     }
// }


// for (let i = 0; i < board.length; i++) {
//     gridBox[i].addEventListener("click", addChoice);
// }