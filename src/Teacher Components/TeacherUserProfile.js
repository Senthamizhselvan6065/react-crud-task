import React from "react";
import {useNavigate, useParams } from "react-router-dom";
import {BiMinusBack} from 'react-icons/bi'

const TeacherUserProfile = ({ teacher }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const teacher_profile = teacher.find((per, idx) => per.id === id);
  return (
    <div className="teacher-profile">
      <h1>Teacher Profile</h1>
      <div className="teacher-profile-card">
        <h1>{teacher_profile.name ? teacher_profile.name : "Teacher Name"}</h1>
        <p>Subject : {teacher_profile.subject}</p>
        <div className="teacher-profile-contact">
          <h3>Contact Us</h3>
          <p>Email : {teacher_profile.email}</p>
          <p>Mobile Number : {teacher_profile.mobile}</p>
        </div>
        <div className="teacher-profile-back-btn">
          <h3 onClick={()=>navigate("/teacher/details")}><span><BiMinusBack /></span>Back</h3>
        </div>
      </div>
    </div>
  );
};

export default TeacherUserProfile;
