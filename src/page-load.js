// create an h1 element when the page is first loaded
function createH1Element() {
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Welcome to Giacomo's Deli");
    h1.appendChild(text);
    document.getElementById("content").appendChild(h1);
}

// create an image element when the page is first loaded
function createImageElement() {
    const image = document.createElement("img");
    image.setAttribute("src", "https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80");
    image.setAttribute("width", "350");
    image.setAttribute("height", "200");
    image.setAttribute("alt", "A fantastic dish from our kitchen");
    document.getElementById("content").appendChild(image);
}

// create a p element when the page is first loaded
function createPElement() {
    const p = document.createElement("p");
    const text = document.createTextNode("The best food in the world");
    p.appendChild(text);
    document.getElementById("content").appendChild(p);
}

// export all these functions
export {
    createH1Element,
    createImageElement,
    createPElement
};

