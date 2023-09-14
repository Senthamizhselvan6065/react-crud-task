import React from 'react'
import { useNavigate } from "react-router-dom"

const NoPage = () => {
    const navigate = useNavigate()
    const back = () => {
          navigate("/")
    }
  return (
    <div className='no-page'>
        <h1>404 Error Page Not Found...!</h1>
        <button onClick={back}>Dashboard</button>
    </div>
  )
}

export default NoPage