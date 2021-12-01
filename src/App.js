import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
// import Projects from './components/Projects/Projects';

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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route
          path='/projects'
          element={<h1 className='text-center my-5'>Coming Soon</h1>}
        />

        <Route
          path='/blogs'
          element={<h1 className='text-center my-5'>Coming Soon</h1>}
        />
        <Route
          path='/about-us'
          element={<h1 className='text-center my-5'>Coming Soon</h1>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
