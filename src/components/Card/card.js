import React from 'react';
import './card.css';
import { withRouter } from 'react-router';
import CardHeader from '../CardHeader';
import CardMiddle from '../CardMiddle';
import CardFooter from '../CardFooter';
import PropTypes from 'prop-types';

const Card = ({
	changeColor, item, deleteCards, match,
}) => (
	<div className={'card-style'} style={{ backgroundColor: item.color }}>
		<CardHeader item={item} changeColor={() => changeColor(item.id)} />
		<CardMiddle item={item} id={match.params.id}/>
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