let deck = [
    // SEASON 
    { id: "cardId_1", element: "wood", category: "season", name: "spring" },
    { id: "cardId_2", element: "fire", category: "season", name: "summer" },
    { id: "cardId_3", element: "earth", category: "season", name: "late Summer" },
    { id: "cardId_4", element: "metal", category: "season", name: "autumn" },
    { id: "cardId_5", element: "water", category: "season", name: "winter" },
    // TASTE 
    { id: "cardId_6", element: "wood", category: "taste", name: "sour" },
    { id: "cardId_7", element: "fire", category: "taste", name: "bitter" },
    { id: "cardId_8", element: "earth", category: "taste", name: "sweet" },
    { id: "cardId_9", element: "metal", category: "taste", name: "spicy" },
    { id: "cardId_10", element: "water", category: "taste", name: "salty" },
    // EMOTION 
    { id: "cardId_11", element: "wood", category: "emotion", name: "anger" },
    { id: "cardId_12", element: "fire", category: "emotion", name: "joy" },
    { id: "cardId_13", element: "earth", category: "emotion", name: "worry" },
    { id: "cardId_14", element: "metal", category: "emotion", name: "grief" },
    { id: "cardId_15", element: "water", category: "emotion", name: "fear" },
    // SPIRIT 
    { id: "cardId_16", element: "wood", category: "spirit", name: "hun" },
    { id: "cardId_17", element: "fire", category: "spirit", name: "shen" },
    { id: "cardId_18", element: "earth", category: "spirit", name: "yi" },
    { id: "cardId_19", element: "metal", category: "spirit", name: "po" },
    { id: "cardId_20", element: "water", category: "spirit", name: "zhi" },
    // QUALITY 
    { id: "cardId_21", element: "wood", category: "quality", name: "friendliness" },
    { id: "cardId_22", element: "fire", category: "quality", name: "passion" },
    { id: "cardId_23", element: "earth", category: "quality", name: "clear thinking" },
    { id: "cardId_24", element: "metal", category: "quality", name: "courage" },
    { id: "cardId_25", element: "water", category: "quality", name: "inner wisdom" },
    // TIME 
    { id: "cardId_26", element: "wood", category: "time", name: "early night" },
    { id: "cardId_27", element: "fire", category: "time", name: "noon & sunset" },
    { id: "cardId_28", element: "earth", category: "time", name: "morning" },
    { id: "cardId_29", element: "metal", category: "time", name: "Sunrise" },
    { id: "cardId_30", element: "water", category: "time", name: "Afternoon" },
    // YIN MERIDIAN 
    { id: "cardId_31", element: "wood", category: "yin", name: "liver" },
    { id: "cardId_32", element: "fire", category: "yin", name: "heart" },
    { id: "cardId_33", element: "earth", category: "yin", name: "spleen" },
    { id: "cardId_34", element: "metal", category: "yin", name: "lungs" },
    { id: "cardId_35", element: "water", category: "yin", name: "kidneys" },
    // YANG MERIDIAN 
    { id: "cardId_36", element: "wood", category: "yang", name: "gallbladder" },
    { id: "cardId_37", element: "fire", category: "yang", name: "small intestine & tripple burner" },
    { id: "cardId_38", element: "earth", category: "yang", name: "stomach" },
    { id: "cardId_39", element: "metal", category: "yang", name: "large intestine" },
    { id: "cardId_40", element: "water", category: "yang", name: "bladder" },
    // GUARDIAN 
    { id: "cardId_41", element: "wood", category: "guardian", name: "azure dragon of the east" },
    { id: "cardId_42", element: "fire", category: "guardian", name: "vermillion bird of the south" },
    { id: "cardId_43", element: "earth", category: "guardian", name: "yellow dragon of the center" },
    { id: "cardId_44", element: "metal", category: "guardian", name: "white tiger of the west" },
    { id: "cardId_45", element: "water", category: "guardian", name: "black warrior of the north" },
    // DRAGON 
    { id: "cardId_46", element: "wood", category: "dragon", name: "unbestaendigkeit" },
    { id: "cardId_47", element: "fire", category: "dragon", name: "ego" },
    { id: "cardId_48", element: "earth", category: "dragon", name: "social habits" },
    { id: "cardId_49", element: "metal", category: "dragon", name: "rituals" },
    { id: "cardId_50", element: "water", category: "dragon", name: "naturbeduerfnisse" },
    // ENERGY 
    { id: "cardId_51", element: "wood", category: "energy", name: "rising & expanding" },
    { id: "cardId_52", element: "fire", category: "energy", name: "upwards & flourishing" },
    { id: "cardId_53", element: "earth", category: "energy", name: "centering & stabilising" },
    { id: "cardId_54", element: "metal", category: "energy", name: "inwards & contracting" },
    { id: "cardId_55", element: "water", category: "energy", name: "down & conserving" },
    // ANIMAL 
    { id: "cardId_56", element: "wood", category: "animal", name: "dragon" },
    { id: "cardId_57", element: "fire", category: "animal", name: "crane" },
    { id: "cardId_58", element: "earth", category: "animal", name: "tiger" },
    { id: "cardId_59", element: "metal", category: "animal", name: "snake" },
    { id: "cardId_60", element: "water", category: "animal", name: "turtle" },
    // SPECIAL CARDS
    { id: "cardId_100", category: "rule", name: "regulate"},
    { id: "cardId_101", category: "rule", name: "counteract"},
    { id: "cardId_102", category: "rule", name: "generate"},
    { id: "cardId_103", category: "rule", name: "drain"},
];

let playersHand = [];
let currentTopCard;
let currentElementCycle = "";

/***
 * This function is starting the game. 
 */
function startGame() {
    showBoard();
    shuffleDeck();
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

/***
 * Shuffle the deck randomly
 */
function shuffleDeck() {
    for(let i = deck.length - 1; i > 0; i--) {
        let newIndex = Math.floor(Math.random() * (i+1));
        let oldValue = deck[newIndex];
        deck[newIndex] = deck[i];
        deck[i] = oldValue;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let btnStartGame = document.getElementById("btnStartGame");
    btnStartGame.addEventListener("click", startGame);
});