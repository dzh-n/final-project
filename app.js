const categories = [
  "Новинки",
  "Наборы для татуировок",
  "Тату машинки",
  "Тату краски",
  "Тату иглы",
  "Тату держатели",
  "Тату наконечники",
  "Блоки питания",
  "Педали и провода",
  "Аксессуары",
  "Принтеры и планшеты",
  "Защита, ёмкости, расходные материалы",
];

const brands = [
  "Aliance",
  "Aloe Tattoo",
  "Anchored by Nikko Hurtado",
  "BC Invention Comrany",
  "Beauty Bit",
  "Bishop Rotary",
  "Burlak Tattoo Machines",
  "Cheyenne HAWK",
  "Critical Tattoo",
  "Dermalize Protective",
  "Dynamic Colors",
  "EGO Bez’s Rotary",
  "Eikon Device Inc.",
  "Electrum",
  "EQUALISER by Kwadron",
  "Eternal",
  "Excalibur",
  "Fantasia Art Supply",
  "FKirons",
  "Hanafy",
  "HM Tattoo Machines",
  "Ink Machines",
  "InkJecta Tattoo Machine",
  "Intenze",
  "JACK & ALEXX",
  "Kashalot Rotary",
  "Kuro Sumi",
  "KWADRON™",
  "Lauro Paolini",
  "Lithuanian Irons",
  "Lucky Supply",
  "Mercator Medical",
  "Millenium Mom’s Ink",
  "NEMESIS",
  "Nocturnal Tattoo Ink",
  "Panthera",
  "Perma Blend",
  "Precision Needles",
  "Precision Tattoo Supply",
  "Premier Products",
  "Radiant",
  "Reprofx® Spirit™",
  "Right Stuuf",
  "S8TATTOO",
  "Skinductor",
  "Starbrite",
  "Tattoorevive",
  "TURANIUM Fabrika Rotary",
  "UNI–CART",
  "Vlad Blad",
  "World Famous Bala",
  "World Famous Tattoo Ink",
  "2K2BT",
  "БРОВИ",
  "КРАСКА Tattoo Ink",
];

const catalogBtn = document.querySelector("#catalog_btn");
const catalogMenu = document.querySelector("#catalog_list");
const catalogListData = document.querySelector("#catalog_list_data");
const likeBtn = document.querySelectorAll(".like-btn");

const catalogListCategoriesBtn = document.querySelector(
  "#catalog-list-categories"
);
const catalogLisBrandsBtn = document.querySelector("#catalog-list-brands");

function renderCatalog(arr) {
  catalogListData.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const el = document.createElement("li");
    el.textContent = arr[i];
    catalogListData.appendChild(el);
  }
}
renderCatalog(categories);

function toggleCatalogMenu() {
  catalogMenu.classList.toggle("hidden");
}

catalogListCategoriesBtn.addEventListener("click", () =>
  renderCatalog(categories)
);
catalogLisBrandsBtn.addEventListener("click", () => renderCatalog(brands));
catalogBtn.addEventListener("click", toggleCatalogMenu);

likeBtn.forEach((btn) => {
  const img = btn.querySelector("img");
  btn.addEventListener("click", () => {
    img.src = "img/icons/like-filled.svg";
  });
});

const menu = [
  "Каталог",
  "Контакты",
  "Промокоды",
  "Скидки",
  "Помощь",
  "О нас",
  "Избранное",
  "Личный кабинет",
];

const menuBtn = document.querySelector("#menu_btn");
const MenuList = document.querySelector("#menu-list");
const menuListData = document.querySelector("#menu-list-data");

menuBtn.addEventListener("click", toggleMenu);

function renderMenu(arr) {
  menuListData.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const element = document.createElement("li");
    element.textContent = arr[i];
    menuListData.appendChild(element);
  }
}

renderMenu(menu);

function toggleMenu() {
  MenuList.classList.toggle("hidden");
}

const emailInput = document.querySelector("#email");
const fullNameInput = document.querySelector("#full-name");
const submitBtn = document.querySelector("#submit-btn");
const authForm = document.querySelector("#auth-form");

submitBtn.addEventListener("click", submit);

function submit() {
  if (emailInput.value && fullNameInput.value) {
    authForm.innerHTML = "";
    const successEl = document.createElement("p");
    successEl.classList.add("text-2xl", "mt-4");
    successEl.textContent = "Вы успешно подписались!";
    authForm.appendChild(successEl);
  }
}

// const inputCounter = document.querySelector("#input-counter");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");

// plus.addEventListener("click", counter);
// minus.addEventListener("click", counter);

// function counter() {
//  inputCounter.value++

//   }

//   function counter()
