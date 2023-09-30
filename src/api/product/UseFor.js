import axios from "axios";
import { BASE_URL } from "../Base";

class UseFor {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/product/usefor`,
    });
  }

  getAll(cb1, cb2) {
    this.instance.get().then(cb1).catch(cb2);
  }

  checkName(name, cb1, cb2) {
    this.instance
      .get("/check", { params: { field: "name", value: name } })
      .then(cb1)
      .catch(cb2);
  }

  create(name, cb1, cb2) {
    this.instance.post("", { id: 0, name: name }).then(cb1).catch(cb2);
  }

  delete(categoryId, cb1, cb2) {
    this.instance
      .delete("", {
        params: {
          id: categoryId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }
}

export default new UseFor();
