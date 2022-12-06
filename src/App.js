
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className='section' >
      <div className="App">
        <Weather city="tehran" />
      </div>
      <div className='link'>
        <a
          href="https://github.com/Monirbr/final-project-weather-react"
          target="_blank"
        >
          open-Sourced on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
