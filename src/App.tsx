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
import AcademicRecord from "./components/student/academic-record/AcademicRecord";
import CourseSchedule from "./components/student/course-schedule/CourseSchedule";
import ExamSchedule from "./components/student/exam-schedule/ExamSchedule";
import GradeDetails from "./components/student/grade-details/GradeDetails";
import PerformanceStudent from "./components/student/student-performance/PATStudent";
import CertificateApplication from "./components/student/certificate-application/CertificateApplication";

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
                <Route path='/Student/Transcript' element={<AcademicRecord/>}/>
                <Route path='/Student/CourseSchedule' element={<CourseSchedule/>}/>
                <Route path='/Student/ExamSchedule' element={<ExamSchedule/>}/>
                <Route path='/Student/GradeDetails' element={<GradeDetails/>}/>
                <Route path='/Student/Performance' element={<PerformanceStudent/>}/>
                <Route path='/Student/SCA' element={<CertificateApplication/>}/>
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
                <Route path='/Student/Transcript' element={<AcademicRecord/>}/>
                <Route path='/Student/CourseSchedule' element={<CourseSchedule/>}/>
                <Route path='/Student/ExamSchedule' element={<ExamSchedule/>}/>
                <Route path='/Student/GradeDetails' element={<GradeDetails/>}/>
                <Route path='/Student/Performance' element={<PerformanceStudent/>}/>
                <Route path='/Student/SCA' element={<CertificateApplication/>}/>
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
