let Count = document.getElementById("Count");
let Error = document.getElementById("Error");
let cnt = 0;
function Enter() {
    cnt = ++cnt;
    Count.style.color = "green";
    Count.innerText = cnt;
    console.log(cnt);
}

function Exit() {
    if(cnt > 0) {
        cnt = --cnt;
        Count.style.color = "red";
        Count.innerText = cnt;
    } else {
        Error.innerText=("No People Entered To Remove!");
        setTimeout(function() {
            Error.innerText="";
            }, 3000);
        }
    }
