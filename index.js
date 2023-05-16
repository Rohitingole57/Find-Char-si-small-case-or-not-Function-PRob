//PROBLEM: FIND IF THE CHARACTOR IS SMALL CASE OR NOT.
function charactor(char){
var lower = "abcdefghijklmnopqrstuvwxyz";
for(var i =0; i<=lower.length; i++)
{
    if(char == lower[i]){
        // console.log("it is a small case charactor")
        return char;
    }
}
}
var char = charactor("z");
console.log("it is a small case charactor",char);
