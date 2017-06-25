/**
 * Created by ryancui on 2017/6/21.
 */

// A bit coin trade simulator

const f = (money, inPrice, outPrice) => {
  let amount = (money / inPrice).toFixed(6);
  let tradeFee = 0;

  amount = (amount * 0.999).toFixed(6);
  tradeFee += amount * 0.001 * inPrice;

  console.log(`买入的数量：${amount}`);

  let gainMoney = (amount * outPrice).toFixed(6);

  gainMoney = (gainMoney * 0.999).toFixed(6);
  tradeFee += gainMoney * 0.001;

  tradeFee = tradeFee.toFixed(6);

  console.log(`最后的收益为：${(gainMoney - money).toFixed(6)}`);

  console.log(`手续费为：${tradeFee}`);
};

export default f;