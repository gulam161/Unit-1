let obj = {
  sales: [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ],
  calculateSalesTotals() {
    let arr = [];
    for (let i = 0; i < this.sales.length; i++) {
      let percent = 0; 
      let new_obj = this.sales[i];
      if(new_obj.discount !==undefined){
        percent = new_obj.discount * new_obj.original;
        new_obj.sale = new_obj.original - percent;
        new_obj.total = new_obj.sale * new_obj.stock;
        arr[i]= new_obj;
      }else{
        new_obj.sale = new_obj.original;
        new_obj.total = new_obj.sale * new_obj.stock;
        arr[i]= new_obj;
      }
    }
    return arr;
  }
}
let res = obj.calculateSalesTotals();
console.log(res)