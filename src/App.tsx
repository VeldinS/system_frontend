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
import Home from "./components/home/Home";
import ProfessorLogin from "./components/login-page/professor/ProfessorLogin";
import ProfessorDashboard from "./components/professor/professor-dashboard/ProfessorDashboard";
import ProfessorCourseSchedule from "./components/professor/course-schedule/ProfessorCourseSchedule";
import ProfessorExamSchedule from "./components/professor/exam-shedule/ProfessorExamSchedule";
import LanguageContext from './languages/languageContext';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const [language, setLanguage] = useState<'bosnian' | 'english'>('bosnian');

  let routes;

  if(isLoggedIn){
    routes =(
        <LanguageContext.Provider value={{language, setLanguage}}>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login/Student' element={<StudentLogin/>}/>
                <Route path='/Credentials/Forgot' element={<ForgotPassword/>}/>
                <Route path='/Login/Professor' element={<ProfessorLogin/>}/>
                <Route path='/Login/SAO' element={<AdminLogin/>}/>
                <Route path='/Dashboard/Student/:studentId' element={<StudentDashboard/>}/>
                <Route path='/Settings/Student/:studentId' element={<AccountSettings/>}/>
                <Route path='/Student/Transcript/:studentId' element={<AcademicRecord/>}/>
                <Route path='/Student/CourseSchedule/:studentId' element={<CourseSchedule/>}/>
                <Route path='/Student/ExamSchedule/:studentId' element={<ExamSchedule/>}/>
                <Route path='/Student/GradeDetails/:studentId' element={<GradeDetails/>}/>
                <Route path='/Student/Performance/:studentId' element={<PerformanceStudent/>}/>
                <Route path='/Student/SCA/:studentId' element={<CertificateApplication/>}/>
                <Route path='/Professor/Dashboard' element={<ProfessorDashboard/>}/>
                <Route path='/Professor/CourseSchedule' element={<ProfessorCourseSchedule/>}/>
                <Route path='/Professor/ExamSchedule' element={<ProfessorExamSchedule/>}/>
            </Routes>
        </LanguageContext.Provider>
    )
  }
  else{
    routes = (
            <LanguageContext.Provider value={{language, setLanguage}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login/Student' element={<StudentLogin/>}/>
                <Route path='/Credentials/Forgot' element={<ForgotPassword/>}/>
                <Route path='/Login/Professor' element={<ProfessorLogin/>}/>
                <Route path='/Login/SAO' element={<AdminLogin/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Dashboard/Student/:studentId' element={<StudentDashboard/>}/>
                <Route path='/Settings/Student/:studentId' element={<AccountSettings/>}/>
                <Route path='/Student/Transcript/:studentId' element={<AcademicRecord/>}/>
                <Route path='/Student/CourseSchedule/:studentId' element={<CourseSchedule/>}/>
                <Route path='/Student/ExamSchedule/:studentId' element={<ExamSchedule/>}/>
                <Route path='/Student/GradeDetails/:studentId' element={<GradeDetails/>}/>
                <Route path='/Student/Performance/:studentId' element={<PerformanceStudent/>}/>
                <Route path='/Student/SCA/:studentId' element={<CertificateApplication/>}/>
                <Route path='/Professor/Dashboard' element={<ProfessorDashboard/>}/>
                <Route path='/Professor/CourseSchedule' element={<ProfessorCourseSchedule/>}/>
                <Route path='/Professor/ExamSchedule' element={<ProfessorExamSchedule/>}/>
            </Routes>
            </LanguageContext.Provider>
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
