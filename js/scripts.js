var pigLatin = function(str) {
   if (str[0].match(/[aeiou]/)) {

     return str = str + "ay";
   } else if (str.substr(0,2) === "qu") {
     str = str.replace("qu", '');
     return str = str + "quay";
   }
    else if (str.substr(0,3) === "squ") {
     str = str.replace("squ", '');
     return str = str + "squay";
   }
    else {
      str = str.split("")
      while (str[0].match(/[b-df-hj-np-tv-z]/)) {
        str.push(str[0])
        str.shift(str[0])
      }
      str = str.join("");
      str = str + "ay"
      return str
    };
 };



   //
  //  str = str.replace(/[.,!?:;'"-]+/g, '');
