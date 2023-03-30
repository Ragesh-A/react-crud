import star from '../../Assets/Stars.svg'
import moon from '../../Assets/Moon.svg'
import tree from '../../Assets/Trees.svg'
import silhouette from '../../Assets/Silhouette.svg'
import './style.css'
import { useContext} from 'react'
import UserHeader from '../../components/Body_section/UserHeader'
import { AuthContext } from '../../Context/AuthContext'


const HomePage = ()=>{

  const {user} = useContext(AuthContext)


  return (
    <>
    <UserHeader />
    <section className="welcome">
    <div className="nav"></div>
    <h2 className="absolute">Welcome {user? user.name : 'guest'}</h2>
    <div className="stars absolute">
        <img src={star} alt="" />
    </div>
    <div className="moon absolute">
        <img src={moon} alt=""/>
    </div>
    <div className="trees absolute">
        <img src={tree} alt="" />
    </div>
    <div className="man absolute">
        <img src={silhouette} alt="" />
    </div>
   </section> 
    </>
  )
}

export default HomePage;