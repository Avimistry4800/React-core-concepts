import logo from './logo.svg';
import './App.css';

function App() {
  let person ={
    name : "Dr. MAhafuz",
    job : "No 1 Singer in Bangladesh"
  }
 let person2 ={
    name : "Eva Rahman",
    job : "One and only kokil konthi Singer in Bangladesh"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
       <h1>Here comes : {person.name}</h1>
       <h2> {person.job}</h2>
       <h3>{person2.name + ' : ' + person2.job}</h3>
       <p>Rest of all is HISTORY</p>
       <p>R.I.P. Bangladeshi people</p>
      </header>
    </div>
  );
}

export default App;
