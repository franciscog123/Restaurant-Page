import Map from '../images/map.jpg'

/**
 * if parameter footerExists is true, renders contact section before the footer.
 * If false, renders contact section by adding it to the end of the container
 * @param {Element} divContainer the parent element to render the contact section within 
 * @param {boolean} footerExists represents whether a footer exists in the current DOM
 */
export function renderContact (divContainer, footerExists)
{
    var elementExists=document.querySelector(".contact-container");
    if(elementExists)
        console.log("Contact section already exists");
    else
    {
        let contactContainer=document.createElement("div");
        contactContainer.classList.add("contact-container");

        let div=document.createElement("div");
        contactContainer.appendChild(div);

        let h2=document.createElement("h2");
        h2.textContent="Contact Us";
        div.appendChild(h2);

        let para=document.createElement("p");
        para.textContent="Come on down for a bite, or leave us a message:";
        div.appendChild(para);

        let row=document.createElement("div");
        row.classList.add("row");
        contactContainer.appendChild(row);

        let column1=document.createElement("div");
        column1.classList.add("column");
        row.appendChild(column1);

        let img=document.createElement("img");
        img.src=Map;
        img.style.width="100%";
        column1.appendChild(img);

        let column2=document.createElement("div");
        column2.classList.add("column");
        row.appendChild(column2);

        let form=document.createElement("form");
        form.action="#";
        column2.appendChild(form);

        let label1=document.createElement("label");
        label1.htmlFor="fname";
        label1.textContent="First Name";
        form.appendChild(label1)

        let input1=document.createElement("input");
        input1.type="text";
        input1.id="fname";
        input1.name="firstname";
        input1.placeholder="Your name..."
        input1.required=true;
        form.appendChild(input1);

        let label2=document.createElement("label");
        label2.htmlFor="lname";
        label2.textContent="Last Name";
        form.appendChild(label2)

        let input2=document.createElement("input");
        input2.type="text";
        input2.id="lname";
        input2.name="lastname";
        input2.placeholder="Your last name..."
        input2.required=true;
        form.appendChild(input2);

        let label3=document.createElement("label");
        label3.htmlFor="email";
        label3.textContent="Email";
        form.appendChild(label3);

        let input3=document.createElement("input");
        input3.type="email";
        input3.id="email";
        input3.name="email";
        input3.placeholder="email@address.com..."
        input3.required=true;
        form.appendChild(input3);

        let label4=document.createElement("label");
        label4.htmlFor="subject";
        label4.textContent="Subject";
        form.appendChild(label4);

        let input4=document.createElement("textarea");
        input4.id="subject";
        input4.name="subject";
        input4.placeholder="Write something..."
        input4.required=true;
        input4.style.height="170px";
        form.appendChild(input4);

        let submitBtn=document.createElement("input");
        submitBtn.type="submit";
        submitBtn.value="Submit";
        form.appendChild(submitBtn);

        if(footerExists)
        {
            let footer=document.querySelector(".footer");
            divContainer.insertBefore(contactContainer,footer);
        }
        else
            divContainer.appendChild(contactContainer);
    }
}

export function removeContact()
{
    let contact=document.querySelector(".contact-container");
    if(contact)
        contact.remove();
}