/**
 * Created by nancymi on 16/3/9.
 */
describe('when add or delete or change cart content then update cart', function() {
    it('when add item then cart add this item', function() {
        clearCart();
        var barcode = 'ITEM000000';
        updateCart(barcode);
        expect(loadCart()).toEqual([{ barcode: barcode, count: 1 }]);
    });

    it('when delete item then cart delete this item', function() {
        storeCart([{ barcode: 'ITEM000000', count:1 }]);
        updateCart('ITEM000000');
        expect(loadCart()).toEqual([]);
    });

    it('when change item\'s count then cart update its count', function() {
        storeCart([{ barcode: 'ITEM000000', count:1 }]);
        updateCart('ITEM000000', 5);
        expect(loadCart()).toEqual([{ barcode: 'ITEM000000', count: 5 }]);
    });
});