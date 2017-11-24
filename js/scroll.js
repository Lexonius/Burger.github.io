const display = $('.maincontent');
const sections = $('.section');
let inScroll = false;
const switchMenuActiveClass = sectionEq =>{
    $('.fixed-menu__item').eq(sectionEq).addClass('active')
    .siblings().removeClass('active');
}
const performTransition = sectionEq => {
    if (inScroll) return
    inScroll = true
    const position = (sectionEq * -100) + '%';
    display.css({
      'transform': `translate(0, ${position})`,
      '-webkit-transform': `translate(0, ${position})`
    })
    sections.eq(sectionEq).addClass('activ')
      .siblings().removeClass('activ');
  
    setTimeout(() => {
      inScroll = false;
      switchMenuActiveClass(sectionEq);
    }, 130.);
  }
  const difindeSections = sections => {
    const activSection = sections.filter('.activ')

    return {
        activeSection:activSection,
        nextSection:activSection.next(),
        prevSection:activSection.prev()  
    }
  }
$('.wrapper').on('wheel',e =>{
    const deltaY = e.originalEvent.deltaY;
    const section = difindeSections(sections);

    if(deltaY>0 && section.nextSection.length) {
        performTransition(section.nextSection.index())
        console.log ('вниз')
    }
    if(deltaY <0 && section.prevSection.length){
        performTransition(section.prevSection.index())
        console.log('вверх')
    }
    touchmove: e => (e.preventDefault())
});
$(document).on('keydown', e => {
    const section=difindeSections(sections);

  
    if (inScroll) return
  
    switch (e.keyCode) {
      case 40: 
        if(!section.nextSection.length) return;
        performTransition(section.nextSection.index());
        break;

        case 38:
        if(!section.prevSection.length) return;
        performTransition(section.prevSection.index());
        break; 
    }
  });
  $('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget); 
    const sectionIndex = parseInt($this.attr('data-scroll-to'));
    
    performTransition(sectionIndex);
  });