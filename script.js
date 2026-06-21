// VLC Media Player Clone JavaScript



const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#video-Btn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const HandleInput = () => {
    console.log("input is clicked");
    videoInput.click();
}
const speedUpHandler = () =>{
const video = document.querySelector("#main .video");
if(video!==null){
      video.playbackRate += 0.1;
    console.log("speed was increased",video.playbackRate.toFixed(1));
}
}
const speedDownHandler = () =>{
    const video = document.querySelector("#main .video");
    if(video!==null && video.playbackRate > 0.25){
         video.playbackRate -= 0.1;
         console.log("speed was decreased",video.playbackRate.toFixed(1));
     }
    }
const volumeUpHandler = ()=>{
    const video = document.querySelector("#main .video");
    if(video!==null&&video.volume < 1){
        video.volume= Math.min(1, video.volume + 0.1);
       console.log("volume was increased",video.volume.toFixed(1));
    }
}
const volumeDownHandler = ()=>{
    const video = document.querySelector("#main .video");
    if(video!==null){
        video.volume= Math.max(0, video.volume - 0.1);
      console.log("volume was decreased",video.volume.toFixed(1));
    }
}
speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);
videoBtn.addEventListener("click",HandleInput);
const SelectedFile = (obj) => {
    console.log("file is selected");
    const selectedFiles = obj.target.files[0];
    const link = URL.createObjectURL(selectedFiles);
    const video = document.createElement("video");
    video.src=link;
    video.setAttribute("class","video");
    video.controls=true;
    videoPlayer.innerHTML = "";
    videoPlayer.appendChild(video);
    video.play();
    video.volume = 0.7;


    // now we have the file we need to convert it 
    //src -> base64
}
videoInput.addEventListener("change", SelectedFile);