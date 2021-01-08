import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MyCard.css';

import { changeColorAction, deleteCardsAction, updateeCardAction } from '../../action';
import AddForm from '../../components/AddForm';
import Card from '../../components/Card';
import Arrows from '../../Arrow';

const MyCard = ({
	updateeCard, match, pasport, strId, history,
}) => {
	let item;
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cards } = client;
			cards.forEach((card) => {
				if (card.id === match.params.id) {
					item = card;
				}
			});
		}
	});

	const objCards = {
		bankName: item.bankName,
		cardName: item.typeName,
		cardType: item.cardType,
		expiredData: item.expiredData,
		cardNumber: item.cardNumber,
		amount: item.amount,
	};
	return (
		<div className="MyCard" >
			<div>
				<div className="arrows"> <Arrows params={match.params}/> </div>
				<div> <AddForm updateeCard={(id, obj) => updateeCard(id, obj)}
					objCards={objCards} item={item} isUpdate={true}/> </div>
			</div>
			<div className="boxes">
				<div className="h2"> <h2> Here is your card </h2> </div>
				<div className="reter">
					<div className='cort' onClick={() => { history.push(`/BuyPage/${match.params.id}`); }} > <i className="fas fa-piggy-bank fa-3x"></i> </div>
					<Card changeColor={() => null}
						deleteCards ={() => null}
						item={item} />
					<div className="cort" onClick={() => { history.push(`/ShowPage/${match.params.id}`); }} > <i className=" smail fas fa-search-dollar fa-3x" ></i> </div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ pasport, strId }) => ({
	pasport, strId,
});

const mapDispatchToProps = (dispatch) => ({
	changeColor: () => dispatch(changeColorAction()),
	deleteCards: () => dispatch(deleteCardsAction()),
	updateeCard: (id, obj) => dispatch(updateeCardAction(id, obj)),
});

MyCard.propTypes = {
	data: PropTypes.object,
	updateeCard: PropTypes.func,
	match: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyCard));
