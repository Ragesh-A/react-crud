import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../components/Body_section/User';
import Sidebar from '../../components/Sidebar_Section/Sidebar';
import { isLogged } from '../../hooks/userAuth';

const AllUsers = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const user = isLogged()

  useEffect(() => {
    fetch('http://localhost:8000/admin/users',{
      method: 'GET',
      headers: {
        'Authorization': `${user.access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.err ? navigate('/login') : setUsers(data)
        
      });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="body p-3 bg-gray-l00 bg-grad overflow-y-auto ">
        <div className="users-sec">
          {users.map(user=>{
          return <User id={user._id} key={user._id} name={user.name} email={user.email} />
          })}
          
        </div>
      </div>
    </>
  );
};

export default AllUsers;
