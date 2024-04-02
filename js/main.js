const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопке с подсказками

for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();
		// Hide all hint
		for (let hint of infoHints) {
			hint.classList.add('none');
		}
		// Show carrent hint
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}

// Закрываем подсказки при клике по всему документу

document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});

// Запрещаем всплытие события наверх при клике на подсказки

for (let hint of infoHints) {
	hint.addEventListener('click', e => e.stopPropagation());
}

// swiper slider

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 42,
	// freeMode: true,
	// loop: true,

	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},

	// breakpoints: {
	// 	640: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// 	1024: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 50,
	// 	},
	// },
});

// Tabs

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
	btn.addEventListener('click', function () {
		// Убераем активные классы у всех кнопок
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		// Добавляем активный класс к активной кнопке
		this.classList.add('tab-controls__btn--active');

		// Отобразить нужные товары и скрыть все товары

		for (let product of tabsProducts) {
			// Проверка на отображение всех слайдов

			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}

		// Update swiper
		swiper.update();
	});
}

// Mobile nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
	mobileNav.classList.add('mobile-nav-wrapper--open');
};

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};
