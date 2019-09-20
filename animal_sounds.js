/*-------------------------------------------------------------------------------*/
/*-- OBJECTS --*/
	var Languages = {
		English:{
			cat:{animalName:'cat', animalSound:'meow', nameAudio:'resources/english-cat-name.mp3', soundAudio:'resources/english-cat-sound.mp3'},
			dog:{animalName:'dog', animalSound:'woof woof', nameAudio:'resources/english-dog-name.mp3', soundAudio:'resources/english-dog-sound.mp3'},
			duck:{animalName:'duck', animalSound:'quack quack', nameAudio:'resources/english-duck-name.mp3', soundAudio:'resources/english-duck-sound.mp3'},
			pig:{animalName:'pig', animalSound:'oink oink', nameAudio:'resources/english-pig-name.mp3', soundAudio:'resources/english-pig-sound.mp3'},
			rooster:{animalName:'rooster', animalSound:'cock-a-doodle-do', nameAudio:'resources/english-rooster-name.mp3', soundAudio:'resources/english-rooster-sound.mp3'},
			cow:{animalName:'cow', animalSound:'moo', nameAudio:'resources/english-cow-name.mp3', soundAudio:'resources/english-cow-sound.mp3'}

		},
		Spanish:{
			cat:{animalName:'gato', animalSound:'miau', nameAudio:'resources/spanish-cat-name.mp3', soundAudio:'resources/spanish-cat-sound.mp3'},
			dog:{animalName:'perro', animalSound:'guau guag', nameAudio:'resources/spanish-dog-name.mp3', soundAudio:'resources/spanish-dog-sound.mp3'},
			duck:{animalName:'pato', animalSound:'cuac cuac', nameAudio:'resources/spanish-duck-name.mp3', soundAudio:'resources/spanish-duck-sound.mp3'},
			pig:{animalName:'cerdo', animalSound:'oinc oinc', nameAudio:'resources/spanish-pig-name.mp3', soundAudio:'resources/spanish-pig-sound.mp3'},
			rooster:{animalName:'gallo', animalSound:'cu-curru-cu-cú', nameAudio:'resources/spanish-rooster-name.mp3', soundAudio:'resources/spanish-rooster-sound.mp3'},
			cow:{animalName:'vaca', animalSound:'mu', nameAudio:'resources/spanish-cow-name.mp3', soundAudio:'resources/spanish-cow-sound.mp3'}
		},
		Portuguese:{
			cat:{animalName:'gato', animalSound:'miau', nameAudio:'resources/portuguese-cat-name.mp3', soundAudio:'resources/portuguese-cat-sound.mp3'},
			dog:{animalName:'cachorro', animalSound:'au au', nameAudio:'resources/portuguese-dog-name.mp3', soundAudio:'resources/portuguese-dog-sound.mp3'},
			duck:{animalName:'pato', animalSound:'qua qua', nameAudio:'resources/portuguese-duck-name.mp3', soundAudio:'resources/portuguese-duck-sound.mp3'},
			pig:{animalName:'porco', animalSound:'oinc oinc', nameAudio:'resources/portuguese-pig-name.mp3', soundAudio:'resources/portuguese-pig-sound.mp3'},
			rooster:{animalName:'galo', animalSound:'cu-curo-cu-cú', nameAudio:'resources/portuguese-rooster-name.mp3', soundAudio:'resources/portuguese-rooster-sound.mp3'},
			cow:{animalName:'vaca', animalSound:'mu', nameAudio:'resources/portuguese-cow-name.mp3', soundAudio:'resources/portuguese-cow-sound.mp3'}
		},
		German:{
			cat:{animalName:'katze', animalSound:'miau', nameAudio:'resources/german-cat-name.mp3', soundAudio:'resources/german-cat-sound.mp3'},
			dog:{animalName:'hund', animalSound:'wau wau', nameAudio:'resources/german-dog-name.mp3', soundAudio:'resources/german-dog-sound.mp3'},
			duck:{animalName:'ente', animalSound:'quack quack', nameAudio:'resources/german-duck-name.mp3', soundAudio:'resources/german-duck-sound.mp3'},
			pig:{animalName:'schwein', animalSound:'grunz grunz', nameAudio:'resources/german-pig-name.mp3', soundAudio:'resources/german-pig-sound.mp3'},
			rooster:{animalName:'hahn', animalSound:'ki-keri-ki', nameAudio:'resources/german-rooster-name.mp3', soundAudio:'resources/german-rooster-sound.mp3'},
			cow:{animalName:'kuh', animalSound:'mmuuh', nameAudio:'resources/german-cow-name.mp3', soundAudio:'resources/german-cow-sound.mp3'}
		},
		Korean:{
			cat:{animalName:'goyang-i', animalSound:'yaong', nameAudio:'resources/korean-cat-name.mp3', soundAudio:'resources/korean-cat-sound.mp3'},
			dog:{animalName:'gae', animalSound:'mung mung', nameAudio:'resources/korean-dog-name.mp3', soundAudio:'resources/korean-dog-sound.mp3'},
			duck:{animalName:'ori', animalSound:'kkwek kkwek', nameAudio:'resources/korean-duck-name.mp3', soundAudio:'resources/korean-duck-sound.mp3'},
			pig:{animalName:'dwaeji', animalSound:'kkool kkool', nameAudio:'resources/korean-pig-name.mp3', soundAudio:'resources/korean-pig-sound.mp3'},
			rooster:{animalName:'sutalg', animalSound:'kko-kkee-oh', nameAudio:'resources/korean-rooster-name.mp3', soundAudio:'resources/korean-rooster-sound.mp3'},
			cow:{animalName:'so', animalSound:'eum mae', nameAudio:'resources/korean-cow-name.mp3', soundAudio:'resources/korean-cow-sound.mp3'}
		},
		Japanese:{
			cat:{animalName:'neko', animalSound:'nyan', nameAudio:'resources/japanese-cat-name.mp3', soundAudio:'resources/japanese-cat-sound.mp3'},
			dog:{animalName:'inu', animalSound:'wan wan', nameAudio:'resources/japanese-dog-name.mp3', soundAudio:'resources/japanese-dog-sound.mp3'},
			duck:{animalName:'ahiru', animalSound:'ga ga', nameAudio:'resources/japanese-duck-name.mp3', soundAudio:'resources/japanese-duck-sound.mp3'},
			pig:{animalName:'buta', animalSound:'boo boo', nameAudio:'resources/japanese-pig-name.mp3', soundAudio:'resources/japanese-pig-sound.mp3'},
			rooster:{animalName:'ondori', animalSound:'ko-ke-kok-ko-o', nameAudio:'resources/japanese-rooster-name.mp3', soundAudio:'resources/japanese-rooster-sound.mp3'},
			cow:{animalName:'ushi', animalSound:'mo mo', nameAudio:'resources/japanese-cow-name.mp3', soundAudio:'resources/japanese-cow-sound.mp3'}
		}
	};
	
	
	
