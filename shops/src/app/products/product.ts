export class Product {
    id: number;
    category: string;
    product: string;
    discount: number;
    price: number;

   constructor(category, product, discount, price) {
    this.category = category;
    this.product = product;
    this.discount = discount;
    this.price = price;
   }
}
