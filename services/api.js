import { instance } from "./instance";

class Api {
  constructor() {
    this.api = instance(10);
    this.bilosta = instance(40);
  }

  async getTopCoins() {
    const res = await this.api.get("/coins");

    return res.data.data;
  }

  async getAllCoins() {
    const res = await this.bilosta.get("/coins");
    return res.data.data;
  }
}

const api = new Api();

export default Object.freeze(api);
