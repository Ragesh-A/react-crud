import InputField from '../components/Form/InputFeild';
import video from '../Assets/anim-bg.mp4'
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()
  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(user){
    navigate('/')  
    }
  },[])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const submitHandle = (e)=>{
    e.preventDefault()
    if(name && email && password ){
        fetch('http://localhost:8000/signup',{
        method: 'post',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          name,
          email,password
        })
      }).then(res=>res.json())
      .then(data=>{ 
        if(data.success){
          console.log(data);
          navigate('/login')
        }else{
          setErr(data.err)
        }
      })
      .catch(err=>console.log(err))
    }else{
      setErr('All field should be fill')
      setTimeout(() => {
        setErr('')
      }, 3000);
    }
    
  }

  return (
    <div className="animated-form-wrap p-3 rounded flex justify-center items-center w-full">
      <video src={video} className='w-fill h-screen' autoPlay loop muted></video>
      <div className='bg-black bg-opacity-80 p-10 rounded w-[500px] border border-gray-600 absolute'>
        <h1 className='text-center text-cyan-400 font-bold text-lg p-3'>CREATE ACCOUNT</h1>
        <form onSubmit={submitHandle}>
          <InputField label="Name" type="text" name="name" id="name" onchangeFn={setName}/>
          <InputField label="Email" type="email" name="email" id="email" onchangeFn={setEmail}/>
          <InputField label="Password" type="password" name="password" id="password" onchangeFn={setPassword} />
            <p className="error-message text-red-500 py-2">{err}</p>
          <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
            Sign Up
          </button>
          <div className="text-right text-sm p-2">
            <Link to='/login'><a>Already Have Account</a></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
