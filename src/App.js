
import './App.css';
import {
  BrowserRouter as Router,
  
  Route, Switch
 
} from "react-router-dom";


import Home from './Pages/Home';
import Timeline from './Pages/Timeline';


function App() {
  return (
      <Router>
          <div className="App">

          

            <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Timeline" exact component={Timeline}/>
          </Switch>



          </div>
      </Router>
  )
}

export default App;