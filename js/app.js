'use strict';
var correctAnswer = 0;

alert('Do you want to know more about Joyce? She is a very cool developer!');
alert('Here are some fun facts about Joyce!');

function language(correct) {
  var answerLanguage = prompt('Joyce is proficient in oral and written Chinese-English translation - True or False?').toUpperCase();
  console.log('answerLanguage', answerLanguage);
  if (answerLanguage === 'T' || answerLanguage === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
    
  } else if (answerLanguage === 'F' || answerLanguage === 'FALSE') {
    alert('No, that\'s incorrect.');
    
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    
  }
  return correct;
}

language(correctAnswer);
console.log ('Score Log: ', correctAnswer);

function work(correct) {
  var answerWork = prompt('Joyce had 10 years of experience working in finance and accounting – True or False?').toUpperCase();
  console.log('answerWork', answerWork);
  if (answerWork === 'T' || answerWork === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
    console.log ('Score Log: ', correctAnswer);
  } else if (answerWork === 'F' || answerWork === 'FALSE') {
    alert('No, that\'s incorrect.');
    console.log ('Score Log: ', correctAnswer);
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    console.log ('Score Log: ', correctAnswer);
  }
  return correct;
}

work(correctAnswer);
console.log ('Score Log: ', correctAnswer);

function constellation(correct) {
var answerConstellation = prompt('Joyce\'s zodiacal constellation is Cancer – T or F?').toUpperCase();
console.log('answerConstellation', answerConstellation);
if (answerConstellation === 'T' || answerConstellation === 'TRUE') {
  alert('Yes, that\'s correct!');
  correctAnswer++;
  console.log ('Score Log: ', correctAnswer);
} else if (answerConstellation === 'F' || answerConstellation === 'FALSE') {
  alert('No, that\'s incorrect.');
  console.log ('Score Log: ', correctAnswer);
} else {
  alert('That was not the answer I wanted... Try True or False next time.');
  console.log ('Score Log: ', correctAnswer);
}
return correct;
}

constellation(correctAnswer);

function hobby(correct) {
  var answerHobby = prompt('Joyce makes dance choreography – T or F?').toUpperCase();
  console.log('answerHobby', answerHobby);
  if (answerHobby === 'T' || answerHobby === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
    console.log ('Score Log: ', correctAnswer);
  } else if (answerHobby === 'F' || answerHobby === 'FALSE') {
    alert('No, that\'s incorrect.');
    console.log ('Score Log: ', correctAnswer);
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    console.log ('Score Log: ', correctAnswer);
  }
  return correct;
}

hobby(correctAnswer);
console.log ('Score Log: ', correctAnswer);

function food(correct) {
  var answerFood = prompt('Joyce loves eating rice dumplings wrapped in bamboo leaves in Dragon Festival – T or F?').toUpperCase();
  console.log('answerFood', answerFood);
  if (answerFood === 'T' || answerFood === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
    console.log ('Score Log: ', correctAnswer);
  } else if (answerFood === 'F' || answerFood === 'FALSE') {
    alert('No, that\'s incorrect.');
    console.log ('Score Log: ', correctAnswer);
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    console.log ('Score Log: ', correctAnswer);
  }
  return correct;
}

food(correctAnswer);
console.log ('Score Log: ', correctAnswer);

function countries(correct) {
  var i;
  var answerNum = Number(prompt ('How many countries has Joyce traveled around the world? Type a number. You have four chances to get the right answer.'));

  for (i=0; i<3; i++) {
    if (answerNum < 10) {
      answerNum = Number(prompt('The number is too low. Please try again.'));
    } else if (answerNum > 10) {
      answerNum = Number(prompt('The number is too high. Please try again.'));
    } else if (answerNum === 10) {
      alert('That is coorect!');
      break;
    } else {
      answerNum = Number(prompt ('That was not the answer I wanted. Please try a number.'));
    }
  }

  if (answerNum!==10) {
    alert('You have used all four chances. Sorry you didn\'t get the right answer.');
    console.log ('Score Log: ', correctAnswer);
  }
  if (answerNum===10) {
    alert('Congratulations! You\'ve it right.');
    correctAnswer++;
    console.log('answerNum', answerNum);
    console.log ('Score Log: ', correctAnswer);
  }
  return correct;
}

countries(correctAnswer);
console.log ('Score Log: ', correctAnswer);

function states(correct) {
  var states = ['WASHINGTON', 'WA', 'CALIFORNIA', 'CA', 'NEW YORK', 'NY', 'WEST VIRGINIA', 'WV', 'HAWAII', 'HI'];
  var statesCount = 0;
  var stateStatus = false;

  while (statesCount < 5) {
    var answerStates = prompt ('What states has Joyce visited in the United States? You have six chances to get the right answer.').toUpperCase();
    for (var x=0; x < states.length; x++) {
      if (answerStates === states[x]) {
        console.log('answerSates', answerStates);
        alert('That is correct! Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
        statesCount = 100;
        stateStatus = true;
        break;
      }
    }
    if (stateStatus === true) {
      break;
    } else {
      alert ('The answer is incorrect. Please try again.');
      statesCount++;
    }
  }

  if (stateStatus === true) {
    alert ('Good job!');
  } else {
    answerStates = prompt ('What states has Joyce visited in the United States? You have six chances to get the right answer.').toUpperCase();
    for (x=0; x < states.length; x++) {
      if (answerStates === states[x]) {
        console.log(answerStates);
        alert('Yes, that is correct! Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
        console.log ('Score Log: ', correctAnswer);
        stateStatus = true;
        break;
      }
    }
    if (stateStatus === true) {
      alert('Good job!');
    } else {
      alert ('You have used up 6 chances. You did not get the correct answer.');
    }
  }

  if (stateStatus === true) {
    alert('Wow! You are really good!');
    correctAnswer++;
    console.log ('Score Log: ', correctAnswer);
  } else {
    alert(' The correct answer is that Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
  }
  return correct;
}

states(correctAnswer);
console.log ('Score Log: ', correctAnswer);

alert('Congratulation! You got ' + correctAnswer + ' correct out of seven questions.');

