# pos-web

##main
* 初始化：storeItems(items)
* items 初始化：
  * loadItems()
  * showItems(items)
* cartSum 初始化：
  * loadCart()
  * showCartSum(cart)
* add-btn 点击事件：
  * updateCart(item-id)
  * showCartSum(cart)
* cart-btn 点击事件：
  * jump(url)
* history-btn 点击事件：
  * jump(url)
 
##cart 
* cart 初始化： 
  * loadCart()
  * loadItems()
  * generateReceipt(cart, items)
  * showCart(receipt)
* count-input 输入事件：
  * updateCart(item-id, count)
  * generateReceipt(cart, items)
  * showCart(receipt)
* delete-btn 点击事件： 
  * updateCart(item-id)
  * storeCart(cart)
  * generateReceipt(cart, items)
  * showCart(receipt)
* checkout-btn 点击事件：
  * storeReceipt(receipt)
  * storeHistory(receipt)
  * clearCart()
  * jump()
  
##receipt
* receipt 初始化： 
  * loadReceipt()
  * showReceipt()
* print-btn 点击事件： 
  * loadReceipt()
  * printReceipt()
* back-to-main-btn 点击事件： 
  * clearReceipt()
 
##history 
* history 初始化： 
  * loadHistory(): 30 min
  * showHistory(): 60 min


##View
* showItems(items): 60 min
* showCartSum(cart): 30 min
* showCart(receipt): 60 min
* showReceipt(): 60 min 
* showHistory(): 60 min

##Data 
* storeItems(items): 20 min 
* loadItems(): 20 min 
* storeCart(cart): 20 min 
* loadCart(): 20 min 
* clearCart(): 10 min
* storeReceipt(receipt): 20 min 
* loadReceipt(): 20 min 
* clearReceipt(): 10 min
* storeHistory(receipt): 20 min 
* loadHistory(): 20 min 

##Logic
* jump(url): 5 min 
* generateReceipt(cart, items): 80 min
* updateCart(barcode): 30 min
* updateCart(barcode, count): 30 min


**Total -- 625 min (10.5 小时)**