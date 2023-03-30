import InputField from "../components/Form/InputFeild";
import video from '../Assets/anim-bg.mp4'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Signin = () =>{

  const navigate = useNavigate()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user !== null){
      if(user){
        navigate('/')  
        }
    }
  },[navigate])
  const [err, setErr] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {dispatch } = useContext(AuthContext)

  const submitHandle = (e)=>{
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    if(email && password !== '' ){
      fetch('http://localhost:8000/login',{
        method: 'post',
        headers: {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          email : email,
          password : password
        })
      }).then(res=>res.json())
      .then(data=>{
        if (data.message) {
          setErr(data.message)
        }else{
          dispatch({type: "LOGIN_SUCCESS", payload: data})
          navigate('/')
        }
      }).catch(err=> dispatch({type: "LOGIN_FAILURE"}))
    }else{  
      setErr('Field should be filled')
    }
  }

  return (
    <div className="animated-form-wrap rounded flex justify-center items-center w-full bg-black relative">
      <video src={video} className='w-fill h-screen' autoPlay loop muted></video>
      <div className='bg-black bg-opacity-[88%] p-10 rounded w-[500px] border border-gray-600 absolute'>
        <h1 className='text-center text-cyan-400 font-bold text-lg p-3'>LOGIN </h1>
        <form onSubmit={submitHandle}>
          <InputField label="Email" type="email" name="email" id="email" onchangeFn={setEmail} />
          <InputField label="Password" type="password" name="password" id="password" onchangeFn={setPassword} />
          {err && <p className='error-response'>{err}</p>}
          <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
            Sign IN
          </button>
          <div className="text-right text-sm p-2">
            <Link to='/signup' >Create An Account</Link>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Signin;