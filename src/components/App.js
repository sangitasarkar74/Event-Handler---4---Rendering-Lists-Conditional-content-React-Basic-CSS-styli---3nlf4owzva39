import React from 'react'
import '../styles/App.css';
const App = () => {
  const addEventHandler = true;

  const handleDoubleClick = (event) => {
    console.log("I was double clicked");
  }
  const noDoubleClick = (event) => {
    console.log("I was not double clicked");
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={addEventHandler ? handleDoubleClick : noDoubleClick}>Double click me</button>

    </div>
  )
}


export default App;
