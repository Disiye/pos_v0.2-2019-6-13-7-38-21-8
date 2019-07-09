'use strict';

function printReceipt(inputs) {
  var lists = loadAllItems();
  var commodity = findCommodityByBarcode(inputs);
  var result = findreceiptsByCommodity(commodity,lists);
  console.log(result);
}

function findCommodityByBarcode(inputs) {
  var list = {}; 
  for(var i= 0, l = inputs.length; i< l; i++){ 
    var item = inputs[i]; 
    list[item] = (list[item] +1 ) || 1; 
  }
  return list; 
}

function findreceiptsByCommodity(commodity, lists){
  let result = '***<没钱赚商店>收据***\n';
  var total = 0;
  for(let key in lists){
    for(let i = 0;i < lists.length;i++){
      if(key == lists[i].barcode){
        result = result.concat('名称：' + lists[i].name + '，数量：'+ ItemList[key] + lists[i].unit + '，单价：' + lists[i].price.toFixed(2) +'(元)，小计：' +(lists[i].price * ItemList[key]).toFixed(2)+'(元)\n')
       total += lists[i].price * ItemList[key];
      }
    }
  }
  return result.concat('----------------------\n' + '总计：'+ total.toFixed(2) +'(元)\n' + '**********************');
}
