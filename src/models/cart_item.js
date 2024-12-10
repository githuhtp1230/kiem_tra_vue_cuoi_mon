import { Product } from "./product";

export class CartItem {
  constructor(product) {
    this.product = product;
    this.quantity = 1;
  }

  totalPrice = () => {
    this.product.price * this.quantity;
  };
}
