import InputField from '../../components/Form/InputFeild';
import Sidebar from '../../components/Sidebar_Section/Sidebar';

const AddUser = () => {
  const submitHandle = (e) => {
    e.preventDefault();
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
        <InputField label="Name" type="text" name="name" id="name" />
        <InputField label="Email" type="email" name="email" id="email" />
        <InputField
          label="Password"
          type="password"
          name="password"
          id="password"
        />
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
