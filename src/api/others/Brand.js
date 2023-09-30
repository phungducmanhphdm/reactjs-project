import axios from "axios";
import { BASE_URL } from "../Base";

class Brand {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/brand`,
    });
  }

  getAll(cb1, cb2) {
    this.instance.get().then(cb1).catch(cb2);
  }

  getByNation(nationId, cb1, cb2) {
    this.instance
      .get("", {
        params: {
          nation: nationId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }

  checkName(name, cb1, cb2) {
    this.instance
      .get("/check", { params: { field: "name", value: name } })
      .then(cb1)
      .catch(cb2);
  }

  create(name, nationId, cb1, cb2) {
    this.instance
      .post("", {
        id: 0,
        name: name,
        description: "",
        avatar: "",
        nationId: nationId,
      })
      .then(cb1)
      .catch(cb2);
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

export default new Brand();