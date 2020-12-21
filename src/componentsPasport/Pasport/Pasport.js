import React from 'react';
import './Pasport.css';

import FirstPage from '../FirstPage';
import Line from '../Line'
import SecondPage from '../SecondPage';


 const Pasport = ({item}) => { 
 
      return (
        <div className="ma" > 
          <div className="box"> 
            < FirstPage />
            < Line />
            < SecondPage item={item}/>    
          </div>
        </div>
   
      )   
    };   

//     const mapStateToProps = ({data}) => {
//       return {
//         data
//       } 
//     };
    
   
// const mapDispatchToProps = (dispatch) => {
//   return { 
//    changeColor: () => dispatch(changeColor()),
//    deleteCards: () => dispatch(deleteCards()),
//    updateeCard: (id, obj) => dispatch(updateeCard(id, obj))
//   }
// };



//  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyCard));

export default Pasport