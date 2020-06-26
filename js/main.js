let App = new Vue({
    el: '#App',
    data: {
        product: 'Носки',
        description: 'Пара теплых, шерстянных носков',
        image: './img/green-socks.jpg',
        inventory: 100,
        details: ["80% Хлопок", "20% Полиэстер", "Унисекс"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'Зеленые',
                variantImage: './img/green-socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'Голубые',
                variantImage: './img/blue-socks.jpg'
            }
        ],

        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }


});