import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MainPage from './components/Main/Main';
import { TabEnum } from './enum/TabEnum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage tab={TabEnum.HOME} />} />
        <Route path="/projects" element={<MainPage tab={TabEnum.PROJECTS} />} />
        <Route path="/resume" element={<MainPage tab={TabEnum.DIPLOMA} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
