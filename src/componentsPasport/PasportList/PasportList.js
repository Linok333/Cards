import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Pasport from '../Pasport'

const PasportList = ({pasport, pasportId}) => { 
  const elements = pasport.map((item) => {
    return (
      <div>
        <Pasport item={item} pasportId={(id) => pasportId(id)}/>
      </div>
    );
  });
    
  return (
      <div>
          { elements }
      </div>
    );
    
    };   

    const mapStateToProps = ({pasport}) => {
      return {
        pasport
      } 
    };
    
    const mapDispatchToProps = (dispatch) => {
     return {}
    };
    
    // const Arrows = withRouter(Arrow);

  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasportList));

// export default PasportList



