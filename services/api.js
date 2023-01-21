import { instance } from "./instance";

class Api {
  constructor() {
    this.coins = instance();
  }

  async getTopCoins() {
    const res = await this.coins.get("/coins", {
      params: {
        limit: 10,
      },
    });

    return res.data.data;
  }

  async getAllCoins() {
    const res = await this.coins.get("/coins", {
      params: {
        limit: 40,
      },
    });
    return res.data.data;
  }

  async getSearchCoins(searchText) {
    const res = await this.coins.get("/coins", {
      params: {
        limit: 10,
        search: searchText,
      },
    });
    return res.data.data;
  }
}

const api = new Api();

export default Object.freeze(api);
