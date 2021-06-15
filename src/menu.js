/* eslint-disable import/prefer-default-export */
function random(a) {
  return Math.floor(Math.random() * a + 1);
}
const appendElements = (main, mainDiv) => {
  main.appendChild(mainDiv);
  for (let i = 0; i < 5; i += 1) {
    const cardDiv = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardText = document.createElement('p');
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardText);
    mainDiv.appendChild(cardDiv);
    cardImage.src = './images/food.jpg';
    cardText.textContent = `Food : number ${i + 1} | R${random(30)}`;
  }
};

const setElementValues = (mainDiv) => {
  const mainDivNodes = Array.from(mainDiv.childNodes);
  mainDivNodes.forEach((element) => {
    element.classList.add('menu-card');
  });
};

const addElementIds = (mainDiv) => {
  mainDiv.id = 'menu-container';
};

const loadFunc = function loader(main) {
  const mainDiv = document.createElement('div');
  if (mainDiv.lastChild === null) {
    addElementIds(mainDiv);
    appendElements(main, mainDiv);
    setElementValues(mainDiv);
  }
};
export { loadFunc };