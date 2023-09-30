import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { TextBox, WaittingLabel, SelectBox } from "@components";
import styles from "./styles.module.scss";
import { Type, Group, Category } from "@api";
import useDebounces from "@hooks/useDebounces";

function AddCategoryPage() {
  const handleValid = useCallback((e) => {
    const type = e.target.type;
    const value = e.target.value;
    if (!value) {
      if (type == "text") {
        return {
          status: false,
          message: "Group name cannot be empty.",
        };
      } else {
        return {
          status: false,
          message: "Please choose one.",
        };
      }
    }

    return {
      status: true,
      message: "",
    };
  }, []);

  const handleInput = ({ id, e, valid }) => {
    const value = e.target.value;
    setData((pre) => ({ ...pre, [id]: { value: value, valid: valid } }));
    if (id === "typeId" && preTypeId != value) {
      const typeId = value;
      Group.getByType(
        typeId,
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
          alert("Load type list failed");
        }
      );
    }
  };

  const sendData = () => {
    if (
      data.categoryName.valid.status === false ||
      data.typeId.valid.status === false ||
      data.groupId.valid.status === false
    ) {
      setCheckValid(true);
      return;
    }

    setSending(true);

    const categoryName = data.categoryName.value;
    const groupId = data.groupId.value;

    Category.create(
      categoryName,
      groupId,
      (res) => {
        console.log(res);
        alert("Đã thêm");
        setSending(false);
      },
      (err) => {
        console.log(err);

        alert("Lỗi");
        setSending(false);
      }
    );
  };

  const [isInit, setIsInit] = useState(true);
  const [checkValid, setCheckValid] = useState(false);
  const [sending, setSending] = useState(false);
  const [textBoxErrorInfo, setTextBoxErrorInfo] = useState(null);
  const [data, setData] = useState({
    categoryName: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
    typeId: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
    groupId: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
  });

  const [preTypeId, setPreTypeId] = useState(false);

  const [typeList, setTypeList] = useState({ status: 0, data: [] });
  const [groupList, setGroupList] = useState({ status: 0, data: [] });

  const debounce = useDebounces(data.categoryName.value, 500);

  useEffect(() => {
    if (isInit == true) {
      setIsInit(false);
      return;
    }
    Category.checkName(
      debounce,
      (res) => {
        if (res.data.length > 0) {
          data.categoryName.valid = {
            status: false,
            message: "The category name already exists.",
          };
          setTextBoxErrorInfo(data.categoryName.valid);
        }
      },
      (err) => {}
    );
  }, [debounce]);

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
        alert("Load type list failed");
      }
    );
  }, []);

  useEffect(() => {
    return () => {
      const typeId = data.typeId.value;
      setPreTypeId(typeId);
    };
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.textbox}>
          <TextBox
            label="Category name"
            placeholder="Enter category name"
            loadding={false}
            defaultValue={data.categoryName.value}
            id="categoryName"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={sending === true}
            errorInfo={textBoxErrorInfo}
          />
        </div>
        <div className={styles.selectbox}>
          <Row>
            <Col sm={12} md={6} className="mb-3">
              <SelectBox
                label="Type"
                loadding={false}
                value=""
                id="typeId"
                handleValid={handleValid}
                handleChange={handleInput}
                checkValid={checkValid}
                defaultValue={data.typeId.value}
                data={[{ value: "", name: "Select type" }, ...typeList.data]}
                disabled={sending === true}
                loading={typeList.status === 0}
              />
            </Col>
            <Col sm={12} md={6}>
              <SelectBox
                label="Group"
                loadding={false}
                value=""
                id="groupId"
                handleValid={handleValid}
                handleChange={handleInput}
                checkValid={checkValid}
                defaultValue={data.groupId.value}
                data={[{ value: "", name: "Select group" }, ...groupList.data]}
                disabled={sending === true}
                loading={typeList.status === 0}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.button}>
          {sending === false ? (
            <Button onClick={sendData} disabled={typeList.status === 0}>
              Add
            </Button>
          ) : (
            <WaittingLabel label="Sending . . ." />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddCategoryPage;
