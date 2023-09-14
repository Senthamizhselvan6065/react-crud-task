import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsBack} from 'react-icons/bs'
import {MdCreate} from 'react-icons/md'

const CreateTeacherUser = ({teacher, setTeacher}) => {
    const navigate = useNavigate("")
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    
    const createUser = ()=>{
         const newUser = {
             id,
             name,
             subject,
             email,
             mobile
         }  
            setTeacher([...teacher, newUser])
            navigate("/teacher/details") 
    }

  return (
    <div className='create-a-teacher'>
      <h1>Create A Teacher Details</h1>
      <div className="from">
              <input type="text" placeholder='Id' value={id} onChange={(event)=>setId(event.target.value)} />
              <input type="text" placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)} />
              <input type="text" placeholder='Subject' value={subject} onChange={(event)=>setSubject(event.target.value)} />
              <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
              <input type="text" placeholder='Mobile Number' value={mobile} onChange={(event)=>setMobile(event.target.value)} />
              <button className='add-teacher' onClick={createUser}><span><MdCreate /></span>Create a User</button>
              <div className="teacher-details" onClick={()=>navigate("/teacher/details")}><span><BsBack /></span>Back</div>
      </div>
    </div>
  )
}

export default CreateTeacherUser
