import  { useState, useEffect } from "react";

/*Hook filtrado por Nombre */

const useFilterByName = (dispatch) => {
  const [queryName, setQueryName] = useState("");

  function handleChangeQuery(event) {
    setQueryName(event.target.value.toLowerCase());
  }

  useEffect(() => {
    dispatch(queryName)
  }, [queryName]);

  return handleChangeQuery;
};

export {useFilterByName}