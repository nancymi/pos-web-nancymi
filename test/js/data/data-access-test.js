/**
 * Created by nancymi on 16/3/9.
 */
describe('data access -- load, store and clear', function() {

    var timestamp = 1457533617329;

    var receipt = {
        cartInfo: [{
            item: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
            },
            count: 3,
            normalPrice: 9.00,
            promoPrice: 6.00
        }],
        totalNormalPrice: 9.00,
        totalPromoPrice: 6.00
    };

    it('when call storeItems() then window.localStorage.items = [{item}]', function() {
        var items = loadAllItems();
        storeItems(items);

        expect(objectToJson(items)).toEqual(window.localStorage.getItem("items"));
    });

    it('when call loadItems() then return items', function() {
        var items = loadItems();

        expect(loadAllItems()).toEqual(items);
    });

    it('when call storeCart() then window.localStorage.cart = [{barcode, count}]', function() {
        var cart = [{barcode: 'ITEM000000', count: 9}, {barcode: 'ITEM000001', count: 6}];
        storeCart(cart);

        expect(objectToJson(cart)).toEqual(window.localStorage.getItem("cart"));
    });

    it('when call loadCart() then return cart', function() {
        var cart = loadCart();
        expect(cart).toEqual([{barcode: 'ITEM000000', count: 9}, {barcode: 'ITEM000001', count: 6}]);
    });

    it('when call clearCart() then window.localStorage.cart is gone', function() {
        clearCart();
        expect(window.localStorage.getItem("cart")).toBeNull();
    });

    it('when call storeReceipt() then window.localStorage.receipt = {cartInfo, totalNormalPrice, totalPromoPrice}', function() {
        storeReceipt(receipt);
        expect(window.localStorage.getItem("receipt")).toEqual(objectToJson(receipt));
    });

    it('when call loadReceipt() then return receipt', function() {
        expect(loadReceipt()).toEqual({
            cartInfo: [{
                item: {
                    barcode: 'ITEM000000',
                    name: '可口可乐',
                    unit: '瓶',
                    price: 3.00
                },
                count: 3,
                normalPrice: 9.00,
                promoPrice: 6.00
            }],
            totalNormalPrice: 9.00,
            totalPromoPrice: 6.00
        });
    });

    it('when call clearReceipt() then window.localStorage.receipt is gone', function() {
        clearReceipt();
        expect(window.localStorage.getItem("receipt")).toBeNull();
    });

    it('when call storeHistory() then add new receipt into history', function() {

        storeHistory(timestamp, receipt);
        expect(jsonToObject(window.localStorage.getItem("history"))[0]).toEqual({timestamp: timestamp, receipt: receipt});
    });

    it('when call loadHistory() then return history', function() {

        storeHistory(timestamp, receipt);
        expect(loadHistory()[0]).toEqual({timestamp: timestamp, receipt: receipt});
    });

    it('when call clearHistory() then window.localStorage.history is gone', function() {
        clearHistory();
        expect(window.localStorage.getItem("history")).toBeNull();
    });

});