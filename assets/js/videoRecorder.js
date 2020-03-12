const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = event => {
  console.log(event);
};

const startRecording = stream => {
  const videoRecoder = new MediaRecorder(streamObject);
  videoRecoder.start();
  videoRecoder.addEventListener("dataavailable", handleVideoData);
  console.log(videoRecoder);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.textContent = "녹화 중단하기";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "영상을 촬영할 수 없습니다.";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};
function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recordContainer) {
  console.log("실행 중입니다");
  init();
}
