import './app.css';
import Search from './components/Search';

function App() {

  const data = ['bannana', 'apple', 'mango'];

  return (
    <div className="app">
      <header>
        search box <a href="https://github.com/coding-tea" target='_blank' >@codingTea <i class="bi bi-github"></i></a>
      </header>
      <Search />
    </div>
  );
}

export default App;
