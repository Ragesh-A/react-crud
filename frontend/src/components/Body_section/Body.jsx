import Main from './Activity_section/Main';
import Header from './Header';

const Body = () => {
  return (
    <>
      <div className="body p-3 bg-gray-l00 bg-grad overflow-y-auto ">
        <Header />
        <Main />
      </div>
    </>
  );
};
export default Body;
