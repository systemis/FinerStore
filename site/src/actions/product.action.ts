import { BaseAction } from "./base.action";
import { Product } from "../entities/";
import { AddProductDto } from "../dto/add-product.dto";
import { EditProductDto } from "../dto/edit-product.dto";

export class ProductAction extends BaseAction {
  async getProductList(): Promise<Product[] | undefined> {
    const produts = await this.networkProvider.request<Product[]>(
      `/get-products.php`, {
      method: "GET",
    });

    return produts?.filter(product => product.name); 
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

  async addProduct(
    addProdutDto: AddProductDto
  ): Promise<Product | undefined> {
    return this.networkProvider.request<Product>(
      `/add-product.php`, {
      method: "POST",
      body: addProdutDto,
    });
  }

  async editProduct(
    editProductDto: EditProductDto
  ): Promise<Product | undefined> {
    return this.networkProvider.request<Product>(
      `/update-product.php`, {
        method: "POST",
        body: editProductDto,
      }
    );
  }
}