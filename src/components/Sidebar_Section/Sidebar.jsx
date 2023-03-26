import { IoMdSpeedometer } from 'react-icons/io';
import logo from '../../Assets/logo.png';
import ListItems from './LIstItems';
import { MdGroups } from 'react-icons/md';
import { BsFillPersonPlusFill } from 'react-icons/bs';
const Sidebar = () => {
  return (
    <div className="box sidebar p-2 relative flex flex-col">
      <div className="flex items-center mt-2 mb-10">
        <img src={logo} alt="logo" className="w-[70px] h-[45px] mr-4" />
        <h3 className="font-bold text-lg text-white">CRUD-APP</h3>
      </div>
      <div>
        <ul>
          <ListItems title="Dashboard" icon={<IoMdSpeedometer />} />
          <ListItems title="Users" icon={<MdGroups />} />
          <ListItems title="Add User" icon={<BsFillPersonPlusFill />} />
        </ul>
      </div>
      <div className=" mt-auto h-[7rem] border w-[100%] box rounded-lg flex items-center justify-center">
        hi
      </div>
    </div>
  );
};
export default Sidebar;
