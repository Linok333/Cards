import React from 'react';
import { connect } from 'react-redux';
import { updatePasportAction, pasportIdAction } from '../../action';
import Arrows from '../../Arrow';
import CreatePasport from '../CreatePasport/CreatePasport';
import Pasport from '../../componentsPasport/Pasport';

import './EditPasportPage.css';

export const MyAddContext = React.createContext();

const EditPasportPage = ({
	addPasport, strId, pasport, pasportId, updatePasport,
}) => {
	let item;
	pasport.forEach((elem) => {
		if (elem.id === strId) {
			item = elem;
		}
	});
	console.log('iteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem', item);
	const wer = {
		firstName: item.firstName,
		surName: item.surName,
		middleName: item.middleName,
		gender: item.gender,
		birthday: item.birthday,
		town: item.town,
		region: item.region,
		image: item.image,
	};

	return (
		<div className="roow">
			<div className="EditPasportPage">
				<div> <Arrows/> </div>
				<div> <CreatePasport addPasport = {addPasport}
					updatePasport={(id, obj) => updatePasport(id, obj)}
					isUpdate={true} item={wer}/>
				 </div>
			</div>
			<div className="pasport"> <Pasport item={item}
				pasportId={(id) => pasportId(id)}
			/> </div>
		</div>
	);
};
const mapStateToProps = ({ pasport, strId }) => ({
	pasport, strId,
});

const mapDispatchToProps = (dispatch) => ({
	pasportId: (id) => dispatch(pasportIdAction(id)),
	updatePasport: (id, obj) => dispatch(updatePasportAction(id, obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPasportPage);
