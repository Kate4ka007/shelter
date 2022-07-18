class LocalStorageInfo {
  keyName: string;

  constructor() {
    this.keyName = 'product'
  }

  getProductList(): Array<number> {
    const productStoragelist = localStorage.getItem(this.keyName)
    if (productStoragelist !== null) {
      return JSON.parse(productStoragelist) as Array<number>
    }
    return []
  }

  setProductList(id: number) {
    const prdList = this.getProductList();

    const ind = prdList.indexOf(id);
    let addProduct = false;

    if (ind === -1) {
      if (prdList.length > 19) {
        const manyItems = document.createElement('div');
        manyItems.className = 'cart-alert';
        manyItems.innerHTML = `<div class="alert alert-danger" role="alert">
                                  'Sorry, there are too many items in your cart!!!'
                               </div>`
        document.querySelector('.main').appendChild(manyItems)
        setTimeout(() => {
          manyItems.remove()
        }, 5000);
        return;
      }
      prdList.push((id))
      addProduct = true
    } else {
      prdList.splice(ind, 1)
    }

    localStorage.setItem(this.keyName, JSON.stringify(prdList))
    return { addProduct, prdList }
  }
}
const cartProductList = new LocalStorageInfo();

export default { cartProductList };
