//declare variables 
var diamondVal = Math.floor(Math.random() * 3 + 10);
var rubyVal = Math.floor(Math.random() * 3 + 7);
var sapphireVal = Math.floor(Math.random() * 3 + 4);
var opalVal = Math.floor((Math.random() * 3) + 1);
var wins = 0;
var losses = 0;
var randomNum = Math.floor((Math.random() * 102) + 19);
var gemDepo = 0;

//load a random number into the random number area when the page is ready
$(document).ready(function() {
    $("#number").text(randomNum);
});

// when the gems are clicked their random value is added to the Crystal Depository value
$("#diamond").on("click", function(){
    gemDepo += diamondVal;
    $("#crystalTotal").text(gemDepo);
    results();
});
$("#ruby").on("click", function(){
    gemDepo += rubyVal;
    $("#crystalTotal").text(gemDepo);
    results();
});
$("#sapphire").on("click", function(){
    gemDepo += sapphireVal;
    $("#crystalTotal").text(gemDepo);
    results();
});
$("#opal").on("click", function(){
    gemDepo += opalVal;
    $("#crystalTotal").text(gemDepo);
    results();
});

function resetValues() {
    diamondVal = Math.floor(Math.random() * 3 + 10);
    rubyVal = Math.floor(Math.random() * 3 + 7);
    sapphireVal = Math.floor(Math.random() * 3 + 4);
    opalVal = Math.floor((Math.random() * 3) + 1);
    randomNum = Math.floor((Math.random() * 102) + 19);
    gemDepo = 0;
}

function results() {
    if (gemDepo === randomNum) {
        resetValues();
        $("#number").text(randomNum);
        $("#crystalTotal").text(gemDepo);
        wins++;
        $("#win").text(wins);
    } else if (gemDepo > randomNum) {
        resetValues();
        $("#number").text(randomNum);
        $("#crystalTotal").text(gemDepo);
        losses++;
        $("#loss").text(losses);
    }
    
};