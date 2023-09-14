import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = ({student, setStudent}) => {
  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [className, setClassName] = useState("")
  const [roll, setRoll] = useState("")
  const [tamilMark, setTamilMark] = useState("")
  const [englishMark, setEnglishMark] = useState("")
  const [mathMark, setMathMark] = useState("")
  const [scienceMark, setScienceMark] = useState("")
  const [socialscienceMark, setSocialscienceMark] = useState("")
  const [total, setTotal] = useState("")
  
  const  createUser = ()=>{
      const newUser ={
          id,
          name,
          className,
          roll,
          tamilMark,
          englishMark,
          mathMark,
          scienceMark,
          socialscienceMark,
          total
      } 
      setStudent([...student, newUser])
      navigate("/")
  } 

  return (
    <div className='studennt-create-user'>
       <nav>
           <h3 className="student-details" onClick={()=>navigate("/")}>Dashboard</h3>   
           <h1>Create a User</h1>
       </nav>
       <div className="form">
           <div className="input-filed">
              <input type="text" placeholder='Id' value={id} onChange={(event)=>setId(event.target.value)}/>
              <input type="text" placeholder='Student Name' value={name} onChange={(event)=>setName(event.target.value)}/>
              <input type="text" placeholder='Student Class' value={className} onChange={(event)=>setClassName(event.target.value)}/>
              <input type="text" placeholder='Roll' value={roll} onChange={(event)=>setRoll(event.target.value)}/>
              <input type="text" placeholder='Tamil mark' value={tamilMark} onChange={(event)=>setTamilMark(event.target.value)}/>
              <input type="text" placeholder='English mark' value={englishMark} onChange={(event)=>setEnglishMark(event.target.value)}/>
              <input type="text" placeholder='Maths mark' value={mathMark} onChange={(event)=>setMathMark(event.target.value)}/>
              <input type="text" placeholder='Science mark' value={scienceMark} onChange={(event)=>setScienceMark(event.target.value)}/>
              <input type="text" placeholder='Social Science mark' value={socialscienceMark} onChange={(event)=>setSocialscienceMark(event.target.value)}/>
              <input type="text" placeholder='Total marks' value={total} onChange={(event)=>setTotal(event.target.value)}/>
           <button className="create-student-user" onClick={createUser}>Add a User</button>
           </div>
       </div>
    </div>
  )
}

export default CreateUser
