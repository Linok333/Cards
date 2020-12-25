import React from 'react'
import AddForm from '../../components/AddForm'
import './AddFormPage.css'
import { connect } from 'react-redux';
import { addCardAction } from '../../action';
import PropTypes from 'prop-types';

export const MyAddContext = React.createContext();

const AddFormPage = ({ addCard }) => {
	const string = {
		bankName: '',
		cardName: '',
		cardType: '',
		expiredData: '',
		cardNumber: '',
	}
	return (
		<div className="AddForm">
			{/* <Arrows /> */}
			<AddForm isUpdate={false} string={string}
				addCard={(objectCard) => addCard(objectCard)} />
		</div>
	)
}
AddFormPage.propTypes = {
	addCard: PropTypes.object,
}
const mapStateToProps = ({ data }) => ({
	data,
});

const mapDispatchToProps = (dispatch) => ({
	addCard: (objectCard) => dispatch(addCardAction(objectCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormPage);
