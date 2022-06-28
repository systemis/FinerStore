import { BaseAction } from "./base.action";
import { ProductAction } from "./product.action";
import { UserAction } from "./user.action";
import { CardItem, Product, Order, OrderInfoDetail, CartItem, OrderRow } from "../entities/";
import { AddProductCardDto } from "../dto/add-product-card.dto"
import { SubmitOrderDto } from "../dto/submit-order.dto";

export class CartAction extends BaseAction {
  private readonly productAction: ProductAction; 

  private readonly userAction: UserAction;

  constructor() {
    super();
    this.productAction = new ProductAction();
    this.userAction = new UserAction();
  }

  async deleteCart(): Promise<boolean> {
    this.storageProvider.deleteItem(this.cardKey);
    return true;
  }

  async getCardInfo(): Promise<CartItem[]> {
    const card = await this.getCard();
    const ids = card.map((item) => item.productId);
    const quantities = card.map((item) => item.quantity);
    const product: Product[] = await Promise.all(ids.map(async (id) => {
      const product = await this.productAction.getProductDetail(id);
      return product;
    }));

    return product?.map((item, index) => ({
      product: item, 
      quantity: quantities[index],
    }))
  }

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

  async changeProductQuantity(
    productId: string,
    amount: number
  ): Promise<boolean> {
    const cardData = (await this.getCard())?.map(item => {
      if (
        item.productId === productId && 
        item.quantity + amount > 0
      ) {
        return { ...item, quantity: item.quantity + amount }
      }
      
      return item; 
    });
    console.log(cardData);
    this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
    return true;
  }

  async submitCard(
    submitOrderDto : SubmitOrderDto, 
  ): Promise<Order> {
    const cart = await this.getCard();
    const products = cart.map((item) => item.productId);
    const quantities = cart.map((item) => item.quantity);
    return this.networkProvider.request<Order>(
      "/add-order.php", 
      {
        method: "POST",
        body: {
          ...submitOrderDto,
          products, 
          quantities, 
        }
      }
    );
  }

  async getOrder(
    orderId: string,
  ): Promise<OrderInfoDetail> {
    const order = await this.networkProvider.request<Order>(
      `/get-order-id.php?id=${orderId}`,
      {
        method: "GET",
      }
    );

    const ids = order?.productIds || [];
    const quantities = order?.quantities || [];
    const product: Product[] = await Promise.all(ids?.map(async (id) => {
      const product = await this.productAction.getProductDetail(id);
      return product;
    }));

    const details = product?.map((item, index) => ({
      product: item, 
      quantity: quantities[index],
    }));

    const user = await this.userAction.getUser(order.userId);

    return {
      info: order, 
      details, 
      user,
    };
  }

  async getOrderList(): Promise<OrderRow[]> {
    const orders =( await this.networkProvider.request<Order[]>(
      `/get-orders.php`,
      {
        method: "GET",
      }
    ))?.filter(order => order.address);

    return await Promise.all(orders?.map(async (order) => {
      console.log(order);
      const user = await this.userAction.getUser(order.userId);

      let totalPrice = 0; 
      await Promise.all((order?.productIds || [])?.map(async (id, index) => {
        const product = await this.productAction.getProductDetail(id);
        totalPrice += order.quantities[index]*product?.price;
      }));

      
      return {
        phoneNumber: order.phoneNumber,
        address: order.address, 
        _id: order._id.$oid,
        user: user, 
        totalPrice, 
        date: order.date, 
      };
    }))
  }
}