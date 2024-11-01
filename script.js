let categoriesIndex = 0;
let deliveryPrice = 0;

function init() {
  renderDishes();
  renderEmptyBasket();
  renderCategoriesIntoSlider();
}

function renderDishes() {
  let dishesRef = document.getElementById('categories_dishes');
  dishesRef.innerHTML = "";

  if (dishesRef == 0 && dishesList.length < 1) {
    dishesList[categoriesIndex] != dishesRef;
  }

  if (dishesRef !== 0) {
    for (let categoriesIndex = 0; categoriesIndex < dishesList.length; categoriesIndex++) {
      const categoryOpt = dishesList[categoriesIndex];
      dishesRef.innerHTML += getDishesCategoriesTemplate(categoryOpt, categoriesIndex);

      for (let dishesIndex = 0; dishesIndex < dishesList[categoriesIndex].dishes.length; dishesIndex++) {
        const dishOpt = dishesList[categoriesIndex].dishes[dishesIndex];
        dishesRef.innerHTML += getDishesTemplate(dishOpt, categoriesIndex, dishesIndex);
      }
    }
  }
}

function renderEmptyBasket() {
  let emptyBasketRef = document.getElementById('shopping_basket');
  emptyBasketRef.innerHTML = "";

  if (basketArr.length == 0) {
    basketArr = [];
    emptyBasketRef.innerHTML += getEmptyBasketTemplate();
  }
}

function renderCategoriesIntoSlider() {
  let coursesRef = document.getElementById('course_selection');
  coursesRef.innerHTML = "";

  if (coursesRef == 0 && dishesList.length < 1) {
    dishesList[categoriesIndex].category != coursesRef;
  }

  if (coursesRef !== 0) {
    for (let categoriesIndex = 0; categoriesIndex < dishesList.length; categoriesIndex++) {
      coursesRef.innerHTML += getCoursesTemplate(categoriesIndex);
    }
  }
}

function pushIntoBasket(categoriesIndex, dishesIndex) {
  const dish = dishesList[categoriesIndex].dishes[dishesIndex];
  const existingItem = basketArr.find((item) => item.name === dish.name);

  if (existingItem) {
    existingItem.amount++;
  } else {
    basketArr.push({ ...dish });
  }
  renderBasket();
}

function renderBasket() {
  let basketRef = document.getElementById('shopping_basket');
  basketRef.innerHTML = "";

  if (basketRef == 0 && basketArr.length < 1) {
    basketArr != basketRef;
  }

  if (basketRef !== 0) {
    for (let basketIndex = 0; basketIndex < basketArr.length; basketIndex++) {
      basketRef.innerHTML += getBasketTemplate(basketIndex);
    }
    renderBasketPrice();
  }
}

function renderBasketPrice() {
  let subtotal = 0;
  let total = 0;
  let rdBtn = document.getElementById('delivery');

  for (let basketIndex = 0; basketIndex < basketArr.length; basketIndex++) {
    subtotal += basketArr[basketIndex].price * basketArr[basketIndex].amount;
  }

  if (rdBtn.checked && subtotal < 40) {
    deliveryPrice = 2;
  } else {
    deliveryPrice = 0;
  }

  total = subtotal + deliveryPrice;

  let basketPriceRef = document.getElementById('basket_price');
  basketPriceRef.innerHTML = "";
  basketPriceRef.innerHTML = getBasketPriceTemplate(subtotal, deliveryPrice, total);

  if (deliveryPrice == 0 || basketArr.length == 0) {
    showNoDeliveryCosts();
  }
}

function showNoDeliveryCosts() {
  document.getElementById('delivery_cost1').classList.add('d_none');
  document.getElementById('delivery_cost2').classList.add('d_none');
}

function decreaseDishesAmount(basketIndex) {
  let dishesAmountRef = document.getElementById(`dishes_amount_${basketIndex}`);
  if (basketArr[basketIndex].amount > 1) {
    dishesAmountRef = basketArr[basketIndex].amount--;
    renderBasket(basketIndex);
  } else {
    removeDishFromBasket(basketIndex);
  }
}

function removeDishFromBasket(basketIndex) {
  if (basketArr.length > 0) {
    basketArr.splice(basketIndex, 1);
    renderBasket(basketIndex);
  }

  if (basketArr.length == 0) {
    basketArr = "";
    document.getElementById('shopping_basket_price').classList.add('d_none');
    renderEmptyBasket();
  }
}

function increaseDishesAmount(basketIndex) {
  let dishesAmountR = document.getElementById(`dishes_amount_${basketIndex}`);
  dishesAmountR = basketArr[basketIndex].amount++;
  renderBasket(basketIndex);
}

function delivery() {
  if (basketArr.length == 0) {
    renderEmptyBasket();
  } else {
    renderBasketPrice();
  }
}

function pickUp() {
  if (basketArr.length == 0) {
    renderEmptyBasket();
  } else {
    renderBasketPrice();
  }
}

function acceptance_of_order() {
  basketArr = [];
  let orderAcceptedRef = document.getElementById('shopping_basket');
  orderAcceptedRef.innerHTML = '';
  orderAcceptedRef.innerHTML = getOrderConfirmationTemplate();
  document.getElementById('shopping_basket_price').classList.add('d_none');
}

function newOrder() {
  init();
}

function addOverlay() {
  document.getElementById('resp_basket').classList.add('overlay');
}

function removeOverlay() {
  document.getElementById('resp_basket').classList.remove('overlay');
}