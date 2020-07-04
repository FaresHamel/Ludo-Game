
/***********************************
 * 1 version of javascript
 * 2 variable and data type
 * 3 logical oparitor
 * 4 Arithmitique Oparitor
 * 5 (for) and -(while) -(switch) -( if )-(if else) (if eleseif else )
 * 5 function
 * 6 function expression
 * 7 ArrayList
 * 8 Object
 * 9 this function
 * 10 Scope Chain
 * 11 Dom (Document Object Manupilation)
 *   >>>> used to connect webpage like javascript
 *   >>>> Structured represontation of an HTML documentation
 * Scope chain 
 */

//  //first scope
// var firstVariable = "Hallo Fares";

// function firstFunction(){
//   //second scope
//   var b = "woher kommen Sie ?";
//   secondFunction();
//   function secondFunction(){
//       //third scope
//       var c ="ich komme aus Algerien";

//       console.log(firstVariable + b + c);
//   }
// }

// firstFunction();
var scores,roundScores,activitePlayer,scorwinner,gamePlayer, dicesScores1,dicesScores2;    
init();
btnSendInactivActive();

document.querySelector('.btn-roll').addEventListener('click',function(){

      btnSendInactivActive();
      btnChangeInActive();
        
       if(gamePlayer === true){
  
        //1 rendom the number
        var dice = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        
        //display the result
        var resultDices = document.querySelector(".dices");
        resultDices.style.display= "block"; 
        resultDices.src = "Bilder/dote-"+dice+".svg";

        var resultDices2 = document.querySelector('.dices2');
            resultDices2.style.display = "block";
            resultDices2.src = "Bilder/dote-"+dice2+".svg"; 

        if(dice !== 1 && dice2 !==1){

            if(dice == 6){
            
                dicesScores1 += 1;

                if (dicesScores1 === 2) {
                    nexPlayer();
                }
            }else{
                dicesScores1 =0;
            }

            if(dice2 === 6){

                dicesScores2 += 1;

                if (dicesScores2 == 2) {
                    nexPlayer();
                }
            }else{
                dicesScores2 = 0;
            }

            roundScores += dice + dice2;
            // send Summetion scores for the avtive player by select the element by querySelector nad cheng the content text
             document.querySelector('.current-'+activitePlayer).textContent = roundScores;

        }else{

           roundScores = 0; 
           document.querySelector('.current-'+activitePlayer).textContent = roundScores;
           nexPlayer();

        }
       }
            
       

    });

    document.querySelector('.btn-hold').addEventListener('click',function(){

        btnSendInactivActive();
        btnChangeInActive();

     if(gamePlayer === true){

       //Add the current score to global score
       scores[activitePlayer] += roundScores;
       //update the UI
       document.querySelector('#score-'+activitePlayer).textContent = scores[activitePlayer];
       //check the player won the playe Game

       if (scores[activitePlayer] >= scorwinner) {
           
           document.querySelector('#name-'+activitePlayer).textContent = "winner!";
           document.querySelector(".dices").style.display= "none";
           document.querySelector(".dices2").style.display= "none";

           document.querySelector('.palyer-'+activitePlayer).classList.add('winner');
        //    document.querySelector('.palyer-'+activitePlayer).classList.remove('active'); 
           
           document.querySelector('.player-player-player-'+activitePlayer).style.color = "black";

           document.querySelector('#name-'+activitePlayer).style.color = 'rgb(228, 56, 56)';

           gamePlayer = false;

       }else{
          //next player
         nexPlayer(); 
          }
       }
       

    });

    function nexPlayer(){

         //check th number of player and chenged
         activitePlayer === 0 ? activitePlayer = 1 : activitePlayer = 0;
         roundScores = 0;

         //chenge text of element by select the element by id 
         document.getElementById('current-0').textContent ='0';
         document.getElementById('current-1').textContent ='0';


         // chenge name end remove name for a class
         document.querySelector('.player-panel-one').classList.remove('active');
         document.querySelector('.player-panel-two').classList.add('active');

         if (activitePlayer ===1) {
             //cheng the interface player active for numer of player
             //if the player one the acvtive class change the player one
             document.querySelector('.player-panel-one').classList.remove('active');
             document.querySelector('.player-panel-two').classList.add('active');
         }else{
             //cheng the interface player active for numer of player
             //if the player two the acvtive class change the player two
             document.querySelector('.player-panel-two').classList.remove('active');
             document.querySelector('.player-panel-one').classList.add('active');
         }
    }



    document.querySelector('.btn-new').addEventListener('click',function(){

        init();
        controleHidenInput();
        btnSendInactivActive();
        
        document.querySelector('#name-0').style.color = 'black';
        document.querySelector('#name-1').style.color = 'black';

        document.querySelector('.player-panel-two').classList.remove('active');
        document.querySelector('.player-panel-one').classList.add('active');

        // document.querySelector('.btn-send').style.display = 'none';

    });


    function init(){

        scores = [0,0];
        roundScores = 0;
        activitePlayer = 0;
        gamePlayer = true;
        scorwinner = 50; 
        dicesScores1 = 0;
        dicesScores2 = 0;

        document.querySelector("#input_number").value= 50;
        btnChangActive();

        //document.querySelector('#score-2').textContent = dice;
        //document.querySelector("id"+Menche was willst du macht hier).innerHtml="du kannst add kod html" "<i>"+dice+"</i>"
    
        document.querySelector(".dices").style.display= "none";
        document.querySelector(".dices2").style.display= "none";
    
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
    
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent ='0';

        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';

    }


    //btn avtive and not active

    document.querySelector('.btn-change').addEventListener('click',function(){
        controlInHedenInput();
        btnSendactive();
    });

  
    function controleHidenInput(){

        document.getElementById("input_number").readOnly = true; 
        document.getElementById("input_number").disabled = true;

    }

    function controlInHedenInput(){

        document.getElementById("input_number").readOnly = false; 
        document.getElementById("input_number").disabled = false;
    }

    //active the btn send
    function btnSendactive(){
      
        // document.querySelector('.btn-send').classList.remove('inactivbtn'); 

        document.querySelector('.btn-send').style.display = "block"; 

        document.querySelector('.btn-send').addEventListener('click',function(){

            scorwinner =  document.querySelector("#input_number").value;
            console.log(scorwinner);
            btnSendInactivActive();
            controleHidenInput();

        });

    }

         //inactiv bnt send
    function btnSendInactivActive(){
        // document.querySelector('.btn-send').classList.add('inactivbtn'); 
        document.querySelector('.btn-send').style.display = "none"; 
    }

    function btnChangActive(){
        document.querySelector('.btn-change').style.display = 'block';
    }

    //inactive btn cheng
    function btnChangeInActive(){
        // document.querySelector('.btn-change').classList.add('inactivbtn'); 
        document.querySelector('.btn-change').style.display = "none"; 
    }


    