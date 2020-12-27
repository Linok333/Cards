//  image: https://image.freepik.com/free-vector/avatar-smiling-boy-facial-expression-icon-isolated-from-white-background_102172-300.jpg
// https://png.pngtree.com/png-clipart/20190614/original/pngtree-boy-laugh-icon-png-image_3732084.jpg
// https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_asian_woman-512.png
// https://cdn3.iconfinder.com/data/icons/business-avatars/128/avatar-01-512.png

import {
	DELETE_CARD, ADD_CARD, COLOR_FILTER, ON_SEARCH_CHANGE, CHANGE_COLOR, PASPORT_ID, UPDATE_CARD, ADD_PASPORT,
} from '../action/actionTypes';

const initialState = {
	newColor: ['yellow', 'black', 'grey', 'orange', 'red', 'blue', 'pink', 'green'],
	string: '',
	pasport: [
		{
			id: 1,
			cod: 'first',
			firstName: 'Владислав',
			surName: 'Каташинський',
			middleName: 'Олександрович',
			birthday: '24 листопада 1994р',
			gender: 'Чоловік',
			town: 'c.Брохвичі',
			region: 'Вінницьк обл',
			image: 'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png',
			cardsMain: [
				{
					cardNumber: '1212 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'red', id: '101', cod: 'first',
				},
				{
					cardNumber: '1235 6661 8888 9999', cardType: 'Юніор', bankName: 'МоноБанк', expiredData: '04/23', typeName: 'VISA', color: 'yellow', id: '102', cod: 'first',
				},
				{
					cardNumber: '0990 6661 8888 9999', cardType: 'Кредитна', bankName: 'АвальБанк', expiredData: '11/20', typeName: 'VISA', color: 'green', id: '103', cod: 'first',
				},
			],
			cards: [
				{
					cardNumber: '1212 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'red', id: '101', cod: 'first',
				},
				{
					cardNumber: '1235 6661 8888 9999', cardType: 'Юніор', bankName: 'МоноБанк', expiredData: '04/23', typeName: 'VISA', color: 'yellow', id: '102', cod: 'first',
				},
				{
					cardNumber: '0990 6661 8888 9999', cardType: 'Кредитна', bankName: 'АвальБанк', expiredData: '11/20', typeName: 'VISA', color: 'green', id: '103', cod: 'first',
				},
			],
		},
		{
			id: 2,
			cod: 'second',
			firstName: 'Ангеліна',
			surName: 'Каташинська',
			middleName: 'Олександрівна',
			birthday: '27 серпня 2003р',
			gender: 'Жінка',
			town: 'c.Брохвичі',
			region: 'Вінницька обл',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG4Yzp-rmVaK4Z_0jQe9GLu1vkRVsstgsVQ&usqp=CAU',
			cardsMain: [
				{
					cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'red', id: '104', cod: 'second',
				},
				{
					cardNumber: '3333 6661 7777 7887', cardType: 'Юніор', bankName: 'АвальБанк', expiredData: '03/23', typeName: 'VISA', color: 'green', id: '105', cod: 'second',
				},
			],
			cards: [
				{
					cardNumber: '1111 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'red', id: '104', cod: 'second',
				},
				{
					cardNumber: '3333 6661 7777 7887', cardType: 'Юніор', bankName: 'АвальБанк', expiredData: '03/23', typeName: 'VISA', color: 'green', id: '105', cod: 'second',
				},
			],
		},

		{
			id: 3,
			cod: 'third',
			firstName: 'Дмитро',
			surName: 'Каташинський',
			middleName: 'Олександрович',
			birthday: '10 січня 2000р',
			gender: 'Чоловік',
			town: 'c.Брохвичі',
			region: 'Вінницька обл',
			image: 'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png',
			cardsMain: [
				{
					cardNumber: '6666 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'grey', id: '106',
				},
			],
			cards: [
				{
					cardNumber: '6666 8641 8458 9999', cardType: 'Для виплат', bankName: 'ПриватБанк', expiredData: '05/24', typeName: 'VISA', color: 'grey', id: '106',
				},
			],
		},
	],
	strId: false,
};

const changeCardColor = (id, state) => {
	const { pasport, strId } = state;
	const newArray = [];
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cards } = client;
			const indexChange = Math.floor(Math.random() * state.newColor.length);
			cards.map((item3) => {
				if (id === item3.id) {
					item3.color = state.newColor[indexChange];
				}
				return item3;
			});

			const a = {
				...client,
				cards,
				cardsMain: cards,
			};
			newArray.push(a);
		} else {
			newArray.push(client);
		}
	});
	return {
		...state,
		pasport: newArray,
	};
};

const deleteCards = (id, state) => {
	const { pasport, strId } = state;
	const ourClient = [];
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cardsMain } = client;
			const idx = cardsMain.findIndex((el) => el.id === id);
			const newArray = [...cardsMain.slice(0, idx),
				...cardsMain.slice(idx + 1)];
			const b = {
				...client,
				cards: newArray,
				cardsMain: newArray,
			};
			ourClient.push(b);
		} else {
			ourClient.push(client);
		}
	});

	return {
		...state,
		pasport: ourClient,
	};
};

