import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./components/Home/HomePage.tsx";
import ProjectsPage from "./components/Projects/ProjectsPage.tsx";
import ResumePage from "./components/Resume/ResumePage.tsx";
function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route exact path={"/"}  element={<HomePage />} />
            <Route exact path={"/projects"} element={<ProjectsPage />} />
            <Route exact path={"/resume"} element={<ResumePage />} />
            <Route path={"*"} element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
)
}

export default App;
