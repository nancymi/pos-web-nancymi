/**
 * Created by nancymi on 16/3/9.
 */
describe('when call generateReceipt() then will generate receipt message', function() {

    it('calculateNormalPrice(item, count)', function() {
        var item = { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00 };
        var count = 3;
        expect(calculateNormalPrice(item, count)).toEqual(9.00);
    });

    it('calculatePromoPrice(item, count, loadPromotions)', function() {
        var item = { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00 };
        var count = 3;

        storePromotions(loadAllPromotions());
        expect(calculatePromoPrice(item, count, loadPromotions)).toEqual(6.00);
    });

    it('buyTwoGetOneFree(item, count)', function() {
        var item = { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00 };
        var count = 3;

        expect(promoBuyTwoGetOneFree(item, count)).toEqual(6.00);
    });

    it('generateReceipt(cart, items)', function() {
        var receipt = {
            cartItems: [
                {
                    item: { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00 },
                    count: 3,
                    normalPrice: 9.00,
                    promoPrice: 6.00
                }
            ],
            totalNormalPrice: 9.00,
            totalPromoPrice: 6.00
        };

        expect(generateReceipt([{barcode: 'ITEM000000', count: 3}], loadItems())).toEqual(receipt);
    });
});