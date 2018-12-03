// alert("Hello, this is a test")
function mainCode(){


 function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // if(!audio){
    //     return;  
    // } else{
    //     audio.currentTime = 0;
    //     audio.play();
    //     key.classList.add("playing");

    // }

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    };

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== "transform") return;
    this.classList.remove("palying");
}

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
    window.addEventListener("keydown", playSound);



}//maoin funciton
// mainCode();

function copiedCode(){
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
    
      function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
    
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
      }
    
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      window.addEventListener('keydown', playSound);

    //
}//Function Bracket
copiedCode();