// select all panels
const panels = document.querySelectorAll('.panel');

// loop through all panels and add event listener for click event
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // remove active classes to all
    removeActiveClasses();
    
    // then add active class to the panel that is clicked
    panel.classList.add('active');
  });
});


function removeActiveClasses() {
  // loop through all panels
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}