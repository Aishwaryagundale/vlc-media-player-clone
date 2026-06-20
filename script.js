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


    // now we have the file we need to convert it 
    //src -> base64
}
videoInput.addEventListener("change", SelectedFile);