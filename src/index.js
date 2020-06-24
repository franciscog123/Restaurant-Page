import {renderNavBar,renderHeroImage} from './modules/header.js'
import * as About from './modules/about.js';
import { renderFooter } from './modules/footer.js';
import {renderContact,removeContact} from './modules/contact';
import {renderMenu, removeMenu} from './modules/menu';

"use strict";

let container=document.querySelector("#content"); //the main parent element all items rendered within

//render initial homepage
renderNavBar(container);
renderHeroImage(container);
About.renderAbout(container,false);
renderFooter(container);


//add event listeners to each navbar section so they display their corresponding sections
let homeAnchor = document.querySelector("#home");
homeAnchor.addEventListener("click",() => {
    removeContact();
    removeMenu();
    About.renderAbout(container,true);
});

let contactAnchor=document.querySelector("#contact");
contactAnchor.addEventListener("click",() => {
    About.removeAbout();
    removeMenu();
    renderContact(container,true)
});

let menuAnchor=document.querySelector("#menu");
menuAnchor.addEventListener("click",() => {
    About.removeAbout();
    removeContact();
    renderMenu(container,true);
});
