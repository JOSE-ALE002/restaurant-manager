$(document).ready(function () {
  AOS.init({
    once: true,
    duration: 1000
  });
  
  const r = rolly({
      view: document.querySelector('.app'),
      native: true,
      // other options
    });
    r.init();
  
});