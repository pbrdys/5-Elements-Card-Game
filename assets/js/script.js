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
    { id: "cardId_37", element: "fire", category: "yang", name: "small intestine" },
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
];

let specialDeck = [
    // SPECIAL CARDS
    { id: "cardId_100", element: "cycle", category: "cycle", name: "regulate"},
    { id: "cardId_101", element: "cycle", category: "cycle", name: "counteract"},
    { id: "cardId_102", element: "cycle", category: "cycle", name: "generate"},
    { id: "cardId_103", element: "cycle", category: "cycle", name: "drain"}
];

let playersHand = [];
let currentTopCard;
let currentElementCycle;

/***
 * This function is starting the game. 
 */
function startGame() {
    // display the board
    showBoard();
    // set the initial element cycle
    let rndIndex = getRandomIndex(0, 3);
    let specialDeckCard = specialDeck[rndIndex];
    setElementCycle(specialDeckCard);
    // after we set the cycle, we have to remove that card from the specialDeck
    removeElementByIndex(specialDeck, rndIndex);
    // shuffle the remaining special cards into the deck
    deck = mergeArrays(deck, specialDeck);
    // shuffle the entire deck
    shuffleDeck();

    // set the first card as starting point for the game
    let drawnCard = getCard();
    if(drawnCard != null) {
        setCard(drawnCard);
    }

    // initiate players hand with 5 cards
    let playersHandElement = document.getElementById("playersHand");
    playersHandElement.innerHTML = "";
    for(let i = 0; i < 5; i++) {
        draw();
    }
}

/**
 * This function will return a card from the deck.
 * Basically the first one on top
 * So always Index: 0
 */
function getCard() {
    if(deck.length > 0) {
        let drawnCard = deck[0];
        removeElementByIndex(deck, 0);
        return drawnCard;
    } else {
        let deck = document.getElementById("deck");
        deck.innerHTML = "";

        let imgElement = document.createElement("img");
        imgElement.src = "assets/images/no-cards.png";
        imgElement.alt = "no cards";

        deck.appendChild(imgElement);

        return null;
    }
    
}

/**
 * This function is checking if the card the player selected can be placed. 
 * Setting the card depends on the current element cycle. 
 */
function isSetCardAllowed(card) {
    let cycleElementOrder = getElementOrder(currentElementCycle);

    let indexCurrentCard = cycleElementOrder.indexOf(currentTopCard.element);
    let indexCardToPlace = cycleElementOrder.indexOf(card.element);

    if(indexCardToPlace == indexCurrentCard + 1 
        || (indexCardToPlace == 0 && (indexCurrentCard + 1) == cycleElementOrder.length))
        return true;
    else
        return false;
}

function setCardByEvent(e) {
    let cardId = e.currentTarget.id;
    // get card from playersHand by id
    let card = playersHand.find(card => card.id === cardId);
    // check if setCard is allowed - depending on the current element cycle
    let setCardAllowed = isSetCardAllowed(card);
    if(setCardAllowed) {
        // call setCard
        setCard(card);
        // when we set the card, we will have to discard that card from our hand
        discardCard(card);
    }
}

function discardCard(card) {
    var cardToRemove = document.getElementById(card.id);
    
    if (cardToRemove) {
        var parentElement = cardToRemove.parentNode;
        parentElement.removeChild(cardToRemove);
    }
}

function setCard(card) {
    currentTopCard = card;
    let topCardElement = document.getElementById("topCard");
    topCardElement.innerHTML = "";

    /* EXAMPLE: 
        <img src="assets/images/wood.png" alt="top card">
        <p>season</p>
        <p>spring</p>
    */

    let imgElement = document.createElement("img");
    imgElement.src = "assets/images/" + card.element + ".png";
    imgElement.alt = card.element;

    let pElement1 = document.createElement("p");
    pElement1.appendChild(document.createTextNode(card.category));

    let pElement2 = document.createElement("p");
    pElement2.appendChild(document.createTextNode(card.name));

    topCardElement.appendChild(imgElement);
    topCardElement.appendChild(pElement1);
    topCardElement.appendChild(pElement2);
}

