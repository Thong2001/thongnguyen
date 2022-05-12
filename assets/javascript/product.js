const saleoff__drink = document.querySelector('.saleoff__drink-slide')
const new__drink = document.querySelector('.new__drink-slide')
const app = {
    productItem: [{
            name: 'Trà atiso đỏ',
            img: "./assets/img/saleoff__drink/tra-atiso-do.png",
            oldprice: '25,000',
            newprice: '20,000',
        },
        {
            name: 'Bạc xỉu vani',
            img: "./assets/img/saleoff__drink/Bacxiu-vani.jpg",
            oldprice: '50,000',
            newprice: '40,000',
        },
        {
            name: 'Capuchino tạo bọt',
            img: "./assets/img/saleoff__drink/Capuchino-taobot.jpg",
            oldprice: '40,000',
            newprice: '30,000',
        },
        {
            name: 'Coffee hạt choco',
            img: "./assets/img/saleoff__drink/Coffee-hat-choco.jpg",
            oldprice: '35,000',
            newprice: '30,000',
        },
        {
            name: 'Trà sữa Thái Lan vani',
            img: "./assets/img/saleoff__drink/Trasua-ThaiLan-vani.jpg",
            oldprice: '25,000',
            newprice: '20,000',
        },
    ],
    Newdrink: [{
            name: 'Trà sữa chocolate',
            img: "./assets/img/new__drink/ts_chocolate.jpg",
            price: '30,000',
        },
        {
            name: 'Trà sữa hoa quả nhiệt đới',
            img: "./assets/img/new__drink/ts_hoaqua.jpg",
            price: '30,000',
        },
        {
            name: 'Trà sữa Okinawa',
            img: "./assets/img/new__drink/ts-Okinawa.png",
            price: '40,000',
        },
        {
            name: 'Trà mật ong',
            img: "./assets/img/new__drink/tra_matong.jpg",
            price: '25,000',
        },
        {
            name: 'Trà sữa milk chocolate',
            img: "./assets/img/new__drink/ts_milk_chocolate.png",
            price: '30,000',
        },
    ],
    render: function() {
        const htmls = this.productItem.map((item, index) => {
            return `
            <div class="saleoff__drink-item c-12 m-12 l-12 col	">
            <div class="saleoff__drink-head">
                <img src="${item.img}" alt="" class="saleoff__drink-img">
                <h4 class="saleoff__drink-name">${item.name}</h4>
            </div>
            <div class="saleoff__drink-footer">
                <div class="saleoff__drink-price">

                    <p class="saleoff__drink-newprice">${item.newprice} Đ</p>
                    <p class="saleoff__drink-oldprice">${item.oldprice} Đ</p>
                </div>
                <button class="saleoff__drink-additem">
                <i class="fa-solid fa-cart-shopping drink__cart"></i>
                Thêm vào giỏ</button>
            </div>
        </div>
            `;

        })
        const newdrinkhtmls = this.Newdrink.map((items, index) => {
            return `
            <div class="new__drink-item c-12 m-12 l-12 col	">
            <div class="new__drink-head">
                <img src="${items.img}" alt="" class="new__drink-img">
                <h4 class="new__drink-name">${items.name}</h4>
            </div>
            <div class="new__drink-footer">
                    <p class="new__drink-price">${items.price} Đ</p>
                <button class="new__drink-additem">
                <i class="fa-solid fa-cart-shopping drink__cart"></i>
                Thêm vào giỏ</button>
            </div>
        </div>
            `;

        })
        saleoff__drink.innerHTML = htmls.join('');
        new__drink.innerHTML = newdrinkhtmls.join('');
    },
}

app.render()