/*-------------------------------------------------------------------------------*/
/*-- GLOBAL VARIABLES --*/

var animalSoundAudio;
var animalNameAudio;

/*-- GAME PAGE --*/
//generate 4 random numbers without a repeating digit
var randomNum1;
var randomNum2;
var randomNum3;
var randomNum4;
var randomNums;
//variable to get a random array item
var randomAnimal;
//the correct animal
var correctAnimal;
var correctSound;
//the guessed animal
var guess;

/*-- CONTACT PAGE --*/
var isValid



/*-------------------------------------------------------------------------------*/
/*-- FUNCTIONS --*/

/*---- LANGUAGE PAGE ----*/
function languageSelect (languageParameter){
	//loop to change divs when language switches
	for (var i = 0; i < Object.keys(Languages[languageParameter]).length; i++) {
		//change animal names
		$('#' + Object.keys(Languages[languageParameter])[i] + 'Name').html(Languages[languageParameter][Object.keys(Languages[languageParameter])[i]].animalName);
		//change animal sounds
		$('#' + Object.keys(Languages[languageParameter])[i] + 'Sound').html(Languages[languageParameter][Object.keys(Languages[languageParameter])[i]].animalSound);
		//change animal name audio file on language page
		$('#'+ Object.keys(Languages[languageParameter])[i] + 'NameAudio').attr("src",Languages[languageParameter][Object.keys(Languages[languageParameter])[i]].nameAudio);
		//change animal sound audio file on language page
		$('#'+ Object.keys(Languages[languageParameter])[i] + 'SoundAudio').attr("src",Languages[languageParameter][Object.keys(Languages[languageParameter])[i]].soundAudio);
		}
}

