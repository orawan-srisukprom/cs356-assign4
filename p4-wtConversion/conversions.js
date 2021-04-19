function CalculateWeight(){
    var num = document.getElementById("num");
    // var kg = document.getElementById("kg");
    // var lb = document.getElementById("lb");
    var sel = document.getElementById("sel");
    if(sel.value == "kgtopounds"){
        document.getElementById("result").innerHTML = Number(num.value)*2.20462262;
    }
    else {document.getElementById("result").innerHTML = Number(num.value)*0.45359237;}
}