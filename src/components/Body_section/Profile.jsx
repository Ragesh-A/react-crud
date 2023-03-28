import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../Assets/avatar.jpg'
import { AuthContext } from '../../Context/AuthContext';

const Profile = ({fn})=>{

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const logout = () =>{
    localStorage.clear('user')
    navigate('/login')
  }
 const editProfile = ()=>{
  fn()
navigate(`/profile`)
 }


  return (
    <>
    <div className=" p-3 box rounded">
      <img src={user?.url ? user.url : avatar } alt="" className='profile-img' />
      <div className='flex flex-col'>
        <p className='text-center font-bold'>{user.name}</p>
        <p className='text-center italic'>{user.email}</p>
       <button className='bg-yellow-400 text-bl mt-1 p-1 rounded' onClick={editProfile}>edit profile</button>
       <button className='bg-red-500 mt-1 p-1 rounded' onClick={logout}>Logout</button>
      </div>
    </div>
    
    </>
  )
}

export default Profile;