import React from 'react';
import Card from '../Card/card';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

export const MyIDContext = React.createContext();
export const MyItemContext = React.createContext();

 const CardList = ({data, changeColor, deleteCards}) => { 
  const elements = data.map((item) => {
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

    const mapStateToProps = ({data}) => {
      return {
        data
      } 
    };
    
    const mapDispatchToProps = (dispatch) => {
     return {}
    };
    
    // const Arrows = withRouter(Arrow);

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardList));





