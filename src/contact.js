// create a tab for contacts
function createContactsTab() {
    const contactsDiv = document.createElement("div"); // create the div

    const contactsH1 = document.createElement("h1"); // create the header
    const text = document.createTextNode("Contacts"); // create the text for the header

    const phone = document.createElement("p"); // create the phone paragraph
    phone.innerHTML = "Telephone: 1234567890"; // set the text of the phone paragraph

    const address = document.createElement("p"); // create the address paragraph
    address.innerHTML = "Fictional Street, X, Fictional City"; // set the text of the address paragraph

    const email = document.createElement("p"); // create the email paragraph
    email.innerHTML = "example@email.com"; // set the text of the email paragraph

    contactsH1.appendChild(text); // append the text to the header
    contactsDiv.appendChild(contactsH1); // append the header to the div
    contactsDiv.appendChild(address); // append the address to the div
    contactsDiv.appendChild(phone); // append the phone to the div
    contactsDiv.appendChild(email); // append the email to the div
    
    document.getElementById("content").appendChild(contactsDiv); // append the div to the main "content" div
}

//export the function that creates the div element
export { createContactsTab };