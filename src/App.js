import logo from './logo.svg';
import Add from './components/Add';
import TaskList from './components/TaskList';
import './App.css';
import './styles/Add.css'
import './styles/Task.css'

function App() {
  return (
    <div className="App">
      <TaskList/>
      <TaskList/>
      <Add/>
    </div>
  );
}

export default App;
