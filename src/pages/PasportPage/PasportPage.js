import React from 'react';
import PasportList from '../../componentsPasport/PasportList';
import './PasportPage.css'


 const PasportPage = () => { 
      return (
          <div className="cus">
           <div>
              <h2 className="cusom"> Customers </h2>
           </div> 
            <PasportList/>
          </div>
        );
  
    };   

    
    

export default PasportPage




