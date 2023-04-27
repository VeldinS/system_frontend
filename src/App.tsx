import React, {useCallback, useState} from 'react';
import './App.css';
import StudentLogin from './components/login-page/student/StudentLogin';
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import { AuthContext } from './authentication/authContext';
import Register from "./components/register-page/Register";
import StudentDashboard from "./components/student/student-dashboard/StudentDashboard";
import AdminLogin from "./components/login-page/admin/AdminLogin";
import ForgotPassword from "./components/credentials-forgot/ForgotPassword";
import AccountSettings from "./components/student/student-acc-settings/AccountSettings";

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
                <Route path='/' element={<StudentLogin/>}/>
                <Route path='/Login/Student' element={<StudentLogin/>}/>
                <Route path='/Credentials/Forgot' element={<ForgotPassword/>}/>
                <Route path='/Login/Admin' element={<AdminLogin/>}/>
                <Route path='/Student/Dashboard' element={<StudentDashboard/>}/>
                <Route path='/Student/Settings' element={<AccountSettings/>}/>
            </Routes>
    )
  }
  else{
    routes = (
            <Routes>
                <Route path='/' element={<StudentLogin/>}/>
                <Route path='/Login/Student' element={<StudentLogin/>}/>
                <Route path='/Credentials/Forgot' element={<ForgotPassword/>}/>
                <Route path='/Login/Admin' element={<AdminLogin/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Student/Dashboard' element={<StudentDashboard/>}/>
                <Route path='/Student/Settings' element={<AccountSettings/>}/>
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
