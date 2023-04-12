//import logo from './logo.svg';
import './App.css';
import './components2/page1';
import './components2/page2';
import './components2/page3';
import Parent2 from './Components/parent2';
import Flipkart from './components2/page2';
import Amazon from './components2/page1';
import Zomato from './components2/page3';
import HomePage from './components2/homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Flipkart></Flipkart>
       <Amazon></Amazon>
       <Zomato></Zomato>
       <HomePage></HomePage>
            </header>
    </div>
  );
}

export default App;
