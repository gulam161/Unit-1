function unitsConsumed(n) {
    n =n-80
   let unit = 0
   if(n<=150){
       unit = n/3
   }else if(n<=650){
       unit = 50+(n-150)/5
   }else{
       unit = 150+(n-650)/10
   }
   console.log(unit)
}


unitsConsumed(930)