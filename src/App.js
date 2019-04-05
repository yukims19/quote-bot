import React, { Component } from "react";
import "./App.css";
import BotMapIntro from "./BotMapIntro.js";
import QuoteInfoWrapper from "./QuoteInfoWrapper.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Quote Bot</h1>
        </header>
        <main>
          <BotMapIntro />
          <QuoteInfoWrapper />
        </main>
      </div>
    );
  }
}

export default App;
