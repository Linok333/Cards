import React from 'react';
import { connect } from 'react-redux';
import { addPasportAction } from '../../action';
import Arrows from '../../Arrow';
import CreatePasport from '../CreatePasport/CreatePasport';
import './CreatePasportPage.css';

export const MyAddContext = React.createContext();

const CreatePasportPage = ({ addPasport }) => {
	// let item;
	// pasport.forEach((elem) => {
	// 	if (elem.id === strId) {
	// 		item = elem;
	// 	}
	// });
	const wer = {
		firstName: '',
		surName: '',
		middleName: '',
		gender: '',
		birthday: '',
		town: '',
		region: '',
	};
	return (
		<div className="CreatePasportPage">
			<div> <Arrows/> </div>
			<div> <CreatePasport addPasport = {addPasport} isUpdate={false} item={wer} /> </div>
		</div>
	);
};

const mapStateToProps = ({ pasport, strId }) => ({
	pasport, strId,
});

const mapDispatchToProps = (dispatch) => ({
	addPasport: (objectCard) => dispatch(addPasportAction(objectCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePasportPage);
