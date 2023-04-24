import React, {useCallback, useState} from 'react';
import './App.css';
import Login from './components/login-page/Login';
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import { AuthContext } from './authentication/authContext';
import Register from "./components/register-page/Register";
import StudentDashboard from "./components/student-dashboard/StudentDashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn){
    routes =(
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Student/Dashboard' element={<StudentDashboard/>}/>
            </Routes>
    )
  }
  else{
    routes = (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Student/Dashboard' element={<StudentDashboard/>}/>
            </Routes>
    )
  }

  return (
      <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout }}
      >
        <Router>
          <main>
            {routes}
          </main>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
