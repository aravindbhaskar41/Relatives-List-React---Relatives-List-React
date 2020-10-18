import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relativesList = ["Batman", "Superman", "Flash", "WonderWoman"];
    return (
      <>
        <ol key="relativesList">
          {relativesList.map((el, index) => (
            <li key={`relativeListItem${index}`}>{el}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
