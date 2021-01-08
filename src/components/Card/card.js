import React from 'react';
import './card.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CardHeader from '../CardHeader';
import CardMiddle from '../CardMiddle';
import CardFooter from '../CardFooter';

const Card = ({
	changeColor, item, deleteCards, match, mood,
}) => (
	<div className={'card-style'} style={{ backgroundColor: item.color }}>
		<CardHeader item={item} changeColor={() => changeColor(item.id)} />
		<CardMiddle item={item} id={match.params.id} mood={() => mood(item.id, item.customerId)} />
		<CardFooter item={item} deleteCards ={(id) => deleteCards(id)} />
	</div>
);

Card.propTypes = {
	item: PropTypes.object,
	deleteCards: PropTypes.func,
	changeColor: PropTypes.func,
	match: PropTypes.object,
};
export default withRouter(Card);
