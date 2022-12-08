import React from 'react'
import '../styles/App.css';
const App = () => {


  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick}>Double click me</button>
      {handleDoubleClick ? console.log("I was double clicked") : console.log("I was not double clicked")}
    </div>
  )

}

export default App;
