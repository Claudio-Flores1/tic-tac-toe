const gridNumb = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
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
            , checkWinner(playerX)
            , isDraw()
            , document.getElementById(id).disabled = true
            , isPlayerX = false
        )
        : (
            document.getElementById(id).value = player0
            , checkWinner(player0)
            , isDraw()
            , document.getElementById(id).disabled = true
            , isPlayerX = true
        )

}

function checkWinner(player) {
    if (winnerFound(player)) {
        displayWinnerAndDisableGrid(player)
    }
}

function winnerFound(player) {
    const gridArray = getCurrentGrid()
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return gridArray[index] === player
        })
    })
}

function displayWinnerAndDisableGrid(winner) {
    document.getElementById('print')
        .innerHTML = "Player " + winner + " won";
    gridNumb.forEach(ele => {
        document.getElementById(ele).disabled = true;
    })
    window.alert('Player ' + winner + ' won');
}

function isDraw() {
    const gridArray = getCurrentGrid()
    if (!gridArray.includes("")) {
        document.getElementById('print')
            .innerHTML = "Draw!";
        gridNumb.forEach(ele => {
            document.getElementById(ele).disabled = true;
        })
        window.alert('Draw!');
    }
}

function getCurrentGrid() {
    const gridArray = new Array()
    gridNumb.forEach(ele => {
        gridArray.push(document.getElementById(ele).value);
    })
    return gridArray
}

function gameReset() {
    location.reload();
    gridNumb.forEach(ele => {
        document.getElementById(ele).valued = '';
    })
}
