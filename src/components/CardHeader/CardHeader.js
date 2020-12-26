import React from 'react';
import './CardHeader.css';
import CardText from './CardText';
import PropTypes from 'prop-types';

const CardHeader = ({ changeColor, item }) => (
	<div className="CardHeader" onClick={changeColor}>
		<CardText name={item.bankName}/>
		<CardText name={item.cardType}/>
	</div>
);

CardHeader.propTypes = {
	changeColor: PropTypes.func,
	item: PropTypes.object,
};
export default CardHeader;
