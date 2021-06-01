//Variabel items
const navItems = document.querySelectorAll('nav .container i');
const indicator = document.querySelector('.line');
//For remove class
const toggleClass = (items) => {
  for (const item of items) {
    if ( item.classList.contains('active')) {
      item.classList.toggle('active');
    }
  }
}
//Gets the position of the element against the parent element
//From left
//Gets width element
const getPosition = (item) => {
  const positionEl = {
    fromLeft : item.getBoundingClientRect().left,
    width : item.getBoundingClientRect().width
  }
  return positionEl;
}
//Move line indicator
const moveLine = (position, offset) => {
  const widthLine = 80;
  indicator.style.left = `${position - ( (widthLine - offset) / 2)}px` ;
}
//Main code
for (const nav of navItems) {
  nav.addEventListener('click', () => {
    toggleClass(navItems);
    nav.classList.toggle('active');
    moveLine(
      getPosition(nav).fromLeft,
      getPosition(nav).width
      );
  });
}