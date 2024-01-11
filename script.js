let timer = document.getElementById("timer");
let score = document.getElementById("score");
let word = document.getElementById("word");
let inp = document.getElementById("inp");
let total = 0;

function handleWords() {
    let str =
        "javascript developer challenge programming bootstrap intelligence technology algorithm keyboard interface application openai repository responsive keyboard creative innovation code gpt learning machine interface community web design backend frontend iteration function variable iteration version repository debugging iteration software framework responsive interface project development programming language challenge algorithm solution responsive iteration framework repository community";

    let wordArray = str.split(" ");
    let i = Math.floor(Math.random() * wordArray.length);
    word.innerHTML = wordArray[i];
}

let t = 6;

document.getElementById("startButton").addEventListener("click", function () {
    handleWords();
    inp.disabled = false;
    inp.focus();

    let watch = setInterval(function () {
        t--;
        timer.innerHTML = `${t}s`;
        if (t === 0) {
            clearInterval(watch);
            document.getElementById("card2").classList.remove("d-none");
            document.getElementById("card1").classList.add("d-none");
        }
    }, 1000);

    document.getElementById("startButton").classList.add("d-none");
});

inp.addEventListener("input", function (e) {
    if (e.target.value === word.innerHTML) {
        total++;
        handleWords();
        inp.value = "";
        score.innerHTML = `Score ${total}`;
        t += 4;
        document.getElementById("score-board").innerHTML = `Your Score ${total}`;
    }
});

document.getElementById("refreshButton").addEventListener("click", function () {
    // Reload the page
    location.reload();
});
