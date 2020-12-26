import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Card from '../Card/card';
import PropTypes from 'prop-types';

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

const CardList = ({
	changeColor, deleteCards, clientsArray, strId,
}) => {
	let arrayCards;
	if (!strId) {
		return 'Please create your first Card!';
	}
	clientsArray.forEach((client) => {
		if (client.id === strId) {
			arrayCards = client.cards;
		}
	});

	const elements = arrayCards.map((item) => (
		<div key={item.id}>
			<MyIDContext.Provider value={item.id}>
				<MyItemContext.Provider value={item}>
					<Card changeColor={(id) => changeColor(id)}
						deleteCards={(id) => deleteCards(id)} item={item}/>
				</MyItemContext.Provider>
			</MyIDContext.Provider>
		</div>
	));
	return (
		<div>
			{ elements }
		</div>
	);
};

const mapStateToProps = ({ pasport, strId }) => {
	const clientsArray = pasport.map((pass) => pass);
	return {
		clientsArray,
		strId,
	};
};

CardList.propTypes = {
	deleteCards: PropTypes.func,
	changeColor: PropTypes.func,
	clientsArray: PropTypes.array,
	strId: PropTypes.number,
};
export default connect(mapStateToProps, null)(withRouter(CardList));
