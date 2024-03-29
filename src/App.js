import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Panel from './pages/Panel';
import Settings from './pages/Settings';
import Jobs from './pages/Jobs';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { TabPanelUnstyled } from '@mui/material';

/* Updated to reflect use of react-router-dom v6 which replaces Switch with Routes */

function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/home' element={<Panel />} />
    </Routes>
    </Router>
  </div>;
}

export default App;
