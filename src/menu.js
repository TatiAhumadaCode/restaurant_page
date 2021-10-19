function createMenuBanner() {
    let menuHeader = document.createElement('header');
    menuHeader.classList.add('header');
    
    let menuTitle = document.createElement('h1');
    menuTitle.classList.add('main-title');
    menuTitle.textContent = 'EL COMELON';

    let menuTitle_2 = document.createElement('h3');
    menuTitle_2.classList.add('second-title');
    menuTitle_2.textContent = 'Menú';

    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuTitle_2);

    return menuHeader;
}

import { createNav } from './website.js';

createNav();

function createMenu() {
    let main_menu = document.createElement('main');
    main_menu.classList.add('main-menu');

    let item1 = document.createElement('span');
    item1.classList.add('menu-cards');
    let textItem1 = document.createElement('p');
    textItem1.textContent = 'HAMBURGUESA SILVER: deliciosa hamburguesa doble carne con queso fundido, verduras frescas, tocino y papas fritas.';
    let imgItem1 = document.createElement('img');
    imgItem1.classList.add('menu-image');
    imgItem1.src = './images/hamburguer.png';


    item1.appendChild(textItem1);
    item1.appendChild(imgItem1);

    main_menu.appendChild(item1);

    let item2 = document.createElement('span');
    item2.classList.add('menu-cards');
    let textItem2 = document.createElement('p');
    textItem2.textContent = 'PERRO AMERICANO: deliciosa salchicha americana bañada en queso fundido, cebolla caramelizada, tocino y pollo desmechado.';
    let imgItem2 = document.createElement('img');
    imgItem2.classList.add('menu-image');
    imgItem2.src = './images/perro.png';

    item2.appendChild(textItem2);
    item2.appendChild(imgItem2);

    main_menu.appendChild(item2);

    let item3 = document.createElement('span');
    item3.classList.add('menu-cards');
    let textItem3 = document.createElement('p');
    textItem3.textContent = 'SANDWICH Q"BANO: pan de orégano con verduras frescas, pechuga apanada, queso americano y pepperoni.';
    let imgItem3 = document.createElement('img');
    imgItem3.classList.add('menu-image');
    imgItem3.src = './images/sandwich.png';

    item3.appendChild(textItem3);
    item3.appendChild(imgItem3);

    main_menu.appendChild(item3);

    let item4 = document.createElement('span');
    item4.classList.add('menu-cards');
    let textItem4 = document.createElement('p');
    textItem4.textContent = 'SALCHIPAPA: disfruta de una rica porción de papas fritas con salchicha, queso fundido y salsa tartara';
    let imgItem4 = document.createElement('img');
    imgItem4.classList.add('menu-image');
    imgItem4.src = './images/salchipapa.png';

    item4.appendChild(textItem4);
    item4.appendChild(imgItem4);

    main_menu.appendChild(item4);

    let item5 = document.createElement('span');
    item5.classList.add('menu-cards');
    let textItem5 = document.createElement('p');
    textItem5.textContent = 'PICADA X 4: ven y come con tus amigos o familia una deliciosa picada para 4 personas, incluye papas fritas, salchicha, chorizo, pollo desmechado y carne en trocitos junto a tocino y queso fundido.';
    let imgItem5 = document.createElement('img');
    imgItem5.classList.add('menu-image');
    imgItem5.src = './images/picada.png';

    item5.appendChild(textItem5);
    item5.appendChild(imgItem5);

    main_menu.appendChild(item5);

    let item6 = document.createElement('span');
    item6.classList.add('menu-cards');
    let textItem6 = document.createElement('p');
    textItem6.textContent = 'DESGRANADO DE MAIZ: maiz tierno, queso fundido, tocino, salchicha, pollo o carne desmechada.';
    let imgItem6 = document.createElement('img');
    imgItem6.classList.add('menu-image');
    imgItem6.src = './images/desgranado.png';

    item6.appendChild(textItem6);
    item6.appendChild(imgItem6);

    main_menu.appendChild(item6);
    

    return main_menu;

}

import { createFooter } from './website.js';

createFooter();

function loadMenu() {
    let theMenu = document.getElementById('container');

    theMenu.appendChild(createMenuBanner());
    theMenu.appendChild(createNav());
    theMenu.appendChild(createMenu());
    theMenu.appendChild(createFooter());
}

export default loadMenu;     