import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {MdOutlineDataSaverOff} from 'react-icons/md'
import {BsBack} from 'react-icons/bs'

const EditTeacherUser = ({teacher, setTeacher}) => {
    const navigate = useNavigate("")
    const [idx, setIdx] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    const {id} = useParams()
    const selectUser = teacher.find((per, idx)=>per.id === id)

    useEffect(()=>{
         setIdx(selectUser.id)
         setName(selectUser.name)
         setSubject(selectUser.subject)
         setEmail(selectUser.email)
         setMobile(selectUser.mobile)
    }, [])

    const editUser = ()=>{
        const editList = {
            id: idx,
            name,
            subject,
            email,
            mobile
        }

        const editIndex = teacher.findIndex((per, idx)=>per.id === id)
        teacher[editIndex] = editList;
        setTeacher([...teacher])
        navigate("/teacher/details")
    }

  return (
    <div className='edit-a-teacher-profile'>
      <h1>Edit Teacher Details</h1>
      <div className="edit-teacher-from">
              <input type="text" placeholder='Id' value={idx} onChange={(event)=>setIdx(event.target.value)} />
              <input type="text" placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)} />
              <input type="text" placeholder='Subject' value={subject} onChange={(event)=>setSubject(event.target.value)} />
              <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
              <input type="text" placeholder='Mobile Number' value={mobile} onChange={(event)=>setMobile(event.target.value)} />
              <button className='edit-teacher-profile' onClick={editUser}><span><MdOutlineDataSaverOff /></span>Save</button>
              <h3 onClick={()=>navigate("/teacher/details")}><span><BsBack /></span>Back</h3>
      </div>
    </div>
  )
}

export default EditTeacherUser
