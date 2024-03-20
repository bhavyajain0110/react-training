{
    var transactions_1 = [];
    var totalBal_1 = 0;
    var addtransaction = function () {
        var description = document.getElementById("description");
        var amount = document.getElementById("amount");
        totalBal_1 = totalBal_1 + parseInt(amount.value);
        var newTransaction = { description: description.value, amount: +amount.value, date: new Date() };
        transactions_1.push(newTransaction);
        var spanElement = document.getElementById("balance");
        spanElement.innerText = transactions_1.reduce(function (total, trasnaction) { return total + trasnaction.amount; }, 0).toString();
        updateDisplay_1();
    };
    var updateDisplay_1 = function () {
        var transactionArea = document.getElementById("transactions");
        var lis = transactions_1.map(function (trans) {
            return ("<li>".concat(trans.date, " ").concat(trans.description, " ").concat(trans.amount, "</li>"));
        });
        transactionArea.innerHTML = "<ul>" + lis.join('') + "</ul?";
        var description = document.getElementById("description");
        var amount = document.getElementById("amount");
        description.value = "";
        amount.value = "";
    };
}
