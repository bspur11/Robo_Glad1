var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 20;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function (enemyName) {
  // alert we are starting the round
  while (enemyHealth > 0 && playerHealth > 0) {
    // do you want to fight?
    debugger;
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to skip

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log(playerName + " now has $" +
          playerMoney);
        window.alert("Boo now has  $" + playerMoney + ".")
        break;
      }
    }

    // subtract P-Health from E-Health

    enemyHealth = enemyHealth - playerAttack;

    // log to see results
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award for win
      playerMoney = playerMoney + 20

      // leave while Loop
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract E-Health from P-Health
    playerHealth = playerHealth - enemyAttack;

    // log to console
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    // if (playerHealth <= 0) {
    //   window.alert(playerName + ",you have lost your robot in battle! Game Over!");
    //   break;
    // } 
    if (playerHealth > 0) {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }

}
// function to start a mew game
var startGame = function () {
  // reset player stats
  for (var i = 0; i < enemyNames.length; i++) {
    playerHealth = 50;
    playerAttack = 10;
    playerMoney = playerMoney - 10;
    if (playerHealth > 0) {
      window.alert("welcome to Robot Gladiatore! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 40;
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      // break;
      // }
    }
    // play again

    // startGame();

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  }

};
// function to end the entire game
var endGame = function () {

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

}
endGame();