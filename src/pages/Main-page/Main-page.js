import React from 'react';
import './Main-page.css';
// import { Link } from 'react-router-dom';
// import SimpleModal from '../../componentsPasport/Modalka/Modalka';
import TemporaryDrawer from '../../components/Drawer';

const MainPage = () => (
	<div className="MainPage">
		<div className="card1 "> </div>
		<div className="second">
			{/* <div className="card">   <Link to="/">       Main   </Link> </div> */}
			<TemporaryDrawer />
			{/* <div   className="card">  <Link to="/Create"> Create </Link> </div> */}
			{/* <div   className="card">  <Link to="/MyCard/:id/:name"> MyCard </Link> </div> */}
			{/* <div   className="card">  <Link to="/Cards/:data">  Cards  </Link> </div> */}
			{/* <div className="card" >  <Link to="/Pasports"> Pasports </Link> </div> */}
			{/* <div className="cards">  <Link to="/AllCardsPage"> All Cards </Link> </div> */}

		</div>
	</div>
);

// export default withRouter(MainPage)
export default MainPage;
