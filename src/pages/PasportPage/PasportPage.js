import React from 'react';
import PasportList from '../../componentsPasport/PasportList';
import './PasportPage.css'
import { pasportId } from '../../action';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const PasportPage = ({pasportId}) => { 
  
  return (
    
    <div className="cus">
      <div className="cusom">
        <h2 > Customers </h2>
      </div>
      <i class="fas fa-user-plus fa-5x client"></i>
      <PasportList pasportId={(id) => pasportId(id)}/>
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
    pasportId: (id) => dispatch(pasportId(id))
}
};



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasportPage));

    





