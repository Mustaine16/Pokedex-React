  /*Hook filtrado por Tipo */

  const useFilterByType = () => {
    const [queryType, setQueryType] = useState();
    const [listByType, setListByType] = useState([]);

    function handleByType(event) {
      const typeSelected = event.target.dataset.value;
      setQueryType(typeSelected);
    }

    const filterByType = React.useMemo(() => {
      const filtered = localData.filter(pkmn => {
        return pkmn.types.length > 1
          ? pkmn.types[0].type.name === queryType ||
              pkmn.types[1].type.name === queryType
          : pkmn.types[0].type.name === queryType;
      });

      return filtered;
    }, [queryType]);

    useEffect(() => {
      setListByType(filterByType);
    }, [filterByType]);

    return [listByType, handleByType];
  };
