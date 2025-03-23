function add(){
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);

    let res = x+y;
    document.getElementById("res").value = res;
}

function sub(){
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);

    let res = x-y;
    document.getElementById("res").value = res;
}

function mul(){
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);

    let res = x*y;
    document.getElementById("res").value = res;
}

function div(){
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);

    let res = x/y;
    document.getElementById("res").value = res;
}