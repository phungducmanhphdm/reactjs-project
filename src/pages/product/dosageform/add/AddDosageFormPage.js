import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import { TextBox, WaittingLabel } from "@components";
import styles from "./styles.module.scss";
import { DosageForm } from "@api";
import useDebounces from "@hooks/useDebounces";

function AddDosageFormPage() {
  const handleValid = useCallback((e) => {
    const value = e.target.value;
    if (!value) {
      return {
        status: false,
        message: "Dosage form name cannot be empty.",
      };
    }

    return {
      status: true,
      message: "",
    };
  }, []);

  const handleInput = ({ id, e, valid }) => {
    const value = e.target.value;
    setData({ name: value, valid });
  };

  const sendData = () => {
    if (data.valid.status === false) {
      setCheckValid(true);
      return;
    }

    setSending(true);

    DosageForm.create(
      data.name,
      (res) => {
        alert("Đã thêm");
        setSending(false);
      },
      (err) => {
        alert("Lỗi");
        setSending(false);
      }
    );
  };

  const [checkValid, setCheckValid] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const [data, setData] = useState({
    name: "",
    valid: { status: false, message: "" },
  });

  const debounce = useDebounces(data.name, 500);

  useEffect(() => {
    DosageForm.checkName(
      debounce,
      (res) => {
        if (res.data.length > 0) {
          data.valid = {
            status: false,
            message: "The Dosage form name already exists.",
          };
          setErrorInfo(data.valid);
        }
      },
      (err) => {}
    );
  }, [debounce]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.textbox}>
          <TextBox
            label="Dosage form name"
            placeholder="Enter Dosage form name"
            loadding={false}
            defaultValue={data.name}
            id="dosageFormName"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={sending === true}
            errorInfo={errorInfo}
          />
        </div>
        <div className={styles.button}>
          {sending === false ? (
            <Button onClick={sendData}>Add</Button>
          ) : (
            <WaittingLabel label="Sending . . ." />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddDosageFormPage;
