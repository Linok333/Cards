import {
	DELETE_CARD, ADD_CARD, COLOR_FILTER, ON_SEARCH_CHANGE, CHANGE_COLOR, UPDATE_CARD, PASPORT_ID, ADD_PASPORT,
} from './actionTypes';

const changeColorAction = (id) => ({
	type: CHANGE_COLOR,
	payload: id,
});

const deleteCardsAction = (id) => ({
	type: DELETE_CARD,
	payload: id,
});

const onSearchAction = (str) => ({
	type: ON_SEARCH_CHANGE,
	payload: str,
});

const colorFilterAction = (color) => ({
	type: COLOR_FILTER,
	payload: color,
});

const addCardAction = (objectCard) => ({
	type: ADD_CARD,
	payload: objectCard,
});

const addPasportAction = (objectCard) => ({
	type: ADD_PASPORT,
	payload: objectCard,
});

const updateeCardAction = (id, obj) => ({
	type: UPDATE_CARD,
	id,
	obj,
});

const pasportIdAction = (id) => ({
	type: PASPORT_ID,
	payload: id,
});

const updatePasportAction = (id, obj) => ({
	type: 'UPDATE_PASPORT',
	id,
	obj,
});
export {
	changeColorAction,
	deleteCardsAction,
	onSearchAction,
	colorFilterAction,
	addCardAction,
	addPasportAction,
	updateeCardAction,
	pasportIdAction,
	updatePasportAction,
};
