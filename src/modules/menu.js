/**
 * If parameter footerExists is true, renders menu section before the footer.
 * If false, renders menu section by adding it to the end of the container.
 * @param {Element} divContainer The parent element to render the Menu section within
 * @param {Boolean} footerExists Whether or not if there is an existing footer in the DOM 
 */
function renderMenu(divContainer, footerExists)
{
    var elementExists=document.querySelector(".menu-body");
    if(elementExists)
    {
        console.log("Menu already exists");
    }
    else
    {
        let menuContainer=document.createElement("div");
        menuContainer.classList.add("menu-body");

        let h2=document.createElement("h2");
        h2.textContent="Menu";
        menuContainer.appendChild(h2);

        let itemSection=createMenuSection("Individual Items")
        menuContainer.appendChild(itemSection);

        let tacoItem=createMenuItem("Chicken or beef taco","$1.50","1 flour tortilla filled with chicken or beef fajitas and salad.");
        itemSection.appendChild(tacoItem);

        let quesadillaItem=createMenuItem("Quesadilla","$5","1 large flour quesadilla filled with chicken or beef fajitas. Served with salad and sour cream.");
        itemSection.appendChild(quesadillaItem);

        let burritoItem=createMenuItem("Burrito","$5","1 large burrito with your choice of meat and filling.");
        itemSection.appendChild(burritoItem);

        let gorditaItem=createMenuItem("Gordita","$3","1 chicken or beef gordita filled with refried beans and cheese.");
        itemSection.appendChild(gorditaItem);

        let entreeSection=createMenuSection("Entrees");
        menuContainer.appendChild(entreeSection);

        let enchiladaPlate=createMenuItem("Enchilada Plate","$10","3 beef, cheese, or chicken enchiladas served with rice, refried beans, and salad.");
        entreeSection.appendChild(enchiladaPlate);

        let burritoPlate=createMenuItem("Burrito Plate","$9","1 large burrito filled with your choice of meat and fillings. Served with rice and refried beans.");
        entreeSection.appendChild(burritoPlate);

        let taquitoPlate=createMenuItem("Mexican Taquitos Plate","$9","5 beef or chicken Mexican Taquitos filled with grilled onions and avocados. Served with charro beans.")
        entreeSection.appendChild(taquitoPlate);

        let carbonPlate=createMenuItem("Tacos al Carbon","$10","3 flour tortillas filled with chicken or beef fajitas. Served with rice, refried beans, and salad.");
        entreeSection.appendChild(taquitoPlate);

        if(footerExists)
        {
            let footer=document.querySelector(".footer");
            divContainer.insertBefore(menuContainer,footer);
        }
        else
            divContainer.appendChild(menuContainer);
    }
}

/**
 * Generates a menu item container displaying the given name, price, and description.
 * @param {string} name The name of the menu item
 * @param {string} price The price of the menu item
 * @param {string} description The description of the menu item 
 */
function createMenuItem(name, price, description)
{
    let menuItemSection=document.createElement("div");
    menuItemSection.classList.add("menu-item");

    let itemName=document.createElement("div");
    itemName.classList.add("menu-item-name");
    itemName.textContent=name;
    menuItemSection.appendChild(itemName);

    let itemPrice=document.createElement("div");
    itemPrice.classList.add("menu-item-price");
    itemPrice.textContent=price;
    menuItemSection.appendChild(itemPrice);

    let itemDescription=document.createElement("div");
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent=description;
    menuItemSection.appendChild(itemDescription);

    return menuItemSection;
}

/**
 * Creates a menu section container with the title displaying the name.
 * @param {string} name The title of the menu section 
 */
function createMenuSection(name)
{
    let menuSection=document.createElement("div");
        menuSection.classList.add("menu-section");

        let menuSectionTitle=document.createElement("h2");
        menuSectionTitle.classList.add("menu-section-title");
        menuSectionTitle.textContent=name;
        menuSection.appendChild(menuSectionTitle);

        return menuSection;
}

/**
 * Removes the menu container if it exists.
 */
function removeMenu()
{
    let menu=document.querySelector(".menu-body");
    if(menu)
        menu.remove();
}

export {renderMenu, removeMenu};