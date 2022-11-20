

function speakLoud(t1) {
    var text = document.querySelector(t1);
    var speech = new SpeechSynthesisUtterance();
    
    speech.voice = speechSynthesis.getVoices()[1];
    speech.text = text.value;
    setInterval(() => {
        speechSynthesis.pause();
        speechSynthesis.resume();
     }, 5000);
    speechSynthesis.speak(speech)
}



