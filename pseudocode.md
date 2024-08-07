1. Initialize Application
    - Initialize an empty cart array
    - Display products on the page
    - Display initial cart state

2. Event Listener: Add to Cart
    - When "Add to Cart" button is clicked:
        - Retrieve the product ID from the button
        - Check if cart has less than 100 items
        - Find the product in the products list
        - Check if the product is already in the cart
            - If yes, increment its quantity
            - If no, add the product to the cart with quantity 1
        - Update the cart display
        - Update the total and average price display

3. Event Listener: Remove from Cart
    - When "Remove" button in the cart is clicked:
        - Retrieve the product ID from the button
        - Remove the product from the cart
        - Update the cart display
        - Update the total and average price display

4. Event Listener: Clear Cart
    - When "Clear Cart" button is clicked:
        - Empty the cart
        - Display a message saying "Your cart is empty"
        - Update the cart display
        - Update the total and average price display

5. Event Listener: Filter Products
    - When "Filter" button is clicked:
        - Retrieve the filter price from the input field
        - Filter products in the cart based on the filter price
        - Display the filtered products

6. Event Listener: Sort Cart
    - When "Sort Ascending" or "Sort Descending" button is clicked:
        - Retrieve the sort order
        - Sort the cart items based on their price
        - Update the cart display

7. Functions
    - displayProducts()
        - Render product data from JSON into HTML
    - displayCart(cartItems)
        - Render cart data into HTML
    - addToCart(productId)
        - Add product to cart or update quantity
    - removeFromCart(productId)
        - Remove product from cart
    - clearCart()
        - Empty the cart
    - filterProducts(price)
        - Filter cart items based on price
    - sortCart(order)
        - Sort cart items based on price
    - calculateTotalPrice()
        - Calculate and return the total price of the cart
    - calculateAveragePrice()
        - Calculate and return the average price of the cart items
    - updateCart()
        - Update the cart display
    - updatePrices()
        - Update total and average price displays

