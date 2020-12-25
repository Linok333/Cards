import React from 'react';
import { withRouter } from 'react-router';
import './index.css';
import PropTypes from 'prop-types';

const Arrow = ({
	history, params,
}) => {
	// const string = `${'Cards' + ' ' + '('}${params.data})`
	// const strCard = `${'MyCard' + ' ' + '('}${params.name})`
	const string = `Cards (${params.data})`
	const strCard = `MyCard (${params.name})`

	if (params.data === ':data') {
		return 'Cards'
	}
	if (params.name === 'Cards') {
		return (
			<div className="div">
				<div onClick={() => history.goBack()} className="icon"> <i className="fas fa-arrow-alt-circle-left fa-3x"></i> </div>
				<div className="b"> <h4> {strCard} </h4> </div>
			</div>
		);
	}

	return (
		<div className="div">
			<div onClick={() => history.goBack()} className="icon"> <i className="fas fa-arrow-alt-circle-left fa-3x"></i> </div>
			<div className="b"> <h4> {string} </h4> </div>
		</div>
	);
};
Arrow.propTypes = {
	params: PropTypes.object,
	history: PropTypes.object,
}
const Arrows = withRouter(Arrow);
export default Arrows
