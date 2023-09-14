import React from "react";
import { useNavigate } from "react-router-dom";
import {MdViewAgenda} from 'react-icons/md'
import {RiDeleteBin3Fill} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'
import {FaUserEdit} from 'react-icons/fa'
import {PiStudentFill} from 'react-icons/pi'

const Dashboard = ({ teacher, setTeacher }) => {
    const navigate = useNavigate()
    const deleteUser = (id)=>{
         const deleteList = teacher.filter((per, idx)=> per.id !== id)
         setTeacher(deleteList)
    }
  return (
    <div className="teacher-details">
      <div className="teacher-heading">
        <h4 onClick={()=>navigate("/create/teacher/details")}><span><FaUserEdit /></span>Create a User</h4>
        <h1>Teacher Details</h1>
        <h3 onClick={()=>navigate("/")}> <span><PiStudentFill /></span> Student Details</h3>
      </div>
      <div className="teacher-card">
        {teacher.map((person, idx) => (
          <div key={idx} className="teacher-main-card">
            <h1>{person.name ? person.name : "Teacher Name"}</h1>
            <p>Subject : {person.subject}</p>
            <div className="teacher-contact">
              <h3>Contact Us</h3>
              <p>Email : {person.email}</p>
              <p>Mobile Number : {person.mobile}</p>
            </div>
            <div className="teacher-bts">
              <button className="teacher-btn" onClick={()=>navigate(`/view/teacher/profile/${person.id}`)}><span><MdViewAgenda /></span>View</button>
              <button className="teacher-btn" onClick={()=>navigate(`/edit/teacher/details/${person.id}`)}><span><AiFillEdit /></span>Edit</button>
              <button className="teacher-btn" onClick={()=>deleteUser(person.id)}><span><RiDeleteBin3Fill /></span>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
