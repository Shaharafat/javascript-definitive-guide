function addStock(portfolio, stockName, shares) {
  portfolio[stockName] = shares;
}

function getValue(portfolio) {
  var total = 0.0;
  for (stock in portfolio) {
    var shares = portfolio[stock];
    var price = getQuote(stock);
    total += shares * price;
  }
  return total;
}


addStock("portfolio","IBM",20);
addStock("portfolio","Grammenphone",30);
addStock("portfolio","Robi",50);
addStock("portfolio","Airtel",15);


//!exceptional. You can concatenate the property name when using assosiative arrays.
// var addr = "";
// for (i = 0; i < 4; i++) {
//   addr += customer["address" + i] + '\n';
// }