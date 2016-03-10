/**
 * Created by nancymi on 16/3/9.
 */
function storeItems(items) {
    var itemsJson = objectToJson(items);
    storeToWindow("items", itemsJson);
}

function loadItems() {
    var itemsJson = loadFromWindow("items");
    var items = jsonToObject(itemsJson) || [];

    return items;
}

function storePromotions(promotions) {
    var promotionsJson = objectToJson(promotions);
    storeToWindow("promotions", promotionsJson);
}

function loadPromotions() {
    var promotionsJson = loadFromWindow("promotions");
    var promotions = jsonToObject(promotionsJson) || [];

    return promotions;
}

function storeCart(cart) {
    var cartJson = objectToJson(cart);
    storeToWindow("cart", cartJson);
}

function loadCart() {
    var cartJson = loadFromWindow("cart");
    var cart = jsonToObject(cartJson) || [];

    return cart;
}

function clearCart() {
    clearInWindow("cart");
}

function storeReceipt(receipt) {
    var receiptJson = objectToJson(receipt);
    storeToWindow("receipt", receiptJson);
}

function loadReceipt() {
    var receiptJson = loadFromWindow("receipt");
    var receipt = jsonToObject(receiptJson);

    return receipt;
}

function clearReceipt() {
    clearInWindow("receipt");
}

function storeHistory(timestamp, receipt) {

    var historyJson = loadFromWindow("history");
    var history = jsonToObject(historyJson) || [];

    history.push({
        timestamp: timestamp,
        receipt: receipt
    });
    storeToWindow("history", objectToJson(history));
}

function loadHistory() {
    var historyJson = loadFromWindow("history");
    var history = jsonToObject(historyJson) || [];

    return history;
}

function clearHistory() {
    clearInWindow("history");
}

function storeToWindow(key, value) {
    window.localStorage.setItem(key, value);
}

function loadFromWindow(key) {
    var value = window.localStorage.getItem(key);
    return value;
}

function clearInWindow(key) {
    window.localStorage.removeItem(key);
}

function jsonToObject(jsonStr) {
    var obj = JSON.parse(jsonStr);
    return obj;
}

function objectToJson(obj) {
    var jsonStr = JSON.stringify(obj);
    return jsonStr;
}