import { StorageProvider } from "../provider/storage.provider";
import { NetworkProvider } from "../provider/request";
import { RegistryProvider } from "../provider/registry.provider";

export class BaseAction {
  protected readonly authKey: string = "AUTHENTICATED";

  protected readonly userKey: string = "USER_INFO";

  protected readonly storageProvider: StorageProvider;

  protected readonly networkProvider: NetworkProvider;

  constructor() {
    const registerProviderInstance = RegistryProvider.getInstance();
    
    if (typeof window === 'object') {
      registerProviderInstance.storage = window.localStorage;
    } 

    this.storageProvider = new StorageProvider(registerProviderInstance.storage);
    this.networkProvider = new NetworkProvider();
  }
}