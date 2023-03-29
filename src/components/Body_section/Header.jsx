import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Header = ()=>{
  const {user} = useContext(AuthContext)
  return(
    <header className="text-white rounded-md p-6 box mb-4">
      <h2 className="text-right  font-bold uppercase text-xs">Welcome &nbsp;&nbsp;&nbsp;{user?.name}</h2>
    </header>
  )
}

export default Header;