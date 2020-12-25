import React from 'react';
import './CardColor.css';
import { connect } from 'react-redux';
import { colorFilterAction } from '../../action';
import PropTypes from 'prop-types';

const CardColor = ({ colorFilter }) => {
	const value = colorFilter

	const buttons1 = [
		{ class: 'green', text: 'Green', id: '1' },
		{ class: 'red', text: 'Red', id: '2' },
		{ class: 'yellow', text: 'Yellow', id: '3' },
		{ class: 'grey', text: 'Grey', id: '4' },
	]

	const buttons2 = [
		{ class: 'orange', text: 'Orange', id: '5' },
		{ class: 'black', text: 'Black', id: '6' },
		{ class: 'pink', text: 'Pink', id: '7' },
		{ class: 'blue', text: 'Blue', id: '8' },
	]

	const allButtons1 = buttons1.map((item) => (
		<div key={item.id} className={`${item.class}`}
			onClick={() => value(item.class)} > <span>{item.text}</span></div>
	))

	const allButtons2 = buttons2.map((item) => (
		<div key={item.id} className={item.class}
			onClick={() => value(item.class)} > {item.text}</div>
	))
	return (
		<div className="mainColor" >
			<div className="cardColor ">  {allButtons1 } </div>
			<div className="cardColor">  {allButtons2 } </div>
		</div>
	);
}

CardColor.propTypes = {
	colorFilter: PropTypes.func,
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	colorFilter: (color) => dispatch(colorFilterAction(color)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CardColor);
