
if (screen.width < 1024){
  console.log('width < 1024px')
  window.sr =  ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,     
  });
  sr.reveal('.titulo', {
    duration: 3000,       
  });
  sr.reveal('.enlace', {
    duration: 3000,
  });
}else if (screen.width < 1280){
  console.log('width < 1280px')
  window.sr =  ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,     
  });
  sr.reveal('.titulo', {
    duration: 3000,       
  });
  sr.reveal('.enlace', {
    duration: 3000,
  });
}else{ 
  console.log('width > 1280px')
  window.sr =  ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'top', 
    distance: '100px'      
  });
  sr.reveal('.titulo', {
    duration: 3000,
    origin: 'right',
    distance: '300px'       
  });
  sr.reveal('.enlace', {
    duration: 3000,
  });
}


      
