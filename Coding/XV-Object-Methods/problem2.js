// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`

// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let Name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let Price = [60, 50, 20];

let arr = [];
for (let i = 0; i < Name.length; i++) {
  let obj = {};
  obj["name"] = Name[i];
  obj["quantity"] = quantity[i];
  obj["Price"] = Price[i];

  arr.push(obj)
}
// console.log(arr)

let obj = {
  data: arr,
  total: function() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].Price * arr[i].quantity
    }
    console.log(sum)
  }
}
obj.total()