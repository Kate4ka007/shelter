class LocalStorageInfo {
  keyName: string;
  constructor() {
    this.keyName = 'product'
  }

  getProductList(): Array<number> {
    const productStoragelist = localStorage.getItem(this.keyName)
    if(productStoragelist !== null) {      
      return JSON.parse(productStoragelist) as Array<number>
    }
      return []    
  }

  setProductList(id: number) {
    let prdList = this.getProductList();   
    const ind = prdList.indexOf(id);
    let addProduct = false;

    if(ind === -1) {
      prdList.push((id))
      addProduct = true
    } else {
      prdList.slice(ind, 1)
    }    
    localStorage.setItem(this.keyName, JSON.stringify(prdList) )

    return { addProduct, prdList}
    }
  }
  const cartProductList = new LocalStorageInfo();

  export default {LocalStorageInfo, cartProductList}




