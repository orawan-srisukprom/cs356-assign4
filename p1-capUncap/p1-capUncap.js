
function myChange(){
    var myText = document.getElementById("myText");
    var ch = myText.value;
    var gg = ch[0].toLowerCase()+ch.slice(1).toUpperCase();
    document.getElementById("result").innerHTML = gg
}