import "../styles/App.css";
const App = () => {
  // const addEventHandler = true;

  const handleDoubleClick = (event) => {
    // console.log("I was double clicked");
    if (event.detail == 2) {
      console.log("I was double clicked");
    } else {
      console.log("I was not double clicked");
    }
  };
  // const noDoubleClick = (event) => {
  //   console.log("I was not double clicked");
  //   console.log(event);
  //   setAddEventHandler("I was not double clicked");
  // };
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>
        Double click me
      </button>
    </div>
  );
};

export default App;