/*---- ANIMAL PAGE ----*/
function animalSelect(animalParameter){
	//change animal names
	$('#animal li .animalName').html(animalParameter);
	
	//clear unordered list
	$('#animalSound').html('');
	
	//remove color code
	$('#animal li').removeClass();
	//add color code
	$('#animal li').addClass(animalParameter);
	
	//change animal name audio file on animal page
	$('#EnglishNameAudio').attr("src", Languages.English[animalParameter].nameAudio);
	//generate all animal sounds based on the selected animal
	for (var i = 0; i < Object.keys(Languages.English).length; i++) {
		//chanage animal image			
		$('#animalImage').html('<img src="resources/' + animalParameter + '.jpg" alt="' + animalParameter + '">');
		//change animal sounds
		$('#animalSound').append('<li class="animalSound" id="' + Object.keys(Languages)[i] + 'Sound">' + Object.keys(Languages)[i] + ': ' + Languages[Object.keys(Languages)[i]][animalParameter].animalSound + '</li>');
		$('#'+Object.keys(Languages)[i]+'SoundAudio').attr("src", Languages[Object.keys(Languages)[i]][animalParameter].soundAudio);
		
	}
}

/*---- MATCHING GAME PAGE ----*/
/*------ Random number function --------*/
function randomizer (animals){
	randomNum1 = Math.floor(Math.random() * animals);
	
	do{
		randomNum2 = Math.floor(Math.random() * animals);
	} while (randomNum2 == randomNum1);
	

	do{
		randomNum3 = Math.floor(Math.random() * animals);
	} while (randomNum3 == randomNum1 || randomNum3 == randomNum2);
	
	do{
		randomNum4 = Math.floor(Math.random() * animals);
	} while (randomNum4 == randomNum1 || randomNum4 == randomNum2 || randomNum4 == randomNum3);
	
	randomNums = [randomNum1, randomNum2, randomNum3, randomNum4];
}
		
function gameSelect(gameParameter){	
	
	//call randomizer function with the number of animals as the parameter
	randomizer (Object.keys(Languages[gameParameter]).length);
	
	//get random number from array for the correct animal
	randomAnimal = Math.floor(Math.random() * 4);
	
	//generate correct random animal sound
	$('#gameClue #gameSound').html('Which animal goes...<br>' + Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[randomAnimal]]].animalSound);
	//get audio for random animal sound
	$('#gameSoundAudio').attr("src", Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[randomAnimal]]].soundAudio);
	correctSound = Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[randomAnimal]]].animalSound;
	
	//put correct animal in variable
	correctAnimal = Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[randomAnimal]]].animalName;
	console.log('correct animal is: ' + correctAnimal + ' and it goes ' + correctSound);
	
	//loop to generate list based on the numbers in the array
	for (var i = 0; i < randomNums.length; i++){
		console.log(Object.keys(Languages[gameParameter])[randomNums[i]]);
		//generate animal image for game
		$('#animalImage' + i).html('<img src="resources/' + Object.keys(Languages[gameParameter])[randomNums[i]] + '.jpg" alt="' + Object.keys(Languages[gameParameter])[randomNums[i]] + '">');
		//change animal names
		$('#animalName' + i).html(Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[i]]].animalName);
		//attach value to li
		$('#listItem' + i).attr("value", Languages[gameParameter][Object.keys(Languages[gameParameter])[randomNums[i]]].animalName);
		//color code
		$('#listItem' + i).addClass(Languages.English[Object.keys(Languages.English)[randomNums[i]]].animalName);
		}
}







