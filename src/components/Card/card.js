import React from 'react';
import './card.css';
import CardHeader from '../CardHeader';
import CardMiddle from '../CardMiddle';
import CardFooter from '../CardFooter';
import { withRouter } from "react-router";
import { addCard } from '../../action';

 const Card = ({changeColor, item, deleteCards, history, match}) => { 
  return (
      <div className={"card-style"} style={{backgroundColor: item.color}}>
        <CardHeader  item={item} changeColor={() => changeColor(item.id)} />
        <CardMiddle item={item} id={match.params.id}/>
        <CardFooter  item={item} deleteCards ={(id) => deleteCards(id)} />
      </div>
    )

  }   

export default withRouter(Card)