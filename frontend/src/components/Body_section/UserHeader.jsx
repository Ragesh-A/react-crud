import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Profile from "./Profile";

const UserHeader = () => {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [profile, setProfile] = useState(false)
  const profileHandle =()=>{
    if(user){
      profile ? setProfile(false) : setProfile(true)
    }else{
      navigate('/login')
    }
  }

  return (<>
  
    <header className="text-white  flex flex-col items-center justify-center absolute top-10 left-0 w-full z-10">
      <div className="box  w-[95%] h-[100%] rounded-md p-5 mb-4">
        <div className="flex w-full justify-between">
          <p className="font-bold text-lg cursor-pointer">CRUD WORLD</p>
          <p className="username uppercase cursor-pointer" onClick={profileHandle}>{user ? user.name : 'guest'}</p>
        </div>
      </div>
      <div className="justify-end flex w-[80%]">
      {profile && <Profile fn={profileHandle} />  }
      </div>
    </header>
    
    </>
  );
};

export default UserHeader;
