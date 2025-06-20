document.addEventListener('DOMContentLoaded', () => {

  const menuData = {
    cheese: {
      heading: "Добавки",
      items: [
        { img: "images/stert.jpg", title: "Сыр Тёртый", price: "100гр - 80₽" },
        { img: "images/splast.webp", title: "Сыр Пластинка", price: "1шт - 25₽" },
        { img: "images/hal.jpg", title: "Халапеньо", price: "30гр - 60₽" },
        { img: "images/egg.png", title: "Яйцо", price: "1шт - 30₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },
    sauce: {
      heading: "СОУСЫ",
      items: [
        { img: "images/ket.webp", title: "Кетчуп", price: "50₽" },
        { img: "images/sches.jpg", title: "Чесночный", price: "50₽" },
        { img: "images/barb.webp", title: "Барбекю", price: "50₽" },
        { img: "images/skis.jpg", title: "Кисло-сладкий", price: "50₽" },
        { img: "images/sir.jpg", title: "Сырный", price: "50₽" },
        { img: "images/ter.jpeg", title: "Терияки", price: "50₽" }
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe?placeSlug=sauces_menu"
    },

 giros: {
      heading: "Гирос",
      items: [
        { img: "images/girb.webp", title: "Гирос", price: "350₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },

     burger: {
      heading: "Бургеры",
      items: [
        { img: "images/9rULhYB7XpY.jpg", title: "Микс", price: "470₽" },
        { img: "images/zhQYcoQ3Q0s.jpg", title: "C Курицей", price: "от 240₽" },
        { img: "images/spiIYtHglnE.jpg", title: "С говядиной", price: "от 240₽" },
        { img: "images/DIEvJQ6SXhs.jpg", title: "Чили", price: "420₽" },
        { img: "images/ynrl1IelZfQ.jpg", title: "Мамин", price: "370₽" },
        { img: "images/kXVALd4dWE8.jpg", title: "Папин", price: "500₽" },
        { img: "images/nn.jpg", title: "Деда", price: "460₽" },
        { img: "images/nn.jpg", title: "Мини-люкс", price: "370₽" },
        { img: "images/nn.jpg", title: "С курицей и грибами", price: "400₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },

   desert: {
      heading: "Десерты",
      items: [
        { img: "images/is_xPM8XGJY.jpg", title: "Чизкейк с топпингом", price: "$50₽" },
        { img: "images/1c7GBTRdmUg.jpg", title: "Чизкейк классический", price: "140₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },  

    hach: {
      heading: "Хачапури",
      items: [
        { img: "images/M65g_mgqmCw.jpg", title: "Хачапури  по-аджарски", price: "350₽" },
        { img: "images/axoqglQecrs.jpg", title: "Хачапури по-имеретински", price: "470₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },  

     sendvich: {
      heading: "Сендвичи",
      items: [
        { img: "images/dK96EzKDgt0.jpg", title: "С семгой", price: "520₽" },
        { img: "images/nQJ32ozFgSY.jpg", title: "С ветчиной", price: "350₽" },
        { img: "images/YVQnfIDwnHg.jpg", title: "С говядиной", price: "390₽" },
        { img: "images/S1UbpeVgHY8.jpg", title: "С курицей", price: "370₽" },
        { img: "images/nn.jpg", title: "Жареные грибы и бекон", price: "370₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },  

      shaurma: {
      heading: "Шаурма",
      items: [
        { img: "images/f2P1R_7zs0A.jpg", title: "С сыром и фри куриная", price: "360₽" },
        { img: "images/lFiOCwcqnYg.jpg", title: "С курицей классическая", price: "от 240₽" },
        { img: "images/X8BDBZaJhlY.jpg", title: "Веганская", price: "от 190₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    },  

     pizza: {
      heading: "Пицца",
      items: [
        { img: "images/NJKSE9TQORI.jpg", title: "Фирменная", price: "от 540₽" },
        { img: "images/XfPfx3Wz-qE.jpg", title: "Курица-грибы", price: "от 590₽" },
        { img: "images/jQgSi3WJ8WY.jpg", title: "Цезарь", price: "от 600₽" },
        { img: "images/r3o5R9Xxji4.jpg", title: "Ветчина-грибы", price: "от 450₽" },
        { img: "images/OsX8YBP7iZI.jpg", title: "Ассорти", price: "от 500₽" },
        { img: "images/p-He9JmHdck.jpg", title: "Четыре сыра", price: "от 430₽" },
        { img: "images/eAtge_yuxFw.jpg", title: "Мексика", price: "от 570₽" },
        { img: "images/9Ibg6-5wIQc.jpg", title: "Овощная", price: "от 400₽" },
        { img: "images/6k1ZdYrQdVE.jpg", title: "Морская", price: "от 680₽" },
        { img: "images/kjGCEt2cINY.jpg", title: "чикен bbq", price: "от 410₽" },
        { img: "images/KrpshRKPo9I.jpg", title: "Маргарита", price: "от 400₽" },
        { img: "images/3P_yJ1IC8t0.jpg", title: "Дьябло", price: "от 400₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    }, 

     hotdog: {
      heading: "Хот-доги",
      items: [
        { img: "images/FzFSed-8PE0.jpg", title: "Французский с курицей", price: "170₽" },
        { img: "images/FzFSed-8PE0.jpg", title: "Французский с говядиной", price: "180₽" },
        { img: "images/HA4IUD-9tPA.jpg", title: "С говядиной", price: "$50₽" },
        { img: "images/HA4IUD-9tPA.jpg", title: "С курицей", price: "$50₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    }, 

      salads: {
      heading: "Салаты",
      items: [
        { img: "images/TMq1zzqcEag.jpg", title: "Цезарь", price: "350₽" },
        { img: "images/Idcx_OZ7rfw.jpg", title: "Греческий", price: "300₽" },
        { img: "images/nn.jpg", title: "Цезарь с семгой", price: "540₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    }, 

    zakuski: {
      heading: "Закуски",
      items: [
        { img: "images/pC3KehCp8Kc.jpg", title: "Крылышки", price: "от 380₽" },
        { img: "images/dO4tMAV0Syg.jpg", title: "Креветки в панировке", price: "от 290₽" },
        { img: "images/fp3iN_FSvc0.jpg", title: "Наггетсы", price: "от 190₽" },
        { img: "images/jy_Z6IBIcRw.jpg", title: "Картофель фри", price: "от 180₽" },
        { img: "images/KUnPoI.jpg", title: "картофель по-деревенски", price: "от 180₽" },
        { img: "images/IQxTiGTpJLE.jpg", title: "Сырные палочки ", price: "от 220₽" },
      ],
      orderLink: "https://eda.yandex.ru/r/v_lavashe"
    }, 
    

  };

  const openMenuButtons = document.querySelectorAll('.open-menu-btn');
  const mainMenuModal = document.getElementById('mainMenuModal');
  const closeMenuButton = document.getElementById('closeMenuBtn');
  const modalHeading = document.getElementById('modalHeading');
  const modalFoodCardsContainer = document.getElementById('modalFoodCards');
  const modalOrderLink = document.getElementById('modalOrderLink');


  function populateMenuModal(type) {
    const data = menuData[type];
    if (!data) {
      console.error(`Нет данных для типа меню: ${type}`);
      return;
    }

    modalHeading.textContent = data.heading; 

    modalFoodCardsContainer.innerHTML = '';

    data.items.forEach(item => {
      const foodCard = document.createElement('div');
      foodCard.classList.add('foodCard');
      foodCard.innerHTML = `
        <picture class="imageContainer">
          <img class="menu_img" src="${item.img}" alt="${item.title}">
        </picture>
        <p class="foodTitle">${item.title}</p>
        <footer class="priceAndButton">
          <p class="Price">${item.price}</p>
        </footer>
      `;
      modalFoodCardsContainer.appendChild(foodCard);
    });

    modalOrderLink.href = data.orderLink; 
  }


  openMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const menuType = button.dataset.menuType;
      populateMenuModal(menuType);
      mainMenuModal.classList.add('active');
    });
  });


  closeMenuButton.addEventListener('click', () => {
    mainMenuModal.classList.remove('active');
  });


  mainMenuModal.addEventListener('click', (e) => {
    if (e.target === mainMenuModal) {
      mainMenuModal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainMenuModal.classList.contains('active')) {
      mainMenuModal.classList.remove('active');
    }
  });
});