import React from 'react';
import './SearchCardNumber.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { onSearchAction, clearAction } from '../../action';
import ClearFilter from '../../ClearFilter';

const SearchCardNumber = ({ onSearch, string, clear }) => {
	const onSearchChange = (e) => {
		const str = e.target.value;
		string = str;
		onSearch(string);
	};

	return (
		<div className="search">
			<div className="textsearch"> <span> Find by Card Number: </span> </div>
			<div className="inputsearch"> <input className="form-control"
				type="text"
				placeholder="search..."
				onChange={onSearchChange}
				value={string}
			/> </div>
			<div className="clr">
				<ClearFilter clear={() => clear()}/>
			</div>

		</div>
	);
};

const mapStateToProps = ({ data, string }) => ({
	data, string,
});

const mapDispatchToProps = (dispatch) => ({
	onSearch: (str) => dispatch(onSearchAction(str)),
	clear: () => dispatch(clearAction()),
});

SearchCardNumber.propTypes = {
	onSearch: PropTypes.func,
	string: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchCardNumber);
