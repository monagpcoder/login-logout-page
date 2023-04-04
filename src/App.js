import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Logout from './Components/Logout';
import Login from './Components/Login';

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  )
}

export default App
