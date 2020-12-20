import React, {useContext} from 'react';
import ExpiredData from './ExpiredData';
import TypeName from './TypeName';
import Sign from './Sign';
import './CardFooter.css';
import { MyItemContext } from '../CardList/CardList'

const CardFooter = ({deleteCards, item}) => {  
  // const item = useContext(MyItemContext)
  
  let normalizeExpiredDate = (str) =>  {
    if (str.includes('/')) {
      return str;
    }
    return `${str.split('-')[1]}/${str.split('-')[0].slice(-2)}`;
  }

  return (
       <div className="third" >
          <TypeName item={item} />
          <ExpiredData expired={normalizeExpiredDate(item.expiredData)}/>
          <Sign deleteCards={(id) =>  deleteCards(item.id)} />
       </div>
  );

  }
export default  CardFooter

