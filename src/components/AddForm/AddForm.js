import React, { useState } from 'react';
import './AddForm.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const AddForm = ({
	addCard, updateeCard, history, isUpdate, item, objCards,
}) => {
	const optBank = [
		{ text: 'ПриватБанк', id: 1 },
		{ text: 'Ощадбанк', id: 2 },
		{ text: 'Укргазбанк', id: 3 },
		{ text: 'Кредобанк', id: 4 },
		{ text: 'АльфаБанк', id: 5 },
		{ text: 'Укрсиббанк', id: 6 },
		{ text: 'ПравексБанк', id: 7 },
	];
	const optName = [
		{ text: 'VISA', id: 1 },
		{ text: 'LOGO', id: 2 },
		{ text: 'MOLO', id: 3 },
		{ text: 'REWQ', id: 4 },
		{ text: 'LPEN', id: 5 },
	];
	const optTyp = [
		{ text: 'Кредитна', id: 1 },
		{ text: 'Для виплат', id: 2 },
		{ text: 'Юніора', id: 3 },
		{ text: 'Фігня', id: 4 },
	];

	const banks = optBank.map((el) => (
		<option key={el.id} value={el.text}> {el.text} </option>
	));
	const typ = optTyp.map((el) => (
		<option key={el.id} value={el.text}> {el.text} </option>
	));
	const names = optName.map((el) => (
		<option key={el.id} value={el.text}> {el.text} </option>
	));

	const [bankName, setBankName] = useState(`${objCards.bankName}`);
	const [cardName, setCardName] = useState(`${objCards.cardName}`);
	const [cardType, setCardType] = useState(`${objCards.cardType}`);
	const [expiredData, setExpiredData] = useState(`${objCards.expiredData}`);
	const [cardNumber, setCardNumber] = useState(`${objCards.cardNumber}`);
	const [amount] = useState(`${objCards.amount}`);
	let color;
	let costs;
	let income;
	let button = 'Add Card';
	if (isUpdate) {
		costs = item.costs;
		income = item.income;
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

	const onSubmit = () => {
		let str = '';
		const CardNumber = checkMaxLength(cardNumber, 'Card Number', 1, 47);
		const ExpiredData = checkMaxLength(expiredData, 'Expired data', 1, 15);
		if (cardNumber.length === 16) {
			for (let i = 0; i < 16; i++) {
				if (i === 3 || i === 7 || i === 11) {
					str += `${cardNumber[i]} `;
				} else {
					str += cardNumber[i];
				}
			}
		}

		if (ExpiredData && CardNumber) {
			if (!isUpdate) {
				addCard({
					bankName,
					cardType,
					str,
					expiredData,
					cardName,
					amount,
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
					amount,
					income,
					costs,
				});
			}
		}
	};

	return (
		<div className="form-style1">
			<div className="style">
				<div className="text"> <span> Bank Name:</span> </div>
				<div className="input">
					<select name="select" className="input2" onChange={onBank} value={ bankName || 'ПриватБанк'}>
						{banks}
					</select>
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Card Type: </span> </div>
				<div className="input">
					<select name="select" className="input2" onChange={onType} value={ cardType || 'Для виплат'}>
						{typ}
					</select>
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Card Number:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onNumber} value={cardNumber} />
				</div>
			</div>
			<div className="style">
				<div className="text"> <span> Expired Data:</span> </div>
				<div className="input">
					<input type="date" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/>
				</div>
			</div>
			<div className="style">
				<div className="text" > <span> Card Name:</span> </div>
				<div className="input">
					<select name="select" className="input2" onChange={onName} value={ cardName || 'VISA'}>
						{names}
					</select>
				</div>
			</div>
			<div className="style12" >
				<button className="btn btn-outline-secondary" onClick={onSubmit} > {button} </button>
			</div>
		</div>
	);
};
AddForm.propTypes = {
	addCard: PropTypes.func,
	updateeCard: PropTypes.func,
	history: PropTypes.object,
	isUpdate: PropTypes.bool,
	item: PropTypes.object,
};
const AddForm1 = withRouter(AddForm);
export default AddForm1;
