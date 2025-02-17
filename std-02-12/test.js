const URL = `
    itemId=20948807680&vendorItemId=88014784872&sourceType=srp_product_ads&clickEventId=34692390-e8f2-11ef-a12c-265010fc3724&korePlacement=15&koreSubPlacement=1&clickEventId=34692390-e8f2-11ef-a12c-265010fc3724&korePlacement=15&koreSubPlacement=1&q=%ED%81%90%EB%B8%8C&itemsCount=31&searchId=caf0337f2938854&rank=0&searchRank=0`;

const qs = require("querystring");
const test = qs.parse(URL);
console.log(test);
