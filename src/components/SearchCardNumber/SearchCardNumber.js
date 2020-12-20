import React, { useState, useContext } from 'react';
import './SearchCardNumber.css';
import { connect } from 'react-redux';



import { onSearch } from '../../action';

const  SearchCardNumber = ({onSearch, string}) => {

  let onSearchChange = (e) => {
    let str = e.target.value
    let string = str;
    onSearch(string); 
  }

    return (
            <div className="search">
              <div className="textsearch"> <span> Find by Card Number: </span> </div>
              <div className="inputsearch"> <input className="form-control"  
              type="text"
              placeholder="search..."
              onChange={onSearchChange}
              value={string}
              /> </div>
            </div>
          )
}

const mapStateToProps = ({data, string}) => {
   return {
     data, string
   } 
 };
 
 const mapDispatchToProps = (dispatch) => {
  return { 
   onSearch: (str) => dispatch(onSearch(str))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchCardNumber)