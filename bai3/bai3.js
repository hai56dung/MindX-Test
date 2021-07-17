let btnRandomEl = document.querySelector(".btn");
let hexIdEl = document.querySelector(".hexId");
let copyEl = document.querySelector("#copy");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btnRandomEl.addEventListener("click",function(){
    $("#colorpad").css("background-color", getRandomColor());
    hexIdEl.innerHTML = getRandomColor();
    
})

copyEl.addEventListener("click",handleClickButtonCopy);
function handleClickButtonCopy() {
  navigator.clipboard
    .writeText(hexIdEl.innerHTML)
    .then(() => alert("copy successful"));
}

