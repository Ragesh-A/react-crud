const InputField = ({label,type, name, id, }) => {
  return (
    <div className="input-wrap">
      <label htmlFor={id} className="block mt-4 mb-3">{label}</label>
      <input type={type} name={name} id={id} className="bg-transparent border border-gray-500 w-full outline-none px-3 py-2 rounded"/>
    </div>
  );
};
export default InputField;
