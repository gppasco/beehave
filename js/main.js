const wordlist = ["COUNT", "ACCOUNT", "COCONUT"]

wordlist.forEach(item => {
    console.log(item)
})

const letters = ["U", "A", "C", "N", "O", "R", "T"]

// Function acting on submit
document.getElementById("beeSubmit").addEventListener("click", function() {
    let inputVal = document.getElementById("beeInput").value
    document.getElementById("beeInput").value = ""

    validate(inputVal.toUpperCase(), letters)
})

// Function to score words
function score(word) {
    const isPangram = (new Set(word.split(""))).size == 7

    // Scoring system: 1 point for 4-letter words, then 1 point per letter for longer words
    // (and 7-point bonus for pangrams)
    if (word.length == 4) {
        return 1
    } else {
        return word.length + 7*(isPangram)
    }
}

// Function to validate words
// String is the string to be validated, letters is the list of valid letters (with the special one first)
function validate(string, letters) {
    // First: check if contains any invalid letters
    const importantLetter = letters[0]

    // Removes duplicate letters
    const stringStripped = Array.from(new Set(string.split("")))

    // Test if there are any invalid characters
    if (!stringStripped.every(val => letters.includes(val))) {
        alert("Invalid Character");
    // Test if this includes special character
    } else if (!stringStripped.includes(importantLetter)){
        alert("Doesn't Contain Center Letter")
    // Test if the word is too short
    } else if (string.length < 4){
        alert("Too short")
    // Otherwise, return score
    } else {
        alert("Nice! WORD SCORE: " + score(string))
    }
}