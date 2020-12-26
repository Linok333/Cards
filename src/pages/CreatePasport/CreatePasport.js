import React, { useState } from 'react';
import './CreatePasport.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Arrows from '../../Arrow';

const CreatePasport = ({
	addCard, updateeCard, history, isUpdate, item, string,
}) => {
	const [bankName, setBankName] = useState('');
	const [cardName, setCardName] = useState('');
	const [cardType, setCardType] = useState('');
	const [expiredData, setExpiredData] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	let color;
	let button = 'Add Card';
	if (isUpdate) {
		button = 'Update';
		color = item.color;
	}

	const onBank = (e) => {
		setBankName(e.target.value);
	};

	const onName = (e) => {
		setCardName(e.target.value);
	};

	const onType = (e) => {
		setCardType(e.target.value);
	};

	const onData = (e) => {
		setExpiredData(e.target.value);
	};

	const onNumber = (e) => {
		setCardNumber(e.target.value);
	};

	const checkMaxLength = (name, str, min, max) => {
		if (name.length < min || name.length > max) {
			return false;
		}
		return true;
	};

	const checkNumber = (name) => {
		for (let i = 0; i < name.length; i++) {
			if (Number(name[0])) {
				return false;
			}
		}
		return true;
	};

	const checkInput = (name, str, min, max) => {
		if (checkNumber(name) && checkMaxLength(name, str, min, max)) {
			return true;
		}
		return false;
	};

	const onSubmit = () => {
		let str = '';
		if (!cardType && !bankName && !cardNumber && !expiredData && !cardName) {
			alert('Їбанутий? Сначала введи щось!');
		}

		const BankName = checkInput(bankName, 'Bank Name', 1, 90);
		if (!BankName) {
			// alert('BankName Incorrect')
			return;
		}
		const CardType = checkInput(cardType, 'Card Type', 1, 89);
		const CardNumber = checkMaxLength(cardNumber, 'Card Number', 1, 56);

		if (cardNumber.length === 16) {
			for (let i = 0; i < 16; i++) {
				if (i === 3 || i === 7 || i === 11) {
					str += `${cardNumber[i]} `;
				} else {
					str += cardNumber[i];
				}
			}
		}
		const CardName = checkInput(cardName, 'Card Name', 1, 56);
		const ExpiredData = checkMaxLength(expiredData, 'Expired data', 1, 34);

		if (BankName && CardType && CardName && ExpiredData && CardNumber) {
			if (!isUpdate) {
				addCard({
					bankName,
					cardType,
					str,
					expiredData,
					cardName,
				});

				setBankName('');
				setCardType('');
				setCardNumber('');
				setCardName('');
				setExpiredData('');
				history.push('./Cards/Create');
			} else {
				updateeCard(item.id, {
					bankName,
					cardType,
					str,
					expiredData,
					cardName,
					color,
				});
				setBankName('');
				setCardType('');
				setCardNumber('');
				setCardName('');
				setExpiredData('');
			}
		}
	};

	return (
		<div className="form-style1">
			<Arrows/>
			<div className="style">
				<div className="text"> <span> First Name:</span> </div>
				<div className="input">
					<input type="text" className="form-control"
						placeholder="Enter please..."
						onChange={onBank}
						value={bankName} />
				</div>
			</div>

			<div className="style">
				<div className="text"> <span> Surname: </span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onType} value={cardType} />
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Middle Name:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onNumber} value={cardNumber} />
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Birthday:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/>
				</div>
			</div>
			<div className="style">
				<div className="text" > <span> Sex:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onName} value={cardName}/>
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Town:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/>
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Region:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/>
				</div>
			</div>
			<div className="item-add-form">
				<button className="btn btn-outline-secondary" onClick={onSubmit} > Add Pasport </button>
			</div>

		</div>
	);
};
CreatePasport.propTypes = {
	addCard: PropTypes.func,
	updateeCard: PropTypes.func,
	history: PropTypes.object,
	isUpdate: PropTypes.bool,
	item: PropTypes.object,
	string: PropTypes.object,
};
export default withRouter(CreatePasport);
