// Detect when Youtube player state changes to complete, load new URL in tab
var player = document.getElementById("movie_player");
if (player){
  console.log("player found");
  player.addEventListener("onStateChange", function(state){
    console.log("state change");
    console.log(state);
      if(state === 0){
        console.log("video over");
        setTimeout(function(){
          window.location.href = "https://www.youtube.com/watch?v=glii-kazad8";
        }, 2000);
      }
  });
}
