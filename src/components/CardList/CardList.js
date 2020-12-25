import React from 'react';
import Card from '../Card/card';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

 const CardList = ({data, changeColor, deleteCards, cards, pasport, clientsArray, strId}) => {  

  let arrayCards;
  if (!strId) {
    return "Please create your first Card!"
  }
  clientsArray.map((client) => {
    if (client.id === strId) {
      arrayCards = client.cards
    } 
  })

  const elements =  arrayCards.map((item) => {
    return (
          <div>
          <MyIDContext.Provider value={item.id}>
            <MyItemContext.Provider value={item}>
              <Card changeColor={(id) => changeColor(id)} 
                    deleteCards ={(id) => deleteCards(id)} 
                    item={item}
                    />
            </MyItemContext.Provider>
          </MyIDContext.Provider>
          </div>
        );
    });
    return (
      <div>
          { elements }
      </div>
    );
    
    };   

    const mapStateToProps = ({  pasport, strId}) => {
      let clientsArray = pasport.map((pass) => {
        return pass
      })
      return {
        clientsArray,
        strId
      } 
    };
    
    const mapDispatchToProps = (dispatch) => {
     return {
      // pasportId: (id) => dispatch(pasportId(id))
         
     }
    };
    
    // const Arrows = withRouter(Arrow);

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardList));





