import styles from "./styles.module.scss";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { TextBox, SelectBox, WaittingLabel } from "@components";
import { Button, Col, Row } from "react-bootstrap";
import {
  Type,
  Group,
  Category,
  Brand,
  Nation,
  Product,
  DosageForm,
} from "@api";

function ProductAddPage() {
  const [checkValid, setCheckValid] = useState();
  const [disabled, setDisabled] = useState(false);
  const [sending, setSending] = useState(false);

  const [productName, setProductName] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [typeId, setTypeId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [groupId, setGroupId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [categoryId, setCategoryId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [nationId, setNationId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [brandId, setBrandId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [dosageFormId, setDosageFormId] = useState({
    value: "",
    valid: { status: false, message: "" },
  });

  const [total, setTotal] = useState({
    value: 0,
    valid: { status: true, message: "" },
  });
  const [solid, setSolid] = useState({
    value: 0,
    valid: { status: true, message: "" },
  });
  const [description, setDescription] = useState({
    value: "",
    valid: { status: false, message: "" },
  });
  const [uses, setUses] = useState({
    value: "",
    valid: { status: true, message: "" },
  });
  const [userManual, setUserManual] = useState({
    value: "",
    valid: { status: true, message: "" },
  });
  const [sideEffects, setSideEffects] = useState({
    value: "",
    valid: { status: true, message: "" },
  });
  const [storage, setStorage] = useState({
    value: "",
    valid: { status: true, message: "" },
  });
  const [note, setNote] = useState({
    value: "",
    valid: { status: true, message: "" },
  });

  const checkValidAllField = () => {
    return (
      productName.valid.status &&
      categoryId.valid.status &&
      brandId.valid.status &&
      total.valid.status &&
      solid.valid.status &&
      dosageFormId.valid.status
    );
  };

  const sendData = () => {
    if (!checkValidAllField()) {
      setCheckValid(true);
      return;
    }

    setSending(true);

    const _data = {
      id: 0,
      name: productName.value,
      description: description.value,
      uses: uses.value,
      userManual: userManual.value,
      sideEffects: sideEffects.value,
      storage: storage.value,
      note: note.value,
      totalNumber: total.value,
      soldNumber: solid.value,
      categoryId: categoryId.value,
      brandId: brandId.value,
      dosageFormId: dosageFormId.value,
    };

    Product.create(
      _data,
      (res) => {
        console.log(res);
        setSending(false);
      },
      (err) => {
        console.log(err);
        setSending(false);
      }
    );

    return;
  };

  const handleValid = useCallback((e) => {
    const target = e.target;
    const value = target.value;

    if (target.type === "number") {
      if (value < 0 || value == "") {
        return {
          status: false,
          message: "Must be a positive number",
        };
      }
    }

    if (!value)
      return {
        status: false,
        message: "This field cannot be left blank.",
      };

    return {
      status: true,
      message: "",
    };
  }, []);

  const handleValidNo = useCallback((e) => {
    return {
      status: true,
      message: "",
    };
  });

  const [typeList, setTypeList] = useState({ status: 0, data: [] });
  const [groupList, setGroupList] = useState({ status: 0, data: [] });
  const [categoryList, setCategoryList] = useState({ status: 0, data: [] });
  const [nationList, setNationList] = useState({ status: 0, data: [] });
  const [brandList, setBrandList] = useState({ status: 0, data: [] });
  const [dosageFormList, setDosageFormList] = useState({ status: 0, data: [] });

  useEffect(() => {
    Type.getAll(
      (res) => {
        const _data = res.data.map((item) => ({
          value: item.id,
          name: item.name,
        }));
        setTypeList({
          status: 1,
          data: _data,
        });
      },
      (err) => {
        alert("Load data failed, please reload page!");
      }
    );
    Nation.getAll(
      (res) => {
        const _data = res.data.map((item) => ({
          value: item.id,
          name: item.name,
        }));
        setNationList({
          status: 1,
          data: _data,
        });
      },
      (err) => {
        alert("Load data failed, please reload page!");
      }
    );
    DosageForm.getAll(
      (res) => {
        const _data = res.data.map((item) => ({
          value: item.id,
          name: item.name,
        }));
        setDosageFormList({
          status: 1,
          data: _data,
        });
      },
      (err) => {
        alert("Load data failed, please reload page!");
      }
    );
  }, []);

  useEffect(() => {
    if (typeId?.value) {
      setGroupList({ status: -1, data: [] });
      const _typeId = typeId.value;
      Group.getByType(
        _typeId,
        (res) => {
          const _data = res.data.map((item) => ({
            value: item.id,
            name: item.name,
          }));
          setGroupList({
            status: 1,
            data: _data,
          });
        },
        (err) => {
          setGroupList({
            status: 1,
            data: [],
          });
        }
      );
    } else {
      setGroupList({ status: 0, data: [] });
    }
  }, [typeId]);

  useEffect(() => {
    if (typeId?.value) {
      setCategoryList({ status: -1, data: [] });
      const _groupId = groupId.value;
      Category.getByGroup(
        _groupId,
        (res) => {
          const _data = res.data.map((item) => ({
            value: item.id,
            name: item.name,
          }));
          setCategoryList({
            status: 1,
            data: _data,
          });
        },
        (err) => {
          setCategoryList({
            status: 1,
            data: [],
          });
        }
      );
    } else {
      setGroupList({ status: 0, data: [] });
    }
  }, [groupId]);

  useEffect(() => {
    if (nationId?.value) {
      setBrandList({ status: -1, data: [] });
      const _nationId = nationId.value;
      Brand.getByNation(
        _nationId,
        (res) => {
          const _data = res.data.map((item) => ({
            value: item.id,
            name: item.name,
          }));
          setBrandList({
            status: 1,
            data: _data,
          });
        },
        (err) => {
          setBrandList({
            status: 1,
            data: [],
          });
        }
      );
    } else {
      setBrandList({ status: 0, data: [] });
    }
  }, [nationId]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.textbox}>
          <TextBox
            label="Product name"
            placeholder="Enter product name"
            loadding={false}
            defaultValue=""
            id="productName"
            handleValid={(e) => {
              const value = e.target.value;
              if (!value)
                return {
                  status: false,
                  message: "This field cannot be left blank.",
                };

              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setProductName({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <Row>
          <Col sm={12} md={4}>
            <div className={styles.selectbox}>
              <SelectBox
                label="Type"
                loadding={false}
                value=""
                id="typeId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setTypeId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[{ name: "Select type", value: "" }, ...typeList.data]}
                disabled={
                  sending === true ||
                  groupList.status === -1 ||
                  categoryList.status === -1
                }
                loading={typeList.status === 0}
              />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={styles.selectbox}>
              <SelectBox
                label="Group"
                loadding={false}
                value=""
                id="groupId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setGroupId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[{ name: "Select group", value: "" }, ...groupList.data]}
                disabled={sending === true || categoryList.status === -1}
                loading={groupList.status == -1}
              />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={styles.selectbox}>
              <SelectBox
                label="Category"
                loadding={false}
                value=""
                id="categoryId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setCategoryId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[
                  { name: "Select category", value: "" },
                  ...categoryList.data,
                ]}
                disabled={sending === true}
                loading={categoryList.status === -1}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.selectbox}>
              <SelectBox
                label="Nation"
                loadding={false}
                value=""
                id="nationId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setNationId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[
                  { name: "Select nation", value: "" },
                  ...nationList.data,
                ]}
                disabled={sending === true || brandList.status === -1}
                loading={nationList.status === 0}
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.selectbox}>
              <SelectBox
                label="Brand"
                loadding={false}
                value=""
                id="brandId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setBrandId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[{ name: "Select brand", value: "" }, ...brandList.data]}
                disabled={sending === true}
                loading={brandList.status === -1}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.selectbox}>
              <TextBox
                type="number"
                label="Total"
                placeholder="Total"
                loadding={false}
                defaultValue={0}
                id="totalNumber"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (value < 0)
                    return {
                      status: false,
                      message: "need >= 0.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setTotal({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                disabled={sending === true}
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.selectbox}>
              <TextBox
                type="number"
                label="Solid"
                placeholder="Solid"
                loadding={false}
                defaultValue={0}
                id="solidNumber"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (value < 0)
                    return {
                      status: false,
                      message: "need >= 0.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setSolid({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                disabled={sending === true}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.selectbox}>
              <SelectBox
                label="Dosage form"
                loadding={false}
                value=""
                id="dosageformId"
                handleValid={(e) => {
                  const value = e.target.value;
                  if (!value)
                    return {
                      status: false,
                      message: "This field cannot be left blank.",
                    };

                  return {
                    status: true,
                    message: "",
                  };
                }}
                handleChange={({ e, valid }) => {
                  const value = e.target.value;
                  setDosageFormId({ value: value, valid: valid });
                }}
                checkValid={checkValid}
                data={[
                  { name: "Select dosage form", value: "" },
                  ...dosageFormList.data,
                ]}
                disabled={sending === true}
                loading={dosageFormList.status === -1}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="Description"
            placeholder="Enter description"
            loadding={false}
            defaultValue=""
            id="description"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setDescription({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="Uses"
            placeholder="Enter uses"
            loadding={false}
            defaultValue=""
            id="uses"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setUses({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="User manual"
            placeholder="Enter user manual"
            loadding={false}
            defaultValue=""
            id="userManual"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setUserManual({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="Side effects"
            placeholder="Enter side effects"
            loadding={false}
            defaultValue=""
            id="sideEffects"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setSideEffects({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="Storage"
            placeholder="Enter storage"
            loadding={false}
            defaultValue=""
            id="storage"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setStorage({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
        <div className={styles.textbox}>
          <TextBox
            type="textarea"
            label="Note"
            placeholder="Enter note"
            loadding={false}
            defaultValue=""
            id="note"
            handleValid={(e) => {
              return {
                status: true,
                message: "",
              };
            }}
            handleChange={({ e, valid }) => {
              const value = e.target.value;
              setNote({ value: value, valid: valid });
            }}
            checkValid={checkValid}
            disabled={sending === true}
          />
        </div>
      </div>

      <div className={styles.button}>
        {sending === false ? (
          <Button onClick={sendData}>Add</Button>
        ) : (
          <WaittingLabel label="Sending . . ." />
        )}
      </div>

      <div className={styles.waittingPanel}>
        <WaittingLabel />
      </div>
    </div>
  );
}

export default ProductAddPage;
