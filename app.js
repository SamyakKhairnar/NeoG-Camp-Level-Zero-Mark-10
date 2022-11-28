const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cashGivenTab = document.querySelector("#cash-given-label")
const message = document.querySelector("#error-message");
const nextButton = document.querySelector("#next-btn");
const checkButton = document.querySelector("#check-button");
const tableTab = document.querySelector("#notes-table")
const returnBalance = document.querySelector("#return");
const numberofNotes = document.querySelectorAll(".notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

hideMessage();
hideCash();
hideTable();
nextButton.addEventListener("click", nextHandler);

function nextHandler() {
    if (billAmount.value > 0) {
        nextButton.style.display="none";
        showCash();
        hideMessage();
      } else {
      showMessage("Amount should be greater than zero!");
    }
}

function clickHandler() {
        hideMessage();
    if (cashGiven.value >= billAmount.value) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        returnBalance.innerText = "Rs. " + amountToBeReturned;
        calculateChange(amountToBeReturned);
        showTable();
    } else {
        showMessage("Do you wanna wash dishes?");
    }
}

 

function calculateChange(amount) {
    for (i = 0; i < availableNotes.length; i++) {
      const numberofNotes = Math.trunc(amount / availableNotes[i]);
      amount %= availableNotes[i];
      numberofNotes[i].innerText = numberofNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}
  
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
  
function hideCash() {
    cashGivenTab.style.display = "none";
    cashGiven.style.display ="none";
    checkButton.style.display="none";
}
  
function showCash() {
    cashGivenTab.style.display = "block";
    cashGiven.style.display ="block";
    checkButton.style.display="block";
}
  
function hideTable() {
    tableTab.style.display = "none";
}
  
function showTable() {
    tableTab.style.display = "block";
 }


hideMessage();
hideCash();
hideTable();
nextButton.addEventListener("click", nextHandler);
checkButton.addEventListener("click", clickHandler);