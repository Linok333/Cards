import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './ShowPage.css';
import { pasportIdAction } from '../../action';
import Arrows from '../../Arrow';
import Card from '../../components/Card';

const ShowPage = ({ match, pasport, strId }) => {
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
	const incomes = item.income;
	const plus = incomes.map((el) => (
		<div className={'block'} key="el" >
			<span className={'plusGreen'} > + </span>
			<div className={'strFont'}>  <span>  {`${el.summa} - ${el.comment}`}</span>  </div>
		</div>
	));
	const cost = item.costs;
	const minus = cost.map((el) => (
		<div className={'block'} key="el" >
			<span className={'minusRed'} > - </span>
			<div className={'strFont'} >   {`${el.summa} - ${el.comment}`} </div>
		</div>
	));
	return (
		<div className="mainBlock">
			<div > <Arrows params={match.params}/> </div>
			<div>
				<div className="amount"> <h2>  {`Amount: ${item.amount}`} </h2> </div>
				<div className="onlyCard" > 	<Card changeColor={() => null}
					deleteCards ={() => null}
					item={item} />
				</div>
				<div className='block-bydjet'>
					<div className='elem'> {plus}  </div>
					<div className='elem'> {minus} </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShowPage));
