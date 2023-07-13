import { Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Chatbot from './components/Chatbot';
import ExitPage from './pages/ExitPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/exit' element={<ExitPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
