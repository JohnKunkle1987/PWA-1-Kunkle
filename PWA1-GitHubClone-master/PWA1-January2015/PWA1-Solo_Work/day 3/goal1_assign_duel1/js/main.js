/*
 Name: John Kunkle
 Date: 1/10/2015
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

    function fight(){                  //names the function Fight
        console.log ('in the fight function');   //console.logs in the fight function

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);//sends alert with player
                                                             //names and calls the name variables
        for (var i=0; i < 10; i++){ //sets the the counter runs until "i" is 10

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;    //sets minDamage to playerdXdamage to # * .5
            var minDamage2 = player2Damage * .5;    //sets minDamage to playerdXdamage to # * .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //computes and rounds the player damage determined before
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); ////computes and rounds the player damage determined before

            //inflict damage
            playerOneHealth-=f1;//a tracker for players health
            playerTwoHealth-=f2;//a tracker for players health

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);// logging the players health to the console

            var results = winnerCheck();//sets a var for a function called winnercheck.
            console.log(results);//checks to see who the winner is.

            if (results === "no winner"){//if there is no winner
                round++;//use var round + 1
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);//alert each player with their health total.
            }else{//if IF is not met do this
                alert(results);//calls the results var
                break;//line break
            };

        };

    };

    function winnerCheck(){//function winnerCheck
        console.log("in winnerCheck FN");//console logs the result

        var result="no winner";//Logs the result from function above

        if (playerOneHealth<1 && playerTwoHealth<1){//if each player has less than 1 health
            result = "You Both Die"; //result changes based on checks
        } else if(playerOneHealth<1){//if player one health is less than 1
            result =playerTwoName+" WINS!!!"//player 2 wins
        } else if(playerTwoHealth<1){//if player two health is less than 1
            result =playerOneName+" WINS!!!"//player 1 wins
        };

        return result;//return rsult of finction above

    };

    /*******  The program gets started below *******/
    console.log('program starts');// this logs the start of fight
    fight();

})();