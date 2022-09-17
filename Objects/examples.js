
const portfolio = {};

function addStock (portfolio = {},stockName,shares){
 portfolio[stockName] = shares;
}


addStock(portfolio,'Goat',34);
addStock(portfolio,'Nike',48);
addStock(portfolio,'Real State',50);


// looping through the portfolio objects

for(share in portfolio){
    console.log(share);
}