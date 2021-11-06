import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
               <Switch>
              <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
