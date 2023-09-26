import { useEffect, useRef, useState } from "react";

/* init: get value for default value for debound
 *  after delay milis if value is changed then clear timeOut of after once
 *  and set new setTimeOut to set new value for debound
 *  the callBack in setTimeOut will be call after delay milis
 */
function useDebounces(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  const timerId = useRef();

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [value]);

  return debounceValue;
}

export default useDebounces;
