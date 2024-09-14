document.addEventListener('DOMContentLoaded', function () {
    var cartTableBody = document.querySelector('tbody');

    var totalElement = document.querySelector('table strong');

    var items = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartDisplay() {
        cartTableBody.innerHTML = '';

        var totalSum = 0;

        items.forEach(function (item, index) {

            var newRow = document.createElement('tr');
            newRow.classList.add('cart-item');

            var imageCell = document.createElement('td');
            imageCell.classList.add('cart-image');
            imageCell.innerHTML = '<img src="' + item.image + '" alt="" />' +
                '<i class="bi bi-x delete-cart" data-index="' + index + '"></i>';

            var nameCell = document.createElement('td');
            nameCell.textContent = item.name;

            var priceCell = document.createElement('td');
            priceCell.textContent = item.price;

            var quantityCell = document.createElement('td');
            quantityCell.classList.add('product-quantity');
            quantityCell.textContent = '1'; 

            newRow.appendChild(document.createElement('td'));
            newRow.appendChild(imageCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(priceCell);
            newRow.appendChild(quantityCell);


            totalSum += parseFloat(item.price.replace('$', ''));

            cartTableBody.appendChild(newRow);
        });

        totalElement.textContent = '$' + totalSum.toFixed(2);
    }

    updateCartDisplay();

    cartTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-cart')) {
    
            var index = event.target.getAttribute('data-index');

            items.splice(index, 1);

            localStorage.setItem('cartItems', JSON.stringify(items));

            updateCartDisplay();
        }
    });
});