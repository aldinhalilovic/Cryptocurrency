import { useContext } from "react";
import { CoinContext } from "../store/CoinContext";
import { instance } from "./instance";

class Api {
  constructor() {
    this.api = instance(10);
    this.bilosta = instance(40);
    this.searchItems = instance(10);
  }

  async getTopCoins() {
    const res = await this.api.get("/coins");

    return res.data.data;
  }

  async getAllCoins() {
    const res = await this.bilosta.get("/coins");
    return res.data.data;
  }

  async getSearchCoins(searchText) {
    const res = await this.searchItems.get("/coins", {
      params: {
        search: searchText,
      },
    });
    return res.data.data;
  }
}

const api = new Api("bit");

export default Object.freeze(api);
