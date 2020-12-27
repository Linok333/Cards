import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Pasport from '../Pasport';

const PasportList = ({ pasport, pasportId }) => {
	const elements = pasport.map((item) => (
		<div key={item.id}>
			<Pasport item={item} pasportId={(id) => pasportId(id)}/>
		</div>
	));

	return (
		<div>
			{ elements }
		</div>
	);
};

const mapStateToProps = ({ pasport }) => ({
	pasport,
});

PasportList.propTypes = {
	pasport: PropTypes.array,
	pasportId: PropTypes.func,
};
export default connect(mapStateToProps, null)(withRouter(PasportList));

// export default PasportList
