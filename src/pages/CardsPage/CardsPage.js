import React from 'react'
import SearchCardNumber from '../../components/SearchCardNumber';
import CardList from '../../components/CardList';
import CardColor from '../../components/CardColor';
import './CardsPage.css'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeColorAction, deleteCardsAction } from '../../action';
import { withRouter } from 'react-router-dom';
import Arrows from '../../Arrow';

const CardsPage = ({
	changeColor, deleteCards, match,
}) => (
	<div className="CardsPage">
		<div className="main-react">
			<Arrows params={match.params}/>
			<SearchCardNumber />
			<CardList changeColor={(id) => changeColor(id)} deleteCards = {(id) => deleteCards(id)}/>
		</div>
		<div className={'card-color'}>
			<CardColor/>
		</div>
	</div>
)

const mapStateToProps = ({ newColor, string }) => ({
	newColor, string,
});

const mapDispatchToProps = (dispatch) => ({
	changeColor: (id) => dispatch(changeColorAction(id)),
	deleteCards: (id) => dispatch(deleteCardsAction(id)),
});

CardsPage.propTypes = {
	changeColor: PropTypes.func,
	deleteCards: PropTypes.func,
	match: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardsPage));
