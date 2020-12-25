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
      { id: 1,
        cod:  "first",
        firstName: "Anhelina", 
        surName: "Каташинська", 
        middleName: "Олександрівна",
        birthday: "27 серпня 2003р",
        sex: "Жінка",
        town: "c.Брохвичі",
        region: "Вінницької обл",
        image: "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png",
        cardsMain: [
          { cardNumber: '1212 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101, cod: "first"},
          { cardNumber: '1235 6661 8888 9999', cardType: 'Юніор',      bankName: 'МоноБанк',  expiredData: '04/23',  typeName: 'VISA', color: 'yellow', id:102, cod: "first"},
          { cardNumber: '0990 6661 8888 9999', cardType: 'Кредитна',      bankName: 'АвальБанк',  expiredData: '11/20',  typeName: 'VISA', color: 'green', id:103, cod: "first"},
        ],
        cards: [
          { cardNumber: '1212 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:101, cod: "first"},
          { cardNumber: '1235 6661 8888 9999', cardType: 'Юніор',      bankName: 'МоноБанк',  expiredData: '04/23',  typeName: 'VISA', color: 'yellow', id:102, cod: "first"},
          { cardNumber: '0990 6661 8888 9999', cardType: 'Кредитна',      bankName: 'АвальБанк',  expiredData: '11/20',  typeName: 'VISA', color: 'green', id:103, cod: "first"},
        ],
      },
    //  image: https://image.freepik.com/free-vector/avatar-smiling-boy-facial-expression-icon-isolated-from-white-background_102172-300.jpg
   // https://png.pngtree.com/png-clipart/20190614/original/pngtree-boy-laugh-icon-png-image_3732084.jpg
    // https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_asian_woman-512.png
   // https://cdn3.iconfinder.com/data/icons/business-avatars/128/avatar-01-512.png
      { id: 2,
        cod: "second",
        firstName: "Lina", 
        surName: "Каташинська", 
        middleName: "Олександрівна",
        birthday: "27 серпня 2003р",
        sex: "Жінка",
        town: "c.Брохвичі",
        region: "Вінницької обл",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG4Yzp-rmVaK4Z_0jQe9GLu1vkRVsstgsVQ&usqp=CAU",
        cardsMain: [
          { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:104, cod: "second"},
          { cardNumber: '3333 6661 7777 7887', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '03/23',  typeName: 'VISA', color: 'green', id:105, cod: "second" },
        ],
        cards: [
          { cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'red', id:104, cod: "second"},
          { cardNumber: '3333 6661 7777 7887', cardType: 'Юніор',      bankName: 'АвальБанк',  expiredData: '03/23',  typeName: 'VISA', color: 'green', id:105, cod: "second" },
        ]
      },
   
      {
        id: 3,
        cod: "third",
        firstName: "Dima", 
        surName: "Каташинська", 
        middleName: "Олександрівна",
        birthday: "27 серпня 2003р",
        sex: "Жінка",
        town: "c.Брохвичі",
        region: "Вінницької обл",
        image: "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png",
        cardsMain: [
          { cardNumber: '6666 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'grey', id:106},
        ],
        cards: [
          { cardNumber: '6666 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24',  typeName: 'VISA', color: 'grey', id:106},
        ]
      },
    ],
    strId: false
  }

  const changeCardColor = (id, state) => {
    let {pasport, strId} = state 
    let ourClient = 0;
      pasport.map((client) => {
        if (client.id === strId){
          ourClient = client;
        }
      })

    let {cards} = ourClient
    let indexChange = Math.floor(Math.random() *  state.newColor.length)
    cards.map((item3) =>  {
        if (id === item3.id) {
          item3.color = state.newColor[indexChange];
        }
        return item3
      })
      return {
        ...state,
        // data: newArr,
        // dataMain: newArr
      }
  } 

  let deleteCards = (id, state) => {
  let {pasport, strId} = state 
  let ourClient = [];
  pasport.map((client) => {
    if (client.id === strId) {
      let {cards, cardsMain} = client
      const idx = cardsMain.findIndex((el) => el.id === id);
      const newArray = [...cardsMain.slice(0, idx),
                        ...cardsMain.slice(idx+1)]
      let b =  {
        ...client,
        cards: newArray,
        cardsMain: newArray
      }
      ourClient.push(b)
    }
   else {
     ourClient.push(client)
   }
 
  })

    return {
      ...state,
      pasport: ourClient 
    }
  }

  let search = (string, client) =>  {
    let {cardsMain} = client
      if (string === '') {
        return cardsMain
      }  
      
      return cardsMain.filter((item) => {
        return  item.cardNumber.indexOf(string) === 0    
      })
  }

  let onSearchChange = (string, state) => {
    let {pasport, strId} = state

  const array = []
  pasport.map((client) => {
    if (client.id === strId) {
      const visibleCards = search(string, client)
      const obj = {
        ...client,
        cards: visibleCards
      }
      array.push(obj)
    }
     else {
      array.push(client)
     } 
  })
  console.log("apoyu", array)
      // data: visibleCards,)
  return {
       ...state,
      // data: visibleCards,
      // cards: 
      string: string,
      pasport:array
    }
  }
  
 
 
 
 
 
 
  let colorFilter = (color, state) => {
    let {pasport, strId} = state
    let ourClient = [];

      pasport.map((client) => {
        if (client.id === strId) {
          let {cards, cardsMain} = client
          const cardsArr = [];

            cardsMain.map((card) => {
              if (color === card.color) {
                cardsArr.push(card);
              }
              else {
               
              }
            })
          
          let obj =  {
            ...client,
           cards: cardsArr,
           cardsMain,
          }

         ourClient.push(obj)
        }   
       
        else {
          ourClient.push(client)
        }
    })
    return {
      ...state,
      pasport: ourClient
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
      return colorFilter(action.payload, state)
   
    case 'UPDATE_CARD':
      return updateeCard(state, action.id, action.obj)
     
    case 'PASPORT_ID':
      console.log("ID_CLIENT", action.payload)
     
      return  {
        ...state,
        strId: action.payload
      }
      default:
      return state;
  }

};

export default reducer;
