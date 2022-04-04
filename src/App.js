import './App.css';
import { Navigation }  from './components/nav'
import AppRouter from './router/router';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
