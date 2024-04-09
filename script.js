document.getElementById('play-audio').addEventListener('click', function() {
    const description = document.getElementById('ibuprofen-description').innerText;
    speak(description);
  });
  
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }