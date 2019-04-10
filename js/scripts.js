//Buisness logic
var randomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(rollScore, turnScore, totalScore) {
  this.rollScore = rollScore;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player.prototype.roll = function() {
  var random = randomNumber();
  return random;
}

$(document).ready(function() {

      var rollScore;
      var turnScore;
      var totalScore;


      var player1 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
      var player2 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);

      newPlayer.rollone = function() {
        if (newPlayer.rollScore === 1) {
          this.turnScore = 0;
          alert("Sorry " + this.playerName + ", you rolled a 1! time's up!")
        } else {
          this.turnscore += this.roll;
        }
      }
      newPlayer.holdone = function() {
        this.turnscore += this.rollScore;
        this.totalScore = 0;
        alert(this.playerName + ", your turn is over!");
      }

      newPlayer.winner = function() {
        if ((player1.totalScore + player1.turnScore) >= 100) {
          alert("PLAYER ONE IS THE WINNER");
        }
      }
      var player1 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
      var player2 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
      newPlayer.newGame = function() {
          this.rollscore = 0;
          this.tempscore = 0;
          this.totalScore = 0;
          this.playerName = "";

          var cleaValues = function() {
            $(".player1Name").val("");
            $(".player2Name").val("");
          }
          //user interface
          // User Interface
          $(document).ready(function() {

                $("button#start").click(function(event) {
                      player1 = new Player(true);
                      player2 = new Player(false);
                      $(".player-console").show();
                      $(".start-menu").hide();

                      var player1Name = $(".player1Name").val();
                      $("#player1Name").text(player1Name);

                      var player2Name = $(".player2Name").val();
                      $("#player2Name").text(player2Name);

                      player1.playerName = player1Name;
                      player2.playerName = player2Name;


                      