function draw() {
    let card = getCard();

    if(card != null) {
        let playersHandElement = document.getElementById("playersHand");

        /* EXAMPLE: 
        <div class="card">
            <img src="assets/images/earth.png" alt="earth">
            <p>season</p>
            <p>spring</p>
        </div>
        */

        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.id = card.id;

        let imgElement = document.createElement("img");
        imgElement.src = "assets/images/" + card.element + ".png";
        imgElement.alt = card.element;

        let pElement1 = document.createElement("p");
        pElement1.appendChild(document.createTextNode(card.category));

        let pElement2 = document.createElement("p");
        pElement2.appendChild(document.createTextNode(card.name));

        cardElement.appendChild(imgElement);
        cardElement.appendChild(pElement1);
        cardElement.appendChild(pElement2);

        cardElement.addEventListener("dblclick", setCardByEvent);

        playersHandElement.appendChild(cardElement);
        // global variable for players hand
        playersHand.push(card);
    }
}

/**
 * This function is merging two arrays together and returning the concatinated array
 * @param {*} array1 
 * @param {*} array2 
 * @returns the merged array
 */
function mergeArrays(array1, array2){
    let mergedArray = array1.concat(array2);
    return mergedArray;
}

/**
 * This function is removing an element from an array by its index
 * @param {*} array 
 * @param {*} index 
 */
function removeElementByIndex(array, index) {
    array.splice(index, 1);
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
    document.getElementById("menu").style.display = "flex";
    document.getElementById("game").style.display = "none";
}

/***
 * 
 */
function setElementCycle(cycle) {
    currentElementCycle = cycle.name;
    let cycleElementOrder = getElementOrder(cycle.name);
    let divCurrentCycle = document.getElementById("divCurrentCycle");
    divCurrentCycle.innerHTML = "";
    
    for(let i = 0; i < cycleElementOrder.length; i++) {
        
        let currentElement = cycleElementOrder[i];

        // create element img 
        // example: <img src="assets/images/wood.png" class="element-img" alt="wood">
        let imgElement = document.createElement("img");
        imgElement.src = "assets/images/" + currentElement + ".png";
        imgElement.classList.add("element-img");
        imgElement.alt = currentElement;
        // create arrow
        // html example: <i class="arrow right"></i>
        let arrowElement = document.createElement("i");
        arrowElement.classList.add("arrow");
        arrowElement.classList.add("right");

        divCurrentCycle.appendChild(imgElement);
        if(i < cycleElementOrder.length -1) {
            divCurrentCycle.appendChild(arrowElement);
        }
    }

    // REFRESH ADDITIONAL INFO AREA
    let additionalInformation = "Cycle changed to: " + cycle.name.charAt(0).toUpperCase() + cycle.name.slice(1);
    displayAdditionalInformations(additionalInformation);
}

function displayAdditionalInformations(information) {
    let divAdditionalInformations = document.getElementById("divAdditionalInformations");
    divAdditionalInformations.innerHTML = "";
    let pElement = document.createElement("p");
    pElement.appendChild(document.createTextNode(information));
    divAdditionalInformations.appendChild(pElement);
}

/***
 * This function is returning the element cycle order 
 */
function getElementOrder(cycleName) {
    switch (cycleName) {
        case "counteract":
            return ["fire", "water", "earth", "wood", "metal"];
        case "regulate":
            return ["fire", "metal", "wood", "earth", "water"];
        case "generate":
            return ["fire", "earth", "metal", "water", "wood"];
        case "drain":
            return ["fire", "wood", "water", "metal", "earth"];
        default:
            return null;
    }
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

/**
 * Generates and returns a random index within the specified range.
 * 
 * @param {number} min - The minimum index value (inclusive).
 * @param {number} max - The maximum index value (inclusive).
 * @returns {number} - A random index within the specified range.
 */
function getRandomIndex(min, max) {
    // get random index
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endGame() {
    location.reload();
}

function restartGame() {
    // Set a flag in local storage to indicate a restart
    localStorage.setItem('restartFlag', 'true');

    // End the game
    endGame();
}

// Check if the page is being reloaded due to a restart
window.onload = function() {
    if (localStorage.getItem('restartFlag') === 'true') {
        // Start the game again
        startGame();
        // Clear the restart flag in local storage
        localStorage.removeItem('restartFlag');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // ADD CLICK EVENT - START GAME
    let btnStartGame = document.getElementById("btnStart");
    btnStartGame.addEventListener("click", startGame);

    // ADD CLICK EVENT - END GAME
    let btnEndGame = document.getElementById("btnEnd");
    btnEndGame.addEventListener("click", endGame);

    // ADD CLICK EVENT - RESTART GAME
    let btnRestartGame = document.getElementById("btnRestart");
    btnRestartGame.addEventListener("click", restartGame);

    // ADD CLICK EVENT - GET CARD FROM DECK 
    let deckElement = document.getElementById("deck");
    deckElement.addEventListener("click", draw);
});