import { BaseAction } from "./base.action";
import { User } from "../entities/";


export class UserAction extends BaseAction {
  async getProfile(): Promise<User | undefined> {
    const userId = this.storageProvider.getItem(this.authKey);
    if (!userId) return undefined;
    return this.networkProvider.request<User>(
      `/get-profile.php?user_id=${userId}`, {
        method: "GET",
      }
    )
  }
}