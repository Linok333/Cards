import React from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import { changeColorAction, deleteCardsAction, updateeCardAction } from '../../action';

import './MyCard.css';
import Arrows from '../../Arrow';
import AddForm from '../../components/AddForm';

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

const MyCard = ({
	updateeCard, match, pasport, strId,
}) => {
	let item;
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cards } = client;

			cards.forEach((card) => {
				console.log('card.id', card.id);
				console.log('Number(match.params.id)', match.params.id);

				if (card.id === match.params.id) {
					item = card;
				}
			});
		}
	});

	const string = {
		bankName: item.bankName,
		cardName: 'VISA',
		cardType: item.cardType,
		expiredData: item.expiredData,
		cardNumber: item.cardNumber,
	};
	return (
		<div className="MyCard" >
			<div>
				<div className="arrows"> <Arrows params={match.params}/> </div>
				<div> <AddForm updateeCard={(id, obj) => updateeCard(id, obj)}
					string={string} item={item} isUpdate={true}/> </div>
			</div>

			<div className="boxes">
				<div className="h2"> <h2> Here is your card </h2> </div>
				<div className="reter">
					<Card changeColor={() => null}
						deleteCards ={() => null}
						item={item} />
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
