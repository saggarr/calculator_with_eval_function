function DeleteMe(){
    document.getElementById("MyResult").value = ""; //delete kore. mane empty string bosay
}

function calculator(NewValue){
    document.getElementById("MyResult").value += NewValue; //input a ek value debar pore pashe arekta notun value add kore
}

function Answer(){
    var a =document.getElementById("MyResult").value; //input value ke a variable er vitor rakhe
    var b = eval(a); //eval ekta builtin function ja mathmetical operation kore
    document.getElementById("MyResult").value = b;
}