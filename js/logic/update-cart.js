/**
 * Created by nancymi on 16/3/9.
 */

function updateCart(barcode, count) {

    var cart = loadCart();

    if (count === undefined) {

        var cartLength = cart.length;
        for (var i = 0; i < cartLength; i ++) {
            if (barcode === cart[i].barcode) {
                cart.splice(i, 1);
                break;
            }
        }

        if (cartLength === cart.length) {
            cart.push({ barcode: barcode, count: 1 });
        }
    } else {
        for (var i = 0; i < cart.length; i ++) {
            if (barcode === cart[i].barcode) {
                cart[i] = { barcode: barcode, count: count };
                break;
            }
        }
    }

    storeCart(cart);
}