import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import { TextBox, WaittingLabel, SelectBox } from "@components";
import styles from "./styles.module.scss";
import { Nation, Brand } from "@api";
import useDebounces from "@hooks/useDebounces";

function AddGroupPage() {
  const handleValid = useCallback((e) => {
    const type = e.target.type;
    const value = e.target.value;
    if (!value) {
      if (type == "text") {
        return {
          status: false,
          message: "Name cannot be empty.",
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
      data.brandName.valid.status === false ||
      data.nationId.valid.status === false
    ) {
      setCheckValid(true);
      return;
    }

    setSending(true);

    const brandName = data.brandName.value;
    const nationId = data.nationId.value;

    Brand.create(
      brandName,
      nationId,
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
    brandName: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
    nationId: {
      value: "",
      valid: { status: false, message: "Empty" },
    },
  });

  const [load, setLoad] = useState(true);
  const [nationList, setNationList] = useState({ status: 0, data: [] });

  const debounce = useDebounces(data.brandName.value, 500);

  useEffect(() => {
    if (isInit == true) {
      setIsInit(false);
      return;
    }
    Brand.checkName(
      debounce,
      (res) => {
        if (res.data.length > 0) {
          data.brandName.valid = {
            status: false,
            message: "Name already exists.",
          };
          setTextBoxErrorInfo(data.brandName.valid);
        }
      },
      (err) => {}
    );
  }, [debounce]);

  useEffect(() => {
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
        console.log(_data);
      },
      (err) => {
        setLoad((pre) => !pre);
        alert("Load data list failed");
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.textbox}>
          <TextBox
            label="Brand name"
            placeholder="Enter brand name"
            loadding={false}
            defaultValue={data.brandName.value}
            id="brandName"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={sending === true}
            errorInfo={textBoxErrorInfo}
          />
        </div>
        <div className={styles.selectbox}>
          <SelectBox
            label="Nation"
            loadding={false}
            value=""
            id="nationId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            defaultValue={data.nationId.value}
            data={[{ value: "", name: "Select nation" }, ...nationList.data]}
            disabled={sending === true}
            loading={nationList.status === 0}
          />
        </div>
        <div className={styles.button}>
          {sending === false ? (
            <Button onClick={sendData} disabled={nationList.status === 0}>
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
