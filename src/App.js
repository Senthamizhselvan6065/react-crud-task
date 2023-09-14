import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Student Components/Dashboard";
import CreateUser from "./Student Components/CreateUser";
import EditUser from "./Student Components/EditUser";
import UserProfile from "./Student Components/UserProfile";
import { studentData } from "./Data/StudentData";
import {useState} from 'react'
import TeacherDashboard from './Teacher Components/Dashboard'
import {teacherData} from './Data/TeacherData'
import CreateTeacherUser from "./Teacher Components/CreateTeacherUser";
import TeacherUserProfile from "./Teacher Components/TeacherUserProfile";
import EditTeacherUser from "./Teacher Components/EditTeacherUser";
import NoPage from "./Student Components/NoPage";

const App = () => {

  const [student, setStudent] = useState(studentData)
  const [teacher, setTeacher] = useState(teacherData)

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Dashboard student={student} setStudent={setStudent} />
      },
      {
        path: "/create/user",
        element: <CreateUser student={student} setStudent={setStudent} />
      },
      {
        path: "/edit/user/:id",
        element: <EditUser student={student} setStudent={setStudent} />
      },
      {
        path: "/user/profile/:id",
        element: <UserProfile student={student} setStudent={setStudent}/>
      },
      {
        path: "/teacher/details",
        element: <TeacherDashboard teacher={teacher} setTeacher={setTeacher} />
      },
      {
        path: "/create/teacher/details",
        element: <CreateTeacherUser teacher={teacher} setTeacher={setTeacher} />
      },
      {
        path: "/edit/teacher/details/:id",
        element: <EditTeacherUser teacher={teacher} setTeacher={setTeacher} />
      },
      {
        path: "/view/teacher/profile/:id",
        element: <TeacherUserProfile teacher={teacher} setTeacher={setTeacher} />
      },
      {
          path: "*",
          element: <NoPage />
      }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
