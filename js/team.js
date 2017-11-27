function init() { //скеция team//
	console.log('READY');
	const wrapper = document.querySelector('.team-accordeon');
	console.log(wrapper)
	window.addEventListener('click', toggleMenu)
};
function toggleMenu(e) {
	
	if (e.target.classList.contains('team-accordeon__item') || e.target.classList.contains('team-accordeon_trigger')) {
		const wrapper = document.querySelector('.team-accordeon');
		const activeElems = wrapper.querySelectorAll('.active');
		const elem = e.target;
		e.preventDefault();
		const parent = elem.closest('.team-accordeon__item');
		const content = parent.querySelector('.team-accordeon__content');
		const text= parent.querySelector('.team-accordeon_trigger');
		const figure=parent.querySelector('.team-accordeon_trigger--figure');
		console.log(text)
		for (let i = 0; i < activeElems.length; i++) {
			if (activeElems[i] !== content) {
				activeElems[i].classList.remove('active');
				activeElems[i].style.display = 'none'
			}
		}
		if (!content.classList.contains('active')) {
			content.classList.add('active');
			content.style.display = 'block';
			text.style.color ='#f9b43b';
			figure.style.transform= 'rotate(180deg)';
		} else {
			content.classList.remove('active');
			content.style.display = 'none'
			text.style.color ='#ffffff';
			figure.style.transform= 'rotate(0deg)';
		};
	}
}

window.onload = init();