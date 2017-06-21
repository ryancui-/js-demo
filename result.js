"use strict";

/**
 * Created by ryancui on 2017/6/21.
 */

// A bit coin trade simulator

var f = function f(money, inPrice, outPrice) {
  var amount = (money / inPrice).toFixed(6);
  var tradeFee = 0;

  amount = (amount * 0.999).toFixed(6);
  tradeFee += amount * 0.001 * inPrice;

  console.log("\u4E70\u5165\u7684\u6570\u91CF\uFF1A" + amount);

  var gainMoney = (amount * outPrice).toFixed(6);

  gainMoney = (gainMoney * 0.999).toFixed(6);
  tradeFee += gainMoney * 0.001;

  tradeFee = tradeFee.toFixed(6);

  console.log("\u6700\u540E\u7684\u6536\u76CA\u4E3A\uFF1A" + (gainMoney - money));

  console.log("\u624B\u7EED\u8D39\u4E3A\uFF1A" + tradeFee);
};

f(2000, 0.298, 0.2996);
