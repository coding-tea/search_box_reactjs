import './app.css';
import Search from './components/Search';

function App() {

  const data = ['bannana', 'apple', 'mango'];

  return (
    <div className="app">
      <header>
        <pre>search box <a href="https://github.com/coding-tea" target='_blank' rel="noreferrer">@codingTea <i className="bi bi-github"></i>
        </a>
        </pre>
      </header>
      <Search data={data} />
    </div>
  );
}

export default App;
