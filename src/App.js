import React from 'react';

function App(props = {}) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>{props.greeting}</h1>
      </div>
    </div>
  )
}

export default App
