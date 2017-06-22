var menu = [
    {
        name: "Kir Royale",
        cost: 9.00,
        ing: ["Creme de Cassis", "Topped with Champagne"]
    },
    {
        name: "Golden Ginger Mojito",
        cost: 8.50,
        ing: ["Bacardi Oro", "Fresh Lime", "Ginger", "Sugar Syrup", "Fresh Mint", "Ginger Beer Top"]
    },
    {
        name: "Cosmopolitan",
        cost: 7.00,
        ing: ["Vodka", "Cointreau", "Blood Tonic", "Cranberry Juice", "Fresh Lime"]
    },
];

var Dish = function (name, cost, ing) {
    this.name = name;
    this.cost = cost;
    this.ing = ing || [];
};

menu.push(new Dish("Dark Expresso Martini", 8.50, ["Patron Tequila", "Vodka", "Kahlua", "Expresso"]));
menu.push(new Dish("Pink Pig", 7.50, ["Gin", "Rhubarb & Rosehip", "Fresh Lemon & Lime", "Sugar"]));



var addItemToDOM = function(name, cost, ing) {
    //col-md-4
    var outer = document.createElement("div");
    outer.setAttribute("class", "col-md-4");

    //menu-item
    var menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menu-item");

    //row
    var rowMain = document.createElement("div");
    rowMain.setAttribute("class", "row");

    //col-md-8
    var colMd8 = document.createElement("div");
    colMd8.setAttribute("class", "col-md-8");

    var h3 = document.createElement("h3");
    h3.innerHTML = name;

    colMd8.appendChild(h3);

    //col-md-4
    var colMd4 = document.createElement("div");
    colMd4.setAttribute("class", "col-md-4");

    var p = document.createElement("p");
    p.setAttribute("class", "cost");
    p.innerHTML = cost;

    colMd4.appendChild(p);

    rowMain.appendChild(colMd8);
    rowMain.appendChild(colMd4);

    //row
    var rowSecond = document.createElement("div");
    rowSecond.setAttribute("class", "row");

    //col-md-12
    var colMd12 = document.createElement("div");
    colMd12.setAttribute("class", "col-md-12");

    var pIng = document.createElement("p");
    pIng.setAttribute("class", "ing");
    pIng.innerHTML = ing.join(" ");

    colMd12.appendChild(pIng);
    rowSecond.append(colMd12);

    menuItem.appendChild(rowMain);
    menuItem.appendChild(rowSecond);
    outer.appendChild(menuItem);
    document.querySelector("#menu").appendChild(outer);
}

for(var i = 0; i < menu.length; i++) {
    addItemToDOM(menu[i].name, menu[i].cost, menu[i].ing);
}
