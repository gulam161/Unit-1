function newPriceOf(textbooks, pens, pencils, erasers) {
  let total = textbooks * 2 + pens * 4 + pencils * 3 + erasers;
  if (total > 200) {
    console.log('He is eligible for a discount')
  } else {
    console.log('He is not eligible for a discount');
  }
}
newPriceOf(50, 20, 15, 15);
newPriceOf(40, 15, 15, 10);
