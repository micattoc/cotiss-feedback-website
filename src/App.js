import './App.css';
import React from 'react';
import { useState, useEffect, useRef } from "react";

function App() {

  const [Item, setItem] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [message, setMessage] = useState("");
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      fetch(
        "https://yvdfnlqpj5.execute-api.ap-southeast-2.amazonaws.com/prod/read",
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Item);
          setItem(data.Item);
        })
        effectRan.current = true;
    }
  }, []);

  let handleSubmit = async (e) =>  {
    e.preventDefault();
    try {
        let res = await fetch("https://ldgh10p5v2.execute-api.ap-southeast-2.amazonaws.com/prod/write", {
        method: "POST",
        body: JSON.stringify({
          newFeedback: feedbackText,
        }),
      });
      if (res.status === 200) {
        setFeedbackText("");
        setMessage("Success!");
      } else {
        setMessage("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="App">
    <h1>{Item.Comment}</h1>

    <form onSubmit={handleSubmit}>

      <div class="text-field">
        <input
          id="feedback-field"
          type="text"
          value={feedbackText}
          placeholder="Enter feedback"
          onChange={(e) => setFeedbackText(e.target.value)}
          />
      </div>
      
      <button type="submit" class="form-submit-button">Submit</button>

      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
    </div>
  );
}

export default App;
