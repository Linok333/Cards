import React from 'react';
import './CardText.css';
import PropTypes from 'prop-types';

const CardText = ({ name }) => (
	<div className="CardText">
		<span> {name} </span>
	</div>
);
CardText.propTypes = {
	name: PropTypes.string,
};
export default CardText;
