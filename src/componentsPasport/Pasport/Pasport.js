import React from 'react';
import './Pasport.css';
import FirstPage from '../FirstPage';
import Line from '../Line'
import SecondPage from '../SecondPage';
import PropTypes from 'prop-types';

const Pasport = ({ item, pasportId }) => (
	<div className="ma" onClick={() => pasportId(item.id)}>
		<div className="box" >
			<FirstPage/>
			<Line/>
			<SecondPage item={item} />
		</div>
	</div>
);

//     const mapStateToProps = ({data}) => {
//       return {
//         data
//       }
//     };

// const mapDispatchToProps = (dispatch) => {
//   return {
//   //  changeColor: () => dispatch(changeColor()),
//   //  deleteCards: () => dispatch(deleteCards()),
//    pasportId: (id) => dispatch(pasportId(id))
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pasport));
Pasport.propTypes = {
	item: PropTypes.object,
	pasportId: PropTypes.func,

}
export default Pasport