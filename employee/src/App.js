import './App.css';
import Employee from './pages/Employee';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

function App() {
  return (
    <div className="App">
      <Signup/>
      <Login/>
      <Employee/>
    </div>
  );
}

export default App;
