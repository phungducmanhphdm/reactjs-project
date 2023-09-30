import axios from "axios";
import { BASE_URL } from "../Base";

class Category {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/product/category`,
    });
  }

  getAll(cb1, cb2) {
    this.instance.get().then(cb1).catch(cb2);
  }

  getByGroup(groupId, cb1, cb2) {
    this.instance
      .get("", {
        params: {
          group: groupId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }

  checkName(categoryName, cb1, cb2) {
    this.instance
      .get("/check", { params: { field: "name", value: categoryName } })
      .then(cb1)
      .catch(cb2);
  }

  create(categoryName, groupId, cb1, cb2) {
    this.instance
      .post("", { id: 0, name: categoryName, groupId: groupId })
      .then(cb1)
      .catch(cb2);
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

export default new Category();
