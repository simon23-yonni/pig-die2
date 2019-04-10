//Buisness logic
var rollDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}
function Player(turn) {
  this.roll = 0;
  this.tmpScore = 0;
  this.increasedScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.tmpScore = 0;
    alert("you rolled 1! pass mouse!")

  } else {
    this.tmpScore += this.roll;
  }
}

Player.prototype.hold = function() {
  this.increasedScore += this.tmpScore;
  this.tmpScore = 0;

  alert(" nice!");
}

Player.prototype.changeturn = function() {
  if (this.roll === 1) {
    this.turn = false;
  } else {
    this.turn = true;
  }
}

Player.prototype.winCheck = function() {
  if (this.increasedScore >= 100) {
    alert("you won!");
  }
}

$(document).ready(function() {
  player1 = new Player(true);
  player2 = new Player(false);
  $("button#player1-roll").click(function(event) {
    player1.roll = rollDice();
    $("#dice-roll-1").text(player1.roll);
    player1.rollOne();
    $("#round2-total").text(player1.tmpScore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = rollDice();
    $("#dice-roll-2").text(player2.roll);
    player2.rollOne();
    $("#round2-total").text(player2.tmpScore);
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total1-score").text(player1.increasedScore);
    $("#round1-total").empty();
    $("#dice-roll-1").empty();
    player1.winCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total2-score").text(player2.increasedScore);
    $("#round2-total").empty();
    $("#dice-roll-2").empty();
    player2.winCheck();
  });

});
