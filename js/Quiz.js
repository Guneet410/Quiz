class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
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
    question.hide();

    //write code to change the background color here
    background("orange");

    //write code to show a heading for showing the result of Quiz
    question.title2.html("Result of Quiz")
    question.title2.position(100,200)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants  != undefined){
   fill("yellow")
   textSize(20);
   text ("NOTE- Contestants who won are highlighted in green",200,20)
    }


    
 for( var plr in allContestants){
   correctAnswer = "2"
   if(correctAnswer === allContestants[plr].answer ){
     fill ("green")
   }else{
     fill ("red") 
   }

 }

    
  }

}
