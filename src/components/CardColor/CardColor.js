import React, {useContext}  from 'react';
import './CardColor.css';
import { connect } from 'react-redux';
import { colorFilter } from '../../action';

  const  CardColor = ({colorFilter}) => { 
    const value = colorFilter

    const buttons1 = [
      { class: 'green', text: 'Green'},
      { class: 'red', text: 'Red'},
      { class: 'yellow', text: 'Yellow'},
      { class: 'grey', text: 'Grey'},
    ]

    const buttons2 = [
      { class: 'orange', text: 'Orange'},
      { class: 'black', text: 'Black'},
      { class: 'pink', text: 'Pink'},
      { class: 'blue', text: 'Blue'},
    ]

   const allButtons1 =  buttons1.map((item) => {
     return (
              <div className={`${item.class}`} 
              onClick={() => value(item.class)} > <span>{item.text}</span></div>  
     )
   })
    
   const allButtons2 =  buttons2.map((item) => {
    return (
             <div className={item.class} 
             onClick={() => value(item.class)} > {item.text}</div>  
    )
  })
   return (
    <div className="mainColor">
      <div className="cardColor ">  {allButtons1 } </div> 
      <div className="cardColor">  {allButtons2 } </div> 
    </div>
  );
}


  const mapStateToProps = () => {
    return {} 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { 
     colorFilter: (color) => dispatch(colorFilter(color))
  
    }
  };
  

export default connect(mapStateToProps, mapDispatchToProps)( CardColor);
