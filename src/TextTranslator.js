import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak..."
      />
      <br />
      <button onClick={speakText} disabled={isSpeaking}>
        Speak
      </button>
      <button onClick={stopSpeaking} disabled={!isSpeaking}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
