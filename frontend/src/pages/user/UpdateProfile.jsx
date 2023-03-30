import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Form/InputFeild';
import { AuthContext } from '../../Context/AuthContext';
const UpdateProfile = ()=>{

  const {user, dispatch} = useContext(AuthContext)
  const {url} = JSON.parse(localStorage.getItem('user')) || '';
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [image, setImage] = useState(null)
  const [err, setErr] = useState()
  const navigate = useNavigate()
  const updateUser = (e)=>{
    e.preventDefault();
    if(name && email){
      fetch(`http://localhost:8000/profile/`,{
      method: 'put',
      headers: {
        'Authorization': `${user.access}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name : name,
        email : email,
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
            const oldUser = JSON.parse(localStorage.getItem('user'))
            oldUser.name = name
            oldUser.email = email
            dispatch({type: "LOGIN_SUCCESS", payload: oldUser})
            localStorage.setItem('user', JSON.stringify(oldUser))
            navigate('/')
          },2000)
        }
    })
    }
  }

  const updatePicture = (e)=>{
    e.preventDefault()
    const form = new FormData();
    form.append('profileImage', image)
    fetch('http://localhost:8000/updateImage',{
      method: 'POST',
      headers : {
        'Authorization': `${user.access}`,
      },
      body: form
    }).then(res=>res.json())
    .then(data=>{
      const oldUser = JSON.parse(localStorage.getItem('user'))
            oldUser.url = data.url
            
            dispatch({type: "LOGIN_SUCCESS", payload: oldUser})
            localStorage.setItem('user', JSON.stringify(oldUser))
    }).catch(err=>{
      console.log(err);
    })
  }

  return(
    <section className=" w-full h-full box flex justify-center items-center p-3">
      <div className="box p-5">
      <h3 className='text-center font-bold text-cyan-500 mb-5'>Update profile</h3>
        <form onSubmit={updatePicture} encType='multipart/form-data'>
        <img src={image ? URL.createObjectURL(image) : `${url}`} alt="" className='profile-img '/>
        <input type="file" accept='image/*' onChange={(e)=> setImage(e.target.files[0])}/>
        <button>submit</button>
        </form>
        <form onSubmit={updateUser} className='mt-5' >
        
        <InputField defaultValue={name} label="Name" type="text" name="name" id="name" onchangeFn={setName}/>
        <InputField defaultValue={email} label="Email" type="email" name="email" id="email" onchangeFn={setEmail}/>
        <p className="error-response">{err}</p>
        <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
          update
        </button>
        </form>
      </div>
    </section>
  )

}

export default UpdateProfile