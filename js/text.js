

function speakLoud(t1) {
    var text = document.querySelector(t1);
    var speech = new SpeechSynthesisUtterance();
    
    speech.voice = speechSynthesis.getVoices()[1];
    speech.text = text.value;
    speech.rate = 0.9
    speech.lang = 'en-US'
    setInterval(() => {
        speechSynthesis.pause();
        speechSynthesis.resume();
     }, 5000);
    speechSynthesis.speak(speech)
    speech.onend = () => {document.getElementById('manipulated').innerHTML = 'Thanks for using WeBeMailing'}
}

