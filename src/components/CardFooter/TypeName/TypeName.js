import React from 'react';
import './TypeName.css';
import PropTypes from 'prop-types';

const TypeName = ({ item }) => (
	<div className="tChild1">
		<span> {item.typeName}</span>
	</div>
);
TypeName.propTypes = {
	item: PropTypes.object,
};
export default TypeName;
