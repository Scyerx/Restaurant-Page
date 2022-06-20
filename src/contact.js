function createContact () {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const text1 = document.createElement("div");
    text1.classList.add("text");
    text1.textContent = "123 456 789";
    contact.appendChild(text1);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    text2.textContent = "Hollywood Boulevard 42, Los Angeles, USA";
    contact.appendChild(text2);

    return contact;

}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;