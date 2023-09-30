import axios from "axios";
import { BASE_URL } from "../Base";

class Group {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}/product/group`,
    });
  }

  getAll(cb1, cb2) {
    this.instance.get().then(cb1).catch(cb2);
  }

  getByType(typeId, cb1, cb2) {
    this.instance
      .get("", {
        params: {
          type: typeId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }

  checkName(typeName, cb1, cb2) {
    this.instance
      .get("/check", { params: { field: "name", value: typeName } })
      .then(cb1)
      .catch(cb2);
  }

  create(groupName, typeId, cb1, cb2) {
    this.instance
      .post("", { id: 0, name: groupName, typeId: typeId })
      .then(cb1)
      .catch(cb2);
  }

  delete(groupId, cb1, cb2) {
    this.instance
      .delete("", {
        params: {
          id: groupId,
        },
      })
      .then(cb1)
      .catch(cb2);
  }
}

export default new Group();
