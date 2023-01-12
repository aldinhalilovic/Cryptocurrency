import { instance } from "./instance";

class Api {
  constructor() {
    this.api = instance;
  }

  async getTopCoins() {
    const res = await this.api.get("/coins");

    return res.data.data;
  }

  async getAllCoins() {
    const res = await this.api.get();
    return res.data.data;
  }
}

const api = new Api();

export default Object.freeze(api);
