import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = () => {
    fetch('http://159.223.123.205:3001/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
      .then(response => response.json())
      .then(data => {
        setTranslation(data.translation);
      })
      .catch(error => {
        console.error('Translation error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Translator</h1>
      <label htmlFor="text">Enter text in English to Translate in Hindi</label>
      <input type="text" id="text" name="text" value={text} onChange={e => setText(e.target.value)} />
      <br /><br />
      <button onClick={handleTranslate}>Translate</button>
      <br /><br />
      <label htmlFor="translation">Translation in Hindi:</label>
      <div id="translation">{translation}</div>
    </div>
  );
}

export default App;
