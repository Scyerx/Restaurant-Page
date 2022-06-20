import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader () {
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("div");
    name.setAttribute("id", "name");
    name.textContent = "Mozzafiato";
    header.appendChild(name);
    
    const navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    
    const homeBtn = document.createElement("div");
    homeBtn.classList.add("link");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        loadHome();
    });
    navBar.appendChild(homeBtn);

    const menuBtn = document.createElement("div");
    menuBtn.classList.add("link");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        loadMenu();
    });
    navBar.appendChild(menuBtn);

    const contactBtn = document.createElement("div");
    contactBtn.classList.add("link");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        loadContact();
    });
    navBar.appendChild(contactBtn);
    
    header.appendChild(navBar);

    return header;
}

function createMain () {
    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");    
    return main;
}

function createFooter () {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "Designed by Scyer"

    return footer;
}

function initialize () {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();

}

export default initialize;