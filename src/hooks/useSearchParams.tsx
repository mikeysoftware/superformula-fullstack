import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function useSearchParams(key: string, defaultValue: any) {
  // State and Setter for debounced value
  const location = useLocation();
  // const history = useHistory();
  const [param, setParam] = useState("");

  function changeParam(newValue: string) {
    if (!newValue) return;
    setParam(newValue);
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get(key);
    if (!paramValue) {
      setParam(defaultValue);
      return;
    }
    setParam(paramValue);
    queryParams.set(key, paramValue);
  }, [defaultValue, key, location.search]);

  return { param, changeParam };
}
