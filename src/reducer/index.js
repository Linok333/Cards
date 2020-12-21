import { updateCard } from "../action";
import { DELETE_CARD } from "../action/actionTypes";
import { ADD_CARD } from "../action/actionTypes";
import { COLOR_FILTER } from "../action/actionTypes";
import { ON_SEARCH_CHANGE } from "../action/actionTypes";
import { CHANGE_COLOR } from "../action/actionTypes";
 

 



 const initialState = { 
    dataMain: [
      { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101},
      { cardNumber: '1122 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:102},
      { cardNumber: '3333 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:103},
      { cardNumber: '4444 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:104},
    ],
    data: [  { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101},
    { cardNumber: '1122 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:102},
    { cardNumber: '3333 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:103},
    { cardNumber: '4444 6661 8888 9999', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '04/20',  typeName: 'VISA', color: 'green', id:104},],
    newColor: ['yellow', 'black', 'grey', 'orange', 'red', 'blue', 'pink', 'green'],
    string: '',
    pasport:  [
      {firstName: "Anhelina", 
       surName: "Каташинська", 
       middleName: "Олександрівна",
       birthday: "27 серпня 2003р",
       sex: "Жінка",
       town: "c.Брохвичі",
       region: "Вінницької обл",
       image: "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png"

     },
    //  image: https://image.freepik.com/free-vector/avatar-smiling-boy-facial-expression-icon-isolated-from-white-background_102172-300.jpg
   // https://png.pngtree.com/png-clipart/20190614/original/pngtree-boy-laugh-icon-png-image_3732084.jpg
    // https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_asian_woman-512.png
   // https://cdn3.iconfinder.com/data/icons/business-avatars/128/avatar-01-512.png
    {firstName: "Lina", 
     surName: "Каташинська", 
     middleName: "Олександрівна",
     birthday: "27 серпня 2003р",
     sex: "Жінка",
     town: "c.Брохвичі",
     region: "Вінницької обл",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG4Yzp-rmVaK4Z_0jQe9GLu1vkRVsstgsVQ&usqp=CAU"
     },
   
   {firstName: "Dima", 
   surName: "Каташинська", 
   middleName: "Олександрівна",
   birthday: "27 серпня 2003р",
   sex: "Жінка",
   town: "c.Брохвичі",
   region: "Вінницької обл",
   image: "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"

   }
    ]
  
  }

  const changeCardColor = (id, state) => {
      let indexChange = Math.floor(Math.random() *  state.newColor.length)
      let data = state.data
      let newArr = data.map((item3) =>  {
          if (id === item3.id){
            item3.color = state.newColor[indexChange];
          }
          return item3
        })

      return {
        ...state,
        data: newArr,
        dataMain: newArr
      }
  } 

  let deleteCards = (id, state) => {
    let {dataMain, data} = state 
    const idx = dataMain.findIndex((el) => el.id === id);
    const newArray = [...dataMain.slice(0, idx),
                        ...dataMain.slice(idx+1)]
    
      return {
       ...state,
       data: newArray,
       dataMain: newArray
      } 
  }

  let search = (string, state) =>  {
  let {dataMain} = state
    if (string === '') {
      return dataMain
    }  
    return dataMain.filter((item) => {
      return  item.cardNumber.indexOf(string) === 0    
    })
  }

  let onSearchChange = (string, state) => {
    const visibleCards = search(string, state)
    return {
       ...state,
      data: visibleCards,
      string: string
    }
  }
 
   
  let colorFilter = (color, state) => {
    let {dataMain} = state
    let cardsArr = [];

      dataMain.map((item) =>  {
        if (color === item.color) {
          cardsArr.push(item);
        }
        else {
          return {
          ...state,
          }
        }
     
      })
        return {
          ...state,
          data: cardsArr
        }
  }

  let addCard = ({bankName, 
    cardType, 
    str,
    expiredData, 
    cardName}, state) => {

    let string = 'qwertyuiopkmjnhbgvfcdxsza'
    let numberId = Math.floor(Math.random() * 100);
    let stringId = Math.floor(Math.random() * string.length);
    let cardId = numberId + string[stringId]
    let {data, dataMain} = state
    const newItem = {
      bankName: bankName,
      cardType: cardType,
      cardNumber: str,
      expiredData: expiredData,
      typeName: cardName,
      id: cardId,
      color: 'green',
    }
     const newArr = [
      newItem,
      ...data,
     ]
      return {
        ...state,
        data: newArr,
        dataMain: newArr
      }
  } 

  let updateeCard =(state, id, {bankName, 
    cardType, 
    str,
    expiredData, 
    cardName, color} ) => {
    const {dataMain} = state

   let  element = {
      bankName: bankName,
      cardType: cardType,
      cardNumber: str,
      expiredData: expiredData,
      typeName: cardName,
      id: id,
      color: color,
    }

  let newArr =  []
  dataMain.map((elem) => {
  if (elem.id == id) {
    elem = element
    newArr.push(elem)
  }
  else {
    newArr.push(elem)
  }
 })


    return {
      ...state,
      dataMain: newArr,
      data: newArr
    }
  }

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_COLOR:
      return changeCardColor(action.payload, state)
    
    case DELETE_CARD:
      return deleteCards(action.payload, state)

    case ADD_CARD:
      return addCard(action.payload, state)
             
    case ON_SEARCH_CHANGE:
       return onSearchChange(action.payload, state)

    case COLOR_FILTER:
      return colorFilter(action.payload, state, state)
   
    case 'UPDATE_CARD':
      return updateeCard(state, action.id, action.obj)
     
      default:
      return state;
  }

};

export default reducer;
