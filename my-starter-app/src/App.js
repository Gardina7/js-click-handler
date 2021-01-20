import logo from './logo.svg';
import './App.css';
import Welcome from './Component/Welcome/Welcome';
import Clock from './Component/Clock/Clock';
import Contact from'./Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Welcome name="Elizabeth"/>
      <Clock />
      <Contact />
    </div>
  );
}

export default App;
