/**
 * Created by Patrick on 11/16/2016.
 */
first_card_clicked = null;
second_card_clicked = null;
total_number_matches = 2;
match_counter = 0;
var games_played = 0;
var attempts = 0;
var accuracy = 0;

$(document).ready(function() {
    console.log("hello");
    $('.back').click(clickon);
    $('.reset').click(reset_stats);
});

/*this checks for match*/

function clickon() {
    $(this).hide();
    if (first_card_clicked === null) {
        first_card_clicked = this;
        return;
        console.log("first_card_clicked");
    } else {
        second_card_clicked = this;
        attempts++;
        $('.attempts > .value').text(attempts);
        if (($(first_card_clicked).find('img').attr('src')) === ($(second_card_clicked).find('img').attr('src'))) {
            console.log("match");
            match_counter++;
            $(".matching > .value").text(games_played);
            var accuracy = (games_played / attempts).toFixed(2) * 100 + ('%');
            $('.accuracy > .value').text(accuracy);
            /*first_card_clicked = null;
             second_card_clicked = null;*/
            if (match_counter === total_number_matches) {
                games_played++;
                console.log("You won!");
            } else {
                console.log("Good job!");
            }
        } else {
            setTimeout(timer, 2000);
            console.log("restart");
            return;
            timer()
        }
    }
}

function reset_game (){

}




function timer() {
    $(first_card_clicked).find('.back').show();
    $(second_card_clicked).find('.front').show();
    first_card_clicked = null;
    second_card_clicked = null;
}

function reset_stats(){
    accuracy = 0;
    matches = 0;
    attempts = 0;
    games_played++;
    $('.back').show();
    $('.games-played .value').text(games_played);
    $('.attempts  .value').text(attempts);
    $(".matching > .value").text(matches);
    $('.accuracy > .value').text(accuracy);
    console.log('reset stats');
    return;
}
