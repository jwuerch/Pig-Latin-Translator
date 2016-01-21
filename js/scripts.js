var pigLatin = function(word) {
  var array = word.split(" ");
  var finalArray = [];
  array.forEach(function(str) {
   str = str.toLowerCase();
   if (str[0].match(/[aeiou]/)) {
     str = str + "ay";
   }

   else if (str.substr(0,2) === "qu") {
     str = str.replace("qu", '');
     str = str + "quay";
   }

   else if (str.substr(0,3) === "squ") {
     str = str.replace("squ", '');
     str = str + "squay";
   }

    else {
      str = str.split("")
      while (str[0].match(/[b-df-hj-np-tv-z]/)) {
        str.push(str[0])
        str.shift(str[0])
      }
      str = str.join("");
      str = str + "ay"
    };
    finalArray.push(str);
  });
  var result = finalArray.join(" ");
    console.log(result)
  return result;
 };

$(document).ready(function() {
  $(".piggyForm").submit(function(event) {
    var phrase = $("#inputForm").val();
    var result = pigLatin(phrase);

    $(".translation").text(result);


    (event).preventDefault();
  });

});

 // var input = prompt("Lay some eloquence on me");


   //
  //  str = str.replace(/[.,!?:;'"-]+/g, '');
