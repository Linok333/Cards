import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer);

export default store;

// dataFull: [
//   { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101},
//   { cardNumber: '1122 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:102},
//   { cardNumber: '3333 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:103},
//   { cardNumber: '4444 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:104},
// ]

// data: [
//   { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101},
//   { cardNumber: '3333 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:103},
// ]
