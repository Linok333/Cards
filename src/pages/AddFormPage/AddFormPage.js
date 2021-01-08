import React from 'react';
import './AddFormPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddForm from '../../components/AddForm';
import { addCardAction } from '../../action';
import Arrows from '../../Arrow';

export const MyAddContext = React.createContext();

const AddFormPage = ({ addCard, pasport, strId }) => {
	let client;
	pasport.forEach((item) => {
		if (item.id === strId) {
			client = `${item.surName} ${item.firstName} створіть карту!`;
		}
	});
	const objCards = {
		bankName: 'ПриватБанк',
		cardName: 'VISA',
		cardType: 'Для виплат',
		expiredData: '',
		cardNumber: '',
		amount: 100,
	};
	return (
		<div className="AddForm">
			<div className="table">
				<div> <Arrows/> </div>
				<div> <AddForm isUpdate={false} objCards={objCards}
					addCard={(objectCard) => addCard(objectCard)}/> </div>
			</div>
			<div className="hello"> <h2 className="myh">  {client} </h2></div>
		</div>
	);
};
AddFormPage.propTypes = {
	addCard: PropTypes.object,
};
const mapStateToProps = ({ pasport, strId }) => ({
	pasport, strId,
});

const mapDispatchToProps = (dispatch) => ({
	addCard: (objectCard) => dispatch(addCardAction(objectCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormPage);
