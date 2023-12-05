/***
 * This function is starting the game. 
 */
function startGame() {
    showBoard();
}

/***
 * This function will show the board and hide the landing page
 */
function showBoard() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

/***
 * This function will show the landing page and hide the board
 */
function showLandingPage() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    let btnStartGame = document.getElementById("btnStartGame");
    btnStartGame.addEventListener("click", startGame);
});