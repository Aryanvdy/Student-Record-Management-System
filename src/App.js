// import logo from './logo.svg';
import "./App.css";
// import StudentRegister from "./components/StudentRegister";
import Signup from "./components/Signup";
// import Login from "./components/Login";
import SchoolDashboard from "./components/SchoolDashboard";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TeacherList from "./components/TeacherList";
import StudentList from "./components/StudentList";
import StudentDashboard from "./components/StudentDashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/schooldashboard" element={<SchoolDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teacherlist" element={<TeacherList />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/" element={<StudentDashboard />} />
      </Routes>
      {/* <StudentRegister></StudentRegister> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <SchoolDashboard /> */}
    </div>
  );
}

export default App;
