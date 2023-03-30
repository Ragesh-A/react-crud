import { Link } from 'react-router-dom';
import image from '../../Assets/avatar.jpg';
const User = ({id ,name, email}) => {

  return (
    <div className="box p-3 rounded">
      <div className="profile-image-wrap rounded-[10%] w-[80px] h-[80px] m-auto overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="text-center">
        <h4 className="capitalize font-bold text-2xl">{name}</h4>
        <p className="text-gray-500">{email}</p>
      </div>
      <Link to={`/admin/user/${id}`}><button className='text-center w-full bg-cyan-500 rounded py-1 mt-5'>select</button></Link>
    </div>
  );
};
export default User;
