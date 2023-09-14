import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = ({ student, setStudent }) => {
  const navigate = useNavigate();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [roll, setRoll] = useState("");
  const [tamilMark, setTamilMark] = useState("");
  const [englishMark, setEnglishMark] = useState("");
  const [mathMark, setMathMark] = useState("");
  const [scienceMark, setScienceMark] = useState("");
  const [socialscienceMark, setSocialscienceMark] = useState("");
  const [total, setTotal] = useState("");

  const { id } = useParams();
  const selectUser = student.find((per, idx) => per.id === id);

  useEffect(() => {
    setIdx(selectUser.id);
    setName(selectUser.name);
    setClassName(selectUser.className);
    setRoll(selectUser.roll);
    setTamilMark(selectUser.tamilMark);
    setEnglishMark(selectUser.englishMark);
    setMathMark(selectUser.mathMark);
    setScienceMark(selectUser.scienceMark);
    setSocialscienceMark(selectUser.socialscienceMark);
    setTotal(selectUser.total);
  }, []);

  const editUser = () => {
    const editIndex = {
      id: idx,
      name,
      className,
      roll,
      tamilMark,
      englishMark,
      mathMark,
      scienceMark,
      socialscienceMark,
      total,
    };
    const findIndex = student.findIndex((per, idx)=>per.id === id)
    student[findIndex] = editIndex;
     setStudent([...student]) 
     navigate("/")
  };

  return (
    <div className="edit-user">
      <h1>Edit User Profile</h1>
      <div className="from">
        <div className="input-student-name">
          <input
            type="text"
            placeholder="Id"
            value={idx}
            onChange={(event) => setIdx(event.target.value)}
          />
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Student Class"
            value={className}
            onChange={(event) => setClassName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Roll"
            value={roll}
            onChange={(event) => setRoll(event.target.value)}
          />
        </div>
        <div className="input-student-mark">
          <div className="input-student-flex-1">
            <input
              type="text"
              placeholder="Tamil mark"
              value={tamilMark}
              onChange={(event) => setTamilMark(event.target.value)}
            />
            <input
              type="text"
              placeholder="English mark"
              value={englishMark}
              onChange={(event) => setEnglishMark(event.target.value)}
            />
            <input
              type="text"
              placeholder="Maths mark"
              value={mathMark}
              onChange={(event) => setMathMark(event.target.value)}
            />
          </div>
          <div className="input-student-flex-2">
            <input
              type="text"
              placeholder="Science mark"
              value={scienceMark}
              onChange={(event) => setScienceMark(event.target.value)}
            />
            <input
              type="text"
              placeholder="Social Science mark"
              value={socialscienceMark}
              onChange={(event) => setSocialscienceMark(event.target.value)}
            />
            <input
              type="text"
              placeholder="Total marks"
              value={total}
              onChange={(event) => setTotal(event.target.value)}
            />
          </div>
        </div>
        <button className="edit-user-btn" onClick={editUser}>Save</button>
      </div>
    </div>
  );
};

export default EditUser;
