import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from '../../components/Body_section/Body';
import Sidebar from '../../components/Sidebar_Section/Sidebar';
import {isLogged} from '../../hooks/userAuth'

const Dashboard = () => {
  const navigate = useNavigate();
  const user = isLogged()
  console.log(user);
  useEffect(() => {
    fetch('http://localhost:8000/admin', {
      method: 'GET',
      headers: {
        'Authorization': `${user.access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          console.log(data.err);
          navigate('/');
        }
      });
  }, []);

  return (
    <>
      <Sidebar />

      <Body />
    </>
  );
};

export default Dashboard;
