const MAX_CART_SIZE = 100;
const products = [
    {
        "id": 1,
        "name": "Product 1",
        "image": "https://via.placeholder.com/10",
        "price": 100
    },
    {
        "id": 2,
        "name": "Product 2",
        "image": "https://via.placeholder.com/10",
        "price": 200
    },
    {
        "id": 3,
        "name": "Product 3",
        "image": "https://via.placeholder.com/10",
        "price": 300
    }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" width="50">
            <div>
                <span>${product.name}  price is </span>
                <span>₹${product.price}</span>
            </div>
            <button data-id="${product.id}">Add to Cart</button>
        </div>
    `).join('');
}

function displayCart(cartItems) {
    const cartElement = document.getElementById('cart');
    if (cartItems.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartElement.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="50">
                <div>
                    <span>${item.name}</span>
                    <span>₹ ${item.price}</span>
                    <span>Quantity: ${item.quantity}</span>
                </div>
                <button data-id="${item.id}">Remove</button>
            </div>
        `).join('');
    }
}

function addToCart(productId) {
    if (cart.length >= MAX_CART_SIZE) {
        alert('Your cart is full. Please remove some items before adding new ones.');
        return;
    }
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateAveragePrice() {
    if (cart.length === 0) return 0;
    return calculateTotalPrice() / cart.length;
}
//less than or equal to the entered price
function filterProducts(price) {
    const filtered = cart.filter(item => item.price <= price);
    displayCart(filtered);
}

function sortCart(order) {
    cart.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
    updateCart();
}

function clearCart() {
    cart = [];
    displayCart(cart);
    updatePrices();
    alert('Your cart is empty');
}

function updateCart() {
    if (cart.length === 0) {
        displayCart([]);
        document.getElementById('total-price').innerText = `Total Price: ₹ 0`;
        document.getElementById('average-price').innerText = `Average Price: ₹ 0.00`;
    } else {
        displayCart(cart);
        updatePrices();
    }
}

function updatePrices() {
    const totalPrice = calculateTotalPrice();
    const averagePrice = calculateAveragePrice();
    document.getElementById('total-price').innerText = `Total Price: ₹ ${totalPrice}`;
    document.getElementById('average-price').innerText = `Average Price: ₹ ${averagePrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updatePrices();

    document.getElementById('product-list').addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
            addToCart(parseInt(event.target.dataset.id));
        }
    });

    document.getElementById('cart').addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
            removeFromCart(parseInt(event.target.dataset.id));
        }
    });

    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('filter-products').addEventListener('click', () => {
        const price = parseInt(document.getElementById('filter-price').value, 10);
        filterProducts(price);
    });
    document.getElementById('sort-asc').addEventListener('click', () => sortCart('asc'));
    document.getElementById('sort-desc').addEventListener('click', () => sortCart('desc'));
});
