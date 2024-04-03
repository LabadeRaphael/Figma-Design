import './App.css';
import Sidebar from './component/Sidebar';
// import Main from './component/Main';
import Nav from './component/Navbar';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Task from './component/Task';
import Team from './component/Team';
import Report from './component/Report';
import Time from './component/Time';
import Setting from './component/Setting';
import Not_Found from './component/Not_Found';
import Navbar from './component/Navbar';
import { useState } from 'react';

function App() {
  const [first, setfirst] = useState("kkde")
  return (
    <>
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <Sidebar/>
          <div className='MainBody'>
            <div className='MainNav'>
              {/* useProps so that the value will be dynamic */}
              <Navbar getRoute={first}/>
            </div>
            <div className='MainContent'>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/task' element={<Task/>}></Route>
              <Route path='/team' element={<Team/>}></Route>
              <Route path='/report' element={<Report/>}></Route>
              <Route path='/time' element={<Time/>}></Route>
              <Route path='/setting' element={<Setting/>}></Route>
              <Route path='home' element={<Navigate to='/'/>}></Route>
              <Route path='*' element={<Not_Found/>}></Route>
            </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
