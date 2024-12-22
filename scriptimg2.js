var submitAnswer = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select one');
    }
    else if (val == "Yes") {
        alert('I thought it would be funny to leave this page blank to fit in with the question, My bad');
    }
  //  else if (val == "No") {
   //     alert('Great!');
   // }
    else {
        alert('Lets hope not! This was intentionally not styled to fit with the question');
    }
    
  };