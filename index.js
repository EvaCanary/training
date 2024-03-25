let posts = [];
let MAX_LIMIT_LENGTH = 30;

const titleInputNode = document.querySelector(".js-goods-input");
const addButtonNode = document.querySelector(".js-goods-btn");
const checkboxNode = document.querySelector(".js-goods-checkbox");
const spanTitleNode = document.querySelector(".js-goods-title");
const closeButtonNode = document.querySelector(".js-goods-close-btn");
const goodsListNode = document.querySelector(".goods__list");

const validation = (title) => {
  let result = true;

  if (title === "") {
    result = false;
    return result;
  }
  if (title.length > MAX_LIMIT_LENGTH) {
    result = false;
    return result;
  }
  return result;
};

const addGoodsToList = () => {
  const title = titleInputNode.value;
  return title;
};

function renderGoodsList(posts) {
  console.log(posts);
  goodsListNode.innerHTML = "";
  posts.forEach((post) => {
    //задали рендеру элементы которые он выведет в верстку
    const goodItem = document.querySelector("li");
    const goodLabel = document.querySelector("label");
    const goodInput = document.querySelector("input");
    const goodTitle = document.querySelector("span");
    const goodCloseBtn = document.querySelector("button");

    // задали классы нашим айтемам
    goodItem.className = ".goods__item";
    goodLabel.className = ".js-goods-checkbox .goods__item-label";
    goodInput.className = ".goods__item-checkbox";
    goodTitle.className = ".goods__item-title";
    goodCloseBtn.className = ".js-goods-close-btn .goods__close-btn";

    //указываем атрибуты для состояния чекбокса
    goodInput.setAttribute("unchecked", "");
    goodInput.setAttribute("type", "checkbox");

    goodTitle.innerText = post;

    //делаем вложенность элементам как они должны расположиться в верстке
    goodsListNode.appendChild(goodItem);
    goodItem.appendChild(goodLabel);
    goodLabel.appendChild(goodInput);
    goodLabel.appendChild(goodTitle);
    goodItem.appendChild(goodCloseBtn);
  });
}

const handler = (event) => {
  //это для тега форм который перезагружает страницу, мы прерываем дефолтное поведение элемента
  event.preventDefault();
  const title = addGoodsToList();
  // если не проходит валидацию - ретурн
  if (!validation(title)) {
    return;
  }
  //добавить новый элемент в "историю" в массив
  posts.push(title);

  renderGoodsList(posts);
  // по клику задаем ивент который будет забирать из инпута информацию и добавлять ее в историю
};

addButtonNode.addEventListener("click", handler);
