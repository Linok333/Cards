import React from 'react';
import './CardMiddle.css';
import { withRouter } from 'react-router';
// import Modal from '@material-ui/core/Modal';

// import PropTypes from 'prop-types';

const CardMiddle = ({
	item, history, location, mood,
}) => {
	const cardM = item.cardNumber;
	const arrCard = cardM.split(' ');
	const add = (str) => {
		if (location.pathname === '/AllCardsPage') {
			// history.push('./Modalka');
			mood();
			return;
		}
		if (location.pathname === `${str}/Cards`) {
			return;
		}

		history.push(`${str}/Cards`);
	};

	return (
		<div className="card-middle" onClick={() => add(`/MyCard/${item.id}`)}>
			<span> {arrCard[0]} </span>
			<span> {arrCard[1]} </span>
			<span> {arrCard[2]} </span>
			<span> {arrCard[3]} </span>
		</div>
	);
};

export default withRouter(CardMiddle);
