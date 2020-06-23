import {renderNavBar, renderHeroImage} from './modules/renderHeader.js'
import { renderAbout, removeAbout} from './modules/renderAbout.js';
import { renderFooter } from './modules/renderFooter.js';

"use strict";

let container=document.querySelector("#content");

renderNavBar(container);
renderHeroImage(container);
renderAbout(container,false);
renderFooter(container);

let homeAnchor = document.querySelector("#home");
homeAnchor.addEventListener("click",()=> {renderAbout(container,true)});


//make removeAbout function available in console for testing, remove later
window.removeAbout=removeAbout;
