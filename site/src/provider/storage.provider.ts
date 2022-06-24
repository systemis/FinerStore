export class StorageProvider {
  private storageInstance: Storage; 

  private prefix: string = "finner-app";

  constructor(storage: Storage) {
    this.storageInstance = storage;
  }

  setItem(
    key: string, 
    data: string
  ): void {
    this.storageInstance.setItem(this.prefix+key, data)
  }

  getItem(
    key: string
  ): string | null {
    return this.storageInstance.getItem(this.prefix+key);
  }

  deleteItem(
    key: string
  ): void {
    this.storageInstance.deleteItem(this.prefix+key);
  }
}