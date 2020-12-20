import React, { useContext} from 'react';
import './CardHeader.css';
import CardText from './CardText';
import { MyItemContext } from '../CardList/CardList'


const CardHeader = ({changeColor, item}) => {
  // const item = useContext(MyItemContext)
  // console.log("HEADER", item)
  return (
     <div className="CardHeader" onClick={changeColor}>
        <CardText name={item.bankName}/>
        <CardText name={item.cardType}/>
      </div>
  );
};

export default CardHeader
