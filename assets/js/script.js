// GLOBAL DECK OF ALL CARDS
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
    { id: "cardId_46", element: "wood", category: "dragon", name: "inconstancy" },
    { id: "cardId_47", element: "fire", category: "dragon", name: "ego" },
    { id: "cardId_48", element: "earth", category: "dragon", name: "social habits" },
    { id: "cardId_49", element: "metal", category: "dragon", name: "rituals" },
    { id: "cardId_50", element: "water", category: "dragon", name: "natural needs" },
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

// GLOBAL SPECIAL DECK OF CARDS (containing the cycle cards)
let specialDeck = [
    { id: "cardId_100", element: "cycle", category: "cycle", name: "regulate"},
    { id: "cardId_101", element: "cycle", category: "cycle", name: "counteract"},
    { id: "cardId_102", element: "cycle", category: "cycle", name: "generate"},
    { id: "cardId_103", element: "cycle", category: "cycle", name: "drain"}
];

// GLOBAL VARIABLES
let playersHand = []; // storing elements pushed from deck
let currentTopCard; // storing the current top card (peoperties: id, element, category, name)
let currentElementCycle; // storing the name of the cycle as string


// #######################################################
// ############ NAVIGATION FUNCTIONALITY #################
// #######################################################

/***
 * This is the MAIN-Function: Calling all nessecary funtions to prepare the data for the new game.
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

    // shuffle the remaining special cards into the deck
    deck = mergeArrays(deck, specialDeck);
    // shuffle the entire deck again
    shuffleDeck();
}

/**
 * This function is ending the game. 
 * All variables will be reseted.
 */
function endGame() {
    location.reload();
}

/**
 * This function ends and starts the game again
 */
function restartGame() {
    // Set a flag in local storage to indicate a restart
    localStorage.setItem('restartFlag', 'true');

    // End the game
    endGame();
}

/**
 * Call if page is being refreshed or reloaded
 */
window.onload = function() {
    // Check if the page is being reloaded due to a restart
    if (localStorage.getItem('restartFlag') === 'true') {
        // Start the game again
        startGame();
        // Clear the restart flag in local storage
        localStorage.removeItem('restartFlag');
    }
};

/***
 * This function displays the game board and hides the game navigation
 */
function showBoard() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

// #######################################################
// ############### MAIN FUNCTIONALITY ####################
// #######################################################

/**
 * This function gets a card from the global deck and pushes it to the players hand and creates the HTML to display
 */
function draw() {
    let card = getCard();

    if(card != null) {
        if(card.category === "cycle") {
            setElementCycle(card);
        } else {
            let playersHandElement = document.getElementById("playersHand");

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
}

/**
 * This function is called by user interaction with the HTML
 * @param {event} e 
 */
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

        // if player has discared the last card, the game is over - show a propper message
        if(playersHand.length == 0) {
        }
    }
    else {
        displayAdditionalInformations("You can not place a " + card.element + " element on top of an " + currentTopCard.element + " element in the " + currentElementCycle + " cycle.");
    }
}

/**
 * This function generates the HTML for the new top card to be displayed
 * @param {object[]} card 
 */
function setCard(card) {
    currentTopCard = card;
    let topCardElement = document.getElementById("topCard");
    topCardElement.innerHTML = "";

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

/**
 * This function returns the top card from the deck, always at Index 0.
 * @returns object[] card or null
 */
function getCard() {
    if(deck.length > 0) {
        let drawnCard = deck[0];
        removeElementByIndex(deck, 0);
        return drawnCard;
    } else {
        let deckElement = document.getElementById("deck");
        deckElement.innerHTML = "";

        let imgElement = document.createElement("img");
        imgElement.src = "assets/images/no-cards.png";
        imgElement.alt = "no cards";

        deckElement.appendChild(imgElement);

        return null;
    }
    
}

/**
 * This function removes a card from the players hand
 * @param {object[]} card 
 */
function discardCard(card) {
    var cardToRemove = document.getElementById(card.id);
    
    if (cardToRemove) {
        var parentElement = cardToRemove.parentNode;
        parentElement.removeChild(cardToRemove);
        playersHand = playersHand.filter(item => item !== card);
    }
}

/**
 * This function is checking if the card the player selected can be placed. 
 * Setting the card depends on the current element cycle. 
 * @param {object[]} card 
 * @returns bool
 */
function isSetCardAllowed(card) {
    let cycleElementOrder = getElementOrder(currentElementCycle);

    let indexCurrentCard = cycleElementOrder.indexOf(currentTopCard.element);
    let indexCardToPlace = cycleElementOrder.indexOf(card.element);

        return true;
    else
        return false;
}

/**
 * This function generates the HTML for the "Current Element Cycle"
 * @param {object[]} cycle 
 */
function setElementCycle(cycle) {
    currentElementCycle = cycle.name;
    let cycleElementOrder = getElementOrder(cycle.name);
    let divCurrentCycle = document.getElementById("divCurrentCycle");
    divCurrentCycle.innerHTML = "";
    
    for(let i = 0; i < cycleElementOrder.length; i++) {
        
        let currentElement = cycleElementOrder[i];

        // create element img 
        let imgElement = document.createElement("img");
        imgElement.src = "assets/images/" + currentElement + ".png";
        imgElement.classList.add("element-img");
        imgElement.alt = currentElement;
        // create arrow
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

/**
 * This function generates the HTML element to display additional new information for the user.
 * @param {string} information 
 */
function displayAdditionalInformations(information) {
    let divAdditionalInformations = document.getElementById("divAdditionalInformations");
    divAdditionalInformations.innerHTML = "";
    // when the user makes an interaction with the game and we want to notify him with an eye-catching animation
    divAdditionalInformations.classList.add("notification");

    let h2Element = document.createElement("h2");
    h2Element.appendChild(document.createTextNode(information));
    divAdditionalInformations.appendChild(h2Element);

    // the notification eye-catcher disapears after 3 seconds
    setTimeout(function() {
        divAdditionalInformations.classList.remove('notification');
    }, 3000);
}


// #######################################################
// ############# HELPER FUNCTIONALITY ####################
// #######################################################

/**
 * This function returns an array of elements based on the cycleName
 * @param {string} cycleName 
 * @returns array of strings or null
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

/**
 * The elements in the global variable "deck" will be rearanged randomly.
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
 * This function merges two arrays together and returns the concatenated array.
 * @param {object[]} array1 
 * @param {object[]} array2 
 * @returns object[] mergedArray
 */
function mergeArrays(array1, array2){
    let mergedArray = array1.concat(array2);
    return mergedArray;
}

/**
 * This function is removing an element from an array by its index
 * @param {object[]} array 
 * @param {number} index 
 */
function removeElementByIndex(array, index) {
    array.splice(index, 1);
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

// #######################################################
// ################# STARTING POINT ######################
// #######################################################
/**
 * After HTML is fully loaded, all nessecary event-listeners will be added to the HTML elements.
 * This ensures the interaction between the html and the javascript.
 */
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