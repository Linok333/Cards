import {
	DELETE_CARD, ADD_CARD, COLOR_FILTER, ON_SEARCH_CHANGE, CHANGE_COLOR,
} from './actionTypes';

const changeColorAction = (id) => ({
	type: CHANGE_COLOR,
	payload: id,
});

const deleteCardsAction = (id) => ({
	type: DELETE_CARD,
	payload: id,
})

const onSearchAction = (str) => ({
	type: ON_SEARCH_CHANGE,
	payload: str,
})

const colorFilterAction = (color) => {
	console.log('COLOR', color)
	return {
		type: COLOR_FILTER,
		payload: color,
	}
}

const addCardAction = (objectCard) => ({
	type: ADD_CARD,
	payload: objectCard,
})

const updateeCardAction = (id, obj) => ({
	type: 'UPDATE_CARD',
	id,
	obj,

})

const pasportIdAction = (id) => ({
	type: 'PASPORT_ID',
	payload: id,
})
export {
	changeColorAction,
	deleteCardsAction,
	onSearchAction,
	colorFilterAction,
	addCardAction,
	updateeCardAction,
	pasportIdAction,
};