import Header from './components/Body_section/Header';
import Sidebar from './components/Sidebar_Section/Sidebar';
import AllUsers from './pages/AllUsers';
// import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="m-auto flex w-full h-[95vh] bg-gray-200 align-middle justify-center overflow-hidden rounded box border-1 border-black border-opacity-70">
      <Sidebar />
      <div className="body p-3 bg-gray-l00 bg-grad">
      <Header />
      {/* <Dashboard /> */}
        <AllUsers />
      </div>
    </div>
  );
};

export default App;
