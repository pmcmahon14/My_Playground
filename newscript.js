
//SET VARIABLES

var timeLeft = $('#timer');
var firstCard = null;
var secondCard = null;
var matchCount = 0;
var totalMatch = 10;
var winCount = 0;
var accuracy = 0;
var attempts = 0;

//LOAD SCREEN

$(document).ready(function(){
    $('.card').click(pickCard);
    //$('.resetCards').click(resetCards);
    timer();
    reset();
});

//READS VALUES OF BOTH CARDS

function pickCard(){
    if($(this).find('.back').is(':visible') === true){
        $(this).find('.back').hide();
        console.log('back hidden');
        if(firstCard === null){
            firstCard = this;
            console.log('first card is', firstCard);
            return
            }else{
            secondCard = this;
            attempts++;
            $('#attempts').text(attempts);
            console.log('second card is', secondCard);

            //DETERMINE MATCH, UPDATE MATCH, ACCURACY RATING

            if($(firstCard).find('.front > img ').attr('src') === $(secondCard).find('.front > img').attr('src')){
                matchCount++;
                $('#matches').text(matchCount);
                firstCard = null;
                secondCard = null;
                console.log('You have a match!', matchCount);
                accuracyRating();

                //CHECKS FOR GAME WIN, UPDATE WIN COUNT

                if(matchCount < totalMatch){
                    return
                    }else{
                    winCount++;
                    $('#wins').text(winCount);
                    $('#winner').show();
                    $('.reset').off('click');
                    }

                    //NO MATCH, TURN CARDS BACK OVER, UPDATE ACCURACY RATING AT FUNCTION

                    }else{
                $('.card').off('click');
                setTimeout(function(){
                    $(firstCard).find('.back').show();
                    $(secondCard).find('.back').show();
                    firstCard = null;
                    secondCard = null;
                    $('.card').click(pickCard);
                    }, 1000)
                accuracyRating();

            }
        }

    //BLOCKS CARD ALREADY FACE UP

    }else{
        console.log('already clicked', this);
        return;
    }
}

//RESETS CARDS why does back not show again? throws unrecognized picked card error

//RESETS STATS

function reset () {
    matchCount = 0;
    winCount = 0;
    accuracy = 0;
    attempts = 0;
}

//CALCULATES ACCURACY

function accuracyRating() {
    accuracy = Math.round((matchCount/attempts)*100) + '%';
    console.log(accuracy);
    $('#accuracy').text(accuracy);
}

//RUNS TIMER

function timer() {
    startTime = date.now();
    timer = setTimeout(updateProgress, 1);
}

//SETS BOARD UP FOR SELECTED LEVEL OF PLAY

function settings() {

}

//PICKS PAIRS AND SHUFFLES CARDS

function shuffle() {

}
