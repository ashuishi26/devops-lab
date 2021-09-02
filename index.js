function checkAnswer(id){
    if(id=="option5"){
        document.getElementById(id).style.backgroundColor = "chartreuse";
    } else{
        document.getElementById(id).style.backgroundColor = "red";
    }
}

function checkAnswer(){
    let answer = document.getElementById("input").nodeValue.toLowerCase();
    if(answer=="switzerland"){
        document.getElementById("free-answer").innerHTML = "Your answer is Correct!";
        document.getElementById("free-answer").style.color = "chartreuse";
    } else {
        document.getElementById("free-answer").innerHTML ="Your answer is incorrect!";
        document.getElementById("free-answer").style.visibility = "visible";
    }
}