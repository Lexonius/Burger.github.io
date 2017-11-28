function init() { //скеция меню//
	console.log('READY');
	console.log($, jQuery)
	
	const wrapper = document.querySelector('.menu__list');
	console.log(wrapper)
	window.addEventListener('click', toggleMenu)
};
function toggleMenu(e) {
	console.log('click');
	if (e.target.classList.contains('menu__trigger') || e.target.classList.contains('menu__trigger--text')) {
		const wrapper = document.querySelector('.menu__list');
		const activeElems = wrapper.querySelectorAll('.active');
		const elem = e.target;
		e.preventDefault();
		const parent = elem.closest('.menu__item ');
		const content = parent.querySelector('.menu__content');
		const text= parent.querySelector('.menu__trigger--text');
		console.log(text)
		for (let i = 0; i < activeElems.length; i++) {
			if (activeElems[i] !== content) {
				activeElems[i].classList.remove('active');
				activeElems[i].style.display = 'none'
				activeElems[i].parentNode.querySelector('.menu__trigger--text').style.color ='#ffffff';
			}
		}
		if (!content.classList.contains('active')) {
			content.classList.add('active');
			content.style.display = 'block';
			text.style.color ='#f9b43b';
		} else {
			content.classList.remove('active');
			content.style.display = 'none'
			text.style.color ='#ffffff';
		};
	}
}
window.onload = init();