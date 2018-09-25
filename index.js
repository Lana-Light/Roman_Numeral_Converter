//version 1

function convertToRoman(num) {
    var rom = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var rom2 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var rom3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var rom4 = ["", "M", "MM", "MMM"];
    num += "";
    num = num.split("").reverse();//[2,1]  [2]
    for (var i = num.length - 1; i >= 0; i--) { //i=1 i=0
        for (var j = 0; j < rom.length; j++) {
            if (num[i] == j) {
                switch (i) {
                    case 0: num[i] = rom[j]; break;
                    case 1: num[i] = rom2[j]; break;
                    case 2: num[i] = rom3[j]; break;
                    case 3: num[i] = rom4[j]; break;
                }
                break;
            }
        }
    } 
    return num.reverse().join("");
}
convertToRoman(12);

//version 2

function convertToRoman(num) {
   var ro = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];
   num += "";
   num = num.split("").reverse(); 
  for (var i = num.length - 1; i >= 0; i--) {  
      for (var j = 0; j < ro[i].length; j++) {
       if (num[i] == 0) { num[i] = ""; }
       else if (num[i].match(/[1-3]/)) { 
   let num2 = num[i];
   num[i] = '';
   for (let k = 0; k < Number(num2); k++) { num[i] += ro[i][0]; }
         }
  else if (num[i] == 4) { num[i] = ro[i][0] + ro[i][1]; } 
  else if (num[i] == 9) { num[i] = ro[i][0] + ro[i][2]; } 
       else if (num[i].match(/[5-8]/)) {
   let num2 = num[i]; 
   num[i] = ro[i][1]; 
   for (let k = 5; k < Number(num2); k++) { num[i] += ro[i][0]; }
          }
       }
   } 
  return num.reverse().join("");
}
convertToRoman(75); 
