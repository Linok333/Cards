import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import './AllCardsPage.css';
// import { deleteCardsAction } from '../../action';

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();
const AllCardsPage = ({ clientsArray }) => {
	const arrayCards = [];
	// if (!strId) {
	// 	return 'Please create your first Card!';
	// }
	const [open, setOpen] = React.useState(false);
	const [firstName, setFirstName] = React.useState('');
	const [surName, setSurName] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [secondName, setSecondName] = React.useState('');
	const [town, setTown] = React.useState('');
	const [region, setRegion] = React.useState('');
	const [birthday, setBirthday] = React.useState('');

	const handleOpen = (id, custId) => {
		clientsArray.forEach((client) => {
			if (client.id === custId) {
				// firstName = client.firstName;
				setFirstName(client.firstName);
				setSurName(client.surName);
				setSecondName(client.middleName);
				setGender(client.gender);
				setTown(client.town);
				setRegion(client.region);
				setBirthday(client.birthday);
			}
		});
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	clientsArray.forEach((client) => {
		const { cards } = client;

		// if (client.id === cod) {
		// 	Myclient = client;
		// }

		cards.forEach((card) => {
			arrayCards.push({ ...card, customerId: client.id });
		});
	});
	const elements = arrayCards.map((item) => (
		<div key={item.id} className='AllCards'>
			< Card changeColor={() => null}
				deleteCards={() => null} item={item} mood={(id, custId) => handleOpen(id, custId)}/>
		</div>
	));
	return (
		<div>
			<div className='allCards'> <h2> All Clients Cards </h2> </div>
			{ elements }
			{/* <button type="button" onClick={handleOpen}>
				Open Modal
			</button> */}
			<Modal
				style={{
					justifyContent: 'center', alignItems: 'center', display: 'flex',
				}}
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className='po'>
					<i onClick={handleClose} className="far fa-times-circle fa-2x closee"></i>
					<div className='customer'>
						<h3> Customer </h3>
					</div>
					<div className='fos'>
						<div className='fo'> FirstName: <span className='admire'> {firstName} </span></div>
						<div className='fo'> MiddleName: <span className='admire'> {secondName} </span>  </div>
						<div className='fo'> SurName: <span className='admire'> {surName} </span>  </div>
						<div className='fo' > Gender:  <span className='admire'> {gender} </span> </div>
						<div className='fo'> Birhday: <span className='admire'> {birthday} </span>  </div>
						<div className='fo'> Town: <span className='admire'> {town} </span>  </div>
						<div className='fo'> Region: <span className='admire'> {region} </span>  </div>
					</div>
					<div className='but' > 	<Button variant="contained" onClick={handleClose} color="primary" href="#contained-buttons">
						Ok
					</Button>
					</div>
					{/* <i className="far fa-times-circle fa-3x"></i> */}
				</div>
			</Modal>
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

AllCardsPage.propTypes = {
	deleteCards: PropTypes.func,
	changeColor: PropTypes.func,
	clientsArray: PropTypes.array,
	strId: PropTypes.number,
};
export default connect(mapStateToProps, null)(withRouter(AllCardsPage));
