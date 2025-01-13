
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        var butHtml = this.innerHTML;
        console.log(butHtml);
        makesound(butHtml);
       
    });
}


document.addEventListener("keypress", function(event) {
    console.log(event.key);

    makesound(event.key);
    animate(event.key);
  
  
  });


function animate(key)
{
    var selectedclass = "."+key;
    document.querySelector(selectedclass).classList.add("opacity");
    setTimeout(function(){
        document.querySelector(selectedclass).classList.remove("opacity");
        },100
    );
}

function makesound(key)
{
    switch(key)
    {
        case "w":
            var a1 = new Audio("sound/sounds_tom-1.mp3");
            a1.play();
            break;
        case "a":
            var a2 = new Audio("sound/sounds_tom-2.mp3");
            a2.play();
            break;

        case "s":
            var a3 = new Audio("sound/sounds_tom-3.mp3");
            a3.play();
            break;
        case "d":
            var a4 = new Audio("sound/sounds_tom-4.mp3");
            a4.play();
            break;

        case "j":
            var a5 = new Audio("sound/sounds_snare.mp3");
            a5.play();
            break;
        case "k":
            var a6 = new Audio("sound/sounds_crash.mp3");
            a6.play();
            break;

        case "l":
            var a7 = new Audio("sound/sounds_kick-bass.mp3");
            a7.play();
            break;
        default:
            break;
    }
}