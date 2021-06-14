const mainDiv = document.createElement('div');
const contactDiv = document.createElement('div');
const contactTitle = document.createElement('h2');
const contactText = document.createElement('p');
const addressDiv = document.createElement('div');
const addressTitle = document.createElement('h2');
const addressText = document.createElement('p');
const mailDiv = document.createElement('div');
const mailTitle = document.createElement('h2');
const mailText = document.createElement('p');

const appendElements = (main) => {
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactText);
    addressDiv.appendChild(addressTitle);
    addressDiv.appendChild(addressText);
    mailDiv.appendChild(mailTitle);
    mailDiv.appendChild(mailText);
    mainDiv.appendChild(contactDiv);
    mainDiv.appendChild(addressDiv);
    mainDiv.appendChild(mailDiv);
    main.appendChild(mainDiv);
};

const setElementValues  = () => {

 mainDiv.id = 'contact-container';
 contactTitle.textContent = 'Phone';
 addressTitle.textContent = 'Address';

 contactText.textContent = '018-388-2178';
 addressText.textContent = '278 road hungry ave';

 mailTitle.textContent = 'Mail Address';
 mailText.textContent = 'david@gemal.com';
};

const loadFunc = function(main) {
 //addElementIds();
 appendElements(main);
 setElementValues();
 console.warn('Contact page successfully loaded');
};


export {loadFunc};