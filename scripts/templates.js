function getDishesCategoriesTemplate(categoryOpt, categoriesIndex) {
    return `
    <img class="category_teaser" id="navLink_${categoriesIndex}" src="${categoryOpt.categoryImg}">
        <h2 class="category_title">${categoryOpt.category}</h2>
    `;
}

function getDishesTemplate(dishOpt, categoriesIndex, dishesIndex) {
    return `
            <div class="selection_example dfr sbfs">
                <div class="dish_details dfc fsfs">
                    <h2>${dishOpt.name}</h2>
                    <span>${dishOpt.description}</span>
                    <span class="price_tag">${dishOpt.price.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div class="selection_foodimg_btn dfr">
                    <img class="selection_foodimg" src="${dishOpt.foodImg}">
                    <button onclick="pushIntoBasket(${categoriesIndex},${dishesIndex})" class="selection_btn" id="selectedDish">+</button>
                </div>
            </div>
        `;
}

function getEmptyBasketTemplate() {
    return `
        <div class="empty_basket dfc cc">
            <img class="shopping_cart_img" src="assets/icons/shopping_cart.png" alt="Warenkorb-Symbol">
            <span>Wähle leckere Gerichte aus der Karte und bestelle dein Menü hier!</span>
        </div>
    `;
}

function getCoursesTemplate(categoriesIndex) {
    return `
            <a class="selection_options" href="#navLink_${categoriesIndex}">${dishesList[categoriesIndex].category}</a>
        `;
}

function getBasketTemplate(basketIndex) {
    return `
        <hr>
        <h3>${basketArr[basketIndex].name}</h3>
        <div class="dfr sbc">
            <button onclick="decreaseDishesAmount(${basketIndex})" class="btn_small">-</button>
            <span id="dishes_amount_${basketIndex}">${basketArr[basketIndex].amount}</span>
            <button onclick="increaseDishesAmount(${basketIndex})" class="btn_small">+</button>
            <span>${(basketArr[basketIndex].price * basketArr[basketIndex].amount).toFixed(2).replace('.', ',')} €</span>
            <button onclick="removeDishFromBasket(${basketIndex})" class="btn_small"><img src="assets/icons/trash_basket.png"
                    alt="löschen"></button>
        </div>
    `;
}

function getBasketPriceTemplate(subtotal, deliveryPrice, total) {
    return `
        <div id="shopping_basket_price" class="shopping_basket_price dfc fsc">
            <hr>
            <div class="price dfr fsfs" id="price_calculation">
                <div class="basket_price dfc">
                    <span id="subtotal">Zwischensumme: </span>
                    <span id="delivery_cost1">Lieferkosten: </span>
                    <span class="total_price" id="total_price">Gesamtkosten: </span>
             </div>
                <div class="dfc">
                    <span id="subtotal">${subtotal.toFixed(2).replace('.', ',')} €</span>
                    <span id="delivery_cost2">${deliveryPrice.toFixed(2).replace('.', ',')} €</span>
                    <span class="total_price" id="total_price">${total.toFixed(2).replace('.', ',')} €</span>
                </div>
            </div>
            <button class="btn" id="order_basket" onclick="acceptance_of_order()">Bestellen</button>
        </div>
    `;
}

function getOrderConfirmationTemplate() {
    return `
    <div class="order_confirmation dfc sfc">
        <h3>Deine Bestellung wurde angenommen und ist in ca. 20 bis 30 Minuten fertig!</h3>
        <br>
        <h3 class="question_new_order">Etwas vergessen?</h3>
        <button class="btn" id="new_order_btn" onclick="newOrder()">Neue Bestellung</button>
        </div>
    `;
}