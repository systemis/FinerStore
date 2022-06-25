import { BaseAction } from "./base.action";
import { LoginDto } from "../dto/login.dto";
import { SignUpDto } from "../dto/sign-up.dto";
import { LoginResponse, SignUpResponse } from "../dto/entities";


export class AuthAction extends BaseAction {
  async login(loginDto: LoginDto): Promise<LoginResponse | undefined> {
    const loginResponse = await this.networkProvider.request<LoginResponse>(
      `/login.php`, {
        method: "POST",
        body: loginDto
      }
    );

    if (!loginResponse?._id) {
      return undefined; 
    }

    this.storageProvider.setItem(this.authKey, loginResponse?._id.$oid);
    this.storageProvider.setItem(this.userKey, JSON.stringify(loginResponse));
    return loginResponse;
  }

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponse | undefined> {
    const signUpResponse = await this.networkProvider.request<SignUpResponse>(
      `/sign-up.php`, {
        method: "POST",
        body: signUpDto,
      }
    ); 

    if (!signUpResponse?._id) {
      return undefined;
    }

    this.storageProvider.setItem(this.authKey, signUpResponse?._id.$oid);
    this.storageProvider.setItem(this.userKey, JSON.stringify(signUpResponse));
    return signUpResponse; 
  }

  logout(): void {
    this.storageProvider.deleteItem(this.authKey);
    this.storageProvider.deleteItem(this.userKey);
    window.location.href = "/login";
  }
}