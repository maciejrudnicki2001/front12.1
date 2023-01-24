import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  Services,
  Pl,
  Us,
  De,
  Error404,
} from './components/pages';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/us" element={<Us />} />
          <Route path="contact/pl" element={<Pl />} />
          <Route path="contact/de" element={<De />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
  );
}

export default App;
