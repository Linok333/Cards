import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './BuyPage.css';
import { pasportIdAction } from '../../action';
import Arrows from '../../Arrow';
import Card from '../../components/Card';

const BuyPage = ({ match, pasport, strId }) => {
	const [plusMoney, setPlusMoney] = useState('');
	const [minusMoney, setMinusMoney] = useState('');
	const [incom, setIncom] = useState('');
	const [cost, setCosts] = useState('');

	const onPlusMoney = (e) => {
		setPlusMoney(e.target.value);
	};

	const onMinusMoney = (e) => {
		setMinusMoney(e.target.value);
	};

	const onIncom = (e) => {
		setIncom(e.target.value);
	};

	const onCosts = (e) => {
		setCosts(e.target.value);
	};

	let item;
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cards } = client;
			cards.forEach((card) => {
				if (card.id === match.params.id) {
					item = card;
				}
			});
		}
	});

	const applyCosts = () => {
		if (minusMoney && cost) {
			const { costs } = item;
			if (!item.amount) {
				alert('Поповни карту, бомж');
				setMinusMoney('');
				setCosts('');
				return;
			}
			item.amount -= Number(minusMoney);
			costs.push({ summa: minusMoney, comment: cost });
			setMinusMoney('');
			setCosts('');
		} else {
			alert('Введи всі дані, кончений');
		}
	};
	const applyIncome = () => {
		if (plusMoney && incom) {
			const { income } = item;
			item.amount += Number(plusMoney);
			income.push({ summa: plusMoney, comment: incom });
			setPlusMoney('');
			setIncom('');
		} else {
			alert('Введи всі дані, кончений');
		}
	};

	return (
		<div className="mainBlock">
			<div > <Arrows params={match.params}/> </div>
			<div>
				<div className="amount"> <h2> {`Amount: ${item.amount}`}  </h2> </div>
				<div className="onlyCard" > 	<Card changeColor={() => null}
					deleteCards ={() => null}
					item={item} />
				</div>
				<div className="money">
					<div className="income">
						<h2> Income </h2>
						<input onChange={onPlusMoney} value={plusMoney} className="input-1 form-control" type="text" placeholder="Price..." />
						<input onChange={onIncom} value={incom} type="text" className="form-control input-2" />
						<div className="apply"> <span onClick={applyIncome} className="span-button"> Apply </span></div>

					</div>
					<div className="costs ">
						<h2> Costs </h2>
						<input onChange={onMinusMoney} value={minusMoney} className="input-1 form-control" type="text" placeholder="Price..." />
						<input onChange={onCosts} value={cost} type="text" className="form-control input-2"/>
						<div className="apply"> <span onClick={applyCosts} className="span-button"> Apply </span></div>
					</div>
				</div>
			</div>
		</div>

	);
};
const mapStateToProps = ({ pasport, strId }) => ({
	pasport, strId,
});

const mapDispatchToProps = (dispatch) => ({
	pasportId: (id) => dispatch(pasportIdAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyPage));
