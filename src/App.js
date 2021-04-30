import './App.css';
import Textbox from './text';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="home">
        <Home/>
      
      <div className="App">
        < Switch>
          <Route path="/text">
            <Textbox/>
          </Route>        
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
