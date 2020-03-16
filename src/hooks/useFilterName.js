import  { useState, useEffect } from "react";

/*Hook filtrado por Nombre */

const useFilterByName = (dispatch) => {
  const [queryName, setQueryName] = useState("");

  function handleChangeQuery(query) {
    setQueryName(query);
  }

  useEffect(() => {
    dispatch(queryName)
  }, [queryName]);

  return [queryName, handleChangeQuery]
};

export {useFilterByName}