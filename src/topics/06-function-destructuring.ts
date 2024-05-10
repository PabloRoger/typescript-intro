export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad air",
  price: 250.0,
};

export interface TaxCalculationOption {
  products: Product[];
  tax: number;
}

// function taxCalculation({ products, tax }: TaxCalculationOption): [number, number] {
function taxCalculation(options: TaxCalculationOption): [number, number] {
  const { products, tax } = options;
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const tax = 0.15;
const shoppingCart = [phone, tablet];

const [total, taxResult] = taxCalculation({
  products: shoppingCart,
  tax,
});

// console.log(`Total: ${total} euros`);
// console.log(`Tax: ${taxResult} euros`);

export {taxCalculation, tax};
