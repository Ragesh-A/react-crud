import InputField from '../../components/Form/InputFeild';

const AddUser = () => {
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
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
  );
};

export default AddUser;
