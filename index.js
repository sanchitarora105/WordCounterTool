function cutter(){
let chars=  document.getElementById('task').value.length;
let a=(30-chars);
if(chars>30){
 document.getElementById('output').innerHTML="You have exceeded the word limit!"
}
else{document.getElementById('output').innerHTML= "Number of characters entered are " + chars +". You are left with " + a + " characters."}
}
