let counter = 0;
let history = [];

function increase() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("reset").style.display = "none";
  document.getElementById("save").style.display = "inline";
}

function reset(){
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}

function decrease(){
  counter--;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("reset").style.display = "none";
  document.getElementById("save").style.display = "inline";
}

function save(){
  document.getElementById("history").innerHTML = ""; 
  history.unshift(counter);
  do {
    for(let i=0; i < history.length ;i++){
    document.getElementById("history").innerHTML += history[i] + "<br>"; 
    }  
    document.getElementById("save").style.display = "none";
    document.getElementById("reset").style.display = "inline";
    // document.getElementById("history").style.backgroundImage = "linear-gradient(to top, rgba(0, 0, 0, 0.062) 80%, rgb(0, 255, 11)55%";
  
  } while (history.length > i);

}


