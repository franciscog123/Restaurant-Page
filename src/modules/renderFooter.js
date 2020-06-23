"use strict";

function renderFooter(divContainer)
{
    let footer=document.createElement("footer");
    footer.classList.add("footer");

    let para=document.createElement("p");
    para.textContent="Created by Francisco Guerrero";
    para.appendChild(document.createTextNode('\u00A0\u00A0'));

    footer.appendChild(para);

    let link=document.createElement("a");
    link.href="https://github.com/franciscog123/restaurant-page";

    let image=document.createElement("img");
    image.src="./images/GitHub-Mark-Light-120px-plus.png";
    image.style.border=0;
    image.style.height="50px";
    image.style.width="50px";
    image.alt="GitHub Repo";

    link.appendChild(image);

    footer.appendChild(link);

    divContainer.appendChild(footer);
}

export {renderFooter};