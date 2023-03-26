import image from '../../Assets/avatar.jpg';
const User = () => {
  const updateProfile = (e) => {
    console.log(e);
  };

  return (
    <div className="box p-3 rounded cursor-pointer" onClick={updateProfile}>
      <div className="profile-image-wrap rounded-[10%] w-[80px] h-[80px] m-auto overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="text-center">
        <h4 className="capitalize font-bold text-2xl">ragesh</h4>
        <p className="text-gray-500">ragesh@gamil.com</p>
      </div>
    </div>
  );
};
export default User;
