document.addEventListener('DOMContentLoaded', function () {
  
    var productList = document.getElementById('product-list');

    var addToCartButtons = productList.querySelectorAll('.products-links');
    addToCartButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
      
            var productItem = productList.querySelectorAll('.product-item')[index];
            var productName = productItem.querySelector('.product-title').textContent;
            var productPrice = productItem.querySelector('.product-prices strong').textContent;
            var productImage = productItem.querySelector('.product-image img').getAttribute('src');

            var product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            var items = JSON.parse(localStorage.getItem('cartItems')) || [];

            items.push(product);

            localStorage.setItem('cartItems', JSON.stringify(items));

            alert('Product added to cart!');
        });
    });
});