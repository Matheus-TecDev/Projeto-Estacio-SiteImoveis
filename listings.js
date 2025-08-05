window.sr = ScrollReveal({ reset: true});

sr.reveal('.heading', {
    rotate: { x:100, y: 100, z: 0},
    duration: 1000});

sr.reveal('.box', { 
    rotate: { x:0, y:80, z:0},
    duration: 2000
});

sr.reveal('.details', { 
    rotate: { x:0, y:80, z:0},
    duration: 2000
});

sr.reveal('.btn', { 
    rotate: { x:0, y:80, z:0},
    duration: 2000
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});
