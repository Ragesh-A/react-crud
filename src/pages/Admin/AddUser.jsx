import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Form/InputFeild';
import Sidebar from '../../components/Sidebar_Section/Sidebar';
import { isLogged } from '../../hooks/userAuth';

const AddUser = () => {
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [err, setErr] = useState()
  const user = isLogged()

  const submitHandle = (e) => {
    e.preventDefault();

    if(name && email && password){
      fetch(`http://localhost:8000/admin/user/`,{
      method: 'post',
      headers: {
        'Authorization': `${user.access}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name : name,
        email : email,
        password : password
      })
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.err) {
          setErr(data.err)
          setTimeout(()=>{
            setErr('')
          },1000)
        }else{
          
          setTimeout(()=>{
            navigate('/admin/users')
          },2000)
        }
    })
    }


  };
  return (
    <>
    <Sidebar />
    <div className="body p-3 bg-gray-l00 bg-grad overflow-y-auto ">
    <div className="form-wrap box p-5">
      <h1 className="text-center text-cyan-400 font-bold uppercase text-2xl">
        Add user
      </h1>
      <form onSubmit={submitHandle}>
        <InputField label="Name" type="text" name="name" id="name" onchangeFn={setName}/>
        <InputField label="Email" type="email" name="email" id="email" onchangeFn={setEmail}/>
        <InputField
          label="Password"
          type="password"
          name="password"
          id="password"
          onchangeFn={setPassword}
        />
        <p className="error-response">{err}</p>
        <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
          submit
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddUser;
