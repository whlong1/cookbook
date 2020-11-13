import React from 'react'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
