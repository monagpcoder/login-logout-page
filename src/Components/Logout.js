import React from 'react'
import "./Logout.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(Logout());
  }
  return (
    <div>
      <h1>Welcome <span className='user_name'>{user.name}</span></h1>
      <button className='logout_button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
