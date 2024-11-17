document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById('catalog');

    //Це вже бек-енд. Треба буде реалізувати його за допомогою ASP.NET
    const cardsData = [
        {
            img: './img/section1_catalog/cupcake_1.png',
            title: 'Кремова фортеця',
            description: 'Ніжний крем будь-якого кольору на вибір, вафельна основа',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_2.png',
            title: 'Малиновий рай',
            description: 'Повітряний крем, темна основа та ягідка малини',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_3.png',
            title: 'Феєрверк',
            description: 'Різнокольоровий крем, з бісквітною основою',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_4.png',
            title: 'Шоколадний світ',
            description: 'Горіхова стружка, ніжний крем та шоколадна основа',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_5.png',
            title: 'Сльози дракона',
            description: 'Ніжний крем будь-якого кольору на вибір, вафельна основа',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_6.png',
            title: 'Літня фантазія',
            description: 'Прикраси у формі сердець для коханої людини',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_7.png',
            title: 'Мис божевілля',
            description: 'Різнокольорова основа, стружка та ніжний крем',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_8.png',
            title: 'Хмарна казка',
            description: 'Світла основа, ніжний крем із стружкою зверху',
            price: '50 грн/шт.',
        },
        {
            img: './img/section1_catalog/cupcake_9.png',
            title: 'Темний лицар',
            description: 'Темна основа, ніжний крем та смачні кульки',
            price: '50 грн/шт.',
        },
    ];

    const createCard = ({img, title, description, price}) => `
        <div class="card">
            <img src="${img}" alt="${title}">
              <div class="card-body">
                <div class="card-title">${title}</div>
                <div class="card-description">${description}</div>
                <div class="card-price">${price}</div>
                <button class="card-button">Замовити</button>
            </div>
        </div>
    `;

    catalog.innerHTML = cardsData.map(createCard).join('');
});