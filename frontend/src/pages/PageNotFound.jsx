import { Link } from "react-router-dom";

const PageNotFound = ()=>{
  return(
    <>
    
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="mt-2">don't worry click below</p>
      <Link to='/' ><button className="px-10 py-3 my-3 bg-cyan-500 rounded hover:bg-cyan-700">HELP ME</button></Link>
    </div>
    
    </>
  )
}

export default PageNotFound;