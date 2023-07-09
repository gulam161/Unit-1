// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let obj ={
  length: 5,
  width: 10,
  perimeter:function (){
  return ((this.length + this. width)*2)
  },
  rectangle:function(){
     return (this.length * this. width)
  }
}
 let areaOf_P = obj.perimeter()
let areaOf_R =  obj.rectangle()

console.log(areaOf_P);
console.log(areaOf_R);