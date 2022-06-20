function createMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const pizza1 = document.createElement("div");
    pizza1.classList.add("pizzas");

    const pizza1Img = document.createElement("img");
    pizza1Img.classList.add("pizzaPic");
    pizza1Img.setAttribute("src", "./images/carne.png")
    pizza1Img.setAttribute("alt", "pizza picture");
    pizza1.appendChild(pizza1Img);

    const pizza1title = document.createElement("div");
    pizza1title.classList.add("pizzaTitle");
    pizza1title.textContent = "Carne";
    pizza1.appendChild(pizza1title);

    const pizza1ingredients = document.createElement("div");
    pizza1ingredients.classList.add("pizzaIngredients");
    pizza1ingredients.textContent = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
    pizza1.appendChild(pizza1ingredients);

    menu.appendChild(pizza1);


    const pizza2 = document.createElement("div");
    pizza2.classList.add("pizzas");

    const pizza2Img = document.createElement("img");
    pizza2Img.classList.add("pizzaPic");
    pizza2Img.setAttribute("src", "./images/pepe.png")
    pizza2Img.setAttribute("alt", "pizza picture");
    pizza2.appendChild(pizza2Img);

    const pizza2title = document.createElement("div");
    pizza2title.classList.add("pizzaTitle");
    pizza2title.textContent = "Pepe";
    pizza2.appendChild(pizza2title);

    const pizza2ingredients = document.createElement("div");
    pizza2ingredients.classList.add("pizzaIngredients");
    pizza2ingredients.textContent = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
    pizza2.appendChild(pizza2ingredients);

    menu.appendChild(pizza2);

    const pizza3 = document.createElement("div");
    pizza3.classList.add("pizzas");

    const pizza3Img = document.createElement("img");
    pizza3Img.classList.add("pizzaPic");
    pizza3Img.setAttribute("src", "./images/pomodoro.png")
    pizza3Img.setAttribute("alt", "pizza picture");
    pizza3.appendChild(pizza3Img);

    const pizza3title = document.createElement("div");
    pizza3title.classList.add("pizzaTitle");
    pizza3title.textContent = "Pomodoro";
    pizza3.appendChild(pizza3title);

    const pizza3ingredients = document.createElement("div");
    pizza3ingredients.classList.add("pizzaIngredients");
    pizza3ingredients.textContent = "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";
    pizza3.appendChild(pizza3ingredients);

    menu.appendChild(pizza3);

    const pizza4 = document.createElement("div");
    pizza4.classList.add("pizzas");

    const pizza4Img = document.createElement("img");
    pizza4Img.classList.add("pizzaPic");
    pizza4Img.setAttribute("src", "./images/salsiccia.png")
    pizza4Img.setAttribute("alt", "pizza picture");
    pizza4.appendChild(pizza4Img);

    const pizza4title = document.createElement("div");
    pizza4title.classList.add("pizzaTitle");
    pizza4title.textContent = "Salsiccia";
    pizza4.appendChild(pizza4title);

    const pizza4ingredients = document.createElement("div");
    pizza4ingredients.classList.add("pizzaIngredients");
    pizza4ingredients.textContent = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
    pizza4.appendChild(pizza4ingredients);

    menu.appendChild(pizza4);


   

    return menu;

}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;