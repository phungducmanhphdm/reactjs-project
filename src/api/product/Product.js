import axios from "axios";
import { BASE_URL } from "../Base";

class Product {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/product`,
      transformResponse: [
        (data) => {
          return data;
        },
      ],
    });
  }

  getAll(callBack1, callBack2) {
    this.instance.get().then(callBack1).catch(callBack2);
  }

  create(data, callBack1, callBack2) {
    this.instance.post("", data).then(callBack1).catch(callBack2);
  }

  updateDetails(productId, data, callBack1, callBack2) {
    this.instance
      .put("/details", data, {
        params: {
          product: productId,
        },
      })
      .then(callBack1)
      .catch(callBack2);
  }
}

export default new Product();
