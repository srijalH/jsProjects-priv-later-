function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price;
    let totalCid = 0;
  
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
    totalCid = totalCid.toFixed(2);
  
    if (Number(totalCid) < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (Number(totalCid) === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      const changeArray = [];
      for (let i = currencyUnit.length - 1; i >= 0; i--) {
        const coinName = currencyUnit[i][0];
        const coinValue = currencyUnit[i][1];
        const coinAvailable = cid[i][1];
  
        let coinsToReturn = Math.floor(coinAvailable / coinValue);
        let changeAmount = 0;
  
        while (changeDue >= coinValue && coinsToReturn > 0) {
          changeDue -= coinValue;
          changeDue = changeDue.toFixed(2);
          coinsToReturn -= 1;
          changeAmount += coinValue;
        }
  
        if (changeAmount > 0) {
          changeArray.push([coinName, changeAmount]);
        }
      }
  
      if (changeDue == 0) {
        return { status: "OPEN", change: changeArray };
      } else {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  }
  
  const result1 = checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  );
  
  console.log(result1);
  
  const result2 = checkCashRegister(
    3.26,
    100,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  );
  
  console.log(result2);