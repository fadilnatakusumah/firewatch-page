document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller();
  const timeline = new TimelineMax();

  timeline
    .to('#parallax-1, #parallax-helper', 6, {
      y: -750,
    })
    .to('#parallax-2', 6, {
      y: -600,
    }, '-=6')
    .to('#parallax-3', 6, {
      y: -500,
    }, '-=6')
    .to('#parallax-4', 6, {
      y: -400,
    }, '-=6')
    .to('#parallax-5', 6, {
      y: -300,
    }, '-=6')
    .to('#parallax-6', 6, {
      y: -200,
    }, '-=6')
    .to('#parallax-7', 6, {
      y: -100,
    }, '-=6')
    .to('#parallax-8', 6, {
      y: -50,
    }, '-=6')
    .to('#parallax-9', 6, {
      y: -25,
    }, '-=6')
    .to('.content', 6, {
      top: '0%',
    }, '-=6')
    .to('header', 6, {
      y: -100,
      opacity: .05
    }, '-=6')
  // .to('#fifth', 6, {
  //   y: -500,
  // }, '-=6')
  // .to('#fourth', 6, {
  //   y: -400,
  // }, '-=6')
  // .to('#third', 6, {
  //   y: -300,
  // }, '-=6')
  // .to('#second', 6, {
  //   y: -200,
  // }, '-=6')
  // .to('#first', 6, {})

  new ScrollMagic.Scene({
    trigger: 'section',
    duration: '200%',
    triggerHook: 0,
  })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
})