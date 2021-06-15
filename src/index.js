import { loadFunc } from './home';
import { loadFunc as contact } from './contact';
import { loadFunc as menu } from './menu';

(() => {
  loadFunc();
  const tabArr = Array.from(document.querySelectorAll('.tab'));
  const main = document.querySelector('main');

  tabArr[0].classList.remove('.tab');
  tabArr[0].classList.add('tab-selected');

  const clearMainSection = () => {
    while (main.lastChild) {
      main.removeChild(main.lastChild);
    }
  };

  tabArr.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (
        e.target.id === 'Home'
        && !e.target.classList.contains('tab-selected')
      ) {
        clearMainSection();
        loadFunc();
      } else if (
        e.target.id === 'Menu'
        && !e.target.classList.contains('tab-selected')
      ) {
        clearMainSection();
        menu(main);
      } else if (
        e.target.id === 'Contact'
        && !e.target.classList.contains('tab-selected')
      ) {
        clearMainSection();
        contact(main);
      }

      tabArr.forEach((el) => {
        if (el.classList.contains('tab-selected')) {
          el.classList.remove('tab-selected');
          el.classList.add('tab');
        }
      });

      e.target.classList.remove('tab');
      e.target.classList.add('tab-selected');
    });
  });
})();
