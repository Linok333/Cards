import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card'
import { changeColorAction, deleteCardsAction, updateeCardAction } from '../../action';
import PropTypes from 'prop-types';

import './MyCard.css';
import { withRouter } from 'react-router';
import Arrows from '../../Arrow';
import AddForm from '../../components/AddForm';

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

const MyCard = ({
	data, updateeCard, match,
}) => {
	let item;
	data.foreach((card) => {
		if (card.id === match.params.id) {
			item = card;
		}
	})
	const string = {
		bankName: item.bankName,
		cardName: 'VISA',
		cardType: item.cardType,
		expiredData: item.expiredData,
		cardNumber: item.cardNumber,
	}
	return (
		<div className="MyCard" >
			<div>
				<div className="arrows"> <Arrows params={match.params}/> </div>
				<div> <AddForm updateeCard={(id, obj) => updateeCard(id, obj)}
					string={string} item={item} isUpdate={true}/> </div>
			</div>

			<div className="box">
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

const mapStateToProps = ({ data }) => ({
	data,
});

const mapDispatchToProps = (dispatch) => ({
	changeColor: () => dispatch(changeColorAction()),
	deleteCards: () => dispatch(deleteCardsAction()),
	updateeCard: (id, obj) => dispatch(updateeCardAction(id, obj)),
});

MyCard.propTypes = {
	data: PropTypes.object,
	updateeCard: PropTypes.object,
	match: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyCard));
