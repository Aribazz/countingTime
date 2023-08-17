import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const time = new Date().toLocaleTimeString();

  const [set, setUp] = useState(time);

  function updateTime() {
    const timeNow = new Date().toLocaleTimeString();
    setUp(timeNow);
  }

  return (
    <div className="container">
      <h1>{set}</h1>
      <button onClicked={updateTime}> Get Time</button>
    </div>
  );
}

export default App;
