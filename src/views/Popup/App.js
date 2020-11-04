import React from 'react'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Popup page</p>
        <p>
          {JSON.stringify(props.data)}
        </p>
        {console.log("11")}
      </header>
    </div>
  );
}

export default App
