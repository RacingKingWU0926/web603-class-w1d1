import logo from './logo.svg';
import './App.css';

{/* New code added here!! */}
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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

        {/* New code added here!! */}
        <Button color="danger">Danger!</Button>

      </header>
    </div>
  );
}

export default App;
