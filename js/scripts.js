//Buisness logic
  $(document).ready(function() {

function Player() {
  this.rollScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.playerName;
}
Player.prototype.roll = function() {
  this.rollScore = Math.floor(Math.random() * 6) + 1;;

}

$(document).ready(function() {

var player1= new Player() ;
var player2= new Player() ;




      Player.prototype.score = function() {
        if (this.rollScore == 1) {
          this.turnScore = 0;
          alert("Sorry " + this.playerName + ", you rolled a 1! time's up!")
        } else {
          this.turnscore += this.rollScore;
        }
      }
      Player.holdone = function() {

        this.totalScore =this.turnscore + this.rollScore;
        alert(this.playerName + ", your turn is over!");
      }

    Player.winner = function() {
        if (this.totalScore >= 100) {
          alert(this.playerName, 'winner');
        }
      }




          //user interface
          // User Interface


                $("button#start").click(function(event) {
                      player1 = new Player(true);
                      player2 = new Player(false);

                      $("#player1-roll").click(function(){
                        player1.roll();
                        $("#dice-roll-1").text(this.rollScore)
                      })

})
})
})
