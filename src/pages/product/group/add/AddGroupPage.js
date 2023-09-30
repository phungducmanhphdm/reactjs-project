import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import { TextBox, WaittingLabel, SelectBox } from "@components";
import styles from "./styles.module.scss";
import { Type, Group } from "@api";
import useDebounces from "@hooks/useDebounces";

function AddGroupPage() {
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
  };

  const sendData = () => {
    if (
      data.groupName.valid.status === false ||
      data.typeId.valid.status === false
    ) {
      setCheckValid(true);
      return;
    }

    setSending(true);

    const groupName = data.groupName.value;
    const typeId = data.typeId.value;

    console.log({ groupName, typeId });

    Group.create(
      groupName,
      typeId,
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
    groupName: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
    typeId: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
  });

  const [load, setLoad] = useState(true);
  const [typeList, setTypeList] = useState({ status: 0, data: [] });

  const debounce = useDebounces(data.groupName.value, 500);

  useEffect(() => {
    if (isInit == true) {
      setIsInit(false);
      return;
    }
    Group.checkName(
      debounce,
      (res) => {
        if (res.data.length > 0) {
          data.groupName.valid = {
            status: false,
            message: "The group name already exists.",
          };
          setTextBoxErrorInfo(data.groupName.valid);
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
        console.log(_data);
      },
      (err) => {
        setLoad((pre) => !pre);
        alert("Load type list failed");
      }
    );
  }, [load]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.textbox}>
          <TextBox
            label="Group name"
            placeholder="Enter group name"
            loadding={false}
            defaultValue={data.groupName.value}
            id="groupName"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={sending === true}
            errorInfo={textBoxErrorInfo}
          />
        </div>
        <div className={styles.selectbox}>
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

export default AddGroupPage;
