import { DELETE_CARD } from "./actionTypes";
import { ADD_CARD } from "./actionTypes";
import { COLOR_FILTER } from "./actionTypes";
import { ON_SEARCH_CHANGE } from "./actionTypes";
import { CHANGE_COLOR } from "./actionTypes";

 const changeColor = (id) => {
  return {
    type: CHANGE_COLOR,
    payload: id
  }
};

let deleteCards = (id) => {
  return {
     type: DELETE_CARD,
     payload: id
   } 

}

let onSearch = (str) => {
  return {
     type: ON_SEARCH_CHANGE,
     payload: str
   } 
 
 }

 let colorFilter = (color) => {
  console.log("COLOR", color)
  return {
     type: COLOR_FILTER,
     payload: color
   } 
 
 }

 let addCard = (objectCard) => {
  return {
     type: ADD_CARD,
     payload: objectCard
   } 
 }

 let updateeCard = (id, obj) => {
  return {
     type: 'UPDATE_CARD',
     id: id,
     obj: obj

   } 
 }


let pasportId = (id) => {
  return {
     type: 'PASPORT_ID',
     payload: id,
  } 
}
export {
  changeColor,
  deleteCards,
  onSearch, 
  colorFilter, 
  addCard,
  updateeCard,
  pasportId
};