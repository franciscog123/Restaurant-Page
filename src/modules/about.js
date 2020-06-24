"use strict";

/**
 * if parameter footerExists is true, renders about section before the footer.
 * If false, renders about section by adding it to the end of the container
 * @param {Element} divContainer the parent element to render the footer within 
 * @param {boolean} footerExists represents whether a footer exists in the current DOM
 */
function renderAbout(divContainer, footerExists)
{
    var elementExists=document.querySelector(".homeText");
    
    //if there's already an about section, don't generate it again
    if(elementExists)
    {
        console.log("About section already exists");
    }
    else
    {
        let div=document.createElement("div");
        div.classList.add("homeText");

        let p1=document.createElement("p");
        p1.textContent="Taqueria Guerrero is a great restaurant that has proudly served the community for thousands of years. We have the best food, a great atmosphere, and some really good beer!";
        div.appendChild(p1);

        let p2=document.createElement("p");
        p2.textContent="Spicy jalapeno bacon ipsum dolor amet ham jerky tongue pork belly ball tip burgdoggen beef ribs strip steak tri-tip salami sausage pork cow. Pork chuck chicken ball tip rump landjaeger pancetta biltong ham ground round salami doner kielbasa kevin. Pork belly shankle boudin porchetta short loin, chuck drumstick tail pork spare ribs shank shoulder hamburger tenderloin. Bacon salami bresaola beef kevin biltong sirloin picanha tongue shoulder andouille.";
        div.appendChild(p2);

        let p3=document.createElement("p");
        p3.textContent="Pastrami short ribs pork chop shankle corned beef turkey. Spare ribs andouille cow frankfurter pastrami ground round. Doner capicola cow bacon ham sausage, ball tip strip steak. Fatback kevin strip steak tenderloin brisket. Ham hock hamburger jerky beef ribs tail, picanha pancetta boudin. Andouille picanha alcatra corned beef, turducken bacon ham pork belly bresaola cow.";
        div.appendChild(p3);

        let p4=document.createElement("p");
        p4.textContent="Tongue turducken leberkas shoulder sirloin. Short ribs porchetta rump pig bresaola. Bresaola landjaeger shoulder brisket strip steak, salami drumstick venison. Pork frankfurter pork chop tongue turducken, short loin pig ground round beef boudin.";
        div.appendChild(p4);

        let p5=document.createElement("p");
        p5.textContent="T-bone porchetta ball tip beef ribs meatball. Jowl beef ribs brisket, spare ribs chicken prosciutto sausage pastrami ground round kielbasa jerky filet mignon tongue ham hock ribeye. Corned beef biltong ball tip ham filet mignon pork loin. Leberkas burgdoggen tri-tip kielbasa porchetta pork belly andouille jerky drumstick chuck frankfurter brisket. Salami turducken shoulder bresaola rump cow ham boudin capicola swine shank tongue turkey chuck sausage. Ball tip boudin short ribs, chicken filet mignon burgdoggen corned beef sirloin brisket.";
        div.appendChild(p5);

        //if a footer already exists in the DOM, render about section before the footer, 
        //if footer doesn't exist, tack about section on to the end of the container
        if(footerExists)
        {
            let footer=document.querySelector(".footer");
            divContainer.insertBefore(div,footer);
        }
        else    
            divContainer.appendChild(div);
    }
}

/**
 * Removes About section if it exists.
 */
function removeAbout()
{
    let about=document.querySelector(".homeText");
    if(about)
        about.remove();
}

export {renderAbout,removeAbout};