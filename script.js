let reset = document.getElementById("reset")
reset.style.display = "none"
function revealNumber() {
    // Get checkbox states (true if checked)
    let card1Checked = document.getElementById("card1").checked;
    let card2Checked = document.getElementById("card2").checked;
    let card3Checked = document.getElementById("card3").checked;
    let card4Checked = document.getElementById("card4").checked;
    reset.style.display = "flex"
    // reset.location.reload()

    // Initialize binary digits
    let binaryNum = '';

    // Determine each bit
    binaryNum += card4Checked ? '1' : '0'; // Leftmost bit (MSB) from Card 4
    binaryNum += card3Checked ? '1' : '0'; // Next bit from Card 3
    binaryNum += card2Checked ? '1' : '0'; // Next bit from Card 2
    binaryNum += card1Checked ? '1' : '0'; // Rightmost bit (LSB) from Card 1

    // Convert binary to decimal
    let guessedNumber = parseInt(binaryNum, 2);

    // Display the result
    document.getElementById("result").innerText = `Your number is: ${guessedNumber}`;
}
