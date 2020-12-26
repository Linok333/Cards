import React from 'react';
import PasportList from '../../componentsPasport/PasportList';
import './PasportPage.css';
import { pasportIdAction } from '../../action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const PasportPage = ({ pasportId, history }) => (

	<div className="cus">
		<div className="cusom">
			<h2 > Customers </h2>
		</div>
		<i className="fas fa-user-plus fa-5x client" onClick={() => history.push('./CreatePasport')}></i>
		<PasportList pasportId={(id) => pasportId(id)}/>
	</div>
);

const mapStateToProps = ({ data }) => ({
	data,
});

const mapDispatchToProps = (dispatch) => ({
	pasportId: (id) => dispatch(pasportIdAction(id)),
});

PasportPage.propTypes = {
	pasportId: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasportPage));
