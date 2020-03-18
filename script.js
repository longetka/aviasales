const city = ['Москва', 'Санкт-Петербург', 'Минск',  'Караганда', 
'Челябинск', 'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 
'Екатеринбург', 'Одесса', 'Ухань', 'Шимкент', 'Нижний Новгород', 
'Калининград', 'Барнаул', 'Вроцлав', 'Ростов-на-Дону', 'Горно-Алтайск'];

const formSearch = document.querySelector('.form-search'),
			inputCitiesFrom = document.querySelector('.input__cities-from'),
			dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
			inputCitiesTo = document.querySelector('.input__cities-to'),
			dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
			inputDateDepart = document.querySelector('.input__date-depart');

const showCity = (input, list) => {


	if (input.value !== '') {
		const filterCity = city.filter((item) => {
			const fixItem = item.toLowerCase();
			return fixItem.includes(input.value.toLowerCase());
		});

		filterCity.forEach((item) => {
			const li = document.createElement('li');
			li.classList.add('dropdown__city');
			li.textContent = item;
			list.append(li);
		});
	}
};

inputCitiesFrom.addEventListener('input', () => {
	showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
	const target = event.target;
	if (target.tagName === 'LI') {
		inputCitiesFrom.value = target.textContent;
		dropdownCitiesFrom.textContent = '';
	}
});

inputCitiesTo.addEventListener('input', () => {
	showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesTo.addEventListener('click', (event) => {
	const target = event.target;
	if (target.tagName === 'LI') {
		inputCitiesTo.value = target.textContent;
		dropdownCitiesTo.textContent = '';
	}
})