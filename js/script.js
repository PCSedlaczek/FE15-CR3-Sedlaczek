// Create 9 variables for each band prices (input manually)
var band1 = 140;
var band2 = 20;
var band3 = 249;
var band4 = 140;
var band5 = 20;
var band6 = 249;
var band7 = 140;
var band8 = 20;
var band9 = 249;

// Create function calculateInvoice()
  // Use variables as arguments passed to function calculateInvoice()
  // 3 parameters, price for 1 band from each stage
  // Calculate and return sum of 3 parameters
  // Print result of function in console
function calculateInvoice(price1, price2, price3) {
  let total = price1 + price2 + price3;
  return '$' + total;
}

// Calculate at least 3 invoices from combinations of different events and print to console
console.log('Regular invoice:')
console.log('1x each price: ' + calculateInvoice(band1, band5, band9));
console.log('3x lowest price: ' + calculateInvoice(band2, band5, band8));
console.log('3x highest price: ' + calculateInvoice(band3, band6, band9));
console.log('');

// Create function studentInvoice()
  // Apply 10% discount to final invoice
  // Use same parameters as calculateInvoice()
function studentInvoice(price1, price2, price3) {
  let regular = price1 + price2 + price3;
  let total = regular - (regular/100*10);
  return '$' + total.toFixed(2);
}

// Print 3 examples of studentInvoice() on console
console.log('Student invoice:')
console.log('1x each price: ' + studentInvoice(band1, band5, band9));
console.log('3x lowest price: ' + studentInvoice(band2, band5, band8));
console.log('3x highest price: ' + studentInvoice(band3, band6, band9));