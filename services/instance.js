import axios from "axios";

export const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  timeout: 1000,
  headers: {
    "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "10",
    offset: "0",
  },
});
