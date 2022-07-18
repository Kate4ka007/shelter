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
    const prdList = this.getProductList();  
 
    const ind = prdList.indexOf(id);
    let addProduct = false;

    if(ind === -1) {
      if(prdList.length>19) {
        alert('Sorry, there are too many items in your cart!!!')
        return
      } 
      prdList.push((id))
      console.log(prdList)
      addProduct = true
    } else {
      
      prdList.splice(ind, 1)
      console.log(prdList)
    }     

    localStorage.setItem(this.keyName, JSON.stringify(prdList) )
    return { addProduct, prdList}
    }
  }
  const cartProductList = new LocalStorageInfo();

  export default  {cartProductList};
