import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import MainPage from './components/Main/Main';
import {TabEnum} from './enum/TabEnum.ts';

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route exact path={"/"}  element={<MainPage tab={TabEnum.HOME} className='flex h-full w-full' />} />
            <Route exact path={"/projects"} element={<MainPage tab={TabEnum.PROJECTS} className='flex h-full w-full' />} />
            <Route exact path={"/resume"} element={<MainPage tab={TabEnum.DIPLOMA} className='flex h-full w-full' />} />
            <Route path={"*"} element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
)
}

export default App;
