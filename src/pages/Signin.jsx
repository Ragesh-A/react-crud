import InputField from "../components/Form/InputFeild";
import video from '../Assets/anim-bg.mp4'

const Signin = () =>{

  const submitHandle = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="animated-form-wrap rounded flex justify-center items-center w-full bg-black relative">
      <video src={video} className='w-fill h-screen' autoPlay loop muted></video>
      <div className='bg-black bg-opacity-[88%] p-10 rounded w-[500px] border border-gray-600 absolute'>
        <h1 className='text-center text-cyan-400 font-bold text-lg p-3'>LOGIN </h1>
        <form onSubmit={submitHandle}>
          <InputField label="Email" type="email" name="email" id="email" />
          <InputField label="Password" type="password" name="password" id="password" />
          <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
            Sign IN
          </button>
          <div className="text-right text-sm p-2">
            <a href="/signin">Create An Account</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin;