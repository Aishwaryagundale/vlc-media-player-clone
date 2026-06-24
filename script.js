// VLC Media Player Clone JavaScript



const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#video-Btn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const toast = document.querySelector(".toast");
const HandleInput = () => {
    console.log("input is clicked");
    videoInput.click();
}
const speedUpHandler = () =>{
const video = document.querySelector("#main .video");
if(video!==null){
    video.playbackRate += 0.1;
    console.log("speed was increased",video.playbackRate.toFixed(1));
  showToast(`Speed: ${video.playbackRate.toFixed(1)}X`);
}
}
const speedDownHandler = () =>{
    const video = document.querySelector("#main .video");
    if(video!==null && video.playbackRate > 0.25){
         video.playbackRate -= 0.1;
         console.log("speed was decreased",video.playbackRate.toFixed(1));
        showToast(`Speed: ${video.playbackRate.toFixed(1)}X`);
     }
    }
const volumeUpHandler = ()=>{
    const video = document.querySelector("#main .video");
    if(video!==null&&video.volume < 1){
    video.volume= Math.min(1, video.volume + 0.1);
       console.log("volume was increased",video.volume.toFixed(1));
      showToast(`Volume: ${Math.round(video.volume * 100)}%`);
    }
}
const volumeDownHandler = ()=>{
    const video = document.querySelector("#main .video");
    if(video!==null){
       video.volume= Math.max(0, video.volume - 0.1);
      console.log("volume was decreased",video.volume.toFixed(1));
      showToast(`Volume: ${Math.round(video.volume * 100)}%`);
    }
}
let toastTimer;

function showToast(message){
    toast.textContent = message;
    toast.style.display = "block";

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}
speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);
videoBtn.addEventListener("click",HandleInput);
const loadVideo = function (file){
     const link = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.src=link;
    video.setAttribute("class","video");
    video.controls=true;
    videoPlayer.innerHTML = "";
    videoPlayer.appendChild(video);
    video.play();
    video.volume = 0.7;
}
const SelectedFile= (obj) => {
    console.log("file is selected");
    const selectedFiles = obj.target.files[0];
    
    if (!selectedFiles) return;
    if (!selectedFiles.type.startsWith("video/")) {
    alert("Please select a video file");
    return;
}
   

   loadVideo(selectedFiles);
}
const HandleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (!file) return;
    if (! file.type.startsWith("video/")) {
    alert("Please select a video file");
    return;
}

    loadVideo(file);
}
videoInput.addEventListener("change", SelectedFile);
videoPlayer.addEventListener("dragover", (event) => {
    event.preventDefault();
});
videoPlayer.addEventListener("drop",HandleDrop);