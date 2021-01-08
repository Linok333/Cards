export const initialState = {
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
			region: 'Вінницька обл',
			image: 'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png',
			cardsMain: [
				{
					cardNumber: '1212 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'red',
					id: '101',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '1235 6661 8888 9999',
					cardType: 'Юніор',
					bankName: 'МоноБанк',
					expiredData: '04/23',
					typeName: 'VISA',
					color: 'yellow',
					id: '102',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '0990 6661 8888 9999',
					cardType: 'Кредитна',
					bankName: 'АвальБанк',
					expiredData: '11/20',
					typeName: 'VISA',
					color: 'green',
					id: '103',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
			],
			cards: [
				{
					cardNumber: '1212 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'red',
					id: '101',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '1235 6661 8888 9999',
					cardType: 'Юніор',
					bankName: 'МоноБанк',
					expiredData: '04/23',
					typeName: 'VISA',
					color: 'yellow',
					id: '102',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '0990 6661 8888 9999',
					cardType: 'Кредитна',
					bankName: 'АвальБанк',
					expiredData: '11/20',
					typeName: 'VISA',
					color: 'green',
					id: '103',
					cod: 'first',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
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
					cardNumber: '1111 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'red',
					id: '104',
					cod: 'second',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '3333 6661 7777 7887',
					cardType: 'Юніор',
					bankName: 'АвальБанк',
					expiredData: '03/23',
					typeName: 'VISA',
					color: 'green',
					id: '105',
					cod: 'second',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
			],
			cards: [
				{
					cardNumber: '1111 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'red',
					id: '104',
					cod: 'second',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
				{
					cardNumber: '3333 6661 7777 7887',
					cardType: 'Юніор',
					bankName: 'АвальБанк',
					expiredData: '03/23',
					typeName: 'VISA',
					color: 'green',
					id: '105',
					cod: 'second',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
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
					cardNumber: '6666 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'grey',
					id: '106',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
			],
			cards: [
				{
					cardNumber: '6666 8641 8458 9999',
					cardType: 'Для виплат',
					bankName: 'ПриватБанк',
					expiredData: '05/24',
					typeName: 'VISA',
					color: 'grey',
					id: '106',
					amount: 100,
					income: [
						{ summa: '100', comment: 'Подарунок від Банку' },
					],
					costs: [],
				},
			],
		},
	],
	strId: false,
};
