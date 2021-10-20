import { useState } from "react";
import "./styles.css";
export default function App() {
  const emojiDictionary = {
    "😊": "smiling face",
    "👋": "goodbye",
    "🥺": "pleading face",
    "🤗": "hugging face",
    "😵": "dizzy face",
    "🤥 ": "lying face ",
    "😒": "unamused face ",
    "😌": "relieved face ",
    "😑": "expressionless face ",
    "🤩 ": "star-struck"
  };

  var emojiList = Object.keys(emojiDictionary);
  const [emojiMeaning, setEmojiMeaning] = useState("");
  function emojiInterpreter(event) {
    var input = event.target.value;
    if (input != "") {
      console.log("input", input);
      var meaning = emojiDictionary[input];
      console.log("meaning", meaning);
      if (meaning === undefined) {
        meaning = "Oops! We don't have it's meaning 😞";
      }
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("");
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="heading">Emoji interpreter</h1>
      <input id="emoji-input" onChange={emojiInterpreter}></input>
      <h2 id="meaning">{emojiMeaning}</h2>
      <h2 id="emoji-known">emojis we know 👇</h2>
      {emojiList.map(function (emoji) {
        return (
          <li style={{ display: "inline" }}>
            <span
              id="meaning"
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2.5rem",
                paddingRight: "1rem",
                borderBottom: ""
              }}
              key={emoji}
            >
              {emoji}
            </span>
          </li>
        );
      })}

      <footer class="social-links">
        <a href="https://github.com/vanshitalavange">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vanshitalavange/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/LavangeVanshita">
          <i class="fab fa-twitter-square"></i>
        </a>
      </footer>
    </div>
  );
}
