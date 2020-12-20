import React, {useState, useContext} from 'react'
import SearchCardNumber from '../../components/SearchCardNumber';
import CardList from '../../components/CardList';
import CardColor from '../../components/CardColor';
import './CardsPage.css'

import { connect } from 'react-redux';
import { deleteCards } from '../../action';
import { changeColor } from '../../action';
import { withRouter } from 'react-router-dom';
import Arrows from '../../Arrow';

const CardsPage = ({changeColor, deleteCards, history, location, match}) => {
  return (
      <div className="CardsPage">
        <div className="main-react">
          <Arrows  params={match.params}/>
          <SearchCardNumber />
          <CardList  changeColor={(id) => changeColor(id)}  deleteCards = {(id) => deleteCards(id)}/>  
        </div>
        <div className={"card-color"}>
          <CardColor/>
        </div>
      </div> 
  )
}

const mapStateToProps = ({newColor, string}) => {
  return {
    newColor, string
  } 
};

const mapDispatchToProps = (dispatch) => {
  return { 
   changeColor: (id) => dispatch(changeColor(id)),
   deleteCards: (id) => dispatch(deleteCards(id))

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardsPage));
