window.addEventListener('load',()=>{
    const sounds =document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".pads div");
    visual = document.querySelector('.visual')
    const colors =[
        "#60d394",
        "red",
        "rebeccapurple",
        "black",
        "salmon",
        "violet"

    ];
    
    // console.log(sounds[0])

//sounds
pads.forEach((pad ,index) => {

    pad.addEventListener('click',function(){
    sounds[index].currentTime=0;    
    sounds[index].play()
    createBubbles(index);
    });
}); 
//creating bubble
const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor =colors[index];
    bubble.style.animation = "jump 1s ease";
    // bubble.addEventListener('animationend',function(){
    //     visual.removeChild(this)
    // });
 }; 
});
