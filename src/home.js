function createHome () {
    const home = document.createElement("div");
    home.classList.add("home");

    const text1 = document.createElement("div");
    text1.classList.add("text");
    text1.textContent = "Best pizza in your country!";
    home.appendChild(text1);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    text2.textContent = "Made with passion since 1908";
    home.appendChild(text2);

    const chefImg = document.createElement("img");
    chefImg.setAttribute("src", "./images/chef.png")
    chefImg.setAttribute("alt", "chef picture");
    home.appendChild(chefImg);

    const text3 = document.createElement("div");
    text3.classList.add("text");
    text3.textContent = "Order online or visit us!";
    home.appendChild(text3);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;