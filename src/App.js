
import Home from './pages/user/HomePage'
import AddUser from './pages/Admin/AddUser';
import AllUsers from './pages/Admin/AllUsers';
import Dashboard from './pages/Admin/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import {Routes, Route} from 'react-router-dom'
import EditUser from './pages/Admin/EditUser';
import UpdateProfile from './pages/user/UpdateProfile';

const App = () => {
  return (
    <>
      <div className="m-auto flex w-full h-[95vh] bg-gray-200 align-middle justify-center overflow-hidden rounded box border-1 border-black border-opacity-70">
      <Routes >
        <Route path='/' element={<Home />} />
        < Route path='/login' element={<Signin />}/>
        < Route path='/signup' element={<Signup />}/>
        < Route path='/profile' element={<UpdateProfile />}/>
        < Route path='/admin' element={<Dashboard />}/>
        < Route path='/admin/users' element={ <AllUsers />}/>
        < Route path='/admin/user' element={<AddUser />}/>
        < Route path='/admin/user/:userId' element={<EditUser />}/>
      </Routes>

        
        {/*  */}
        {/* <Sidebar /> */}
        {/* <div className="body p-3 bg-gray-l00 bg-grad overflow-y-auto "> */}
          {/* <Header /> */}
          
          {/* */}
          {/*  */}
        {/* </div> */}
      </div>
    </>
  );
};

export default App;
