import { useState, useEffect } from "react";
import {FILTER_TYPE} from "../reducers/filterReducers"

/*Hook filtrado por Tipo */

const useFilterByTypes = (dispatch) => {
  const [queryType, setQueryType] = useState();

  function handleFilterType(event) {
    const typeSelected = event.target.dataset.value;
    setQueryType(typeSelected);
  }

  useEffect(() => {  
    dispatch({type:FILTER_TYPE, queryType})
  }, [queryType, dispatch]);

  return handleFilterType;
};

export {useFilterByTypes}
