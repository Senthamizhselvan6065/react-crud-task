import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {RiDashboardFill} from 'react-icons/ri'

const UserProfile = ({ student }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const per = student.find((per) => per.id === id);
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-profile-card">
        <h1>{per.name ? per.name : "Student Name"}</h1>
        <p>Class : {per.className}</p>
        <p>Roll Number : {per.roll}</p>
        <div className="user-mark">
          <h3>10 th Marks</h3>
          <p>Tamil : {per.tamilMark}</p>
          <p>English : {per.englishMark}</p>
          <p>Maths : {per.mathMark}</p>
          <p>Science : {per.scienceMark}</p>
          <p>Social Science : {per.socialscienceMark}</p>
          <p>Total Marks : {per.total}</p>
        </div>
        <button className="user-profile-dashboard" onClick={()=>navigate("/")}><span><RiDashboardFill /></span>Dashboard</button>
      </div>
    </div>
  );
};

export default UserProfile;
