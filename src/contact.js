function createContactBanner() {
    let contactHeader = document.createElement('header');
    contactHeader.classList.add('header');
    
    let contactTitle = document.createElement('h1');
    contactTitle.classList.add('main-title');
    contactTitle.textContent = 'EL COMELON';

    let contactTitle_2 = document.createElement('h3');
    contactTitle_2.classList.add('second-title');
    contactTitle_2.textContent = '¡Contáctanos!';

    contactHeader.appendChild(contactTitle);
    contactHeader.appendChild(contactTitle_2);

    return contactHeader;
}

import { createNav } from './website.js';

createNav();

function createContact() {
    let main_Contact = document.createElement('main');
    main_Contact.classList.add('main-contact');

    let contact_Card = document.createElement('div');
    contact_Card.classList.add('contact-card');
    
    let card_title = document.createElement('h4');
    card_title.textContent = '¡Comunícate con nosotros!';

    let card_text = document.createElement('p');
    card_text.textContent = 'Si quieres contactarnos con nosotros puedes hacerlo directamente desde nuestro canal de WhatsApp al 555-222-2232 o a nuestro correo electrónico noescierto@soloejemplo.com';

    let card_img = document.createElement('img');
    card_img.src = './images/ichiraku.png';

    contact_Card.appendChild(card_title);
    contact_Card.appendChild(card_text);
    contact_Card.appendChild(card_img);

    main_Contact.appendChild(contact_Card);

    return main_Contact;
}

import { createFooter } from './website.js';

createFooter();

function loadContact() {
    let theContact = document.getElementById('container');

    theContact.appendChild(createContactBanner());
    theContact.appendChild(createNav());
    theContact.appendChild(createContact());
    theContact.appendChild(createFooter());
}

export default loadContact;