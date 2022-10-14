const playIcon = document.querySelector(".playIcon");
const pauseIcon = document.querySelector(".pauseIcon");
const stopIcon = document.querySelector(".stop");
const video = document.querySelector("video");
const progressBar = document.querySelector("#progressBar");
const time = document.querySelector("#time");



playIcon.addEventListener('click', (e)=>{
    video.play();
    updatePlayPauseIcon('play');
})

pauseIcon.addEventListener('click',(e)=>{
    video.pause();
    updatePlayPauseIcon('pause')
})
video.addEventListener('click',()=>{
    if(video.paused){
        video.play();
        updatePlayPauseIcon('play')
    }
    else
        {video.pause();
        updatePlayPauseIcon('pause')}
    
})

stopIcon.addEventListener('click',()=>{
    video.currentTime = 0;
    video.pause();
})

video.addEventListener('timeupdate', ()=>{
    console.log(video.currentTime);
    progressBar.value = (video.currentTime / video.duration) * 100;
    time.innerText = Math.round(video.duration - video.currentTime);
})

progressBar.addEventListener('change',()=>{
    video.currentTime = (progressBar.value * video.duration) / 100;

    
    
})




function updatePlayPauseIcon(currentIcon){
    if(currentIcon === 'play'){
        playIcon.style.display= "none";
        pauseIcon.style.display= "block";
    }
    if(currentIcon === 'pause'){
        playIcon.style.display= "block";
        pauseIcon.style.display= "none";
    }
}