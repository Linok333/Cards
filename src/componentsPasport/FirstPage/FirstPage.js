import React from 'react';
import { withRouter } from 'react-router';
import './FirstPage.css';

const FirstPage = ({ history }) => (
	<div className="first">
		<i onClick={() => history.push('/EditPasport')} className="fas fa-edit fa-4x edit"></i>
		<div className="prapor">
			<img width="150px" src="https://www.5.ua/media/pictures/original/146560.jpg"/>
		</div>
		<div className="person" >
			<h4 > Паспорт Громадянина України </h4>
			<h4> Passport of a Citizen of Ukraine </h4>
		</div>
	</div>
);

export default withRouter(FirstPage);
