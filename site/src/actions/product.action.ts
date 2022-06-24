import { BaseAction } from "./base.action";
import { Product } from "../entities/";

export class ProductAction extends BaseAction {
  async getProductList(): Promise<Product[] | undefined> {
    return this.networkProvider.request<Product[]>(
      `/get-products.php`, {
        method: "GET",
      }
    )
  }

  async getProductDetail(
    productId: string
  ): Promise<Product | undefined> {
    return this.networkProvider.request<Product>(
      `/get-product-id.php/?id=${productId}`, {
        method: "GET",
      }
    )
  }
}