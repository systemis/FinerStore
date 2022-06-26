import { BaseAction } from "./base.action";
import { CardItem } from "../entities/";
import { AddProductCardDto } from "../dto/add-product-card.dto"

export class CartAction extends BaseAction {
  async getCard(): Promise<CardItem[]> {
    try {
      const rawData = this.storageProvider.getItem(this.cardKey);
      if (!rawData) {
        return [];
      }
      return JSON.parse(rawData);
    } catch {
      return [];
    }
  }

  async addProdutCard(
    addProductCardDto: AddProductCardDto
  ): Promise<boolean> {
    var cardData = await this.getCard();
    const existed = cardData.filter((item) => item.productId === addProductCardDto.productId).length > 0;
    if (!existed) {
      cardData.push(addProductCardDto);
      this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
      return true;
    }

    const newData = cardData.map((item) => {
      if (item.productId === addProductCardDto.productId) {
        return {
          ...item,
          quantity: item.quantity + addProductCardDto.quantity,
        }
      }
      return item;
    });
    console.log(newData, "add to exist produt");
    this.storageProvider.setItem(this.cardKey, JSON.stringify(newData));
    return true;
  }

  async deleteProductCard(
    productId: string
  ): Promise<boolean> {
    const cardData = (await this.getCard())?.filter(item => item.productId !== productId);
    this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
    return true;
  }
}