import React from 'react';
import './ExpiredData.css';
import PropTypes from 'prop-types';

const ExpiredData = ({ expired }) => (
	<div className="tChild2">
		<span> {expired} </span>
	</div>
);
ExpiredData.propTypes = {
	expired: PropTypes.string,
};
export default ExpiredData;
