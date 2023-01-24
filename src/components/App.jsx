import { Routes, Route } from 'react-router-dom';
import './../styles/main.css';
import './../styles/main.css';
import ScrollToTop from 'utils/scrollToTop';
import Navbar from './Navbar/Navbar';
import Home from 'pages/Home/Home';
import Projects from 'pages/Projects/Projects';
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import Education from 'pages/Education/Education';
import Contacts from 'pages/Contacts/Contacts';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
};
