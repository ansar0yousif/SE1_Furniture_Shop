
document.addEventListener("DOMContentLoaded", function () {

    var deleteButtons = document.querySelectorAll("button");


    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });


    var quantityInputs = document.querySelectorAll("input[type='number']");


    quantityInputs.forEach(function (input) {
        input.addEventListener("input", updateTotal);
    });


    function updateTotal() {
        var row = this.parentNode.parentNode;
        var priceCell = row.querySelector("td:nth-child(4)");
        var quantity = this.value;
        var price = parseFloat(priceCell.textContent.replace("$", ""));
        var total = quantity * price;

        row.querySelector("td:nth-child(6)").textContent = "$" + total.toFixed(2);
    }
});



