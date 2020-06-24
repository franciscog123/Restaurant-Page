"use strict";

/**
 * Renders a navbar section with home, menu, and contact anchor items.
 * @param {Element} divContainer The parent element to render the navbar section within. 
 */
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

    //when user scrolls, add the sticky class to the navbar to make it a sticky navbar
    window.onscroll = () => {switchNavbarClass(div)};
}

/**
 * Generates a hero image within the parent container.
 * @param {Element} divContainer The parent element to render the image within. 
 */
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

/**
 * Removes both the navbar and hero image.
 */
function removeHeader ()
{
    let navDiv=document.querySelector(".topnav");
    navDiv.remove();
    let imageDiv=document.querySelector(".hero-image");
    imageDiv.remove();
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function switchNavbarClass (navbar) {
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  } 

export {renderNavBar, renderHeroImage, removeHeader};