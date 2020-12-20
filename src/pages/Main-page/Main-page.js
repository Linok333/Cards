import React from 'react'
import './Main-page.css'
import { Link, withRouter } from 'react-router-dom';
import Arrows from '../../Arrow';

const MainPage = () => {
  return (
     <div className="MainPage">
        <div  className="card1 "> </div>
        <div   className="second"> 
          <div  className="card">   <Link to="/">       Main   </Link> </div>
          <div   className="card">  <Link to="/Create"> Create </Link> </div>
          {/* <div   className="card">  <Link to="/MyCard/:id/:name"> MyCard </Link> </div> */}
          <div   className="card">  <Link to="/Cards/:data">  Cards  </Link> </div>
        </div>
     </div>
  )
}


// export default withRouter(MainPage)
export default MainPage