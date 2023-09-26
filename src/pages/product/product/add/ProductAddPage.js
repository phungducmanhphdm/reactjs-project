import styles from "./styles1.module.scss";
import { useCallback, useEffect, useState } from "react";
import { TextBox, SelectBox, Textarea } from "@components";
import { Col, Row } from "react-bootstrap";

function ProductAddPage() {
  const [checkValid, setCheckValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({});

  const [selectsData, setSelectsData] = useState({
    type: {
      status: 0,
      data: [],
    },
    group: {
      status: 0,
      data: [],
    },
    category: {
      status: 0,
      data: [],
    },
    nation: {
      status: 0,
      data: [],
    },
    brand: {
      status: 0,
      data: [],
    },
  });

  const handleInput = useCallback(({ id, e, valid }) => {}, []);

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

  return (
    <div className={styles.wrapper}>
      <TextBox
        label="Product name"
        placeholder="Enter product name"
        loadding={false}
        defaultValue=""
        id="productName"
        handleValid={handleValid}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <Row>
        <Col sm={12} md={4}>
          <SelectBox
            label="Type"
            loadding={false}
            value=""
            id="typeId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            data={[{ name: "option 1", value: "1" }]}
            disabled={disabled}
            loading={selectsData.type.status === 1}
          />
        </Col>
        <Col sm={12} md={4}>
          <SelectBox
            label="Group"
            loadding={false}
            value=""
            id="groupId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            data={[{ name: "option 1", value: "1" }]}
            disabled={disabled}
            loading={selectsData.group.status === 1}
          />
        </Col>
        <Col sm={12} md={4}>
          <SelectBox
            label="Category"
            loadding={false}
            value=""
            id="categoryId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            data={[{ name: "option 1", value: "1" }]}
            disabled={disabled}
            loading={selectsData.category.status === 1}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <SelectBox
            label="Nation"
            loadding={false}
            value=""
            id="nationId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            data={[{ name: "option 1", value: "1" }]}
            disabled={disabled}
            loading={selectsData.nation.status === 1}
          />
        </Col>
        <Col sm={12} md={6}>
          <SelectBox
            label="Brand"
            loadding={false}
            value=""
            id="brandId"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            data={[{ name: "option 1", value: "1" }]}
            disabled={disabled}
            loading={selectsData.brand.status === 1}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <TextBox
            type="number"
            label="Total"
            placeholder="Total"
            loadding={false}
            defaultValue=""
            id="totalNumber"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={disabled}
          />
        </Col>
        <Col sm={12} md={6}>
          <TextBox
            type="number"
            label="Solid"
            placeholder="Solid"
            loadding={false}
            defaultValue=""
            id="solidNumber"
            handleValid={handleValid}
            handleChange={handleInput}
            checkValid={checkValid}
            disabled={disabled}
          />
        </Col>
      </Row>
      <hr />
      <TextBox
        type="textarea"
        label="Description"
        placeholder="Enter description"
        loadding={false}
        defaultValue=""
        id="description"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <TextBox
        type="textarea"
        label="Uses"
        placeholder="Enter uses"
        loadding={false}
        defaultValue=""
        id="use"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <TextBox
        type="textarea"
        label="User manual"
        placeholder="Enter user manual"
        loadding={false}
        defaultValue=""
        id="userManual"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <TextBox
        type="textarea"
        label="Side effects"
        placeholder="Enter side effects"
        loadding={false}
        defaultValue=""
        id="sideEffects"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <TextBox
        type="textarea"
        label="Storage"
        placeholder="Enter storage"
        loadding={false}
        defaultValue=""
        id="storage"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
      <TextBox
        type="textarea"
        label="Note"
        placeholder="Enter note"
        loadding={false}
        defaultValue=""
        id="note"
        handleValid={handleValidNo}
        handleChange={handleInput}
        checkValid={checkValid}
        disabled={disabled}
      />
    </div>
  );
}

export default ProductAddPage;