const search = (string, client) => {
	const { cardsMain } = client;
	if (string === '') {
		return cardsMain;
	}

	return cardsMain.filter((item) => item.cardNumber.indexOf(string) === 0);
};

const onSearchChange = (string, state) => {
	const { pasport, strId } = state;

	const array = [];
	pasport.forEach((client) => {
		if (client.id === strId) {
			const visibleCards = search(string, client);
			const obj = {
				...client,
				cards: visibleCards,
			};
			array.push(obj);
		} else {
			array.push(client);
		}
	});
	// data: visibleCards,)
	return {
		...state,
		// data: visibleCards,
		// cards:
		string,
		pasport: array,
	};
};

const colorFilter = (color, state) => {
	const { pasport, strId } = state;
	const ourClient = [];

	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cardsMain } = client;
			const cardsArr = [];

			cardsMain.forEach((card) => {
				if (color === card.color) {
					cardsArr.push(card);
				}
			});

			const obj = {
				...client,
				cards: cardsArr,
				cardsMain,
			};

			ourClient.push(obj);
		} else {
			ourClient.push(client);
		}
	});
	return {
		...state,
		pasport: ourClient,
	};
};

const addCard = ({
	bankName,
	cardType,
	str,
	expiredData,
	cardName,
}, state) => {
	const string = 'qwertyuiopkmjnhbgvfcdxsza';
	const numberId = Math.floor(Math.random() * 100);
	const stringId = Math.floor(Math.random() * string.length);
	const cardId = numberId + string[stringId];
	const { pasport, strId } = state;
	const newItem = {
		bankName,
		cardType,
		cardNumber: str,
		expiredData,
		typeName: cardName,
		id: cardId,
		color: 'red',
	};
	const myArr = [];
	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cards } = client;
			const newArr = [
				newItem,
				...cards,
			];
			const array = {
				...client,
				cards: newArr,
				cardsMain: newArr,
			};
			myArr.push(array);
		} else {
			myArr.push(client);
		}
	});
	return {
		...state,
		pasport: myArr,
	};
};

const updateeCard = (state, id, {
	bankName,
	cardType,
	str,
	expiredData,
	cardName, color,
}) => {
	const { pasport, strId } = state;
	const element = {
		bankName,
		cardType,
		cardNumber: str,
		expiredData,
		typeName: cardName,
		id,
		color,
	};
	const myArr = [];

	pasport.forEach((client) => {
		if (client.id === strId) {
			const { cardsMain } = client;

			const newArr = [];

			cardsMain.forEach((elem) => {
				if (elem.id === id) {
					elem = element;
					newArr.push(elem);
				} else {
					newArr.push(elem);
				}
			});
			const a = {
				...client,
				cardsMain: newArr,
				cards: newArr,
			};
			myArr.push(a);
		} 		else {
			myArr.push(client);
		}
	});

	return {
		...state,
		pasport: myArr,
	};
};

const addPasport = ({
	gender,
	firstName,
	middleName,
	surName,
	birthday,
	town,
	region,
}, state) => {
	const string = 'qwertyuiopkmjnhbgvfcdxsza';
	const numberId = Math.floor(Math.random() * 100);
	const stringId = Math.floor(Math.random() * string.length);
	const pasportId = numberId + string[stringId];
	const { pasport } = state;
	let img;
	if (gender === 'Чоловік') {
		img = 'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png';
	} else {
		img =	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG4Yzp-rmVaK4Z_0jQe9GLu1vkRVsstgsVQ&usqp=CAU';
	}
	const newPasport = {
		id: pasportId,
		cod: 'x',
		gender,
		firstName,
		middleName,
		surName,
		birthday,
		town,
		region,
		image: img,
		cardsMain: [],
		cards: [],
	};

	const newPasports = [
		newPasport,
		...pasport,
	];
	return {
		...state,
		pasport: newPasports,
	};
};

const updatePasport = (state, id, {
	gender,
	firstName,
	middleName,
	surName,
	birthday,
	town,
	region,
	image,
}) => {
	const { pasport, strId } = state;
	const element = {
		gender,
		firstName,
		middleName,
		surName,
		birthday,
		town,
		region,
		image,
	};
	const myArr = [];

	pasport.forEach((elem) => {
		if (elem.id === strId) {
			elem = element;
			myArr.push(elem);
		} else {
			myArr.push(elem);
		}
	});

	return {
		...state,
		pasport: myArr,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_COLOR:
			return changeCardColor(action.payload, state);

		case DELETE_CARD:
			return deleteCards(action.payload, state);

		case ADD_CARD:
			return addCard(action.payload, state);

		case ADD_PASPORT:
			return addPasport(action.payload, state);

		case ON_SEARCH_CHANGE:
			return onSearchChange(action.payload, state);

		case COLOR_FILTER:
			return colorFilter(action.payload, state);

		case UPDATE_CARD:
			return updateeCard(state, action.id, action.obj);

		case 'UPDATE_PASPORT':
			return updatePasport(state, action.id, action.obj);

		case PASPORT_ID:

			return {
				...state,
				strId: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
