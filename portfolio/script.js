console.log(document.querySelectorAll('.project-card'));

// window.addEventListener('scroll', function () {
  document.querySelectorAll('.project-card').forEach(card => {
    console.log(card);
    
    const rect = card.getBoundingClientRect();
    // if (rect.top <= window.innerHeight - 60) {
      card.classList.add('visible');
    // }
  });
// });

document.querySelectorAll('.index').forEach(ind => {
    console.log(ind);
    
    const rect = ind.getBoundingClientRect();
    
      ind.classList.add('visible');
  });
