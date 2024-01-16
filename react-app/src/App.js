import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" onClick={()=>console.log(1)}>
      <header className="App-header" onClick={()=>console.log(2)}>
        <img src={logo} className="App-logo" alt="logo" onClick={()=>console.log(3)}/>
        <p onClick={()=>console.log(4)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
