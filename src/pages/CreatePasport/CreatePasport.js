import React, { useState } from 'react';
import './CreatePasport.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const CreatePasport = ({
	addPasport, updatePasport, isUpdate, item, history,
}) => {
	const optTown = [
		{ text: 'с.Гонорівка', id: 1 },
		{ text: 'с.Брохвичі', id: 2 },
		{ text: 'с.Студена', id: 3 },
		{ text: 'с.Рудниця', id: 4 },
		{ text: 'с.Ставки', id: 5 },
		{ text: 'с.Яворівка', id: 6 },
		{ text: 'с.Миролюбівка', id: 7 },
		{ text: 'с.Кончене', id: 7 },
	];
	const optRegion = [
		{ text: 'Вінницька обл', id: 1 },
		{ text: 'Чернівецька обл', id: 2 },
		{ text: 'Харківська обл', id: 3 },
		{ text: 'Київська обл', id: 4 },
		{ text: 'Хмельницька обл', id: 5 },
		{ text: 'Херсонська обл', id: 6 },
		{ text: 'Запорізька обл', id: 7 },
	];
	const [firstName, setFirstName] = useState(`${item.firstName}`);
	const [surName, setSurName] = useState(`${item.surName}`);
	const [middleName, setMiddleName] = useState(`${item.middleName}`);
	let [birthday, setBirthday] = useState(`${item.birthday}`);
	const [gender, setGender] = useState(`${item.gender}`);
	const [town, setTown] = useState(`${item.town}`);
	const [region, setRegion] = useState(`${item.region}`);

	let image;
	let check;
	let button = 'Add Pasport';
	if (isUpdate) {
		button = 'Update Pasport';
		image = item.image;
		if (gender === 'Чоловік') {
			check = true;
		} else {
			check = false;
		}
	}
	const onFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const onSurname = (e) => {
		setSurName(e.target.value);
	};

	const onMiddleName = (e) => {
		setMiddleName(e.target.value);
	};

	const onBirtday = (e) => {
		setBirthday(e.target.value);
		console.log(setBirthday = null);
	};
	const onTown = (e) => {
		setTown(e.target.value);
	};
	const onRegion = (e) => {
		setRegion(e.target.value);
	};

	const onGender = (e) => {
		setGender(e.target.value);
	};
	birthday.split('-');
	const araa = new Date(birthday);
	const monthNumber = 	araa.getMonth();
	const year = 	araa.getFullYear();
	const day = 	araa.getDate();
	const { cards, cardsMain, id } = item;
	const months = ['січня', 'лютого', 'березня', 'квітня', 'травня',
		'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
	const onSubmit = () => {
		const str = `${day} ${months[monthNumber]} ${year}р`;
		birthday = str;
		if (!isUpdate) {
			addPasport({
				gender,
				firstName,
				middleName,
				surName,
				birthday,
				town,
				region,
			});

			setFirstName('');
			setMiddleName('');
			setSurName('');
			setBirthday('');
			setTown('');
			setRegion('');
			setGender('');
		} else {
			updatePasport(item.id, {
				gender,
				firstName,
				middleName,
				surName,
				birthday,
				town,
				region,
				image,
				cards,
				cardsMain,
				id,
			});

			setFirstName('');
			setMiddleName('');
			setSurName('');
			setBirthday('');
			setTown('');
			setRegion('');
			setGender('');
		}
		history.push('./Pasports');
	};

	const towns = optTown.map((el) => (
		<option key={el.id} value={el.text}> {el.text} </option>
	));
	const regions = optRegion.map((el) => (
		<option key={el.id} value={el.text}> {el.text} </option>
	));

	return (
		<div className="form-style1">
			<div className="style1">
				<div className="text"> <span> First Name:</span> </div>
				<div className="input">
					<input type="text" className="form-control"
						placeholder="Enter please..."
						onChange={onFirstName}
						value={firstName} />
				</div>
			</div>

			<div className="style1">
				<div className="text"> <span> Surname: </span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onSurname} value={surName} />
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Middle Name:</span> </div>
				<div className="input">
					<input type="text" className="form-control" placeholder="Enter please..." onChange={onMiddleName} value={middleName} />
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Birthday:</span> </div>
				<div className="input">
					<input type="date" className="form-control" placeholder="Enter please..." onChange={onBirtday} value={birthday}/>
				</div>
			</div>
			<div className='style1'>
				<div className='text' > <span> Gender:</span> </div>
				<div className='input' onChange={onGender} value={gender || 'Жінка'}>
					<input className='ma' checked={check} type='radio' name='gender' value='Чоловік'/> Чоловік
					<input className='ma' type='radio' checked={!check} name='gender' value='Жінка'/> Жінка
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Town:</span> </div>
				<div className="input">
					<select name="select" className="input2" onChange={onTown} value={town || 'с.Рудниця'}>
						{towns}
					</select>
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Region:</span> </div>
				<div className="input">
					<select value={region || 'Київська обл'} name="select" className="input2" onChange={onRegion} >
						{regions}
					</select>
				</div>
			</div>
			<div className="style12">
				<button className="btn btn-outline-secondary" onClick={onSubmit} > {button} </button>
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
