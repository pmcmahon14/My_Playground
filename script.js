/**
 * Created by Patrick on 1/26/2017.
 */
$(document).ready(function() {
    $('#guess').click(analyzeGuess);
    pickNumber();
    console.log('doc ready: ' + randomNumber);
    $('#guess').keypress(enterKey);
});




var count = 10;
var randomNumber = null;
var playerGuess = null;
var low = 1;
var high = 100;
var top = 100;
var bottom = 1;
var background = null;



function pickNumber() {
    if (randomNumber === null) {
        console.log('function picks: ' + randomNumber);
        randomNumber = Math.floor((Math.random() * 100) + 1);
        return(randomNumber);
    } else {
        return;
    }
}

//clears form for next guess

function clearForm() {
    $('#guess').val('');
}

//picks a new number after clicking start over

function pickNewNumber() {
    if (randomNumber === null) {
        console.log('function picks: ' + randomNumber);
        randomNumber = Math.floor((Math.random() * 100) + 1);
        return(randomNumber);
    } else {
        return;
    }
}

function enterKey(event) {
    if (event.which == 13) {
        analyzeGuess();
    } else {
        return;
    }
}

//analyze guess and display message for range of 1-100

function analyzeGuess() {
    playerGuess = $('#guess').val();
    if (playerGuess < 1 || playerGuess > 100) {
        $('#displaymessage').text('Guess is out of range. Please try again.');
        clearForm();
        $('input').focus();
    } else {
        console.log('Guessed ' + playerGuess);
        console.log('Number to guess ' + randomNumber);
        if (playerGuess < randomNumber) {
            $('#displaymessage').text('Oops, too low!');
            rangefinder();
        } else if (playerGuess > randomNumber) {
            $('#displaymessage').text('Whoa, too high!');
            rangefinder();
        } else if (playerGuess == randomNumber) {
            $('#displaymessage').text('Boom, confetti!');
            $('#displayrange').text(randomNumber);
            $('#guess').attr('disabled', true);
        } else {
            $('#displaymessage').text('Good try. The correct number is ' + randomNumber + '.');
        }
        guessCounter();
        clearForm();
        $('input').focus();
    }
}

// guess counter and button disabler

function guessCounter() {
    count = count - 1;
    $('#guessesleft').text(count);
    console.log('Guess ' + count);
    if (count === 0) {
        $('#guess').attr('disabled', true);
    }changeBackground();
}

//set background color

window.onload = changeBackground;

function changeBackground() {
    console.log(count);
    switch(count) {
        case 9:
            document.getElementById('board').style.background = "rgb(50, 255, 0)";
            break;
        case 8:
            document.getElementById('board').style.background = "rgb(100, 255, 0)";
            break;
        case 7:
            document.getElementById('board').style.background = "rgb(150, 255, 0)";
            break;
        case 6:
            document.getElementById('board').style.background = "rgb(200, 255, 0)";
            break;
        case 5:
            document.getElementById('board').style.background = "rgb(255, 255, 0)";
            break;
        case 4:
            document.getElementById('board').style.background = "rgb(255, 200, 0)";
            break;
        case 3:
            document.getElementById('board').style.background = "rgb(255, 150, 0)";
            break;
        case 2:
            document.getElementById('board').style.background = "rgb(255, 100, 0)";
            break;
        case 1:
            document.getElementById('board').style.background = "rgb(255, 50, 0)";
            break;
        case 0:
            document.getElementById('board').style.background = "rgb(255, 0, 0)";
            break;
    }
}

//displays the range of guessed numbers

function rangefinder() {
    if (playerGuess < randomNumber) {
        console.log('before player guess low: ' + low);
        low = playerGuess;
        console.log('after player guess low: ' + low);
    } else {
        console.log('before player guess high: ' + high);
        high = playerGuess;
        console.log('after player guess high: ' + high);
    }console.log(low + '-' + high);
    $('#displayrange').text(low + '-' + high);
    difference();
}

//displays range of guesses

function difference() {
    top = high-randomNumber;
    console.log('high: ' + high + ' target number: ' + randomNumber + ' top: ' + top);
    bottom = randomNumber-low;
    console.log('low: ' + low + ' target number: ' + randomNumber + ' bottom: ' + bottom);
    console.log('Bottom: ' + bottom, 'Top: ' + top);

}

//when player clicks start over button

function startOver() {
    console.log('reset pressed');
    count = 10;
    console.log('Count is: ' + count);
    $('#guessesleft').text(count);
    $('#displaymessage').text('');
    $('#displayrange').text('');
    $('#guess').attr('disabled', false);
    top = 100;
    bottom = 1;
    low = 1;
    high = 100;
    randomNumber = null;
    console.log(randomNumber);
    pickNewNumber();
    console.log(randomNumber);
    targetNumber = randomNumber;
    $('input').focus();
    $('#displaymessage').text('Good luck!');
    $('#displayrange').text('1-100');
    document.getElementById('board').style.background = "rgb(0, 250, 0)";
}


