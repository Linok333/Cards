import React from 'react'
import AddForm from '../../components/AddForm'
import './AddFormPage.css'
import { connect } from 'react-redux';
import { addCard } from '../../action';
import { updateeCard } from '../../action';

import Arrows from '../../Arrow';
export  const MyAddContext = React.createContext();

const AddFormPage = ({addCard, item}) => {
 let string = {
    bankName: '',
    cardName: '',
    cardType: '',
    expiredData: '',
    cardNumber: '',
}
  return (
      <div className="AddForm"> 
            {/* <Arrows /> */}
            <AddForm isUpdate={false} string={string}  addCard={(objectCard) => addCard(objectCard)} />
      </div>
  )
}

const mapStateToProps = ({data}) => {
  return {
    data
  } 
};

const mapDispatchToProps = (dispatch) => {
  return { 
   addCard: (objectCard) => dispatch(addCard(objectCard)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFormPage);
