import React from 'react'
import {MdDeleteSweep, MdModeEdit, MdViewComfy} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {MdCreate} from 'react-icons/md';

const Dashboard = ({student, setStudent}) => {

  const navigate = useNavigate()

  const deleteUserStudent = (id) => {
       const deleteList = student.filter((per, idx)=>per.id !== id)
       setStudent(deleteList)
  }
    
  return (
    <div className='student-dashboard'>
            <div className="heading">
                 <h3 className='teacher-dashboard' onClick={()=>navigate("/teacher/details")}><span><FaChalkboardTeacher /></span>Teacher Details</h3>
                 <h3 className='student-create-user' onClick={()=>navigate("/create/user")}> <span><MdCreate /></span> Create a Student</h3>
                 <h1>Student Details</h1>
            </div>
         <div className="student-card">
              {student ? student.map((per, idx)=>(
                 <div key={idx} className="student-main-card">
                     <h1>{per.name ? per.name : "Student Name"}</h1>
                     <p>Class : {per.className}</p>
                     <p>Roll Number : {per.roll}</p>
                     <div className="student-flex-box">
                     <div className="mark">
                        <h3>10 th Marks</h3>
                          <p>Tamil : {per.tamilMark}</p>
                          <p>English : {per.englishMark}</p>
                          <p>Maths : {per.mathMark}</p>
                          <p>Science : {per.scienceMark}</p>
                          <p>Social Science : {per.socialscienceMark}</p>
                          <p>Total Marks : {per.total}</p>
                     </div>
                     <div className="student-btns">
                        <button className="student-btn edit-btn" onClick={()=>navigate(`/edit/user/${per.id}`)}><span><MdViewComfy /></span>Edit</button>
                        <button className="student-btn view-btn" onClick={()=>navigate(`user/profile/${per.id}`)}><span><MdModeEdit /></span>View</button>
                        <button className="student-btn delete-btn" onClick={()=>deleteUserStudent(per.id)}><span><MdDeleteSweep /></span>Delete</button>
                     </div>
                     </div>
                 </div>
              )) : ""}
         </div>
    </div>
  )
}

export default Dashboard