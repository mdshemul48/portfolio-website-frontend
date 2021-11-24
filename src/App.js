import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
