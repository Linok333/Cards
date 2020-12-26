import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Pasport from '../Pasport';
import PropTypes from 'prop-types';

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

// const Arrows = withRouter(Arrow);

PasportList.propTypes = {
	pasport: PropTypes.array,
	pasportId: PropTypes.func,
};
export default connect(mapStateToProps, null)(withRouter(PasportList));

// export default PasportList
