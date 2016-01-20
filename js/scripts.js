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
   
 }




  //  str = str.replace(/[.,!?:;'"-]+/g, '');
