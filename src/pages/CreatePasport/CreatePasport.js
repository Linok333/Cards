import React, { useState } from 'react';
import './CreatePasport.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const CreatePasport = ({
	addPasport, updatePasport, isUpdate, item, history,
}) => {
	const [firstName, setFirstName] = useState(`${item.firstName}`);
	const [surName, setSurName] = useState(`${item.surName}`);
	const [middleName, setMiddleName] = useState(`${item.middleName}`);
	const [birthday, setBirthday] = useState(`${item.birthday}`);
	const [gender, setGender] = useState(`${item.gender}`);
	const [town, setTown] = useState(`${item.town}`);
	const [region, setRegion] = useState(`${item.region}`);

	// let color;
	// let button = 'Add Card';
	// if (isUpdate) {
	// 	button = 'Update';
	// 	color = item.color;
	// }
	let image;
	let button = 'Add Pasport';
	if (isUpdate) {
		button = 'Update Pasport';
		image = item.image;
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
	const onSubmit = () => {
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
			<div className="style1">
				<div className="text" > <span> Gender:</span> </div>
				<div className="input" onChange={onGender} value={gender}>
					{/* <input type="text" className="form-control" placeholder="Enter please..." onChange={onName} value={cardName}/> */}
					<input className="ma" type="radio" name="gender" value="Чоловік"/> Чоловік
					<input className="ma" checked={true} type="radio" name="gender" value="Жінка"/> Жінка
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Town:</span> </div>
				<div className="input">
					{/* <input type="select" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/> */}
					<select name="select" className="input2" onChange={onTown} value={town}>
						<option value="с. Щасливе" selected > с. Щасливе </option>
						<option value="с.Гонорівка" > с.Гонорівка </option>
						<option value="с.Брохвичі"> с.Брохвичі </option>
						<option value="с.Студена"> с.Студена </option>
						<option value="с.Трибусівка"> с.Трибусівка </option>
						<option value="с.Миролюбівка"> с.Миролюбівка </option>
						<option value="с.Рудниця"> с.Рудниця </option>
						<option value="с.Ставки"> с.Ставки </option>
						<option value="с.Яворівка"> с.Яворівка </option>
						<option value="с.Трудове"> с.Трудове </option>
					</select>
				</div>
			</div>
			<div className="style1">
				<div className="text"> <span> Region:</span> </div>
				<div className="input">
					<select name="select" className="input2" onChange={onRegion} value={region}>
						<option value="Вінницька обл" > Вінницька обл </option>
						<option value="Хмельницька обл" > Хмельницька обл </option>
						<option value="Київська обл"> Київська обл </option>
						<option value="Тернопільська обл"> Тернопільська обл </option>
						<option value="Чернігівська обл"> Чернігівська обл </option>
						<option value="Чернівецька обл"> Чернівецька обл </option>
						<option value="Житомирська обл"> Житомирська обл </option>
						<option value="Львівська обл"> Львівська обл </option>
						<option value="Харківська обл"> Харківська обл </option>
						<option value="Херсонська обл"> Херсонська обл </option>
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
