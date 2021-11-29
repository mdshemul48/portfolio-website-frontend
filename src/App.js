import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';

// header and footer
import NavBar from './components/shared/NavBar/NavBar';
import Footer from './components/shared/Footer/Footer';
// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
