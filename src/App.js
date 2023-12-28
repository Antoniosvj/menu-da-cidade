import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Planos from './pages/Planos/Planos.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/planos' element={<Planos/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
