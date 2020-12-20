import React from 'react';
import Card from '../../components/Card'
import { connect } from 'react-redux';
import { deleteCards, updateeCard } from '../../action';
import { changeColor } from '../../action';
import './MyCard.css';
import { withRouter } from "react-router";
import Arrows from '../../Arrow';
import AddFormPage from '../AddFormPage';
import AddForm from '../../components/AddForm';

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

 const MyCard = ({data, changeColor,updateeCard, deleteCards, history, match, location}) => { 
  let item;
  console.log('data: ', data)
  data.map((card) => {
    if (card.id == match.params.id) {
      item = card;
    }
  })
  console.log("itbank", item.bankName)
  let string = {
    bankName: item.bankName,
    cardName: 'VISA',
    cardType: item.cardType,
    expiredData: item.expiredData,
    cardNumber: item.cardNumber,
  }
      return (
          <div  className="MyCard" >
           <div> 
           <div className="arrows"> <Arrows  params={match.params}/> </div>
            <div> <AddForm updateeCard={(id, obj) => updateeCard(id, obj)}  string={string} item={item} isUpdate={true}/> </div>
          </div> 
          
            <div className="box"> 
              <div className="h2"> <h2> Here is your card </h2> </div>
              <div className="reter"> 
              <Card changeColor={(id) => null} 
                    deleteCards ={(id) => null} 
                    item={item} />
              </div> 
            </div>
          </div>
        );   
    };   

    const mapStateToProps = ({data}) => {
      return {
        data
      } 
    };
    
   
const mapDispatchToProps = (dispatch) => {
  return { 
   changeColor: () => dispatch(changeColor()),
   deleteCards: () => dispatch(deleteCards()),
   updateeCard: (id, obj) => dispatch(updateeCard(id, obj))
  }
};



 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyCard));

