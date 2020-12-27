import React from 'react';
import PropTypes from 'prop-types';
import ExpiredData from './ExpiredData';
import TypeName from './TypeName';
import Sign from './Sign';
import './CardFooter.css';

const CardFooter = ({ deleteCards, item }) => {
	const normalizeExpiredDate = (str) => {
		if (str.includes('/')) {
			return str;
		}
		return `${str.split('-')[1]}/${str.split('-')[0].slice(-2)}`;
	};

	return (
		<div className="third" >
			<TypeName item={item} />
			<ExpiredData expired={normalizeExpiredDate(item.expiredData)}/>
			<Sign deleteCards={() => deleteCards(item.id)} />
		</div>
	);
};

CardFooter.propTypes = {
	item: PropTypes.object,
	deleteCards: PropTypes.func,
};
export default CardFooter;
