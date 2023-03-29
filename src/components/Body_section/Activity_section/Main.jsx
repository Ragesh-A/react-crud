import video from '../../../Assets/particles.mp4';
const Main = () => {
  return (
    <>
      <div className="grid video-sec py-3">
        <div className="animated-box relative">
          <div className="absolute text-white left-0 top-0 h-full">
            <div className=" h-[100%] p-3 text-2xl">Welcome to Dashboard</div>
          </div>
          <video
            src={video}
            autoPlay
            loop
            muted
            className="rounded box"
          ></video>
        </div>
        <div className="box rounded"></div>
      </div>
    </>
  );
};

export default Main;
