import  { useState, useEffect } from "react";
import { FILTER_NAME } from "../reducers/filterReducers";


/*Hook filtrado por Nombre */

const useFilterByName = (dispatch) => {
  const [queryName, setQueryName] = useState("");

  function handleChangeQuery(event) {
    setQueryName(event.target.value.toLowerCase());
  }

  useEffect(() => {
    dispatch({type:FILTER_NAME, query: queryName})
  }, [queryName,dispatch]);

  return handleChangeQuery;
};

export {useFilterByName}