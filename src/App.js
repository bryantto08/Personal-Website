import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Resume from './Pages/Resume/Resume';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element= {<Home />} />
          <Route path="/projects" element= {<Projects />} />
          <Route path="/education" element= {<Education />} />
          <Route path="/resume" element= {<Resume />} />
          <Route path="/contacts" element= {<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
