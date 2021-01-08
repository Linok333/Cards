import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { colorFilterAction } from '../../action';
import './ClearFilter.css';

const ClearFilter = ({ clear }) => (
	<div className="filter" onClick={clear} >
		 Clear
	</div>
);

ClearFilter.propTypes = {
	colorFilter: PropTypes.func,
};
const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
	// colorFilter: (color) => dispatch(colorFilterAction(color)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilter);
