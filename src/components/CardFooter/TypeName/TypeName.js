import React, { useContext } from 'react';
import './TypeName.css';

import { MyItemContext } from '../.././CardList/CardList'

const TypeName = ({item}) => {
  // const item = useContext(MyItemContext)
  return (
       <div className="tChild1">
        <span> {item.typeName}</span>
       </div>
  );
}

export default TypeName