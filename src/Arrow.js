import React  from 'react';
import { withRouter } from "react-router";
import './index.css';

const Arrow = ({history, location, match, params}) => {
  let string = 'Cards' + ' ' + '(' + params.data + ')'
  let strCard = 'MyCard' + ' ' + '(' + params.name + ')'

  if (params.data === ':data') {
    return 'Cards'
  }
  else if (params.name === 'Cards') {
    return (
      <div className="div">
        <div onClick={() => history.goBack()} className="icon"> <i class="fas fa-arrow-alt-circle-left fa-3x"></i> </div>
        <div className="b"> <h4> {strCard} </h4> </div>
      </div>
    );
  }
  else {
    return (
      <div className="div">
        <div onClick={() => history.goBack()} className="icon"> <i class="fas fa-arrow-alt-circle-left fa-3x"></i> </div>
        <div className="b"> <h4> {string} </h4> </div>
      </div>
    );
  }

};

const Arrows = withRouter(Arrow);
export default Arrows
