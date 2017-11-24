const display = $('.maincontent');
const sections = $('.section');

let inScroll = false;

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
    }, 1300);
  }
    


$('.wrapper').on('wheel',e =>{
    const deltaY = e.originalEvent.deltaY;
    const activSection = sections.filter('.activ');
    const nextSection = activSection.next();
    const prevSection = activSection.prev();
    if(deltaY>0) {
        performTransition(nextSection.index())
        console.log ('вниз')
    }
    if(deltaY <0){
        performTransition(prevSection.index())
        console.log('вверх')
    }

});