import InputField from '../components/Form/InputFeild';

const Signup = () => {

  const submitHandle = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="animated-form-wrap p-3 rounded flex justify-center items-center w-full">
      <div className='bg-black bg-opacity-80 p-10 rounded w-[500px] border border-gray-600 absolute'>
        <h1 className='text-center text-cyan-400 font-bold text-lg p-3'>CREATE ACCOUNT</h1>
        <form onSubmit={submitHandle}>
          <InputField label="Name" type="text" name="name" id="name" />
          <InputField label="Email" type="email" name="email" id="email" />
          <InputField
            label="Password"
            type="password"
            name="password"
            id="password"
          />
          <button className="text-cyan-500 border border-cyan-500 hover:bg-cyan-400 hover:text-white w-full p-2 rounded mt-3 uppercase font-bold ">
            Sign Up
          </button>
          <div className="text-right text-sm p-2">
            <a href="/signin">Already Have Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
