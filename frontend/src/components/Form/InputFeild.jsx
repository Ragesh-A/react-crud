const InputField = ({defaultValue,label,type, name, id, onchangeFn }) => {
  
  return (
    <div className="input-wrap">
      <label htmlFor={id} className="block mt-4 mb-3">{label}</label>
      <input defaultValue={defaultValue} type={type} name={name} id={id} className="bg-transparent border border-gray-500 w-full outline-none px-3 py-2 rounded" onChange={e=>onchangeFn(e.target.value)} />
    </div>
  );
};
export default InputField;