/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------- DO WHEN DOCUMENT IS READY --------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/

$(function(){

/*-- EVENT LISTENERS --*/

	//play animal name
	$(".animalName").on('click', function(){
		//play audio based on the id of list item clicked
		animalNameAudio = document.getElementById(this.id + 'Audio');
		animalNameAudio.play();
	});
	
	//play animal sound
	$(".animalSound").on('click', function(){
		//play audio based on the id of list item clicked
		animalSoundAudio = document.getElementById(this.id + 'Audio');
		animalSoundAudio.play();
	});
	
	$("#animalSound").on('click', 'li', function(){
		//play audio based on the id of list item clicked
		animalSoundAudio = document.getElementById(this.id + 'Audio');
		animalSoundAudio.play();
	});
	
	/*-------------------------------------------------------------------------------*/
	/*-- LANGUAGE PAGE --*/
	//initialize page
	languageSelect ("English");
	//event listener to select on language page
	$('#languageSelect').change(function(){
		languageSelect (this.value);
	});
	
	/*-------------------------------------------------------------------------------*/
	/*-- ANIMAL PAGE --*/
	//initialize page
	animalSelect("cat");
	//event listener to select on animal page
	$('#animalSelect').change(function(){
		animalSelect(this.value)
	});
	
	/*-------------------------------------------------------------------------------*/
	/*-- MATCHING GAME PAGE --*/
	//initialize page
	gameSelect("English");
	//event listener to select on game page
	$('#languageSelectGame').change(function(){
		//remove disable classes
		for (var i = 0; i < randomNums.length; i++){
			$('#listItem' + i).removeClass();
		}
		//change reset button if from previous game
		$('#playAgain').html('Reset');
		//new game
		gameSelect(this.value);
	

	});
	
	//event listener to li on game page
	$('#gameGuess li').on('click', function(){
		//get guess
		guess = $(this).attr('value');
		console.log('the animal guess is ' + guess);
		console.log(randomNums.length);
		
		//loop to generate list based on the numbers in the array
		for (var i = 0; i < randomNums.length; i++){
			if ($('#listItem' + i).attr("value") == correctAnimal){
				//highlight correct answer
				console.log('List item ' + i + ' is ' + $('#listItem' + i).attr("value") + ' and it equals ' + correctAnimal);
				$('#listItem' + i).addClass('correct');
			}else{
				//no more guesses
				console.log('List item ' + i + ' is ' + $('#listItem' + i).attr("value") + ' and it does not equal ' + correctAnimal);
				$('#listItem' + i).addClass('disabled');
			}
		}
		
		if (correctAnimal == guess){
			//correct
			$('#gameClue #gameSound').html('Correct!<br>The ' + correctAnimal + ' goes ' + correctSound + '!');
		}else{
			//wrong
			$('#gameClue #gameSound').html('Sorry.<br>The ' + correctAnimal + ' goes ' + correctSound + '.');
		}
		$('#playAgain').html('Play Again?');
		
		
	});
	
	//event listener to reset game
	$('#playAgain').on('click', function(){
		//remove disable classes
		for (var i = 0; i < randomNums.length; i++){
			$('#listItem' + i).removeClass();
		}
		//change reset button
		$('#playAgain').html('Reset')
		
		gameSelect($('#languageSelectGame :selected').attr('value'));
		
		
	});
	
	/*-- CONTACT PAGE --*/
	
	$('#submit').on('click', function(){
		isValid = $('#suggest').validate().form();
		if (isValid==true){
			$('#suggest')[0].reset();
			}
	});
	
	//form event listener 
    $('#suggest').validate({
        //create class for error
        errorClass: "formError",
        
        //define rules
        rules: {
            //comma for next validation item
            name: {
                required: true,
                //length of name is at least 2
                minlength: 2,
                maxlength: 10
                
            },
            email:{
	            required: true,
                email: true
            },
            languageSuggest:{
	            require_from_group: [1, ".suggest-group"]
            },
            animalSuggest:{
	            require_from_group: [1, ".suggest-group"]
            }
            
        }
        
        
    });

});