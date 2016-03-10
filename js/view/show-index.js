/**
 * Created by nancymi on 16/3/8.
 */
$(document).ready(function() {
    initData();
});

$("#items").ready(function() {
    var items = loadItems();
    showItems(items);

    var addButtons = document.getElementsByClassName('add-button');
    for (var i = 0; i < addButtons.length; i ++) {
        var barcode = $(addButtons[i]).attr('data-barcode');
        updateButtonStyle(addButtons[i], barcode);
    }

    $(".add-button").click(function() {
        var barcode = $(this).attr('data-barcode');
        updateCart(barcode);
        showCartSum(loadCart());
        updateButtonStyle(this, barcode);
    });

    $("#cart-button").click(function() {
        jump(document, 'cart.html');
    });

    $("#history-button").click(function() {
        jump(document, 'history.html');
    });
});

$("#cart-sum").ready(function() {
    var cart = loadCart();
    showCartSum(cart);
});

function updateButtonStyle(button, barcode) {
    var cartJson = objectToJson(loadCart());
    if (cartJson.indexOf(barcode) > -1) {
        button.className = 'add-button button button-glow button-border button-raised button-circle button-primary';
    } else {
        button.className = 'add-button button button-glow button-border button-rounded button-circle button-primary';
    }
}

function initData() {
    $.getJSON("../js/data/items.json", function(data) {
        storeItems(data);
    });

    $.getJSON("../js/data/promotions.json", function(data) {
        storePromotions(data);
    });
}

function showItems(items) {
    var itemsHtml = '<tr><td><h3>名称</h3></td><td><h3>单价</h3></td><td><h3>促销活动</h3></td><td><h3>添加</h3></td></tr>';
    items.forEach(function(item) {
        itemsHtml += generateItemHtml(item);
    });
    $("#items").html(itemsHtml);
}

function generateItemHtml(item) {

    var promotions = loadPromotions();
    var promotion = '';
    for (var i = 0; i < promotions.length; i ++) {
        for (var j = 0; j < promotions[i].barcodes.length; j ++) {
            if (promotions[i].barcodes[j].barcode === item.barcode) {
                promotion = promotions[i].describe;
                break;
            }
        }
    }

    var itemHtml = '<tr class="item"><td><h4>' + item.name + '</h4></td><td><h4>' + item.price.toFixed(2) + ' 元/' + item.unit + '</h4></td>' +
        '<td><h4>' + promotion + '</h4></td><td>'+
        '<a class="add-button button button-glow button-border button-rounded button-circle button-primary" data-barcode="' + item.barcode + '">' +
        '<i class="fa fa-hand-lizard-o"></i>' +
        '</a>'+
        '</td></tr>';

    return itemHtml;
}

function showCartSum(cart) {
    $("#cart-sum").html(cart.length);
}
