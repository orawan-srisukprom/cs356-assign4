function calculate(){
    var Sub = document.getElementById("Sub");
    var Tip = document.getElementById("Tip");
    var sub = Number(Sub.value);
    var tip = Number(Tip.value);
    var total = sub+(sub*(tip/100));
    document.getElementById("total").innerHTML = "$" + total
}