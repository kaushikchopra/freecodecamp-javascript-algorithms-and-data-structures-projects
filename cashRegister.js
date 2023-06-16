function checkCashRegister(price, cash, cid) {
  let currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeToGive = cash - price;
  let totalAmountInCID = 0;

  for (let ele of cid) {
    totalAmountInCID += ele[1];
  }

  totalAmountInCID = totalAmountInCID.toFixed(2);

  let changeArray = [];

  if (changeToGive > totalAmountInCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (changeToGive.toFixed(2) === totalAmountInCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();

    console.log(cid);
    for (let ele of cid) {
      let temp = [ele[0], 0];

      while (changeToGive >= currencyUnit[ele[0]] && ele[1] > 0) {
        temp[1] += currencyUnit[ele[0]];
        ele[1] -= currencyUnit[ele[0]];
        changeToGive -= currencyUnit[ele[0]];
        changeToGive = changeToGive.toFixed(2);
      }

      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));