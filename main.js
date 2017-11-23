// $(document).ready(()=>{
// 	$(function(){
// 	$('.menu__trigger').on('click',e =>{
// 		e.preventDefault()
// 		const $this = $(e.currentTarget);
// 		const $item = $this.closest('.menu__item');
// 		const content = item.find('.menu__content');
	
// 	})	
// 	})
	
// })

function init() {
	console.log('READY');
	const wrapper = document.querySelector('.menu__list');
	console.log(wrapper)
	window.addEventListener('click', toggleMenu)
};
function toggleMenu(e) {
	e.preventDefault();
	if (e.target.classList.contains('menu__trigger') || e.target.classList.contains('menu__trigger--text')) {
		const wrapper = document.querySelector('.menu__list');
		const activeElems = wrapper.querySelectorAll('.active');
		const elem = e.target;
		const parent = elem.closest('.menu__item ');
		const content = parent.querySelector('.menu__content');
		for (let i = 0; i < activeElems.length; i++) {
			if (activeElems[i] !== content) {
				activeElems[i].classList.remove('active');
				activeElems[i].style.display = 'none'
			}
		}
		if (!content.classList.contains('active')) {
			content.classList.add('active');
			content.style.display = 'block'
		} else {
			content.classList.remove('active');
			content.style.display = 'none'
		};
	}
}

window.onload = init();