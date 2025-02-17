const bakeryData = {
    locations: {
        daejeon: {
            storeName: "성심당",
            address: "대전광역시 중구 대종로480번길",
            type: "본점",
            isMainBranch: true,
        },
        seoul: {
            storeName: "성심당 서울점",
            address: "서울특별시 종로구",
            type: "직영점",
            isMainBranch: false,
        },
    },
    selectedLocation: "daejeon",
    metadata: {
        shopName: "성심당",
        customerInfo: {
            name: "욱재",
            location: "서울",
        },
        visitDate: {
            year: "2025",
            month: "02",
            day: "06",
        },
        transportation: {
            type: "KTX",
            roundTripCost: 59600,
        },
        version: "1.0",
        lastUpdated: {
            year: "2025",
            month: "02",
            day: "06",
        },
    },
    products: [
        {
            id: "P001",
            name: "튀김소보로",
            price: 1800,
            category: "베이커리",
            isSignature: true,
            description: "성심당의 대표 제품",
        },
        {
            id: "P002",
            name: "부추빵",
            price: 2200,
            category: "베이커리",
            isSignature: false,
            description: "신선한 부추가 들어간 빵",
        },
        {
            id: "P003",
            name: "판타롱부추빵",
            price: 3500,
            category: "베이커리",
            isSignature: true,
            description: "대전 명물",
        },
    ],
    cart: [
        { productId: "P001", quantity: 5 },
        { productId: "P002", quantity: 3 },
        { productId: "P003", quantity: 2 },
    ],
    giftItems: ["P003"],
};

const helper = {
    sumArray: function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    findInArray: function (arr, conditionFn) {
        for (let i = 0; i < arr.length; i++) {
            if (conditionFn(arr[i])) {
                return arr[i];
            }
        }
        return null;
    },

    filterArray: function (arr, conditionFn) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (conditionFn(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    mapArray: function (arr, transformFn) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(transformFn(arr[i]));
        }
        return result;
    },

    isItemInArray: function (arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return true;
            }
        }
        return false;
    },
};
const bakeryModel = {
    calculateSubtotal: function (data) {
        let result = 0;
        for (let i = 0; i < data.cart.length; i++) {
            let cartItem = data.cart[i];
            let product = helper.findInArray(data.products, function (p) {
                return p.id === cartItem.productId;
            });
            result += product.price * cartItem.quantity;
        }
        return result;
    },

    calculateTotalWithTransportation: function (data) {
        let result = this.calculateSubtotal(data);
        result += data.metadata.transportation.roundTripCost;
        return result;
    },

    getGiftItems: function (data) {
        let result = [];
        for (let i = 0; i < data.products.length; i++) {
            let product = data.products[i];
            if (helper.isItemInArray(data.giftItems, product.id)) {
                result.push(product);
            }
        }
        return result;
    },

    getPersonalItems: function (data) {
        let result = [];
        for (let i = 0; i < data.products.length; i++) {
            let product = data.products[i];
            if (!helper.isItemInArray(data.giftItems, product.id)) {
                result.push(product);
            }
        }
        return result;
    },

    getPurchaseSummary: function (data) {
        let result = [];
        for (let i = 0; i < data.cart.length; i++) {
            let cartItem = data.cart[i];
            let product = helper.findInArray(data.products, function (p) {
                return p.id === cartItem.productId;
            });

            result.push({
                name: product.name,
                quantity: cartItem.quantity,
                totalPrice: product.price * cartItem.quantity,
                isGift: helper.isItemInArray(
                    data.giftItems,
                    cartItem.productId
                ),
            });
        }
        return result;
    },

    getStats: function (data) {
        // 총 아이템 수 계산
        let totalItems = 0;
        for (let i = 0; i < data.cart.length; i++) {
            totalItems += data.cart[i].quantity;
        }

        // 선물용 아이템 수 계산
        let giftQuantity = 0;
        for (let i = 0; i < data.cart.length; i++) {
            let cartItem = data.cart[i];
            if (helper.isItemInArray(data.giftItems, cartItem.productId)) {
                giftQuantity += cartItem.quantity;
            }
        }

        return {
            totalItems: totalItems,
            averagePricePerItem: this.calculateSubtotal(data) / totalItems,
            giftItemsRatio: giftQuantity / totalItems,
        };
    },
};

// 사용 예시
console.log(`장바구니 총액: ${bakeryModel.calculateSubtotal(bakeryData)}원`);
console.log(
    `총 비용 (교통비 포함): ${bakeryModel.calculateTotalWithTransportation(
        bakeryData
    )}원`
);
console.log("구매 요약:", bakeryModel.getPurchaseSummary(bakeryData));
console.log("통계:", bakeryModel.getStats(bakeryData));

const arrayLike = {
    tt: 3,
    unrelated: "foo",
    2: 4,
};
console.log(arrayLike);
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
Array.prototype.push(arrayLike, 1, 2);
console.log(arrayLike);
