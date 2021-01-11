// import functions from page-load.js
import {
    createH1Element,
    createImageElement,
    createPElement
} from "./page-load.js";

import {
    createContactsTab
} from "./contact.js";

import {
    createMenuTab
} from "./menu.js";

// create navigation buttons
function createNavigation () {
    const homepage = document.createElement("button"); // create a button for the home
    homepage.innerHTML = "Home"; // set the inner text of the button to "Home"

    const contacts = document.createElement("button"); // create a button for the contacts page
    contacts.innerHTML = "Contacts"; // set the inner text of the button to "Contacts"

    const menu = document.createElement("button"); // create a button for the menu
    menu.innerHTML = "Menu"; // set the inner text of the button to "Menu"

    document.getElementById("content").appendChild(homepage); // append the home button to the main div
    document.getElementById("content").appendChild(contacts); // append the contacts button to the main div
    document.getElementById("content").appendChild(menu); // append the menu button to the main div

    homepage.addEventListener("click", ()=> { clearPage(); createNavigation(); loadHomepage(); }); // when clicked, remove all the tabs from the parent and show only the home tab/module
    contacts.addEventListener("click", ()=> { clearPage(); createNavigation(); createContactsTab(); }); // when clicked, remove all the tabs from the parent and show only the contacts tab/module
    menu.addEventListener("click", ()=> { clearPage(); createNavigation(); createMenuTab(); });; // when clicked, remove all the tabs from the parent and show only the menu tab/module
};
createNavigation();

// load the homepage on-load
function loadHomepage () {
    createH1Element();
    createImageElement();
    createPElement();
};
loadHomepage();

// clear page of all the tabs
function clearPage () {
    const parent = document.getElementById("content"); // target the "content" div, parent of all the other elements
    while (parent.firstChild) { // as long as there is a child
        parent.removeChild(parent.lastChild); // remove the last child
      }
};

// style the website
function styleWebsite () {
    // style the body
    document.body.style.textAlign = "center";
    document.body.style.paddingTop = "auto";
    document.body.style.fontSize = "2.5em";
};
styleWebsite();

