import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    let header = document.createElement('header');
    header.classList.add('header');

    let mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title');
    mainTitle.textContent = 'EL COMELON';

    let secondTitle = document.createElement('h3');
    secondTitle.classList.add('second-title');
    secondTitle.textContent = 'Fast food';

    header.appendChild(mainTitle);
    header.appendChild(secondTitle);

    return header;
}

export function createNav() {
    let nav_div = document.createElement('div');
    nav_div.classList.add('nav-website');

    let titleHome = document.createElement('a');
    titleHome.classList.add('link-nav');
    titleHome.textContent = 'Home';
    titleHome.addEventListener('click', () => {
        clearContent();
        iniciarWebsite();
    })


    let titleMenu = document.createElement('a');
    titleMenu.classList.add('link-nav');
    titleMenu.textContent = 'Menu';
    titleMenu.addEventListener('click', () => {
        clearContent();
        loadMenu();
    })

    let titleContact = document.createElement('a');
    titleContact.classList.add('link-nav');
    titleContact.textContent = 'Contacto';
    titleContact.addEventListener('click', () => {
        clearContent();
        loadContact();
    })

    nav_div.appendChild(titleHome);
    nav_div.appendChild(titleMenu);
    nav_div.appendChild(titleContact);

    return nav_div;
}

function createMain() {
    let main = document.createElement('main');
    main.classList.add('main-website');
    main.setAttribute('id', 'main-website')
    
    let cardDescription = document.createElement('span');
    cardDescription.classList.add('cards-website');
    cardDescription.textContent = 'El Comelón te ofrece el mejor sabor de comidas rápidas de la región. Ven y disfruta de nuestras hamburguesas especiales, perros calientes y las mejores papitas fritas que puede probar tu paladar';

    let cardHorarios = document.createElement('span');
    cardHorarios.classList.add('cards-website');
    cardHorarios.textContent = 'Visitanos de martes a domingo desde las 4pm hasta las 11pm. Puedes pedir tu plato favorito por Rappi o simplemente comunicate con nosotros al WhatsApp.';

    let cardLocation = document.createElement('span');
    cardLocation.classList.add('cards-website');
    cardLocation.textContent = '¡Estamos localizados en diferentes partes del país! Puedes encontrarnos en Palmira, Rionegro, Pereira, Bucaramanga y Medellín!';

    main.appendChild(cardDescription);
    main.appendChild(cardHorarios);
    main.appendChild(cardLocation);

    return main;

}

export function createFooter() {
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.setAttribute('id', 'footer');

    let targetsMedia = document.createElement('ul');
    
    let targetGitHub = document.createElement('li');
    targetGitHub.textContent = 'https://github.com/TatiAhumadaCode';

    let targetText = document.createElement('li');
    targetText.textContent = 'Visita nuestras redes sociales';
    
    let targetTwitter = document.createElement('li');
    targetTwitter.textContent = 'Twitter';

    let favicon = document.createElement('i');
    favicon.classList.add('fab');
    favicon.classList.add('fa-github');

    targetGitHub.appendChild(favicon);

    let faviconTw = document.createElement('i');
    faviconTw.classList.add('fab');
    faviconTw.classList.add('fa-twitter');

    targetTwitter.appendChild(faviconTw);


    targetsMedia.appendChild(targetGitHub);
    targetsMedia.appendChild(targetText);
    targetsMedia.appendChild(targetTwitter);

    footer.appendChild(targetsMedia);

    return footer;
}

function clearContent() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function iniciarWebsite() {
    let container = document.getElementById('container');

    container.appendChild(createHeader());
    container.appendChild(createNav());
    container.appendChild(createMain());
    container.appendChild(createFooter());

}


export default iniciarWebsite();