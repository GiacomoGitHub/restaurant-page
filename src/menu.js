// create a tab for the menu
function createMenuTab() {
    const menuDiv = document.createElement("div"); // create the div

    const menuH1 = document.createElement("h1"); // create the header
    const text = document.createTextNode("Menu"); // create the text

    const burger = document.createElement("h2"); //create the burger headear
    burger.innerHTML = "Tasty Burger"; // set the text inside the burger header

    const burgerParagraph = document.createElement("p"); // create the burger paragraph
    burgerParagraph.innerHTML = "The tastiest burger in the world"; // set the text inside the burger paragraph

    const curry = document.createElement("h2"); // create the curry header
    curry.innerHTML = "Secret Formula Curry"; // set the text of the curry header

    const curryParagraph = document.createElement("p"); // create the curry paragraph
    curryParagraph.innerHTML = "Our secret formula"; // set the text inside the curry paragraph

    menuH1.appendChild(text); // append the text to the header
    menuDiv.appendChild(menuH1); // append the header to the div
    menuDiv.appendChild(burger); // append the burger heder to the div
    menuDiv.appendChild(burgerParagraph); // append the burger paragraph to the div
    menuDiv.appendChild(curry); // append the curry header to the div
    menuDiv.appendChild(curryParagraph); // append the curry paragraph to the div
    
    document.getElementById("content").appendChild(menuDiv); // append the menu div to the main "content" div
}

//export the function that creates the div element
export { createMenuTab };

