import {Product, tax, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100.0
  },
  {
    description: 'iPad',
    price: 150.0
  }
];


const [ total, taxTotal ] = taxCalculation({
  products: shoppingCart,
  tax: tax
});

console.log(`Total: ${total} euros`);
console.log(`Tax: ${taxTotal} euros`);