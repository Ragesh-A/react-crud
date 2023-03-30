import { IoMdSpeedometer } from 'react-icons/io';
import logo from '../../Assets/logo.png';
import ListItems from './LIstItems';
import { MdGroups } from 'react-icons/md';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="box sidebar p-2 relative flex flex-col">
      <div className="flex items-center mt-2 mb-10">
        <Link to='/'><img src={logo} alt="logo" className="w-[70px] h-[45px] mr-4" /></Link>
        <h3 className="font-bold text-lg text-white">CRUD-APP</h3>
      </div>
      <div>
        <ul>
          <ListItems link='/admin' title="Dashboard" icon={<IoMdSpeedometer />} />
          <ListItems link='/admin/users' title="Users" icon={<MdGroups />} />
          <ListItems link='/admin/user' title="Add User" icon={<BsFillPersonPlusFill />} />
        </ul>
      </div>
      <div className=" mt-auto h-[7rem] border w-[100%] box rounded-lg flex items-center justify-center">
        hi
      </div>
    </div>
  );
};
export default Sidebar;
