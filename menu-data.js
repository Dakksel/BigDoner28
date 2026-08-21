/* =====================================================
   BIG DONER — данные меню
   Стартовые (сид) данные — используются, пока админ не
   инициализирует "живое" меню в Firestore (кнопка в панели
   администратора). После этого сайт и обе панели работают
   с данными из Firestore (документ menu/structure).
   ===================================================== */

const MENU_SEED = {
  categories: [
    { id:"c0",  name:"КОМБО",             color:"gold" },
    { id:"c1",  name:"БУРГЕРЫ",           color:"orange" },
    { id:"c2",  name:"ТАТ-МАК",           color:"gold" },
    { id:"c3",  name:"ДОНЕР",             color:"orange" },
    { id:"c4",  name:"ШАУРМА В ТАНДЫРЕ",  color:"gold" },
    { id:"c5",  name:"ПИЦЦА",             color:"orange" },
    { id:"c6",  name:"ХОТ-ДОГ",           color:"gold" },
    { id:"c7",  name:"СНЭКИ",             color:"orange" },
    { id:"c8",  name:"ЧИКЕН",             color:"gold" },
    { id:"c9",  name:"ГОРЯЧИЕ НАПИТКИ",   color:"orange" },
  ],
  items: [
    { id:"c0-0",  catId:"c0", name:"Жеке комбо №1 (1 донер куриный, 1 дипперы фри, 1 сырный соус, 0,5л Cola)", price:2990 },
    { id:"c0-1",  catId:"c0", name:"Жеке комбо №2 (10 шт чикен, 3 шт хлеба, 1 фри, 0,5л Pepsi)", price:3550 },
    { id:"c0-2",  catId:"c0", name:"Комбо №1 (2 куриный донер, 1 фри, 1 наггетсы, 1л Cola)", price:5550 },
    { id:"c0-3",  catId:"c0", name:"Комбо №2 (3 куриный донер, 1 дипперы фри, 1 фри, 1л Cola)", price:6850 },
    { id:"c0-4",  catId:"c0", name:"Комбо №3 (2 куриный донер, 10 шт чикен, 1 фри дипперы, 1л Pepsi)", price:6750 },
    { id:"c0-5",  catId:"c0", name:"Комбо №4 (3 куриный донер, 15 шт чикен, 1 фри, 1л Pepsi)", price:9150 },
    { id:"c0-6",  catId:"c0", name:"Комбо №5 (2 гамбургера, 1 наггетсы, 1 фри, 1л Cola)", price:5550 },
    { id:"c0-7",  catId:"c0", name:"Комбо №6 (3 гамбургера, 10 шт чикен, 1 дипперы фри, 1л Cola)", price:8250 },
    { id:"c0-8",  catId:"c0", name:"Комбо №7 (2 шаурма в тандыре кур, 1 фри, 1 наггетсы, турецкий айран — 2шт)", price:5050 },
    { id:"c0-9",  catId:"c0", name:"Комбо №8 (3 шаурма в тандыре кур, 10 шт чикен, 1 дипперы фри, турецкий айран — 3шт)", price:7750 },
    { id:"c0-10", catId:"c0", name:"Комбо №9 (1 пицца пепперони, 10 шт чикен, 1 дипперы фри, 1 наггетсы, 1л Cola)", price:6950 },
    { id:"c0-11", catId:"c0", name:"Комбо №10 (1 пицца пепперони, 20 шт чикен, 1 дипперы фри, 1 наггетсы, 1л Cola)", price:8950 },
    { id:"c0-12", catId:"c0", name:"Комбо №11 (1 пицца 4 сезона, 1 пицца пепперони, 20 шт чикен, 1 дипперы фри, 1 фри, 2л Cola)", price:11350 },
    { id:"c0-13", catId:"c0", name:"Комбо №12 (пицца маргарита, 1 пицца пепперони, 2 донер куриный, 20 шт чикен, 2л Кола)", price:12150 },

    { id:"c1-0", catId:"c1", name:"Гамбургер", price:1590 },
    { id:"c1-1", catId:"c1", name:"Двойной гамбургер", price:1890 },
    { id:"c1-2", catId:"c1", name:"Чикенбургер", price:1490 },
    { id:"c1-3", catId:"c1", name:"Двойной чикенбургер", price:1790 },
    { id:"c1-4", catId:"c1", name:"Миксбургер", price:1790 },
    { id:"c1-5", catId:"c1", name:"Наггетсбургер", price:1490 },

    { id:"c2-0", catId:"c2", name:"Куриный", price:1490 },
    { id:"c2-1", catId:"c2", name:"С наггетсами", price:1490 },
    { id:"c2-2", catId:"c2", name:"Чикен Тат-Мак", price:1490 },

    { id:"c3-0", catId:"c3", name:"Донер куриный", price:1590 },
    { id:"c3-1", catId:"c3", name:"Донер говяжий", price:1690 },
    { id:"c3-2", catId:"c3", name:"Донер ассорти", price:1690 },
    { id:"c3-3", catId:"c3", name:"Жаренный куриный", price:1790 },
    { id:"c3-4", catId:"c3", name:"Жаренный говяжий", price:1890 },
    { id:"c3-5", catId:"c3", name:"Жаренный ассорти", price:1890 },

    { id:"c4-0", catId:"c4", name:"Куриная", price:1290 },
    { id:"c4-1", catId:"c4", name:"Говяжья", price:1390 },
    { id:"c4-2", catId:"c4", name:"Ассорти", price:1390 },

    { id:"c5-0", catId:"c5", name:"Маргарита", price:2090 },
    { id:"c5-1", catId:"c5", name:"Куриная", price:2490 },
    { id:"c5-2", catId:"c5", name:"Балоньезе", price:2490 },
    { id:"c5-3", catId:"c5", name:"Пепперони", price:2390 },
    { id:"c5-4", catId:"c5", name:"4 сезона", price:2590 },
    { id:"c5-5", catId:"c5", name:"Цезарь", price:2590 },

    { id:"c6-0", catId:"c6", name:"Классический", price:790 },
    { id:"c6-1", catId:"c6", name:"Американский", price:790 },
    { id:"c6-2", catId:"c6", name:"Биг хот-дог", price:1190 },
    { id:"c6-3", catId:"c6", name:"В лаваше", price:1190 },
    { id:"c6-4", catId:"c6", name:"Острый", price:850 },
    { id:"c6-5", catId:"c6", name:"С корейским салатом", price:850 },
    { id:"c6-6", catId:"c6", name:"С сыром", price:850 },

    { id:"c7-0", catId:"c7", name:"Фри", price:890 },
    { id:"c7-1", catId:"c7", name:"Фри дипперы", price:990 },
    { id:"c7-2", catId:"c7", name:"Наггетсы", price:990 },
    { id:"c7-3", catId:"c7", name:"Луковые кольца", price:890 },
    { id:"c7-4", catId:"c7", name:"Сырные палочки", price:1290 },
    { id:"c7-5", catId:"c7", name:"Стрипсы 5 шт", price:1090 },

    { id:"c8-0", catId:"c8", name:"10 шт", price:2350 },
    { id:"c8-1", catId:"c8", name:"15 шт", price:3450 },
    { id:"c8-2", catId:"c8", name:"20 шт", price:4550 },
    { id:"c8-3", catId:"c8", name:"30 шт", price:6250 },

    { id:"c9-0", catId:"c9", name:"Кофе 3в1", price:300 },
    { id:"c9-1", catId:"c9", name:"Черный чай", price:300 },
    { id:"c9-2", catId:"c9", name:"Чай с молоком", price:300 },
    { id:"c9-3", catId:"c9", name:"Чай с лимоном", price:300 },
  ]
};

/* Рабочие данные (перезаписываются "живыми" данными из Firestore) */
let MENU  = [];
let ITEMS = [];

/* Собрать MENU (категории с вложенными items) и ITEMS (плоский список)
   из "плоской" структуры {categories, items} — используется и для
   сид-данных, и для live-данных из Firestore */
function rebuildMenuFromFlat(flat){
  const categories = (flat && flat.categories) || [];
  const items = (flat && flat.items) || [];
  ITEMS = items;
  MENU = categories.map(cat => ({
    ...cat,
    items: items.filter(it => it.catId === cat.id)
  }));
}

/* генератор случайных ID для новых категорий/позиций, добавленных через админку */
function genId(prefix){
  return prefix + "_" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

rebuildMenuFromFlat(MENU_SEED);
