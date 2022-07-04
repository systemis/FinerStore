import { BaseAction } from "./base.action";
import { Response } from "../entities/";
import { AddResponseDto } from "../dto/add-response.dto";

export class ResponseAction extends BaseAction {
  async submitResponse(
    addResponseDto: AddResponseDto
  ): Promise<Response | undefined> {
    return this.networkProvider.request<Response>(
      `/add-response.php`, {
      method: "POST",
      body: addResponseDto,
    });
  }
}