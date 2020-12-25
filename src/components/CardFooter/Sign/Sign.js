import React from 'react';
import './Sign.css';
import PropTypes from 'prop-types';

const Sign = ({ deleteCards }) => (
	<div className="tChild3" id="t3" onClick={deleteCards} >
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvejVqonLdVqDJmM08h-Wv_DscMPYvEmSM0w&usqp=CAU" id="img"
		/>
	</div>
);

Sign.propTypes = {
	deleteCards: PropTypes.func,
}

export default Sign
