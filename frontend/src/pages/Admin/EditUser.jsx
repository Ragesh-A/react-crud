import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputField from '../../components/Form/InputFeild';
import Sidebar from '../../components/Sidebar_Section/Sidebar';
import { isLogged } from '../../hooks/userAuth';

const EditUser = () => {

  const user = isLogged()
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const {userId} = useParams()
  useEffect(()=>{
    fetch(`http://localhost:8000/admin/user/${userId}`,{
      method: 'GET',
      headers: {
        'Authorization': `${user.access}`,
      },
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.err) {
          navigate('/');
        }else{
          setMessage(data.message)
          setEmail(data.email)
          setName(data.name)
        }
    })
  },[])
  

  const updateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/admin/user/${userId}`,{
      method: 'PUT',
      headers: {
        'Authorization': `${user.access}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name : name,
        email : email
      })
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.err) {
          navigate('/admin/users');
        }else{
          setMessage(data.message)
          setTimeout(()=>{
            navigate('/admin/users')
          },2000)
        }
    })

  };
  const deleteUser = () => {
    fetch(`http://localhost:8000/admin/user/${userId}`,{
      method: 'delete',
      headers: {
        'Authorization': `${user.access}`,
      },
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.err) {
          navigate('/admin/users');
        }else{
          setMessage(data.message)
          setTimeout(()=>{
            navigate('/admin/users')
          },2000)
        }
    })
  };
  return (
    <>
    <Sidebar />
    <div className="body p-3 bg-gray-l00 bg-grad overflow-y-auto ">
    <div className="form-wrap box p-5">
      <h1 className="text-center text-cyan-400 font-bold uppercase text-2xl">
        Add user
      </h1>
      
        <InputField defaultValue={name} label="Name" type="text" name="name" id="name" onchangeFn={setName}/>
        <InputField defaultValue={email} label="Email" type="email" name="email" id="email" onchangeFn={setEmail}/>
        <p className="text-red-500">{message}</p>
        <button className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold " onClick={deleteUser}>
          delete
        </button>
        <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold " onClick={updateUser}>
          update
        </button>

      
    </div>
    </div>
    </>
  );
};

export default EditUser;
