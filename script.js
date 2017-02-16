/**
 * Created by Patrick on 1/26/2017.
 */
$(document).ready(function() {
    $('#guesser').click(analyzeGuess);
    pickNumber();
    console.log('doc ready: ' + randomNumber);
});




var count = 10;
var randomNumber = null;
var playerGuess = null;
var low = 1;
var high = 100;
var top = 100;
var bottom = 1;

function pickNumber() {
    if (randomNumber === null) {
        console.log('function picks: ' + randomNumber);
        randomNumber = Math.floor((Math.random() * 100) + 1);
        return(randomNumber);
    } else {
        return;
    }
}
var targetNumber = pickNumber();

function clearForm() {
    document.getElementById('guessform').reset();
}

function pickNewNumber() {
    if (randomNumber === null) {
        console.log('function picks: ' + randomNumber);
        randomNumber = Math.floor((Math.random() * 100) + 1);
        return(randomNumber);
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
        console.log('Number to guess ' + targetNumber);
        if (playerGuess < targetNumber) {
            $('#displaymessage').text('Oops, too low!');
            rangefinder();
        } else if (playerGuess > targetNumber) {
            $('#displaymessage').text('Whoa, too high!');
            rangefinder();
        } else if (playerGuess == targetNumber) {
            $('#displaymessage').text('Boom, confetti!');
            $('#displayrange').text(targetNumber);
            $('#guesser').attr('disabled', true);
        } else {
            $('#displaymessage').text('Good try. The correct number is ' + targetNumber + '.');
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
        $('#guesser').attr('disabled', true);
    }
}

//displays the range of guessed numbers

function rangefinder() {
    if (playerGuess < targetNumber) {
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
    top = high-targetNumber;
    console.log('high: ' + high + ' target number: ' + targetNumber + ' top: ' + top);
    bottom = targetNumber-low;
    console.log('low: ' + low + ' target number: ' + targetNumber + ' bottom: ' + bottom);
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
    $('#guesser').attr('disabled', false);
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
}


