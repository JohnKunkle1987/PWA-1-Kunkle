/*
 Name: 
 Date: 
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";    //player one assigned to Spiderman
    var playerTwoName = "Batman";       //player two assigned to Batman

    //player damage
    var player1Damage = 20;               //saying the player does 20 damage
    var player2Damage = 20;              //saying the player does 20 damage

    //player health
    var playerOneHealth = 100;           //saying the player has 100 health
    var playerTwoHealth = 100;           //saying the player has 100 health

    var round=0;

    function fight(){                   //names the function Fight
        console.log ('in the fight function');   //console.logs in the fight function

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        for (var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break;
            };

        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if(playerTwoHealth<1){
            result =playerOneName+" WINS!!!"
        };

        return result;

    };

    /*******  The program gets started below *******/
    console.log('program starts')
    fight();

})();