class Quiz {
  constructor(){
    this.result=createElement('h1');
  }

  getState(){
a    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  sync start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    //write code to change the background color here
background("yellow");
    //write code to show a heading for showing the result of Quiz
this.result.html("RESULT OF THE QUIZ");
this.result.position(250,20);
    //call getContestantInfo( ) here
    //write condition to check if contestantInfor is not undefined
    if (allContestants!== undefined){
    //write code to add a note here
    fill("blue");
    textSize(20);
    text("*NOTE: Contestant who answered correct are highlighted in green colour!",130,230);
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")
    }
  }

}
