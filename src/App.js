import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WishList from './components/WishList/WishList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
    
    </div>
  );
}

export default App;
