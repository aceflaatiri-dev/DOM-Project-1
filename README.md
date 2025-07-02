# Shopping Cart Web Application

## Overview

This is a simple Shopping Cart web application built with HTML, CSS (Bootstrap), and JavaScript. It allows users to add or remove quantities of products, like products, and delete products from the list. The total price updates dynamically based on the quantities selected.

## Features

- Responsive layout using Bootstrap 5.
- Three products displayed with image, name, description, and unit price.
- Increment (`+`) and decrement (`-`) buttons to adjust product quantities.
- Delete button (trash icon) to remove a product from the cart.
- Like button (heart icon) to toggle liking a product.
- Dynamic calculation and display of the total price based on selected quantities.
- Interactive icons using Font Awesome.

## Technologies Used

- HTML5
- CSS3 with Bootstrap 5
- JavaScript (DOM manipulation and event handling)
- Font Awesome for icons

## Project Structure

/
├── index.html # Main HTML file
├── style/
│ └── style.css # Custom CSS styles
├── js/
│ └── script.js # JavaScript logic for interactivity
└── assets/
├── baskets.png # Product image 1
├── socks.png # Product image 2
└── bag.png # Product image 3

markdown
Copy
Edit

## How to Use

1. Open `index.html` in your browser.
2. Use the plus (`+`) and minus (`-`) icons to increase or decrease the quantity of each product.
3. Click the trash icon to remove a product entirely.
4. Click the heart icon to like or unlike a product; the icon color toggles between black and red.
5. The total price at the top updates automatically as you change quantities or remove items.

## Customization

- To add more products, replicate the product card structure inside the `.list-products` container.
- Modify prices and images as needed.
- Styles can be adjusted in `style/style.css`.
- Additional JavaScript functionality can be added or modified in `js/script.js`.

## Dependencies

- Bootstrap 5 (CSS & JS via CDN)
- Font Awesome (via CDN)

## License

This project is open-source and free to use.
