"use strict";

function renderNavBar(divContainer)
{
    let div=document.createElement("div");
    div.classList.add("topnav");

    let anchor=document.createElement("a");
    anchor.textContent="Home";
    anchor.id="home";
    div.appendChild(anchor);

    anchor=document.createElement("a");
    anchor.textContent="Menu";
    anchor.id="menu";
    div.appendChild(anchor);

    anchor=document.createElement("a");
    anchor.textContent="Contact";
    anchor.id="contact";
    div.appendChild(anchor);

    divContainer.append(div);
}

function renderHeroImage(divContainer) 
{
    let div=document.createElement("div");
    div.classList.add("hero-image");

    let textDiv=document.createElement("div");
    textDiv.classList.add("hero-text");
    let headerText=document.createElement("h1");
    headerText.textContent="Taqueria Guerrero";
    textDiv.appendChild(headerText);
    
    div.appendChild(textDiv);

    divContainer.appendChild(div);
}

function removeHeader ()
{
    let navDiv=document.querySelector(".topnav");
    navDiv.remove();
    let imageDiv=document.querySelector(".hero-image");
    imageDiv.remove();
}

export {renderNavBar, renderHeroImage, removeHeader};