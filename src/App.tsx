import type { FunctionComponent } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SiteLayout from "./components/Layout/SiteLayout";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ResumePage from "./components/Resume/ResumePage";

const App: FunctionComponent = () => (
  <HashRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
