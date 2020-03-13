import { useState, useEffect } from "react";
import {FILTER_TYPE} from "../reducers/filterReducers"

/*Hook filtrado por Tipo */

const useFilterByTypes = (filterByType) => {
  const [queryType, setQueryType] = useState();

  function handleFilterType(event) {
    const typeSelected = event.target.dataset.value;
    setQueryType(typeSelected);
  }

  useEffect(() => {  
    filterByType( queryType)
  }, [queryType]);

  return handleFilterType;
};

export {useFilterByTypes}
