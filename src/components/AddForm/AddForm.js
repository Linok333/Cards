import React, {useState} from 'react'
import './AddForm.css'
import { withRouter } from "react-router";
 const  AddForm = ({addCard, updateeCard, history, isUpdate, item, string}) => {
  const [bankName, setBankName] = useState(`${string.bankName}`);
  const [cardName, setCardName] = useState(`${string.cardName}`);
  const [cardType , setCardType] = useState(`${string.cardType}`);
  const [expiredData, setExpiredData] = useState(`${string.expiredData}`);
  const [cardNumber, setCardNumber] = useState(`${string.cardNumber}`);
  let color;
  let button = 'Add Card';
  if (isUpdate){
  button = 'Update'
  color = item.color

   
}



   let onBank = (e) => {
    setBankName(e.target.value)
  }
  
  let onName = (e) => {
    setCardName(e.target.value)
  }

  let onType = (e) => {
    setCardType(e.target.value)
  }

  let onData = (e) => {
    setExpiredData(e.target.value)
  }

  let onNumber = (e) => {
    setCardNumber(e.target.value)
  }

 let checkMaxLength = (name,str, min, max) => {
    if (name.length < min || name.length > max) {
      return false;
    }
    return true;
  }

  let checkNumber = (name) => {
   console.log('name', name)
    for (let i = 0; i < name.length; i++) {
      if (Number(name[i]) ) {
        return false;
      }
      return true;
    }
  }

 let  checkInput = (name, str, min, max) => {

  if (checkNumber(name) && checkMaxLength(name,str, min, max)) {
      return true;
    }
      return false
  }

 let onSubmit = () => {
    let str = '';
    if (!cardType && !bankName && !cardNumber && !expiredData && !cardName) {
     alert ('Їбанутий? Сначала введи щось!')
    }

    const BankName = checkInput(bankName, 'Bank Name', 1, 90);
    if(!BankName){
      // alert('BankName Incorrect')
      return;
    }
    const CardType = checkInput(cardType, 'Card Type', 1, 89);
    const CardNumber = checkMaxLength(cardNumber, 'Card Number', 1, 56);
    
    if (cardNumber.length === 16) { 
      for (let i = 0; i < 16; i++) {

      if (i === 3 || i === 7 || i === 11 ) {
        str += cardNumber[i] + ' '
      }
      
      else {
          str += cardNumber[i]
        } 
      }
    }
    const CardName = checkInput(cardName, 'Card Name', 1, 56);
    const ExpiredData = checkMaxLength(expiredData, 'Expired data', 1, 34);

    if (BankName && CardType  && CardName && ExpiredData && CardNumber) {
    if (!isUpdate) {
      addCard
      ({bankName, 
                cardType, 
                str,
                expiredData, 
                cardName});   
  
          setBankName ('')
          setCardType ('')
          setCardNumber ('')
          setCardName ('')
          setExpiredData ('')
          history.push('./Cards/Create')
    }
    else {
     updateeCard(item.id, {bankName, 
      cardType, 
      str,
      expiredData, 
      cardName,
      color})
      setBankName ('')
          setCardType ('')
          setCardNumber ('')
          setCardName ('')
          setExpiredData ('')
    }
    
}

  }
 
    return (
          <div className="form-style1"> 
            <div className="style">
              <div className="text"> <span> Bank Name:</span> </div>
              <div className="input">
                <input type="text" className="form-control" 
                  placeholder="Enter please..." 
                  onChange={onBank} 
                  value={bankName} />
              </div>
            </div>

            <div className="style">
              <div className="text"> <span> Card Type: </span> </div>
              <div className="input">
                <input type="text" className="form-control" placeholder="Enter please..." onChange={onType} value={cardType} />
              </div>
            </div>
            <div className="style">
              <div className="text"> <span> Card Number:</span> </div>
              <div className="input">
                <input type="text" className="form-control" placeholder="Enter please..." onChange={onNumber} value={cardNumber} />
              </div>
            </div>
            <div className="style">
              <div className="text"> <span> Expired Data:</span> </div>
              <div className="input">
                <input type="date" className="form-control" placeholder="Enter please..." onChange={onData} value={expiredData}/>
              </div>
            </div>
            <div className="style">
              <div className="text" > <span> Card Name:</span> </div>
              <div className="input">
                <input type="text" className="form-control" placeholder="Enter please..." onChange={onName} value={cardName}/>
              </div>
            </div>
              <div className="item-add-form">
                <button className="btn btn-outline-secondary" onClick={onSubmit} > {button} </button>
              </div>

          </div>
          )
    }
 
const AddForm1 = withRouter(AddForm);
export default AddForm1

