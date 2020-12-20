import React from 'react';
import './CardMiddle.css';
import { withRouter } from "react-router";

const CardMiddle = ({item, history}) => {
  let cardM = item.cardNumber;
  let arrCard = cardM.split(' ');
  let add = (str) => {
    if (history.location.pathname == str+'/Cards') {
      return null
    }
    history.push(str+'/Cards')
  }

  return (
       <div className="card-middle"  onClick={() => add(`/MyCard/${item.id}`)}>
        <span> {arrCard[0]} </span> 
        <span> {arrCard[1]} </span> 
        <span> {arrCard[2]} </span> 
        <span> {arrCard[3]} </span> 
       </div>
  );
}

 export default withRouter(CardMiddle)

 