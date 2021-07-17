let btnRandomEl = document.querySelector(".btn");
let hexIdEl = document.querySelector(".hexId");
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
    hexIdEl.innerHTML = $("#colorpad");
    
})
