import React, { Component, useContext } from 'react';
import './Sign.css';
import { MyIDContext } from '../../CardList/CardList'
import { MyCardsContext } from '../../../pages/CardsPage/CardsPage'

const Sign = ({deleteCards}) => {
  const id = useContext(MyIDContext)
  // const {deleteCards} = useContext(MyCardsContext)

  return (    
      <div className="tChild3" id="t3" onClick={deleteCards} >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvejVqonLdVqDJmM08h-Wv_DscMPYvEmSM0w&usqp=CAU" id="img"
        />
       </div>  
  );
};
export default Sign



