    
    $(document).ready(function() { 

        var possibleWords =["crazy", "butt", "fart","munchies","brainfreeze"];
        var wordChoice = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        console.log(wordChoice);
   
   
       for (var i = 0; i < wordChoice.length; i++){
       var d= document.createElement('div');
       $(d).addClass("letter-"+[i])
      .addClass("freedom")
      .html("_");
       $("#wordIdea").append(d);}
   
           document.onkeyup = function(event) {
      var humanChoice = event.key.toLowerCase();
   console.log(humanChoice)
   
   for (var i = 0; i < wordChoice.length; i++){
       var letterChoice=(wordChoice[i]);
       
       if (humanChoice===letterChoice){
       console.log("true");
       $(".letter-"+[i]).html(humanChoice);
   
   }
   else {
   
   }
   };
     
   
           $("#wordIdea")
   
   
   
           }
       });
   