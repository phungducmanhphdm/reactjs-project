import axios from "axios";
import { BASE_URL } from "../Base";

class Type {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/product/type`,
    });
  }

  getAll(cb1, cb2) {
    this.instance.get().then(cb1).catch(cb2);
  }

  checkName(typeName, cb1, cb2) {
    this.instance
      .get("/check", { params: { field: "name", value: typeName } })
      .then(cb1)
      .catch(cb2);
  }

  create(typeName, cb1, cb2) {
    this.instance.post("", { id: 0, name: typeName }).then(cb1).catch(cb2);
  }

  delete(typeId, cb1, cb2) {
    this.instance
      .delete("", {
        params: {
          id: typeId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }
}

export default new Type();
