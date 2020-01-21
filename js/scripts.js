$(document).ready(function() {
  $("form").submit(function(event) {
    var origSentence = $("#sentence").val();
    var splitOrigSentence = origSentence.split(' ');
  
    console.log(splitOrigSentence[2]);
    
    var longerthanthree = [];

    splitOrigSentence.forEach(function(word) {
      if(word.length >= 3)
      {longerthanthree.push(word);}
    });
   console.log(longerthanthree)
  
    var reverse = longerthanthree.reverse().join();
    console.log(reverse);

    $(".output").text(reverse);

   event.preventDefault();  
  
});
});

