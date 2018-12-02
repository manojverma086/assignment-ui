export class Shop {
    id: number;
    shop_name: string;
    shop_db: string;
    requests: number;

   constructor(shop_name, shop_db, requests) {
    this.shop_name = shop_name;
    this.shop_db = shop_db;
    this.requests = requests;
   }
}
