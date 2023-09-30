import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";
import { CheckGroup } from "@components";
import { checkArrInArr } from "@utils";
import { SpecifyFor, Unit, Ingredient, UseFor, Product } from "@api";
import { useEffect, useState } from "react";
import useDebounces from "@hooks/useDebounces";

const data = [
  { value: 1, name: "one" },
  { value: 2, name: "two" },
  { value: 3, name: "three" },
  { value: 4, name: "four" },
  { value: 5, name: "five" },
  { value: 6, name: "six" },
  { value: 7, name: "seven" },
  { value: 8, name: "eight" },
];

const data2 = [
  { value: 1, name: "one" },
  { value: 2, name: "two" },
  { value: 7, name: "seven" },
  { value: 8, name: "eight" },
];

const data3 = checkArrInArr(data2, data, "checked");

function ProductEditPage() {
  const { id } = useParams();
  const [checkedList, setCheckedList] = useState();
  const [productCheckedList, setProductCheckedList] = useState();
  const [allDataList, setAllDataList] = useState();
  const [dataList, setDataList] = useState();

  const [searchText, setSearchText] = useState();
  const debounce = useDebounces(searchText, 500);

  const handleCheck = ({ e, id }) => {
    const value = e.target.value;
    if (!(id in checkedList)) {
      checkedList[id] = [];
    }
    const index = checkedList[id].indexOf(value);
    if (index !== -1) {
      checkedList[id].splice(index, 1);
    } else {
      checkedList[id].push(value);
    }
    setCheckedList((pre) => ({ ...pre }));
  };

  const handleSearch = ({ e }) => {
    const value = e.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    // search from server
    const name = debounce;
    callDataListByName(name);
  }, [debounce]);

  useEffect(() => {
    callProductDataList();
    callAllDataList();
  }, []);

  useEffect(() => {
    // Goi de set checked list lan dau khi goi data product checked tu api server
    if (productCheckedList) {
      setCheckedListFirstTime();
    }
  }, [productCheckedList]);

  useEffect(() => {
    // khi load data product hoac data list thi merge chung lai
    if (productCheckedList && allDataList) {
      megerProductDataListToAllDataList();
    }
  }, [productCheckedList, allDataList]);

  useEffect(() => {
    // khi thay doi checked list thi update lai datalist de update check box
    if (checkedList) {
      updateDataList();
    }
  }, [checkedList]);

  const callProductDataList = () => {};
  const callAllDataList = () => {};
  const callDataListByName = (name) => {};
  const setCheckedListFirstTime = () => {};
  const megerProductDataListToAllDataList = () => {};
  const updateDataList = () => {};

  return (
    <div className={styles.wrapper}>
      <CheckGroup
        id="specifyfor"
        label="Specify"
        data={dataList?.data ? dataList.data : []}
        handleCheck={handleCheck}
        handleSearch={handleSearch}
        haveSearch={true}
        disabled={false}
        loading={false}
      />
    </div>
  );
}

export default ProductEditPage;
