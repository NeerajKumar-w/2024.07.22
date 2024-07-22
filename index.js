let answers = document.getElementsByClassName("false");
let crctanswer = document.getElementById("correct");
let crctopt = document.getElementById("crctopt");
function checkans(bool, opt) {
    if (bool) {
        crctanswer.style.backgroundColor = "lightgreen";
        crctopt.style.backgroundColor = "lightgreen";
    }
    else {
        for (let i = 0; i < answers.length; i++){
            answers[i].style.backgroundColor = "red"
        }
        crctanswer.style.backgroundColor = "lightgreen";
        crctopt.style.backgroundColor = "lightgreen";
    }
}