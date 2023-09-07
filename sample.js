
//0 1 1 2 3 5 
/*
*
**
***
****
*****
*/
var n =5;
string = "";
for(var i=n; i>=1; i--){
    for(var j=1; j<=i; j++)
    {
       string += "*";
    }
    string +="\n";
}
console.log(string);